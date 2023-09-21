"use client";

import {
  BoldIcon,
  ItalicIcon,
  MonitorIcon,
  PenIcon,
  PrinterIcon,
  SaveIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCurrentEditor } from "@tiptap/react";

import Link from "next/link";
const channel = new BroadcastChannel("my-channel");

export const Toolbar = ({ preview = true }) => {
  const { editor } = useCurrentEditor();
  //const [state, setState] = useAtom(newContent);

  if (!editor) {
    return null;
  }
  if (editor && preview) {
    channel.onmessage = (event) => {
      editor.commands.setContent(event.data);
    };
  }
/*   useEffect(() => {
    editor.commands.setContent(state);
  }, [state]); */
  if (editor && !preview) {
    editor.on("update", ({ editor }) => {
      channel.postMessage(editor.getHTML());
    });
  }

  return (
    <>
      {!preview && (
        <div className=" p-1.5 border-b gap-2 grow flex noprint">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold") ? "bg-accent text-accent-foreground" : ""
            }
          >
            <BoldIcon size={16} />
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic")
                ? "bg-accent text-accent-foreground"
                : ""
            }
          >
            <ItalicIcon size={16} />
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => editor.chain().focus().toggleReactComponent().run()}
            className={
              editor.isActive("italic")
                ? "bg-accent text-accent-foreground"
                : ""
            }
          >
            <PenIcon size={16} />
          </Button>
          <div className="grow"></div>
          <Button
            size={"sm"}
            className="gap-4"
            onClick={() => console.log(editor.getJSON())}
          >
            Speichern
            <SaveIcon size={16} />
          </Button>
          <Button variant={"ghost"} size={"sm"} onClick={() => window.print()}>
            <PrinterIcon size={16} />
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <Link href="/preview" target="_blank">
              <MonitorIcon size={16} />
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};
