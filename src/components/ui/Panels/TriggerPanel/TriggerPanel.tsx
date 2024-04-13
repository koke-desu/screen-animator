"use client";
import React, { useEffect, useRef } from "react";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { useAtom } from "jotai";
import { nodesAtom } from "@/globalState/nodes";
import PanelNode from "../../PanelNode/PanelNode";
import { setPanelPositionAtom } from "@/globalState/panelPosition";

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
              width: 0,
              height: 0,
              options: {},
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
              width: 0,
              height: 0,
              options: {},
            },
          },
        ]}
      />
    </div>
  );
};
export default TriggerPanel;
