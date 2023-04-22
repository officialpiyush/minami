import ChangeBG from "@/components/ChangeBG";
import RemoveClass from "@/components/RemoveClass";
import MoodImage from "@/components/Track/MoodImage";
import { currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

const moods = ["happy", "calm", "neutral", "sad", "angry"];

export default async function TrackMood() {
  const user = await currentUser();

  if (!user) {
    return redirect("/auth");
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col flex-1 justify-center">
      <h1>TrackMood</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5">
        {moods.map((mood) => (
          <MoodImage key={mood} mood={mood} image={`/neko/${mood}.png`} />
        ))}
      </div>

      <ChangeBG color="#C9B9AC" textColor="#875834" />
      <RemoveClass removeClass={["max-w-6xl"]} selector="#rootElement" />
    </div>
  );
}
