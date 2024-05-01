"use client";
import { NodeType } from "@/globalState/nodes";
import { createOption } from "../../NodeOptions";
import { MenuItemType } from "../../Panels/PanelAddMenu/PanelAddMenu";

const options = [
  createOption({
    type: "Text",
    label: "Triggerのキー",
    name: "key",
  }),
] as const;

const run: Omit<NodeType, "id">["run"] = ({ options: _options }) => {
  const val = _options as unknown as typeof options;
  const option = {
    key: val[0].value,
  };

  const onSnapshot = (onKeydown: () => void) => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === option.key) {
        onKeydown();
      }
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  };

  return onSnapshot;
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
  run,
};

const Keyboard: MenuItemType = {
  label: "キーボード入力",
  iconUrl: initialNode.iconUrl,
  initialNode: initialNode as Omit<NodeType, "id">,
};

export default Keyboard;
