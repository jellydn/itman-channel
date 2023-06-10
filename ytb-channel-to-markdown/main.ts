import { config, logger } from "./deps.ts";
import { generateMarkdownFile } from "./youtube.ts";

const { CHANNEL_ID, YOUTUBE_API_KEY } = config();

// Max results per page is 50 from Youtube api
const LIMIT = 50;

async function getAllVideos(apiUrl: string, pageToken: string = "") {
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

  if (data.nextPageToken) {
    const nextPageItems = await getAllVideos(apiUrl, data.nextPageToken);
    allItems = [...allItems, ...nextPageItems];
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

  const allVideos = await getAllVideos(apiUrl);

  if (writeToFile) {
    generateMarkdownFile(allVideos);
  }

  return allVideos;
}

main();
