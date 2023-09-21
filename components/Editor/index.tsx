"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "@/components/Editor/Toolbar";
import ReactComponent from "./Extension";

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  ReactComponent,
];

const editorProps = {
  attributes: {
    class:
      "min-h-[250px] p-2 prose-neutral dark:prose-invert prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
  },
};
export const Editor = ({ preview = false, content = "" }) => {
  return (
    <div className="grow content">
      <EditorProvider
        slotBefore={<Toolbar preview={preview} />}
        content={` <react-component>
        <p>This is editable. You can create a new component by pressing Mod+Enter.</p>
      </react-component>`}
        extensions={extensions}
        editorProps={editorProps}
        editable={!preview}
      >
        {""}
      </EditorProvider>
    </div>
  );
};
