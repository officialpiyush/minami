import Logo from "./icons/Logo";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between rounded-full border-2 my-4 max-w-5xl mx-auto px-2 py-2">
            <div className="bg-[#c9b9ac] rounded-full ">
                <Logo className="h-14 w-14 p-1" />
            </div>

            <div className="scroll-m-20 text-2xl font-semibold">
                minami
            </div>

            <div>
                <Avatar className="h-14 w-14">
                    <AvatarFallback>
                        <span className="text-2xl">👻</span>
                    </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}