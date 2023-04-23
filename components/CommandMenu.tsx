"use client";

import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="font-sans">
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Goto Page" />
        <CommandList>
          <CommandEmpty>Page</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Blogs</CommandItem>
            <CommandItem>Board</CommandItem>
            <CommandItem>Forest</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
