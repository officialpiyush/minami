import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/app-beta";
import dayjs from "dayjs";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { mood } = await request.json();

  if (!mood || mood.length === 0) {
    return new Response("No message provided", { status: 400 });
  }

  await prisma.moods.create({
    data: {
      mood,
      time: dayjs().unix(),
      userId: user.id,
    },
  });

  return new Response("Done!");
}
