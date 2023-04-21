import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 items-center">
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-8 space-y-4">
          <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Your mind matters
          </div>

          <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
            some inspirational text as to why you should help yourself with
            Minami and how this is beneficial with a statistical fact
          </div>

          <div>
            <Button>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
