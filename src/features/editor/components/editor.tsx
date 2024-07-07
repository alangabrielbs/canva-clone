"use client";

import { fabric } from "fabric";
import { useEffect, useRef } from "react";

import { useEditor } from "@/features/editor/hooks/use-editor";

export const Editor = () => {
  const { init } = useEditor();

  const containerRef = useRef<HTMLDivElement>(null);
  const canvaRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvaRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!,
    });
  }, [init]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 h-full bg-muted" ref={containerRef}>
        <canvas ref={canvaRef} />
      </div>
    </div>
  );
};
