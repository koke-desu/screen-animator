"use client";
import { focusNodeAtom } from "@/globalState/focusNode";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import TextInput from "../NodeOptions/TextInput";
import NumberInput from "../NodeOptions/NumberInput";
type Props = {};

const Inspector: React.FC<Props> = ({}) => {
  const [focusNode] = useAtom(focusNodeAtom);

  if (!focusNode)
    return (
      <Box
        className="h-full w-64 bg-gray-dark"
        h="100%"
        w={64}
        bg="gray.700"
      ></Box>
    );

  return (
    <Flex
      className="h-full w-64 bg-gray-dark"
      h="100%"
      w={64}
      bg="gray.700"
      align="center"
      flexDir="column"
    >
      <Text
        color="white"
        fontWeight="bold"
        textAlign="center"
        my={4}
        fontSize={20}
      >
        {focusNode.label}
      </Text>
      <Flex align="center" flexDir="column" flex={1} w="100%" gap={4}>
        <TextInput value="aaa" setValue={() => {}} label="テキスト" />
        <NumberInput value={100} setValue={() => {}} label="数値" />
      </Flex>
    </Flex>
  );
};

export default Inspector;
