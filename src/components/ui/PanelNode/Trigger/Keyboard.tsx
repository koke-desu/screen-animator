"use client";
import { NodeType } from "@/globalState/nodes";
import { createOption } from "../../NodeOptions";
import { MenuItemType } from "../../Panels/PanelAddMenu/PanelAddMenu";
import { useEffect, useState } from "react";

const options = [
  createOption({
    type: "Text",
    label: "Triggerのキー",
    name: "key",
  }),
] as const;

const Run: Omit<NodeType, "id">["Run"] = ({ options: _options, input }) => {
  const val = _options as unknown as typeof options;
  const option = {
    key: val[0].value,
  };
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === option.key) {
        setIsRunning(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === option.key) {
        setIsRunning(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [option.key]);

  return <>{isRunning && input}</>;
};

const initialNode: Omit<NodeType, "id"> = {
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
  options,
  Run,
};

const Keyboard: MenuItemType = {
  label: "キーボード入力",
  iconUrl: initialNode.iconUrl,
  initialNode: initialNode as Omit<NodeType, "id">,
};

export default Keyboard;
