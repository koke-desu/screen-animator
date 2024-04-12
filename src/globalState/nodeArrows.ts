import { atom } from "jotai";
import { nodesAtom } from "./nodes";
import { panelPositionAtom } from "./panelPosition";

export type NodeArrowType = {
  id: string;
  startNodeId: string;
  endNodeId: string;
};

export const nodeArrowsAtom = atom<NodeArrowType[]>([]);
export const nodeArrowPortalAtom = atom<SVGGElement | null>(null);

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
        startNodeId: startNode.id,
        endNodeId: endNode.id,
      },
    ]);
  },
);

export const removeNodeArrowAtom = atom(null, (get, set, id: string) => {
  set(nodeArrowsAtom, (prev) => prev.filter((arrow) => arrow.id !== id));
});

export const nodeArrowPositionsAtom = atom<
  (NodeArrowType & {
    start: { x: number; y: number };
    end: { x: number; y: number };
  })[]
>((get) => {
  const nodeArrows = get(nodeArrowsAtom);
  const nodes = get(nodesAtom);
  const panelPosition = get(panelPositionAtom);

  return nodeArrows
    .map((arrow) => {
      const startNode = nodes.find((node) => node.id === arrow.startNodeId);
      const endNode = nodes.find((node) => node.id === arrow.endNodeId);
      if (!startNode || !endNode) return;

      const startPanel = panelPosition[startNode.panel];
      const endPanel = panelPosition[endNode.panel];

      return {
        ...arrow,
        start: {
          x: startNode.panelX + startPanel.left + startNode.width,
          y: startNode.panelY + startPanel.top + startNode.height / 2,
        },
        end: {
          x: endNode.panelX + endPanel.left,
          y: endNode.panelY + endPanel.top + endNode.height / 2,
        },
      };
    })
    .filter((arrow) => arrow !== undefined);
});
