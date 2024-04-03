"use client";
import { nodesAtom } from "@/globalState/nodes";
import { useAtom } from "jotai";
import React from "react";
import PanelNode from "../PanelNode/PanelNode";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
type Props = {};

const OutputPanel: React.FC<Props> = ({}) => {
  const [nodes] = useAtom(nodesAtom);

  return (
    <div className="relative flex h-full flex-1 flex-col rounded-lg bg-gray-dark">
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
            },
          },
        ]}
      />
    </div>
  );
};
export default OutputPanel;
