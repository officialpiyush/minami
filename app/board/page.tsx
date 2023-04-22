"use client";

import { useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function MoodBoard() {
  const user = useUser();

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
      redirect("/login");
    }
  }, [user]);

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
              className="h-16 w-16 flex items-center justify-center bg-[#AC917D] text-black"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
