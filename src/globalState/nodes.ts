import { OptionsType } from "@/components/ui/NodeOptions";
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
  width: number;
  height: number;
  options: Readonly<OptionsType>;
  run: (input: { options: OptionsType }) => any; // TODO: 型をいい感じにしたい。NodeType["hasIn"]の型とかに合わせて動的に変化させたいな。それに加えて、描画用の基盤となるAPIの受け渡しもここで行う。
};

export const nodesAtom = atom<NodeType[]>([]);
const selectedNodeIdAtom = atom<string | null>(null);

export const addNodeAtom = atom(
  null,
  (get, set, node: Omit<NodeType, "id">) => {
    const id = crypto.randomUUID();
    set(nodesAtom, (prev) => [...prev, { ...node, id }]);
  },
);

export const selectedNodeAtom = atom(
  (get) => {
    const nodes = get(nodesAtom);
    const selectedNodeId = get(selectedNodeIdAtom);
    return nodes.find((node) => node.id === selectedNodeId) || null;
  },
  (get, set, id: string) => {
    set(selectedNodeIdAtom, id);
  },
);

export const updateNodeAtom = atom(
  null,
  (get, set, node: Pick<NodeType, "id"> & Partial<NodeType>) => {
    console.log(node);
    set(nodesAtom, (prev) => {
      const index = prev.findIndex((n) => n.id === node.id);
      prev[index] = { ...prev[index], ...node };
      return [...prev];
    });
  },
);
