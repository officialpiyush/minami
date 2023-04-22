import Tile from "@/components/Dashboard/tile";
import { currentUser } from "@clerk/nextjs/app-beta";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return <Link href={"/"} />;
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
        <div id="double" className="h-full w-full flex flex-col gap-4">
          <div className=" h-full ">
            <div className="py-12">
              <Tile
                className="bg-[#AEC8B5]"
                title="MY BOARD"
                href="/board"
              />
            </div>
          </div>

          <div className="h-full bg-yellow-600">K</div>
        </div>

        {/* new double */}
        <div
          id="double"
          className="h-full w-full bg-red-900 flex flex-col gap-4"
        >
          <div className=" h-full bg-yellow-600">F</div>

          <div className="h-full bg-yellow-600">K</div>
        </div>

        {/* new double */}
        <div
          id="double"
          className="h-full w-full bg-red-900 flex flex-col gap-4"
        >
          <div className=" h-full bg-yellow-600">F</div>

          <div className="h-full bg-yellow-600">K</div>
        </div>

        {/* new double */}
        <div
          id="double"
          className="h-full w-full bg-red-900 flex flex-col gap-4"
        >
          <div className=" h-full bg-yellow-600">F</div>

          <div className="h-full bg-yellow-600">K</div>
        </div>
      </div>
    </div>
  );
}
