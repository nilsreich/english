"use client";

import { useRef } from "react";
import { useState, useEffect } from "react";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {
  AppState,
  ExcalidrawImperativeAPI,
  ExcalidrawProps,
} from "@excalidraw/excalidraw/types/types";
import { ImportedDataState } from "@excalidraw/excalidraw/types/data/types";

import { Excalidraw } from "@excalidraw/excalidraw";

export default function draw() {
  const editor = useRef<ExcalidrawImperativeAPI>(null);
  const content: ImportedDataState = {
    elements: [
      {
        id: "M0yIBUPpz0jYVponz4D8R",
        type: "arrow",
        x: 271.14068603515625,
        y: 169.0596923828125,
        width: 370.216064453125,
        height: 152.8927001953125,
        angle: 0,
        strokeColor: "#000000",
        backgroundColor: "transparent",
        fillStyle: "hachure",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        groupIds: [],
        roundness: {
          type: 2,
        },
        seed: 429058666,
        version: 6,
        versionNonce: 204633014,
        isDeleted: false,
        boundElements: null,
        updated: 1694590388631,
        link: null,
        locked: false,
        points: [
          [0, 0],
          [370.216064453125, 152.8927001953125],
        ],
        lastCommittedPoint: null,
        startBinding: null,
        endBinding: null,
        startArrowhead: null,
        endArrowhead: "arrow",
      },
    ],
    appState: { currentItemFontFamily: 1 },
    scrollToContent: true,
  };

  const handleSave = () => {
    if (editor.current) {
      const data = editor.current.getSceneElements();
      console.log(data);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div style={{ height: "500px" }}>
        <Excalidraw initialData={content} ref={editor} />
      </div>
      <button onClick={handleSave}>Save</button>
    </>
  );
}
