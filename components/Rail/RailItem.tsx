"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type RailItemProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};
export const RailItem = ({ href, label, children }: RailItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant={"ghost"}
            size={"icon"}
            asChild
            className={isActive ? "bg-secondary" : ""}
          >
            <Link href={href}>{children}</Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
