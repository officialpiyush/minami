interface MoodImageProps extends React.ComponentProps<"div"> {
  mood: string;
  image: string;
}

export default function MoodImage(props: MoodImageProps) {
  return (
    <div className="p-4 m-4 relative">
      <div className="rounded-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="z-10 ring-[12px] ring-[#969A8A] h-48 w-48 rounded-full"
          src={props.image}
          alt={props.mood}
        />
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
