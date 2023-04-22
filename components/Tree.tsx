"use client";

import { getRandomArbitrary } from "@/lib/utils";
import { CircleSlash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Tree() {
  const [coords, setCoords] = useState({
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  });

  useEffect(() => {
    const randomCoords = {
      top: getRandomArbitrary(20, 80),
      left: getRandomArbitrary(20, 80),
      bottom: getRandomArbitrary(20, 80),
      right: getRandomArbitrary(20, 80),
    };

    setCoords(randomCoords);
  }, []);

  return (
    <div
      style={{
        top: `${coords.top}%`,
        left: `${coords.left}%`,
        bottom: `${coords.bottom}%`,
        right: `${coords.right}%`,
      }}
      className="absolute px-4 py-4 z-20"
    >
      {/* <CircleSlash2 /> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/tree.svg" alt="tree" />
    </div>
  );
}
