import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SidebarToggle } from "@/components/SidebarToggle";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { getDictionary } from "@/lib/get-directory";
import { Locale } from "@/lib/i18n-config";

type UserProps = {
  email: string | undefined;
  params:{lang:Locale} | any
};

export const Navbar = async ({ email, params}: UserProps) => {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="flex p-2 border-b items-center justify-between gap-2 noprint">
      <SidebarToggle />
      {email ? (
        <div className="grow flex items-center gap-4">
          <div className="grow">
            {" "}
            {dictionary["server-component"].welcome}, {email}!
          </div>
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
      <LocaleSwitcher />
      <ModeToggle />
    </div>
  );
};
