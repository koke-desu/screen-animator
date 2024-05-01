"use client";
import { nodesAtom } from "@/globalState/nodes";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import PanelNode from "../../PanelNode/PanelNode";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { setPanelPositionAtom } from "@/globalState/panelPosition";
import effectItems from "../../PanelNode/Effect";
type Props = {};

const EffectPanel: React.FC<Props> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [nodes] = useAtom(nodesAtom);
  const [, setPanelPosition] = useAtom(setPanelPositionAtom);
  useEffect(() => {
    setPanelPosition("Effect", ref);
  }, [setPanelPosition]);

  return (
    <div
      className="relative flex h-full flex-[2] flex-col rounded-lg bg-gray-dark"
      ref={ref}
    >
      {nodes
        .filter((node) => node.panel === "Effect")
        .map((node) => (
          <PanelNode key={node.id} node={node} />
        ))}
      <PanelAddMenu title="エフェクトを追加" items={effectItems} />
    </div>
  );
};
export default EffectPanel;
