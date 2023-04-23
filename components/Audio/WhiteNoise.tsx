"use client";

import { useEffect, useState } from "react";

export default function WhiteNoise() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio("/sounds/WhiteNoise.mp3"));
  }, []);

  function toggleMusic() {
    if (audio!.paused) {
      audio!.play();
      audio!.loop = true;
      setMusicPlaying(true);
    } else {
      audio!.pause();
      setMusicPlaying(false);
    }
  }

  return (
    <div className="fixed bottom-0 right-0 mr-32 mb-4">
      <button
        onClick={toggleMusic}
        className="rounded-full p-2 border-2 flex items-center justify-center"
      >
        <div className={(musicPlaying && "animated") || ""}>
          <svg
            className="h-8 w-8 fill-current text-white"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 33"
          >
            <title>Audio Wave</title>
            <path
              id="Line_1"
              data-name="Line 1"
              d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"
            />
            <path
              id="Line_2"
              data-name="Line 2"
              d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"
            />
            <path
              id="Line_3"
              data-name="Line 3"
              d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"
            />
            <path
              id="Line_4"
              data-name="Line 4"
              d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"
            />
            <path
              id="Line_5"
              data-name="Line 5"
              d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
