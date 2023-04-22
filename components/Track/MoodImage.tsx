"use client";

interface MoodImageProps extends React.ComponentProps<"div"> {
  mood: string;
  image: string;
}

export default function MoodImage(props: MoodImageProps) {
  const handleMoodClick = async () => {
    await fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mood: props.mood,
      }),
    });
  };

  return (
    <div className="p-4 m-4 relative">
      <div
        className="flex flex-col items-center hover:cursor-pointer"
        onClick={handleMoodClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="z-10 ring-[12px] ring-[#969A8A] h-48 w-48 rounded-full"
          src={props.image}
          alt={props.mood}
        />

        <span className="text-xl bg-[#897C74] mt-6 px-4 py-1 text-white rounded-xl first-letter:capitalize font-fraunces">
          {props.mood}
        </span>
      </div>

      <div className="-z-10 bg-[#969A8A] rounded-full h-24 w-24 absolute top-0 left-0 -ml-4 -mt-4 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-8 w-8 -ml-4 -mt-4"
          src={`/icons/${props.mood}.svg`}
          alt={props.mood}
        />
      </div>
    </div>
  );
}
