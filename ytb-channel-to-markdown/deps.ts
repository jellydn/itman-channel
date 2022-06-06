import { config } from "https://deno.land/x/dotenv/mod.ts";
import logger from "https://cdn.skypack.dev/loglevel";

export interface YoutubeVideo {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export interface ID {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
}

export interface Thumbnails {
  ImageSize: ImageSize;
  medium: ImageSize;
  high: ImageSize;
}

export interface ImageSize {
  url: string;
  width: number;
  height: number;
}
export { config, logger };
