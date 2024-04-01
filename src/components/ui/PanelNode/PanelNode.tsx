import { NodeType, selectedNodeAtom } from "@/globalState/nodes";
import { Flex, Image, Text, useBoolean } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { motion } from "framer-motion";
type Props = { node: NodeType };

const PanelNode: React.FC<Props> = ({ node }) => {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [isDragging, setIsDragging] = useBoolean();
  const [position, setPosition] = useState({
    x: selectedNode?.panelX || 0,
    y: selectedNode?.panelY || 0,
  });

  console.log(position.x, position.y);

  return (
    <Flex
      justify="start"
      alignItems="center"
      gap={3}
      bg="gray.200"
      px={3}
      py={2}
      w={48}
      rounded={4}
      textColor="gray.700"
      fontWeight="bold"
      position="absolute"
      cursor="pointer"
      onClick={() => {
        setSelectedNode(node.id);
      }}
      style={{
        top: position.y,
        left: position.x,
      }}
      onMouseDown={() => setIsDragging.on()}
      onMouseUp={() => setIsDragging.off()}
      onMouseMove={(e) => {
        // console.log(e.movementX, e.movementY);
        if (isDragging) {
          setPosition((prev) => ({
            x: prev.x + e.movementX,
            y: prev.y + e.movementY,
          }));
        }
      }}
      onMouseLeave={() => setIsDragging.off()}
    >
      <Image src={node.iconUrl} boxSize="24px" alt="" />
      <Text>{node.label}</Text>
    </Flex>
  );
};

export default PanelNode;
