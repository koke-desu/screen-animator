"use client";
import React, { useRef } from "react";
import { AiFillPlusCircle as PlusIcon } from "react-icons/ai";
type Props = {};

const TriggerPanel: React.FC<Props> = ({}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex-1 h-full bg-gray-100 flex flex-col relative">
      <PlusIcon
        size="2rem"
        onClick={async () => {
          try {
            const stream = await navigator.mediaDevices.getDisplayMedia();
            if (videoRef.current) {
              console.log(stream);
              videoRef.current.srcObject = stream;
            }
          } catch (e) {
            console.log(e);
          }
        }}
      />
    </div>
  );
};
export default TriggerPanel;
