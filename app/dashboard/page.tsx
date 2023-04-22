import Tile from "@/components/Dashboard/tile";
import { currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return redirect("/auth");
  }

  return (
    <div className="py-4 h-full flex flex-col justify-center flex-1 gap-8">
      <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Hi, <span className="font-bold">{user.firstName}</span>
      </div>

      <div className="flex items-center justify-center gap-8 h-[50vh]">
        <div id="single" className="h-full w-full flex flex-col">
          <Tile
            className="bg-[#AEC8B5]"
            title="READ MORE ON CALMING THE TURBULENCE"
            href="/blog"
          />
        </div>

        {/* new double */}
        <div id="double" className="h-full w-full flex flex-col">
          <div>
            <div className="py-8">
              <Tile className="bg-[#AEC8B5]" title="MY BOARD" href="/board" />
            </div>
          </div>

          <div className="h-full">
            <div className="h-full pb-12">
              <Tile
                className="bg-[#CDAE95]"
                title="CHECK MY FOREST"
                href="/forest"
              />
            </div>
          </div>
        </div>

        {/* new double */}
        <div id="double" className="h-full w-full flex flex-col gap-6">
          <div className="h-full">
            <div className="h-full">
              <Tile
                className="bg-[#CDC4BF]"
                title="TRACK MY MOOD"
                href="/track"
              />
            </div>
          </div>

          <div className="">
            <div className="h-full pb-0 ">
              <Tile
                className="bg-[#C9B9AC]"
                title="TALK TO THERAPIST"
                href="/therapist/talk"
              />
            </div>
          </div>
        </div>

        {/* new double */}
        <div id="double" className="h-full w-full flex flex-col gap-4">
          <div className="pt-16 h-full">
            <div className="h-full">
              <Tile
                className="bg-[#CDAE95]"
                title="HOTLINE NUMBERS"
                href="/hotline"
              />
            </div>
          </div>

          <div className="pt-6 pb-8">
            <div className="h-full ">
              <Tile
                className="bg-[#CDD8D9]"
                title="FIND A THERAPIST"
                href="/therapist/find"
              />
            </div>
          </div>
        </div>

        {/* new double */}
        <div id="double" className="h-full w-full flex flex-col gap-4">
          <div className="pt-2 h-full">
            <div className="h-full">
              <Tile
                className="bg-[#AEC8B5]"
                title="GAIN PEACE THROUGH MEDITATION"
                href="/meditate"
              />
            </div>
          </div>

          <div className="pt-6 pb-14">
            <div className="h-full ">
              <Tile
                className="bg-[#DBCEC4]"
                title="FELLOW MINAS"
                href="/minas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
