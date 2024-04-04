import {
  NodeType,
  selectedNodeAtom,
  updateNodeAtom,
} from "@/globalState/nodes";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArrowAnimation from "./ArrowAnimation";

type Props = { node: NodeType };

const PanelNode: React.FC<Props> = ({ node }) => {
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtom);
  const [position, setPosition] = useState({
    x: selectedNode?.panelX || 0,
    y: selectedNode?.panelY || 0,
  });
  const [, updateNode] = useAtom(updateNodeAtom);

  // node間の矢印をつなぐときに、Dragでの移動を無効化するため
  const [isDraggable, setIsDraggable] = useState(true);
  const onMouseDown = (event: React.MouseEvent) => {
    const target = event.target as Element;
    if (target.getAttribute("data-node-arrow-start") !== null) {
      console.log("start!");
      setIsDraggable(false);
    }
  };

  // ドラッグが終了した際に、globalStateのnodeの位置も更新する
  useEffect(() => {
    updateNode({ id: node.id, panelX: position.x, panelY: position.y });
  }, [node.id, position.x, position.y, updateNode]);

  return (
    <motion.div
      style={{
        top: position.y,
        left: position.x,
      }}
      drag={isDraggable}
      dragMomentum={false}
      onDragEnd={(event, info) => {
        setPosition((prev) => ({
          x: prev.x + info.offset.x,
          y: prev.y + info.offset.y,
        }));
      }}
      onMouseDown={onMouseDown}
      onMouseUp={() => setIsDraggable(true)}
      onMouseLeave={() => setIsDraggable(true)}
    >
      <Box
        bg="gray.200"
        w={48}
        rounded={4}
        textColor="gray.700"
        fontWeight="bold"
        position="absolute"
        cursor="pointer"
        onClick={() => {
          setSelectedNode(node.id);
        }}
        userSelect="none"
      >
        <Flex
          pl={3}
          pr={4}
          py={2}
          justify="start"
          alignItems="center"
          position="relative"
          gap={3}
        >
          <Image src={node.iconUrl} boxSize="24px" alt="" draggable="false" />
          <Text>{node.label}</Text>
          <Box
            bg="transparent"
            position="absolute"
            right={-1.5}
            p={2}
            data-node-arrow-start
            draggable="false"
          >
            <ArrowAnimation />
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default PanelNode;
