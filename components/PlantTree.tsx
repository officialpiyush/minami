"use client";

import { useToast } from "./ui/use-toast";

export default function PlantTree() {
    const toast = useToast();

  const plantTree = async () => {
    await fetch("/api/plant-tree", {
      method: "POST",
    });

    toast.toast({
        title: "Planted a tree!",
        description: "Thank you for planting a tree!",
    });
  };

  return (
    <div className="fixed bottom-0 left-0 ml-4 mb-4">
      <button
        onClick={plantTree}
        className="bg-[#3d220f] rounded-full p-2 border-2 flex items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/tree.svg" alt="" />
      </button>
    </div>
  );
}
