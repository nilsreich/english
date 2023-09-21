import { LayoutDashboardIcon, LogInIcon, PenIcon } from "lucide-react";
import { RailItem } from "./RailItem";

export const Rail = () => {
  return (
    <div className="flex flex-col p-1 border-r">
      <RailItem href="/" label="Editor">
        <LayoutDashboardIcon />
      </RailItem>
      <RailItem href="/login" label="Login">
        <LogInIcon />
      </RailItem>
      <RailItem href="/draw" label="Drawing">
        <PenIcon />
      </RailItem>
    </div>
  );
};
