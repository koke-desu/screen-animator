import { atom } from "jotai";

export type NodeType = {
  id: string;
  panel: "Trigger" | "Effect" | "Output";
  label: string;
  iconUrl: string;
  hasIn: boolean;
  hasOut: boolean;
  panelX: number;
  panelY: number;
};

export const nodesAtom = atom<NodeType[]>([]);

export const addNodeAtom = atom(
  null,
  (get, set, node: Omit<NodeType, "id">) => {
    const id = crypto.randomUUID();
    set(nodesAtom, (prev) => [...prev, { ...node, id }]);
  },
);
