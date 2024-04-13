import React from "react";
import { NodeOptionBaseType } from ".";
import { Box, Input, Text } from "@chakra-ui/react";
type Props = {
  label: string;
} & NodeOptionBaseType<string>;

const TextInput: React.FC<Props> = ({ label }) => {
  return (
    <Box>
      <Text color="white">{label}</Text>
      <Input type="text" color="white" borderWidth={2} borderColor="gray.500" />
    </Box>
  );
};

export default TextInput;
