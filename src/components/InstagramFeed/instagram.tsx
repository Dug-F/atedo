import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import handler from "@/functions/instagramRefresh";
"use client "

interface Media {
  id: string;
  image_url: string;
  caption: string;
}

function Instagram() {
  const [mediaData, setMediaData] = useState<Media[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refreshAndFetchMedia = useCallback(async () => {
    setLoading(true);
    setError(null);

    const longLivedAccessToken = process.env.LONG_LIVED_ACCESS;

    try {
      const response = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${longLivedAccessToken}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch media data");
      }

      const data = await response.json();
      setMediaData(data);
    } catch (error: any) {
      setError(error.message || "An error occurred");
      // If an error occurs, refresh the token using handler function
      try {
        await handler();
        // After refreshing token, try fetching media data again
        await refreshAndFetchMedia();
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        // Handle refresh token error
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAndFetchMedia();
  }, [refreshAndFetchMedia]); // Call the function when component mounts

  return (
    <div className="container mx-auto py-8">
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      {mediaData && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {mediaData.map((media: Media) => (
            <div key={media.id} className="border p-4 rounded shadow-md">
              <Image
                src={media.image_url}
                alt={media.caption}
                className="max-w-full h-auto"
                width={300}
                height={300}
              />
              <p className="mt-2">{media.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Instagram;
