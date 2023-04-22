import MinaBox from "@/components/MinaBox";
import MinaDialog from "@/components/MinaDialog";
import RemoveClass from "@/components/RemoveClass";
import { currentUser } from "@clerk/nextjs/app-beta";
import { User } from "@clerk/nextjs/dist/api";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";

export default async function MinaPage() {
  const user: User | null = await currentUser();
  let posts: string[] = (
    await prisma.messages.findMany({
      select: {
        message: true,
      },
    })
  )
    .map((post) => post.message)
    .reverse();

  if (!user) {
    return redirect("/auth");
  }

  //   const posts = await prisma.messages.findMany();

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-1 flex-col gap-4">
      <div className="flex justify-between gap-4 items-center mt-4">
        <div className=" font-fraunces scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Minnas Board!
        </div>

        <div>
          <MinaDialog />
        </div>
      </div>
      <div className="flex flex-col gap-8 py-8 overflow-y-auto">
        {posts.map((post, id) => (
          <MinaBox key={id} message={post} />
        ))}
      </div>

      <RemoveClass removeClass={["max-w-6xl"]} selector="#rootElement" />
    </div>
  );
}
