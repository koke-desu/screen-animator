import React, { useRef } from "react";
import { AiFillPlusCircle as PlusIcon } from "react-icons/ai";
type Props = {};

const DropDownMenu: React.FC<Props> = ({}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const triggerBounding = triggerRef.current?.getBoundingClientRect();
  const { triggerX, triggerY } = { triggerX: triggerBounding?.x, triggerY: triggerBounding?.y };
  const isUpperHalf = triggerY && triggerY < window.innerHeight / 2;

  return (
    <div className="relative">
      <div ref={triggerRef} className="absolute" style={{}}>
        <PlusIcon size="3rem" className="fill-gray-500" />
      </div>
    </div>
  );
};
export default DropDownMenu;
