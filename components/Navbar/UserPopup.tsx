import { User } from "@clerk/nextjs/dist/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut } from "lucide-react";

interface NavUserPopupProps extends React.ComponentPropsWithoutRef<"div"> {
  user: User;
}

export default function NavUserPopup(props: NavUserPopupProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-14 w-14">
          <AvatarImage className="h-14 w-14" src={props.user.profileImageUrl} />
          <AvatarFallback>
            <span>{props.user.primaryEmailAddressId}</span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
