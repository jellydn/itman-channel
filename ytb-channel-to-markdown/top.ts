import { config, logger } from "./deps.ts";
import { getVideos, generateMarkdownFile } from "./youtube.ts";

const { CHANNEL_ID, YOUTUBE_API_KEY } = config();

// Max results per page is 50 from Youtube api
const LIMIT = 5;

async function main(limit: number = LIMIT) {
  const apiUrl =
    "https://www.googleapis.com/youtube/v3/search?key=" +
    YOUTUBE_API_KEY +
    "&channelId=" +
    CHANNEL_ID +
    "&part=snippet,id&order=viewCount&maxResults=" +
    limit;

  logger.warn("Generate markdown file from Deno :)", apiUrl);

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    const nextPageVideos = await getVideos(apiUrl, data.nextPageToken);
    generateMarkdownFile(
      [...data.items, ...nextPageVideos],
      "most_view_videos.md"
    );
  }
}

main();
