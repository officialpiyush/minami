"use client";

import { useSignal, useComputed, useSignalEffect } from "@preact/signals-react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { ChevronFirst, ChevronLast } from "lucide-react";

export default function MoodBoard() {
  const user = useUser();
  const selectedMonth = useSignal(dayjs().month());
  const selectedMonthText = useComputed(() =>
    dayjs().month(selectedMonth.value).format("MMMM")
  );
  const selectedMonthsStartDay = useComputed(() =>
    dayjs().month(selectedMonth.value).startOf("month").day()
  );
  const selectedMonthsDays = useComputed(() =>
    dayjs().month(selectedMonth.value).daysInMonth()
  );

  useSignalEffect(() => {});

  useEffect(() => {
    if (!user.isLoaded) return;

    if (!user.isSignedIn) {
      redirect("/login");
    }
  }, [user]);

  return (
    <div className="flex flex-1 flex-col items-center gap-12 font-fraunces">
      <div className="flex gap-4">
        <button
          onClick={() => {
            selectedMonth.value = selectedMonth.value - 1;
          }}
        >
          <ChevronFirst />
        </button>
        <div className="bg-[#E0D4CA] px-24 py-2 rounded-full scroll-m-20 text-xl font-semibold tracking-tight">
          {selectedMonthText}
        </div>
        <button
          onClick={() => {
            selectedMonth.value = selectedMonth.value + 1;
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

          {selectedMonthsStartDay.value > 0 &&
            new Array(selectedMonthsStartDay.value)
              .fill(0)
              .map((_, index) => <div key={index} className="h-8 w-8" />)}

          {new Array(selectedMonthsDays.value).fill(0).map((_, index) => (
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
