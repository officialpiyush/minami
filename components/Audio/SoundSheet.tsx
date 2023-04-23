"use client";

import {
  Baby,
  Bird,
  Car,
  Clock,
  CloudHail,
  CloudRainWind,
  Flame,
  Siren,
  Umbrella,
  Waves,
  Wind,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "../ui/slider";

// list of all files from /public/audio
/*
public/audio/ambulance sound.wav
public/audio/birds.mp3
public/audio/birds.wav
public/audio/camp_fire.wav
public/audio/chilren_audience.wav
public/audio/city_road.wav
public/audio/clock_timer.wav
public/audio/rain.mp3
public/audio/thunder.wav
public/audio/water_waves.wav
public/audio/wind.mp3
public/audio/wind.wav
 */
const sounds = [
  {
    name: "Ambulance",
    file: "/audio/ambulancesound.wav",
    icon: <Siren className="text-[#c9b9ac]" />,
  },
  {
    name: "Birds",
    file: "/audio/birds.wav",
    icon: <Bird className="text-[#c9b9ac]" />,
  },
  {
    name: "Camp Fire",
    file: "/audio/camp_fire.wav",
    icon: <Flame className="text-[#c9b9ac]" />,
  },
  {
    name: "Children",
    file: "/audio/chilren_audience.wav",
    icon: <Baby className="text-[#c9b9ac]" />,
  },
  {
    name: "City Road",
    file: "/audio/city_road.wav",
    icon: <Car className="text-[#c9b9ac]" />,
  },
  {
    name: "Clock Timer",
    file: "/audio/clock_timer.wav",
    icon: <Clock className="text-[#c9b9ac]" />,
  },
  {
    name: "Rain",
    file: "/audio/rain.mp3",
    icon: <Umbrella className="text-[#c9b9ac]" />,
  },
  {
    name: "Thunder",
    file: "/audio/thunder.wav",
    icon: <CloudHail className="text-[#c9b9ac]" />,
  },
  {
    name: "Water Waves",
    file: "/audio/water_waves.wav",
    icon: <Waves className="text-[#c9b9ac]" />,
  },
  {
    name: "Wind",
    file: "/audio/wind.wav",
    icon: <Wind className="text-[#c9b9ac]" />,
  },
];

export default function SoundSheet() {
  const [audioObjects, setAudioObjects] = useState<any[]>([]);
  const [soundsPlaying, setSoundsPlaying] = useState<string[]>([]);

  useEffect(() => {
    sounds.forEach((sound) => {
      const audio = new Audio(sound.file);
      audio.loop = true;
      setAudioObjects((prev) => [...prev, audio]);
    });
  }, []);

  const toggleSound = (sound: string) => {
    const audio = audioObjects.find((audio) => audio.src.includes(sound));

    console.log(audio);
    if (audio) {
      console.log(audio);
      const paused = audio.paused;

      if (paused) {
        setSoundsPlaying((prev) => [...prev, sound]);
      } else {
        setSoundsPlaying((prev) => prev.filter((s) => s !== sound));
      }

      paused ? audio.play() : audio.pause();
    }
  };

  const toggleVolume = (sound: string, volume: number) => {
    const audio = audioObjects.find((audio) => audio.src.includes(sound));
    if (audio) {
      audio.volume = volume / 100;
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="fixed bottom-0 right-0 mr-4 mb-4">
            <div className="p-2 bg-black rounded-full">
              <Waves />
            </div>
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>SoundSheet</SheetTitle>

            <div className="py-8 grid grid-cols-3 gap-6">
              {sounds.map((sound) => (
                <div
                  onClick={() => toggleSound(sound.file)}
                  key={sound.name}
                  className={cn(
                    "cursor-pointer bg-[#c9b9ac] bg-opacity-90 text-[#2b3242] py-8 px-4 flex flex-col items-center justify-center gap-4 rounded-lg",
                    soundsPlaying.includes(sound.file) &&
                      "border-8 border-yellow-600"
                  )}
                >
                  <button className="p-2 bg-[#2b3242] rounded-full">
                    {sound.icon}
                  </button>
                  <span className="text-lg">{sound.name}</span>

                  <div
                    className={cn(
                      "w-full",
                      soundsPlaying.includes(sound.file)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  >
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      onValueChange={(number: number) =>
                        toggleVolume(sound.file, number)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
