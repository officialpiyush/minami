import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/app-beta";
import { User } from "@clerk/nextjs/dist/api";
import Link from "next/link";

export default async function Home() {
  const user: User | null = await currentUser();

  return (
    <div className="flex flex-1 items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="col-span-8 flex flex-col gap-4 text-center lg:text-left">
          <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Your mind matters
          </div>

          <div className="scroll-m-20 text-2xl font-semibold tracking-tight mr-16">
          Navigating the ups and downs of life, giving a platform to find calm amidst the turbulence of waves, whilst giving you a gentle reminder that you are not alone.
          </div>

          <div>
            {user ? (
              <Link href="/dashboard">
                <Button>Go to dashboard</Button>
              </Link>
            ) : (
              <Link href="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>

        <div className="col-span-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-full w-full rounded-full"
            src="/nyan.gif"
            alt="ket"
          />
        </div>
      </div>
    </div>
  );
}
