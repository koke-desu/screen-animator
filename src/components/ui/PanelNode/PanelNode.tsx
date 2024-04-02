import {
  NodeType,
  selectedNodeAtom,
  updateNodeAtom,
} from "@/globalState/nodes";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
type Props = { node: NodeType };

const PanelNode: React.FC<Props> = ({ node }) => {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [position, setPosition] = useState({
    x: selectedNode?.panelX || 0,
    y: selectedNode?.panelY || 0,
  });
  const [, updateNode] = useAtom(updateNodeAtom);

  useEffect(() => {
    updateNode({ id: node.id, panelX: position.x, panelY: position.y });
  }, [node.id, position.x, position.y, updateNode]);

  return (
    <motion.div
      style={{
        top: position.y,
        left: position.x,
      }}
      drag
      dragMomentum={false}
      onDragEnd={(event, info) => {
        setPosition((prev) => ({
          x: prev.x + info.offset.x,
          y: prev.y + info.offset.y,
        }));
      }}
    >
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
      >
        <Image src={node.iconUrl} boxSize="24px" alt="" />
        <Text>{node.label}</Text>
      </Flex>
    </motion.div>
  );
};

export default PanelNode;
