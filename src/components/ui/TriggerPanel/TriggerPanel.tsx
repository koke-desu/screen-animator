"use client";
import React from "react";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { FaKeyboard as KeyboardIcon } from "react-icons/fa";
import { LuTimer as TimerIcon } from "react-icons/lu";
import { Icon } from "@chakra-ui/react";

type Props = {};

const TriggerPanel: React.FC<Props> = ({}) => {
  return (
    <div className="bg-gray-dark relative flex h-full flex-1 flex-col rounded-lg">
      <PanelAddMenu
        title="トリガーを追加"
        items={[
          {
            label: "キーボード入力",
            icon: <Icon as={KeyboardIcon} />,
            initialNode: {
              panel: "Trigger",
              label: "キーボード入力",
              iconUrl: "/icons/keyboard.svg",
              hasIn: false,
              hasOut: true,
              panelX: 0,
              panelY: 0,
            },
          },
          {
            label: "一定秒数ごとに",
            icon: <Icon as={TimerIcon} />,
            initialNode: {
              panel: "Trigger",
              label: "一定秒数ごとに",
              iconUrl: "/icons/keyboard.svg",
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
