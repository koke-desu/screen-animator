import { atom } from "jotai";
import { nodesAtom } from "./nodes";

export const hoverElementIdAtom = atom<string | null>(null);
export const hoverElementAtom = atom((get) => {
  const nodes = get(nodesAtom);
  const hoverElementId = get(hoverElementIdAtom);

  return nodes.find((node) => node.id === hoverElementId) || null;
});
