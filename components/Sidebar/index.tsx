"use client";
import { useAtom } from "jotai";
import { SidebarVisibility } from "@/lib/store";
import { SidebarItems } from "@/components/Sidebar/SidebarItems";
import { useWindowWidth } from "./useWindowWidth";

export const Sidebar = () => {
  const [state] = useAtom(SidebarVisibility);
  const width = useWindowWidth();

  return (
    <div className={`border-r w-[250px] ${(width>768 || state) ? "block" : "hidden"} noprint`}>
      <SidebarItems />
    </div>
  );
};
