"use client";
import React from "react";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { useAtom } from "jotai";
import { nodesAtom } from "@/globalState/nodes";
import PanelNode from "../PanelNode/PanelNode";

type Props = {};

const TriggerPanel: React.FC<Props> = ({}) => {
  const [nodes] = useAtom(nodesAtom);

  return (
    <div className="relative flex h-full flex-1 flex-col rounded-lg bg-gray-dark">
      {nodes
        .filter((node) => node.panel === "Trigger")
        .map((node) => (
          <PanelNode key={node.id} node={node} />
        ))}
      <PanelAddMenu
        title="トリガーを追加"
        items={[
          {
            label: "キーボード入力",
            iconUrl:
              "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Fkeyboard.svg?alt=media&token=036baac3-ec1d-4c64-b46a-73437367996b",
            initialNode: {
              panel: "Trigger",
              label: "キーボード入力",
              iconUrl:
                "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Fkeyboard.svg?alt=media&token=036baac3-ec1d-4c64-b46a-73437367996b",
              hasIn: false,
              hasOut: true,
              panelX: 0,
              panelY: 0,
            },
          },
          {
            label: "一定秒数ごとに",
            iconUrl:
              "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Ftimer.svg?alt=media&token=4c8fcbe8-00df-4218-a67a-7b2074835e09",
            initialNode: {
              panel: "Trigger",
              label: "一定秒数ごとに",
              iconUrl:
                "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Ftimer.svg?alt=media&token=4c8fcbe8-00df-4218-a67a-7b2074835e09",
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
export default TriggerPanel;
