import { fabric } from "fabric";
import { useCallback } from "react";

type InitParams = {
  initialCanvas: fabric.Canvas;
  initialContainer: HTMLDivElement;
};

export const useEditor = () => {
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
        width: 500,
        height: 500,
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
