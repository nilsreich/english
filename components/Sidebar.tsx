"use client";
import { useAtom } from "jotai";
import { SidebarVisibility } from "@/lib/store";

export const Sidebar = () => {
  const [state] = useAtom(SidebarVisibility);
  return (
    <div className={`border-r w-[250px] ${state ? "block" : "hidden"} noprint`}>
      Sidebar
    </div>
  );
};
