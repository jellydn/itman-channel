import { config, logger } from "./deps.ts";
import { generateMarkdownFile } from "./youtube.ts";

const { CHANNEL_ID, YOUTUBE_API_KEY } = config();

// Max results per page is 50 from Youtube api, and overall limit is 100 videos
const LIMIT = 50;
const TOTAL_LIMIT = 200;

async function getVideos(
  apiUrl: string,
  pageToken: string = "",
  count: number = 0
) {
  const response = await fetch(apiUrl + "&pageToken=" + pageToken, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `YouTube API request failed with status ${response.status}`
    );
  }

  const data = await response.json();
  let allItems = data.items;

  count += allItems.length;

  if (data.nextPageToken && count < TOTAL_LIMIT) {
    const nextPageItems = await getVideos(apiUrl, data.nextPageToken, count);
    allItems = [...allItems, ...nextPageItems.slice(0, TOTAL_LIMIT - count)];
  }

  return allItems;
}

export async function main(limit: number = LIMIT, writeToFile: boolean = true) {
  const apiUrl =
    "https://www.googleapis.com/youtube/v3/search?key=" +
    YOUTUBE_API_KEY +
    "&channelId=" +
    CHANNEL_ID +
    "&part=snippet,id&order=date&maxResults=" +
    limit;

  logger.warn("Generate markdown file from Deno :)", apiUrl);

  const allVideos = await getVideos(apiUrl);

  if (writeToFile) {
    generateMarkdownFile(allVideos);
  }

  return allVideos;
}

main();
