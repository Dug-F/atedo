"use client";

import { NextApiRequest, NextApiResponse } from "next";

const accessToken = process.env.LONG_LIVED_ACCESS;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { accessToken: longLivedAccessToken } = req.query;

  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longLivedAccessToken}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to refresh access token: ${response.status} ${response.statusText}`
      );
    }

    const { access_token } = await response.json();

    // Now that the access token is refreshed, use it to fetch media data
    const mediaResponse = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption&access_token=${access_token}`
    );

    if (!mediaResponse.ok) {
      throw new Error(
        `Failed to fetch media: ${mediaResponse.status} ${mediaResponse.statusText}`
      );
    }

    const mediaData = await mediaResponse.json();

    res.status(200).json(mediaData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
