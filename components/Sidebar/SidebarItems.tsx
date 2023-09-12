import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export const SidebarItems = async () => {
  // Create a Supabase client configured to use cookies
  const supabase = createServerComponentClient({ cookies });

  // This assumes you have a `todos` table in Supabase. Check out
  // the `Create Table and seed with data` section of the README 👇
  // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
  const { data: todos } = await supabase.from("todos").select();
  return (
    <div>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
