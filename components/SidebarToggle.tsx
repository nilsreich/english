"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useAtom } from "jotai";
import { SidebarVisibility } from "@/lib/store";

export const SidebarToggle = () => {
  const [state, setState] = useAtom(SidebarVisibility);
  return (
    <Button variant={"ghost"} size={"icon"} onClick={() => setState(!state)}>
      <MenuIcon />
    </Button>
  );
};
