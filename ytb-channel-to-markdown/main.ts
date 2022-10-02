import { config, logger } from "./deps.ts";
import { getVideos, generateMarkdownFile } from "./youtube.ts";

const { CHANNEL_ID, YOUTUBE_API_KEY } = config();

// Max results per page is 50 from Youtube api
const LIMIT = 50;

export async function main(limit: number = LIMIT, writeToFile: boolean = true) {
  const apiUrl =
    "https://www.googleapis.com/youtube/v3/search?key=" +
    YOUTUBE_API_KEY +
    "&channelId=" +
    CHANNEL_ID +
    "&part=snippet,id&order=date&maxResults=" +
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
    if (writeToFile) {
      generateMarkdownFile([...data.items, ...nextPageVideos]);
    }

    return data;
  }
}

main();
