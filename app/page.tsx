import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Editor } from "@/components/Editor";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar email={user?.email} />

      <div className="grow flex">
        <Sidebar />
        <Editor />
      </div>
    </div>
  );
}
