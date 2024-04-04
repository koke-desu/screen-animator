"use client";
import { nodeArrowPortalAtom } from "@/globalState/nodeArrows";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
type Props = {};

const NodeArrowPortal: React.FC<Props> = ({}) => {
  const portalRef = useRef<SVGGElement>(null);
  const [, setPortalRef] = useAtom(nodeArrowPortalAtom);
  useEffect(() => {
    if (portalRef.current) {
      setPortalRef(portalRef.current);
    }
  }, [setPortalRef]);

  return (
    <svg
      width="100vw"
      height="100vh"
      className="pointer-events-none absolute left-0 top-0 z-10"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="white" />
        </marker>
      </defs>
      {/* ここにPortalでarrowを追加していく */}
      <g ref={portalRef}></g>
    </svg>
  );
};
export default NodeArrowPortal;
