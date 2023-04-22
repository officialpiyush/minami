"use client";
import RemoveClass from "@/components/RemoveClass";
import Tree from "@/components/Tree";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useUser } from "@clerk/nextjs";
import { CircleSlash2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ForestPage() {
    const user = useUser();

    useEffect(() => {
      if (user.isLoaded && !user.isSignedIn) {
        redirect("/auth");
      }
    }, [user]);

  return (
    <TooltipProvider>
      <div className="max-w-8xl mx-auto flex flex-col flex-1 items-center justify-center gap-12 font-fraunces">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          My Forest
        </h1>
        <div className="relative h-1/2 w-1/2">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-full w-full -z-10" src="/blob.png" alt="forest" />

          <Tree />
          <Tree />
          <Tree />
          <Tree />
          <Tree />
          <Tree />
          <Tree />
        </div>

        <RemoveClass removeClass={["max-w-6xl"]} selector="#rootElement" />
      </div>
    </TooltipProvider>
  );
}
