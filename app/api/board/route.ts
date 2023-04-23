import { currentUser } from "@clerk/nextjs/app-beta";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const user = await currentUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { startDate, endDate } = await request.json();

  const userMoods = await prisma.moods.findMany({
    where: {
      userId: user.id,
      time: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  return new Response(JSON.stringify(userMoods), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
