import { currentUser } from "@clerk/nextjs/app-beta";
import Logo from "../icons/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import NavUserPopup from "./UserPopup";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between rounded-full border-2 my-4 max-w-5xl mx-auto px-2 py-2">
      <Link href={"/"}>
        <div className="bg-[#c9b9ac] rounded-full ">
          <Logo className="h-14 w-14 p-1" />
        </div>
      </Link>

      <div className="scroll-m-20 text-2xl font-semibold">
        <Link href={"/dashboard"} className="hover:underline decoration-wavy">
          minami
        </Link>
      </div>

      <div>
        {user ? (
          <NavUserPopup user={user} />
        ) : (
          <Avatar className="h-14 w-14">
            <AvatarFallback>
              <span className="text-2xl">👻</span>
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
}
