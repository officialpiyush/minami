import { cn } from "@/lib/utils";
import Link from "next/link";

interface TileProps extends React.ComponentProps<"div"> {
  href: string;
  title: string;
}

export default function Tile(props: TileProps) {
  return (
    <Link className="h-full w-full" href={props.href}>
      <div
        {...props}
        className={cn(
          "h-full w-full",
          "text-[#532222]",
          " hover:bg-opacity-90",
          "font-katibeh text-center",
          "py-6 px-4 rounded-xl",
          "scroll-m-20 text-4xl font-semibold tracking-tight transition-colors first:mt-0",
          "flex items-center justify-center",
          props.className
        )}
      >
        {props.title}
      </div>
    </Link>
  );
}
