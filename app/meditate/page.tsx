"use client";

import PulseIcon from "@/components/icons/PulseIcon";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function MeditatePage() {
  const [isMeditating, setMeditating] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [timeInterval, setTimeInterval] = useState<any>(null);

  useEffect(() => {
    const audio = new Audio("/sounds/meditate.ogg");
    setAudio(audio);
  }, []);

  async function sendDataToServer() {
    await fetch("/api/meditate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startedAt: startTime?.getTime(),
        endedAt: new Date().getTime(),
      }),
    });

    setStartTime(null);
  }

  const toggleMeditating = () => {
    setMeditating((prev) => !prev);

    if (isMeditating) {
      audio!.pause();
      audio!.currentTime = 0;
      clearInterval(timeInterval);
      setTimeInterval(null);

      sendDataToServer();
    } else {
      setStartTime(new Date());
      audio!.play();
      const interval = setInterval(() => {
        audio!.play();
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
