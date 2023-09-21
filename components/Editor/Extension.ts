import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { Extension } from '@tiptap/core'

import Component from "./Component";

export default Node.create({
  name: "reactComponent",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "react-component",
      },
    ];
  },
  addCommands() {
    return {
        toggleReactComponent: () => ({ chain }) => {
        return chain()
          .insertContent({ type: this.name})
          .run()
      },

    }
  },
  renderHTML({ HTMLAttributes }) {
    return ["react-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },

  addKeyboardShortcuts() {
    return {
      "Mod-m": () => this.editor.commands.toggleReactComponent(),
    };
  },
});
