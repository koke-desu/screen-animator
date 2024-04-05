import { mouseAtom } from "@/globalState/mouse";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
type Props = {};

const AddWindowEvent: React.FC<Props> = ({}) => {
  const [, setMousePosition] = useAtom(mouseAtom);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
        isMouseDown: event.buttons === 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setMousePosition]);

  return <></>;
};
export default AddWindowEvent;
