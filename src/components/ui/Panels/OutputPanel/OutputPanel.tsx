"use client";
import { nodesAtom } from "@/globalState/nodes";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import PanelNode from "../../PanelNode/PanelNode";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { setPanelPositionAtom } from "@/globalState/panelPosition";
import outputItems from "../../PanelNode/Output";
type Props = {};

const OutputPanel: React.FC<Props> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [nodes] = useAtom(nodesAtom);
  const [, setPanelPosition] = useAtom(setPanelPositionAtom);
  useEffect(() => {
    setPanelPosition("Output", ref);
  }, [setPanelPosition]);

  return (
    <div
      className="relative flex h-full flex-1 flex-col rounded-lg bg-gray-dark"
      ref={ref}
    >
      {nodes
        .filter((node) => node.panel === "Output")
        .map((node) => (
          <PanelNode key={node.id} node={node} />
        ))}
      <PanelAddMenu title="出力を追加" items={outputItems} />
    </div>
  );
};
export default OutputPanel;
