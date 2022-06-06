import { config, logger, YoutubeVideo } from "./deps.ts";

const { CHANNEL_ID, YOUTUBE_API_KEY } = config();

// Max results per page is 50 from Youtube api
const LIMIT = 50;

function generateMarkdownFile(videos: YoutubeVideo[]) {
  const markdown = videos.map((video) => {
    const { publishedAt, title, thumbnails } = video.snippet;

    const { url } = thumbnails.medium;

    return `
## ${title}
Published at ${publishedAt}
[![${title}](${url})](https://www.youtube.com/watch?v=${video.id.videoId})
`;
  });

  Deno.writeTextFile("../README.md", markdown.join("\n"));
}

async function main() {
  logger.warn("Generate markdown file from Deno :)");

  const apiUrl =
    "https://www.googleapis.com/youtube/v3/search?key=" +
    YOUTUBE_API_KEY +
    "&channelId=" +
    CHANNEL_ID +
    "&part=snippet,id&order=date&maxResults=" +
    LIMIT;

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    generateMarkdownFile(data.items);
  }
}

main();
