import React from "react";
import { NodeOptionBaseType } from ".";
import { Box, Input, Text } from "@chakra-ui/react";
type Props = {
  label: string;
  max?: number;
  min?: number;
} & NodeOptionBaseType<number>;

const NumberInput: React.FC<Props> = ({ label, max, min }) => {
  return (
    <Box>
      <Text color="white">{label}</Text>
      <Input
        type="number"
        color="white"
        borderWidth={2}
        borderColor="gray.500"
        max={max}
        min={min}
      />
    </Box>
  );
};

export default NumberInput;
