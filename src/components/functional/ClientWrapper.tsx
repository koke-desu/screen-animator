"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const ClientWrapper: React.FC<Props> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
export default ClientWrapper;
