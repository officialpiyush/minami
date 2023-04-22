import MinaBox from "@/components/MinaBox";
import MinaDialog from "@/components/MinaDialog";
import RemoveClass from "@/components/RemoveClass";
import { currentUser } from "@clerk/nextjs/app-beta";
import { User } from "@clerk/nextjs/dist/api";
import { redirect } from "next/navigation";

export default async function MinaPage() {
  const user: User | null = await currentUser();

  if (!user) {
    return redirect("/auth");
  }

  //   const posts = await prisma.messages.findMany();

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-1 flex-col gap-4">
      <div className="flex justify-between gap-4 items-center mt-4">
        {/* <div></div> */}

        <div className=" font-fraunces scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Minnas Board!
        </div>

        <div>
          <MinaDialog />
        </div>
      </div>
      <div className="flex flex-col gap-8 py-8 overflow-y-auto">
        <MinaBox
          message={`“Lorem Ipsum is simply dummy text of the printing and text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make”`}
        />
        <MinaBox
          message={`“Lorem Ipsum is simply dummy text of the printing and text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make”`}
        />
        <MinaBox
          message={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae expedita dignissimos quia facilis minus ullam totam earum a amet accusamus impedit debitis, molestiae nulla accusantium est excepturi distinctio sapiente!`}
        />
        <MinaBox
          message={`“Lorem Ipsum is simply dummy text of the printing and text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make”`}
        />
        <MinaBox
          message={`“Lorem Ipsum is simply dummy text of the printing and text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make”`}
        />
        <MinaBox
          message={`“Lorem Ipsum is simply dummy text of the printing and text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make”`}
        />
        <MinaBox
          message={`“Lorem Ipsum is simply dummy text of the printing and text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make”`}
        />
        <MinaBox
          message={`“Lorem Ipsum is simply dummy text of the printing and text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make”`}
        />
      </div>

      <RemoveClass removeClass={["max-w-6xl"]} selector="#rootElement" />
    </div>
  );
}
