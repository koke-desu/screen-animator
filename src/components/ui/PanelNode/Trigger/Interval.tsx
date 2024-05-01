"use client";
import { NodeType } from "@/globalState/nodes";
import { createOption } from "../../NodeOptions";
import { MenuItemType } from "../../Panels/PanelAddMenu/PanelAddMenu";

const options = [
  createOption({
    type: "Number",
    label: "間隔(秒)",
    name: "interval",
    min: 0.1,
  }),
] as const;

const run: Omit<NodeType, "id">["run"] = ({ options: _options }) => {
  const val = _options as unknown as typeof options;
  const option = { interval: val[0].value };

  const onSnapshot = (onInterval: () => void) => {
    const handler = setInterval(() => {
      onInterval();
    }, option.interval * 1000);

    return () => {
      clearInterval(handler);
    };
  };

  return onSnapshot;
};

const initialNode: Omit<NodeType, "id"> = {
  panel: "Trigger",
  label: "一定時間ごとに",
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

const Interval: MenuItemType = {
  label: "一定時間ごとに",
  iconUrl: initialNode.iconUrl,
  initialNode: initialNode as Omit<NodeType, "id">,
};

export default Interval;
