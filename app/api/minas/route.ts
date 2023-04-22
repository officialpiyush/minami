import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/app-beta";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { message } = await request.json();

  if (!message || message.length === 0) {
    return new Response("No message provided", { status: 400 });
  }

  await prisma.messages.create({
    data: {
      message,
    },
  });

  return new Response("Done!");
}
