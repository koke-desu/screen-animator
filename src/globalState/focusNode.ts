import { atom } from "jotai";
import { nodesAtom, NodeType } from "./nodes";
import { hoverElementIdAtom } from "./hoverElement";
import { atomEffect } from "jotai-effect";

export const focusNodeAtom = atom<NodeType | null>(null);

export const setFocusNodeAtom = atom(null, (get, set, id: string | null) => {
  if (!id) {
    set(focusNodeAtom, null);
    return;
  }

  const nodes = get(nodesAtom);
  const node = nodes.find((node) => node.id === id);
  set(focusNodeAtom, node || null);
});

export const attachFocusNodeEffect = atomEffect((get, set) => {
  const handleClick = (event: MouseEvent) => {
    const hoverElement = get(hoverElementIdAtom);
    if (hoverElement) {
      set(setFocusNodeAtom, hoverElement);
    }
  };

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
});
