import { atom } from "jotai";
import { nodesAtom, NodeType } from "./nodes";
import { hoverElementIdAtom } from "./hoverElement";
import { atomEffect } from "jotai-effect";

export const focusNodeIdAtom = atom<string | null>(null);
export const focusNodeAtom = atom<NodeType | null>((get) => {
  const nodes = get(nodesAtom);
  const id = get(focusNodeIdAtom);
  return nodes.find((node) => node.id === id) || null;
});

export const setFocusNodeAtom = atom(null, (get, set, id: string | null) => {
  if (!id) {
    set(focusNodeIdAtom, null);
    return;
  }

  const nodes = get(nodesAtom);
  const node = nodes.find((node) => node.id === id);
  set(focusNodeIdAtom, node?.id || null);
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
