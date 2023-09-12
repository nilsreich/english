//"use client";
import { useAtom } from "jotai";
import { SidebarVisibility } from "@/lib/store";
import {SidebarItems} from '@/components/Sidebar/SidebarItems'

export const Sidebar = () => {
  //const [state] = useAtom(SidebarVisibility);
  const state = true;
  return (
    <div className={`border-r w-[250px] ${state ? "block" : "hidden"} noprint`}>
      <SidebarItems />
    </div>
  );
};
