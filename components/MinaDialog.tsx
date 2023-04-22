"use client";

import { DialogClose } from "@radix-ui/react-dialog";
import { LucidePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

export default function MinaDialog() {
  const [input, setInput] = useState("");

  function submitData() {
    fetch("/api/minas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded p-4 bg-[#B99B6B]">
          <LucidePlus />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add message</DialogTitle>
          <DialogDescription>All posts are anonymous</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Enter message"
            id="name"
            className="col-span-3"
            // @ts-expect-error
            onKeyUp={(event) => setInput(event.target.value as string)}
            // @ts-expect-error
            onKeyDown={(event) => setInput(event.target.value as string)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={submitData}>
              Send!
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
