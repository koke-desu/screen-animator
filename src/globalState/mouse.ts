import { atom } from "jotai";

export const mouseAtom = atom<{ x: number; y: number; isMouseDown: boolean }>({
  x: 0,
  y: 0,
  isMouseDown: false,
});
