"use client";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const colors: Record<string, string> = {
  sad: "#ad9b8d",
  angry: "#917d6d",
  neutral: "#755e4e",
  calm: "#917d6d",
  happy: "#3D220F",
};

const textColors: Record<string, string> = {
  sad: "white",
  angry: "white",
  neutral: "white",
  calm: "white",
  happy: "white",
};

export default function MoodBoard() {
  const user = useUser();

  const [todayCount, setTodayCount] = useState(colors.sad);
  const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
  const [selectedMonthText, setSelectedMonthText] = useState(
    dayjs().month(selectedMonth).format("MMMM")
  );
  const [selectedMonthsStartDay, setSelectedMonthsStartDay] = useState(
    dayjs().month(selectedMonth).startOf("month").day()
  );
  const [selectedMonthsDays, setSelectedMonthsDays] = useState(
    dayjs().month(selectedMonth).daysInMonth()
  );

  useEffect(() => {
    setSelectedMonthText(dayjs().month(selectedMonth).format("MMMM"));
    setSelectedMonthsStartDay(
      dayjs().month(selectedMonth).startOf("month").day()
    );
    setSelectedMonthsDays(dayjs().month(selectedMonth).daysInMonth());
  }, [selectedMonth]);

  useEffect(() => {
    if (!user.isLoaded) return;

    if (!user.isSignedIn) {
      redirect("/auth");
    }
  }, [user]);

  useEffect(() => {
    fetchDailyMood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getMaxValueKey(obj: { [key: string]: number }): string {
    return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  }

  const fetchDailyMood = async () => {
    const response = await fetch("/api/board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: dayjs().startOf("day").unix(),
        endDate: dayjs().endOf("day").unix(),
      }),
    });
    const data = await response.json();

    const counts = {
      sad: 0,
      angry: 0,
      neutral: 0,
      calm: 0,
      happy: 0,
    };
    data.map((item: { mood: string }) => {
      // @ts-expect-error
      counts[item.mood]++;
    });

    const maxMood = getMaxValueKey(counts);
    setTodayCount(maxMood);
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-12 pb-6 font-fraunces">
      <div className="flex gap-4">
        <button
          onClick={() => {
            setSelectedMonth(selectedMonth - 1);
          }}
        >
          <ChevronFirst />
        </button>
        <div className="bg-[#E0D4CA] px-24 py-2 rounded-full scroll-m-20 text-xl font-semibold tracking-tight">
          {selectedMonthText}
        </div>
        <button
          onClick={() => {
            setSelectedMonth(selectedMonth + 1);
          }}
        >
          <ChevronLast />
        </button>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-7 gap-8 justify-items-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div
              key={index}
              className="text-center text-black text-4xl font-semibold tracking-tight"
            >
              {day}
            </div>
          ))}

          {selectedMonthsStartDay > 0 &&
            new Array(selectedMonthsStartDay)
              .fill(0)
              .map((_, index) => <div key={index} className="h-8 w-8" />)}

          {new Array(selectedMonthsDays).fill(0).map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-16 w-16 flex items-center justify-center bg-[#AC917D] border-2",
                index === dayjs().date() - 1 &&
                  dayjs().month() === selectedMonth
                  ? "ring-[7px] ring-offset- ring-offset-[#C9B9AC] ring-[#E0D4CA] rouded-full"
                  : "text-black "
              )}
              style={{
                backgroundColor:
                  index === dayjs().date() - 1 &&
                  dayjs().month() === selectedMonth
                    ? (colors[todayCount] as string)
                    : "",
                color:
                  index === dayjs().date() - 1 &&
                  dayjs().month() === selectedMonth
                    ? (textColors[todayCount] as string)
                    : "",
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {Object.entries(colors)
          .reverse()
          .map(([mood, color], index) => (
            <div
              key={index}
              className="h-12 w-12 rounded-full flex items-center justify-center uppercase border-2"
              style={{ backgroundColor: color, color: textColors[mood] }}
            >
              {mood.charAt(0)}
            </div>
          ))}
      </div>
    </div>
  );
}
