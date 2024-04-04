import { atom } from "jotai";
import { nodesAtom } from "./nodes";

export type NodeArrowType = {
  id: string;
  start: { x: number; y: number };
  startNodeId: string;
  end: { x: number; y: number };
  endNodeId: string;
};

export const nodeArrowsAtom = atom<NodeArrowType[]>([]);

export const addNodeArrowAtom = atom(
  null,
  (get, set, nodeArrow: Pick<NodeArrowType, "startNodeId" | "endNodeId">) => {
    const nodes = get(nodesAtom);
    const startNode = nodes.find((node) => node.id === nodeArrow.startNodeId);
    const endNode = nodes.find((node) => node.id === nodeArrow.endNodeId);
    if (!startNode || !endNode) return;

    set(nodeArrowsAtom, (prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        start: { x: startNode.panelX, y: startNode.panelY },
        startNodeId: startNode.id,
        end: { x: endNode.panelX, y: endNode.panelY },
        endNodeId: endNode.id,
      },
    ]);
  },
);

export const updateNodeAtom = atom(
  null,
  (get, set, node: Pick<NodeArrowType, "id"> & Partial<NodeArrowType>) => {
    set(nodeArrowsAtom, (prev) => {
      const index = prev.findIndex((n) => n.id === node.id);
      prev[index] = { ...prev[index], ...node };
      return [...prev];
    });
  },
);
