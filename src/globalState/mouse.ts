import { atom } from "jotai";
import { atomEffect } from "jotai-effect";

export const mouseAtom = atom<{ x: number; y: number; isMouseDown: boolean }>({
  x: 0,
  y: 0,
  isMouseDown: false,
});

export const attachMouseMoveEffect = atomEffect((get, set) => {
  const handleMouseMove = (event: MouseEvent) => {
    set(mouseAtom, {
      x: event.clientX,
      y: event.clientY,
      isMouseDown: event.buttons === 1,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
});
