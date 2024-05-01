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
  Image,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";

export type MenuItemType = {
  label: string;
  iconUrl: string;
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
              icon={<Image src={item.iconUrl} boxSize="24px" alt="" />}
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
