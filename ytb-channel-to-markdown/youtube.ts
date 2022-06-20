import { YoutubeVideo } from "./deps.ts";

export function generateMarkdownFile(
  videos: YoutubeVideo[],
  fileName = "README.md"
) {
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
    "../" + fileName,
    `
# Welcome to ITMan Channel 👋

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Last 100 videos on my Youtube channel

${markdown.join("\n")}`
  );
}
export async function getVideos(apiUrl: string, nextPageToken?: string) {
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
