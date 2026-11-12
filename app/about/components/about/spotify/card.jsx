
"use client";

import React, { useEffect, useState } from "react";
import PlayingAnimation from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Card = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({ isPlaying: false });

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      try {
        const response = await fetch("/api/spotify", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Spotify data");
        }

        const data = await response.json();

        if (active) {
          setResult(data || { isPlaying: false });
        }
      } catch (error) {
        if (active) {
          setResult({ isPlaying: false });
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 60 * 1000);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mt-3 flex justify-center w-full">
      {loading ? (
        <div className="flex justify-center mb-8">
          <div className="loader ease-linear rounded-full border-4 border-blue-600 border-t-blue-200 h-12 w-12 mb-4"></div>
        </div>
      ) : (
        <div className="relative w-full mb-8 grid grid-cols-2 gap-2 border border-blue-200 p-4 rounded-lg bg-white overflow-hidden">
          {result.isPlaying && result.albumImageUrl && (
            <Image
              src={result.albumImageUrl}
              alt="Album cover background"
              fill
              className="z-0 opacity-20 absolute object-cover"
            />
          )}

          <div className="z-10 flex items-center">
            <FontAwesomeIcon
              icon={faSpotify}
              className="text-blue-600 text-5xl me-5 md:me-1 xl:me-8"
            />

            <p className="font-semibold text-slate-800 me-5 md:me-1 xl:me-7">
              {result.isPlaying
                ? "Now playing"
                : "Currently offline"}
            </p>

            {result.isPlaying && <PlayingAnimation />}
          </div>

          {result.isPlaying && (
            <div className="z-10 rounded-lg ms-5">
              <div className="flex items-center space-x-4">
                <div className="overflow-hidden">
                  <a
                    href={result.songUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-semibold w-full truncate text-blue-700"
                  >
                    {result.title}
                  </a>

                  <p className="truncate text-gray-600">
                    {result.artist}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
