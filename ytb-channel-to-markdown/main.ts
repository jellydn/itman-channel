import { config, logger, YoutubeVideo } from "./deps.ts";

const { CHANNEL_ID, YOUTUBE_API_KEY } = config();

// Max results per page is 50 from Youtube api
const LIMIT = 50;

function generateMarkdownFile(videos: YoutubeVideo[]) {
  const markdown = videos.map((video) => {
    if (video.id.kind !== "youtube#video") return "";

    const { publishedAt, title, thumbnails } = video.snippet;

    const { url } = thumbnails.medium;

    return `
## ${title}
Published at ${publishedAt}

[![${title}](${url})](https://www.youtube.com/watch?v=${video.id.videoId})
`;
  });

  Deno.writeTextFile(
    "../README.md",
    `
# Welcome to ITMan Channel 👋

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Last 100 videos on my Youtube channel

${markdown.join("\n")}`
  );
}

const apiUrl =
  "https://www.googleapis.com/youtube/v3/search?key=" +
  YOUTUBE_API_KEY +
  "&channelId=" +
  CHANNEL_ID +
  "&part=snippet,id&order=date&maxResults=" +
  LIMIT;

async function getVideos(nextPageToken?: string) {
  if (nextPageToken) {
    const response = await fetch(apiUrl + "&pageToken=" + nextPageToken, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data.items;
    }
  }
  return [];
}

async function main() {
  logger.warn("Generate markdown file from Deno :)");

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    const nextPageVideos = await getVideos(data.nextPageToken);
    generateMarkdownFile([...data.items, ...nextPageVideos]);
  }
}

main();
