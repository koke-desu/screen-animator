"use client";
import React, { useEffect, useRef } from "react";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { useAtom } from "jotai";
import { nodesAtom } from "@/globalState/nodes";
import PanelNode from "../../PanelNode/PanelNode";
import { setPanelPositionAtom } from "@/globalState/panelPosition";
import triggerItems from "../../PanelNode/Trigger";

type Props = {};

const TriggerPanel: React.FC<Props> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [nodes] = useAtom(nodesAtom);
  const [, setPanelPosition] = useAtom(setPanelPositionAtom);
  useEffect(() => {
    setPanelPosition("Trigger", ref);
  }, [setPanelPosition]);

  return (
    <div
      className="relative flex h-full flex-1 flex-col rounded-lg bg-gray-dark"
      ref={ref}
    >
      {nodes
        .filter((node) => node.panel === "Trigger")
        .map((node) => (
          <PanelNode key={node.id} node={node} />
        ))}
      <PanelAddMenu title="トリガーを追加" items={triggerItems} />
    </div>
  );
};
export default TriggerPanel;
