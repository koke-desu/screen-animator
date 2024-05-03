import { nodeArrowsAtom } from "@/globalState/nodeArrows";
import { nodesAtom, NodeType } from "@/globalState/nodes";
import { renderPortalRef } from "@/globalState/render";
import { useAtom } from "jotai";
import { createPortal } from "react-dom";

export const Render: React.FC<{}> = () => {
  const [nodes] = useAtom(nodesAtom);
  const [nodeArrows] = useAtom(nodeArrowsAtom);
  const triggerNodes = nodes.filter((node) => node.panel === "Trigger");
  const [renderRef] = useAtom(renderPortalRef);

  const recursive = (node: NodeType, input: React.JSX.Element) => {
    const nextNode = nodeArrows
      .filter((arrow) => arrow.startNodeId === node.id)
      .map((arrow) => nodes.find((n) => n.id === arrow.endNodeId));

    if (nextNode.length > 0) {
      nextNode.forEach((next) => {
        if (next !== undefined) {
          const result = next.Run({
            options: next.options,
            input,
          });
          return recursive(next, result);
        }
      });
    } else {
      return input;
    }
  };

  return (
    <>
      {renderRef &&
        createPortal(
          triggerNodes.map((node) => {
            const Parent = node.Run({ options: node.options, input: null });
            return recursive(node, Parent);
          }),
          renderRef,
        )}
    </>
  );
};
