"use client";
import { NodeType } from "@/globalState/nodes";
import { MenuItemType } from "../../Panels/PanelAddMenu/PanelAddMenu";

const options = [] as const;

const Run: Omit<NodeType, "id">["Run"] = ({ options: _options }) => {
  const val = _options as unknown as typeof options;
  const option = {};

  return <div>なんかウィンドウ</div>;
};

const initialNode: Omit<NodeType, "id"> = {
  panel: "Effect",
  label: "ウィンドウ",
  iconUrl:
    "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Fwindow.svg?alt=media&token=39e156a0-b659-4555-a91c-d6df04f5eed9",
  hasIn: false,
  hasOut: true,
  panelX: 0,
  panelY: 0,
  width: 0,
  height: 0,
  options,
  Run,
};

const Window: MenuItemType = {
  label: "ウィンドウ",
  iconUrl: initialNode.iconUrl,
  initialNode: initialNode as Omit<NodeType, "id">,
};

export default Window;
