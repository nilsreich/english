"use client";

import { BoldIcon, ItalicIcon } from "lucide-react";
import { Button } from "../ui/button";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";

export const Toolbar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  return (
    <div className=" p-1.5 border-b gap-2 grow flex">
      <Button
        variant={"ghost"}
        size={"sm"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "bg-accent text-accent-foreground" : ""}
      >
        <BoldIcon size={16} />
      </Button>
      <Button
        variant={"ghost"}
        size={"sm"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "bg-accent text-accent-foreground" : ""}
      >
        <ItalicIcon size={16} />
      </Button>
    </div>
  );
};
