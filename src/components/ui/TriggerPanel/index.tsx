"use client";
import React, { useRef, useState } from "react";
import { AiFillPlusCircle as PlusIcon } from "react-icons/ai";
type Props = {};

const TriggerPanel: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-dark flex h-full flex-1 flex-col rounded-lg">
      <div className="relative">
        <PlusIcon
          size="2rem"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {isOpen && (
          <div className="fixed flex flex-col gap-4 bg-gray-500">
            <button>キー入力</button>
            <button>マウス入力</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TriggerPanel;
