import ChangeBG from "@/components/ChangeBG";
import { currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

export default async function TrackMood() {
  const user = await currentUser();

  if (!user) {
    return redirect("/auth");
  }

  return (
    <div>
      <h1>TrackMood</h1>

      <ChangeBG color="#C9B9AC" textColor="#875834" />
    </div>
  );
}
