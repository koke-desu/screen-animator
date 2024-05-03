"use client";
import { renderPortalRef } from "@/globalState/render";
import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
type Props = {};

const RenderWindowPortal: React.FC<Props> = ({}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [, setWindow] = useAtom(renderPortalRef);

  useEffect(() => {
    if (windowRef.current) {
      setWindow(windowRef.current);
    }
  }, [setWindow]);

  return (
    <Box
      display={windowRef.current?.children.length !== 0 ? "block" : "none"}
      ref={windowRef}
      position="fixed"
      bg="white"
      w="80vw"
      h="80vh"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      boxShadow="0 0 10px rgba(0,0,0,0.5)"
      borderRadius={8}
    ></Box>
  );
};

export default RenderWindowPortal;
