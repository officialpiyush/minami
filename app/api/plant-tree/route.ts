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

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const trees = await prisma.trees.findMany({
    where: {
      userId: user.id,
    },
  });

  return new Response(JSON.stringify(trees), { status: 200 });
}
