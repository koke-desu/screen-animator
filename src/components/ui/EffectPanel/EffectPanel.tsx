"use client";
import { nodesAtom } from "@/globalState/nodes";
import { useAtom } from "jotai";
import React from "react";
import PanelNode from "../PanelNode/PanelNode";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
type Props = {};

const EffectPanel: React.FC<Props> = ({}) => {
  const [nodes] = useAtom(nodesAtom);

  return (
    <div className="relative flex h-full flex-[2] flex-col rounded-lg bg-gray-dark">
      {nodes
        .filter((node) => node.panel === "Effect")
        .map((node) => (
          <PanelNode key={node.id} node={node} />
        ))}
      <PanelAddMenu
        title="エフェクトを追加"
        items={[
          {
            label: "ウィンドウの読み込み",
            iconUrl:
              "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Fwindow.svg?alt=media&token=39e156a0-b659-4555-a91c-d6df04f5eed9",
            initialNode: {
              panel: "Effect",
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
          {
            label: "テキスト",
            iconUrl:
              "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Ftext.svg?alt=media&token=ed6aa07c-4f59-4d8b-8378-d9355f7fc94a",
            initialNode: {
              panel: "Effect",
              label: "テキスト",
              iconUrl:
                "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Ftext.svg?alt=media&token=ed6aa07c-4f59-4d8b-8378-d9355f7fc94a",
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
export default EffectPanel;
