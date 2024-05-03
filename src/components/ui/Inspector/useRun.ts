import { nodeArrowsAtom } from "@/globalState/nodeArrows";
import { nodesAtom, NodeType } from "@/globalState/nodes";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const useRun = () => {
  const [nodes] = useAtom(nodesAtom);
  const [nodeArrows] = useAtom(nodeArrowsAtom);
  const triggerNodes = nodes.filter((node) => node.panel === "Trigger");
  const listenerRefs = useRef<(() => void)[]>([]);

  useEffect(() => {
    const listener = listenerRefs.current;
    return () => {
      listener.forEach((l) => l());
    };
  }, []);

  const run = () => {
    console.log("on run");
    const recursive = (node: NodeType, input?: any) => {
      const nextNode = nodeArrows
        .filter((arrow) => arrow.startNodeId === node.id)
        .map((arrow) => nodes.find((n) => n.id === arrow.endNodeId));

      if (nextNode.length > 0) {
        nextNode.forEach((next) => {
          if (next !== undefined) {
            const result = next.run({ options: node.options, input });
            recursive(next, result);
          }
        });
      }
    };

    triggerNodes.forEach((node) => {
      const onSnapshot = node.run({ options: node.options });
      const listener = onSnapshot(() => {
        recursive(node);
      });

      listenerRefs.current.push(listener);
    });
  };

  return run;
};
