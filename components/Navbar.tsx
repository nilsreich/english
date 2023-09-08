import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

type UserProps = {
  email: string | undefined;
};

export const Navbar = ({ email }: UserProps) => {
  return (
    <div className="flex p-2 border-b items-center justify-between gap-2">
      <Button variant={"ghost"} size={"icon"}>
        <MenuIcon />
      </Button>
      {email ? (
        <div className="grow flex items-center gap-4">
          <div className="grow"> Hey, {email}!</div>
          <form action="/auth/sign-out" method="post">
            <Button variant={"secondary"}>Logout</Button>
          </form>
        </div>
      ) : (
        <Button asChild>
          <Link
            href="/login"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        </Button>
      )}
      <ModeToggle />
    </div>
  );
};
