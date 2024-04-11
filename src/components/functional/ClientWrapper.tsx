"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import AddWindowEvent from "./AddWindowEvent";
import { useAtom } from "jotai";
import { attachHoverElementEffect } from "@/globalState/hoverElement";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
});

type Props = {
  children: React.ReactNode;
};

const ClientWrapper: React.FC<Props> = ({ children }) => {
  useAtom(attachHoverElementEffect);

  return (
    <ChakraProvider theme={theme}>
      <AddWindowEvent />
      {children}
    </ChakraProvider>
  );
};
export default ClientWrapper;
