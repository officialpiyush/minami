import { currentUser } from "@clerk/nextjs/app-beta";
import prisma from "@/lib/prisma";

export async function POST() {
  const user = await currentUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  await prisma.trees.create({
    data: {
      userId: user.id,
      time: new Date().getTime(),
    },
  });

  return new Response("OK", { status: 200 });
}
