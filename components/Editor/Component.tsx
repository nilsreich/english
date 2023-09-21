import { NodeViewWrapper } from "@tiptap/react";
import React from "react";
import { Drawing } from "../Drawing";
export default (props) => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    });
  };

  return (
    <NodeViewWrapper >
      <Drawing />
    </NodeViewWrapper>
  );
};
