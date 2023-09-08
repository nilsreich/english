import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "../components/LogoutButton";
import { Navbar } from "@/components/Navbar";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <Navbar email={user?.email} />

      <div>asd</div>
    </div>
  );
}
