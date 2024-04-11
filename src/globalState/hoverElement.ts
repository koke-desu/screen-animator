import { atom } from "jotai";
import { nodesAtom } from "./nodes";
import { atomEffect } from "jotai-effect";

export const hoverElementIdAtom = atom<string | null>(null);

export const hoverElementAtom = atom((get) => {
  const nodes = get(nodesAtom);
  const hoverElementId = get(hoverElementIdAtom);

  return nodes.find((node) => node.id === hoverElementId) || null;
});

export const attachHoverElementEffect = atomEffect((get, set) => {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const hoverElement = document.elementFromPoint(x, y);
    if (hoverElement && hoverElement.closest("[data-node-id]")) {
      set(
        hoverElementIdAtom,
        hoverElement.closest("[data-node-id]")!.getAttribute("data-node-id"),
      );
    } else {
      set(hoverElementIdAtom, null);
    }
  });
});
