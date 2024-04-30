"use client";

import { NodeType } from "@/globalState/nodes";
import { createOption } from "../../NodeOptions";

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

type Node = Omit<NodeType<typeof options>, "id">;

const run: Node["run"] = ({ options }) => {
  return <p>{options[0].value}</p>;
};

export const initialNode: Node = {
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
