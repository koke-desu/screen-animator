"use client";
import { focusNodeAtom } from "@/globalState/focusNode";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import TextInput from "../NodeOptions/TextInput";
import NumberInput from "../NodeOptions/NumberInput";
import { OptionType } from "../NodeOptions";
import { updateNodeAtom } from "@/globalState/nodes";
type Props = {};

const Inspector: React.FC<Props> = ({}) => {
  const [focusNode] = useAtom(focusNodeAtom);
  const [, updateNode] = useAtom(updateNodeAtom);

  if (!focusNode)
    return (
      <Box
        className="h-full w-64 bg-gray-dark"
        h="100%"
        w={64}
        bg="gray.700"
      ></Box>
    );

  const options = focusNode.options;
  const updateOptions = (update: { [key: string]: string | number }) => {
    const value = options
      .map((option) => {
        if (option.type === "Text") {
          const val = option as OptionType<"Text">;
          return {
            ...val,
            value: update[val.name] || val.value,
          };
        } else if (option.type === "Number") {
          const val = option as OptionType<"Number">;
          return {
            ...val,
            value: update[val.name] || val.value,
          };
        }
      })
      .filter((option) => option !== undefined) as OptionType<
      "Text" | "Number"
    >[];

    updateNode({
      id: focusNode.id,
      options: value,
    });
  };

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
        {options.map((option, index) => {
          if (option.type === "Text") {
            const val = option as OptionType<"Text">;
            return (
              <TextInput
                key={index}
                {...val}
                setValue={(value) => {
                  updateOptions({ [val.name]: value });
                }}
              />
            );
          } else if (option.type === "Number") {
            const val = option as OptionType<"Number">;
            return (
              <NumberInput
                key={index}
                {...val}
                setValue={(value) => {
                  updateOptions({ [val.name]: value });
                }}
              />
            );
          }
        })}
      </Flex>
    </Flex>
  );
};

export default Inspector;
