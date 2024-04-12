import { nodeArrowPortalAtom } from "@/globalState/nodeArrows";
import { useAtom } from "jotai";
import React from "react";
import { createPortal } from "react-dom";

type Props = {
  start: { x: number; y: number };
  end: { x: number; y: number };
};

const ARROW_HEAD_WIDTH = 10;

const NodeArrow: React.FC<Props> = ({ start, end }) => {
  const [portalRef] = useAtom(nodeArrowPortalAtom);

  const control1 = {
    y: start.y,
    x: (end.x - start.x) / 2 + start.x,
  };
  const control2 = {
    y: end.y,
    x: (end.x - start.x) / 2 + start.x,
  };

  return (
    <>
      {portalRef &&
        createPortal(
          <path
            d={`M ${start.x} ${start.y} 
          C ${control1.x} ${control1.y}, 
            ${control2.x} ${control2.y}, 
            ${end.x - ARROW_HEAD_WIDTH} ${end.y}
      `}
            stroke="white"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />,
          portalRef,
        )}
    </>
  );
};

export default NodeArrow;
