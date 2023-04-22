"use client";

import PulseIcon from "@/components/icons/PulseIcon";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MeditatePage() {
  const [isMeditating, setMeditating] = useState(false);
  const [audio, setAudio] = useState(new Audio("/sounds/meditate.ogg"));
  const [timeInterval, setTimeInterval] = useState<any>(null);

  const toggleMeditating = () => {
    setMeditating((prev) => !prev);

    if (isMeditating) {
      audio.pause();
      audio.currentTime = 0;
      clearInterval(timeInterval);
      setTimeInterval(null);
    } else {
      audio.play();
      const interval = setInterval(() => {
        audio.play();
      }, 8000);
      setTimeInterval(interval);
    }
  };

  return (
    <div className="h-full flex flex-1 flex-col items-center justify-center transition-all duration-700">
      <div className={isMeditating ? "block" : "hidden"}>
        <PulseIcon />
      </div>

      <Button className="mt-4" size={"lg"} onClick={toggleMeditating}>
        {isMeditating ? "Stop meditating" : "Start meditating"}
      </Button>
    </div>
  );
}
