"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "@/components/Editor/Toolbar";

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
];

const content = `
<h2>
  Hi there,
</h2>
`;

const editorProps = {
  attributes: {
    class: 'min-h-[250px] p-2 prose-neutral dark:prose-invert prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
},
};
export const Editor = () => {
  return (
    <div className="grow">
      <EditorProvider
        slotBefore={<Toolbar />}
        extensions={extensions}
        content={content}
        editorProps={editorProps}
      >
        {""}
      </EditorProvider>
    </div>
  );
};
