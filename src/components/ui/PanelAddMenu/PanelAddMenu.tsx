"use client";
import { addNodeAtom, NodeType } from "@/globalState/nodes";
import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";

type MenuItemType = {
  label: string;
  icon: React.JSX.Element;
  initialNode: Omit<NodeType, "id">;
};

type Props = {
  title: string;
  items: MenuItemType[];
};

const PanelAddMenu: React.FC<Props> = ({ title, items }) => {
  const [, addNode] = useAtom(addNodeAtom);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<AddIcon />}
        variant="outline"
        isRound
        w={10}
        h={10}
        bg="gray.600"
        border="none"
        color="white"
        position="absolute"
        left={2}
        bottom={2}
      />
      <MenuList>
        <Text py={1} px={4} fontWeight="bold" textAlign="center">
          {title}
        </Text>
        <MenuDivider />
        {items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              icon={item.icon}
              onClick={() => {
                addNode(item.initialNode);
              }}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export default PanelAddMenu;
