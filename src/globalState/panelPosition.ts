import { atom } from "jotai";
import { NodeType } from "./nodes";

export const panelPositionAtom = atom<{
  [panel in NodeType["panel"]]: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}>({
  Trigger: { top: 0, right: 0, bottom: 0, left: 0 },
  Effect: { top: 0, right: 0, bottom: 0, left: 0 },
  Output: { top: 0, right: 0, bottom: 0, left: 0 },
});

export const setPanelPositionAtom = atom(
  null,
  (
    get,
    set,
    key: NodeType["panel"],
    ref: React.MutableRefObject<HTMLDivElement | null>,
  ) => {
    const updatePosition = () => {
      if (!ref.current) return;

      const { top, right, bottom, left } = ref.current.getBoundingClientRect();
      set(panelPositionAtom, (prev) => ({
        ...prev,
        [key]: { top, right, bottom, left },
      }));
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
  },
);
