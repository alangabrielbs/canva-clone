import { useAutoResize } from "@/features/editor/hooks/use-auto-resize";
import { fabric } from "fabric";
import { useCallback, useState } from "react";

type InitParams = {
  initialCanvas: fabric.Canvas;
  initialContainer: HTMLDivElement;
};

export const useEditor = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useAutoResize({
    canvas,
    container,
  });

  const init = useCallback(
    ({ initialCanvas, initialContainer }: InitParams) => {
      fabric.Object.prototype.set({
        cornerColor: "#fff",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      });

      const initialWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: "clip",
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.3)",
          blur: 5,
        }),
      });

      initialCanvas.setWidth(initialContainer.clientWidth);
      initialCanvas.setHeight(initialContainer.clientHeight);

      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace);
      initialCanvas.clipPath = initialWorkspace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);

      const test = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "black",
      });

      initialCanvas.add(test);
      initialCanvas.centerObject(test);
    },
    []
  );

  return {
    init,
  };
};
