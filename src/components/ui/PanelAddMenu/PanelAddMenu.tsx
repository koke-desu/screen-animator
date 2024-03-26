"use client";
import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";

type MenuItemType = {
  label: string;
  icon: React.JSX.Element;
};

type Props = {
  title: string;
  items: MenuItemType[];
};

const PanelAddMenu: React.FC<Props> = ({ title, items }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<AddIcon />}
        size="lg"
        variant="outline"
        isRound
        w={12}
        h={12}
        bg="gray.600"
        border="none"
        color="white"
      />
      <MenuList>
        {items.map((item, index) => {
          return (
            <MenuItem key={index} icon={item.icon}>
              {item.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export default PanelAddMenu;
