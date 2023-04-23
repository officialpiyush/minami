"use client";

import { PhoneCall } from "lucide-react";

export default function TherapistTalk() {
  return (
    <div className="h-full flex flex-1 flex-col justify-center">
      <div className="h-[70vh] py8 w-full grid grid-cols-12 gap-6">
        <div className=" col-span-8">
          <div className="h-full bg-[#D9D9D9] rounded-2xl flex flex-col items-center justify-center gap-6">
            <div className="rounded-full p-6 bg-[#C9B9AC] flex items-center justify-center">
              <PhoneCall className="h-12 w-12" />
            </div>
            <div className="text-2xl font-bold uppercase">Start a call</div>
          </div>
        </div>

        <div className="col-span-4">
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
        </div>
      </div>
    </div>
  );
}
