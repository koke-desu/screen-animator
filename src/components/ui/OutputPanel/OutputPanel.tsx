"use client";
import { nodesAtom } from "@/globalState/nodes";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import PanelNode from "../PanelNode/PanelNode";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { setPanelPositionAtom } from "@/globalState/panelPosition";
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
      <PanelAddMenu
        title="出力を追加"
        items={[
          {
            label: "画面への出力",
            iconUrl:
              "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Fwindow.svg?alt=media&token=39e156a0-b659-4555-a91c-d6df04f5eed9",
            initialNode: {
              panel: "Output",
              label: "ウィンドウ",
              iconUrl:
                "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Fwindow.svg?alt=media&token=39e156a0-b659-4555-a91c-d6df04f5eed9",
              hasIn: false,
              hasOut: true,
              panelX: 0,
              panelY: 0,
              options: {},
            },
          },
        ]}
      />
    </div>
  );
};
export default OutputPanel;
