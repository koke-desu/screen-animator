"use client";
import { nodeArrowPositionsAtom } from "@/globalState/nodeArrows";
import { useAtom } from "jotai";
import React from "react";
import NodeArrow from "./NodeArrow";
type Props = {};

const AllNodeArrow: React.FC<Props> = ({}) => {
  const [nodeArrows] = useAtom(nodeArrowPositionsAtom);

  return (
    <>
      {nodeArrows.map((arrow) => (
        <NodeArrow
          start={arrow.start}
          end={arrow.end}
          key={`node-arrow-${arrow.id}`}
        />
      ))}
    </>
  );
};
export default AllNodeArrow;
