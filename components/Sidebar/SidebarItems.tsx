"use client";

// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAtom } from "jotai";
import { newContent } from "@/lib/store";
import { useEffect, useState } from "react";
export const SidebarItems = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [state, setState] = useAtom(newContent);
  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getTodos = async () => {
      // This assumes you have a `todos` table in Supabase. Check out
      // the `Create Table and seed with data` section of the README 👇
      // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
      const { data } = await supabase.from("todos").select();
      if (data) {
        setTodos(data);
      }
    };

    getTodos();
  }, [supabase, setTodos]);
  return (
    <div>
      {todos?.map((todo) => (
        <p key={todo.id} onClick={() => setState(todo.title)}>
          {todo.title}
        </p>
      ))}
    </div>
  );
};
