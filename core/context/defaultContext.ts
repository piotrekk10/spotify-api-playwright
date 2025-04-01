import { request } from "@playwright/test";

export const getDefaultAPIContext = async () => {
  return await request.newContext({
    baseURL: process.env.SPOTIFY_BASE_URL,
  });
};
