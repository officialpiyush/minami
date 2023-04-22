import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/app-beta";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { startedAt, endedAt } = await request.json();

  if (!startedAt || !endedAt) {
    return new Response("Bad Request", { status: 400 });
  }

  const duration = endedAt - startedAt;

  await prisma.meditation.create({
    data: {
      userId: user.id,
      duration,
      startedAt: new Date(startedAt),
      endedAt: new Date(endedAt),
    },
  });

  return new Response("Done!");
}

export async function GET(request: Request) {
  const user = await currentUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const meditations = await prisma.meditation.findMany({
    where: {
      userId: user.id,
    },
    select: {
      duration: true,
      startedAt: true,
    },
  });

  return new Response(JSON.stringify(meditations));
}
