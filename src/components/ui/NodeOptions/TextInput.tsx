import React from "react";
import { NodeOptionBaseType } from ".";
import { Box, Input, Text } from "@chakra-ui/react";
type Props = {
  label: string;
} & NodeOptionBaseType<string>;

const TextInput: React.FC<Props> = ({ label, value, setValue }) => {
  return (
    <Box>
      <Text color="white">{label}</Text>
      <Input
        type="text"
        color="white"
        borderWidth={2}
        borderColor="gray.500"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Box>
  );
};

export default TextInput;
