"use client";

import dayjs from "dayjs";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

export default function TherapistTalk() {
  const [timeNow, setTimeNow] = useState(dayjs().format("h:mm:ss A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(dayjs().format("h:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-1 flex-col justify-center">
      <div className="h-[70vh] py8 w-full grid grid-cols-12 gap-6">
        <div className=" col-span-8">
          <div className="h-full bg-[#2B3242] text-[#e8e3d0] rounded-2xl flex flex-col items-center justify-center gap-6">
            <div className="rounded-full p-6 bg-[#C9B9AC] text-[#2B3242] flex items-center justify-center">
              <PhoneCall className="h-12 w-12" />
            </div>
            <div className="text-2xl font-bold uppercase">Start a call</div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="flex flex-col gap-6">
            <div className="p-8 bg-[#e8e3d0] rounded-2xl h-full flex flex-col justify-centr gap-4">
              <div>
                <div className="uppercase text-center text-xl font-bold">
                  We know,
                  <br />
                  how hard it can be
                </div>
                <div className=" text-opacity-40 text-center">
                  Write everything you want to talk about
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#e8e3d0] rounded-2xl h-full flex flex-col justify-centr gap-4">
              <div className="flex flex-col gap-2">
                <div className="uppercase text-center text-4xl font-bold">
                  {timeNow}
                </div>
                <div className=" text-opacity-40 text-center">
                  {dayjs().format("dddd, MMMM D, YYYY")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
