"use client";

import { PhoneCall } from "lucide-react";

export default function TherapistTalk() {
  return (
    <div className="h-full flex flex-1">
      <div className="h-[85vh] py-8 w-full grid grid-cols-12 gap-6">
        <div className=" col-span-8">
          <div className="h-full bg-[#D9D9D9] rounded-md flex flex-col items-center justify-center gap-6">
            <div className="rounded-full p-6 bg-[#C9B9AC] flex items-center justify-center">
              <PhoneCall className="h-12 w-12" />
            </div>
            <div className="text-2xl font-bold uppercase">Start a call</div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="p-4 bg-[#e8e3d0] rounded-md h-full flex flex-col gap-4">
            <div>
              <div className="uppercase text-center text-xl font-bold">
                We know how hard it can be
              </div>
              <div className=" text-opacity-40 text-center">
                Write everything you want to talk about
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
