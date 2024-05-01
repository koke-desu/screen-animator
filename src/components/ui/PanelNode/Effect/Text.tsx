"use client";
import { NodeType } from "@/globalState/nodes";
import { createOption } from "../../NodeOptions";
import { MenuItemType } from "../../Panels/PanelAddMenu/PanelAddMenu";

const options = [
  createOption({
    type: "Text",
    label: "テキストを入力",
    name: "displayText",
  }),
  createOption({
    type: "Number",
    label: "fontSize",
    name: "fontSize",
    min: 8,
  }),
] as const;

const run: Omit<NodeType, "id">["run"] = ({ options: _options }) => {
  const val = _options as unknown as typeof options;
  const option = {
    displayText: val[0].value,
    fontSize: val[1].value,
  };

  return <p style={{ fontSize: option.fontSize }}>{option.displayText}</p>;
};

const initialNode: Omit<NodeType, "id"> = {
  panel: "Effect",
  label: "テキスト",
  iconUrl:
    "https://firebasestorage.googleapis.com/v0/b/screen-animator.appspot.com/o/icons%2Ftext.svg?alt=media&token=ed6aa07c-4f59-4d8b-8378-d9355f7fc94a",
  hasIn: false,
  hasOut: true,
  panelX: 0,
  panelY: 0,
  width: 0,
  height: 0,
  options,
  run,
};

const Text: MenuItemType = {
  label: "テキスト",
  iconUrl: initialNode.iconUrl,
  initialNode: initialNode as Omit<NodeType, "id">,
};

export default Text;
