import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";

interface Props {
  initialValue: number;
  onUpdate: (updatedValue: number) => void;
}

const BuyInBox = ({ initialValue, onUpdate }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = parseInt(e.target.value) || 0;
    setValue(updatedValue);
    onUpdate(updatedValue);
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      bg="blue.500"
      width="100%"
      textAlign="center"
      fontWeight="bold">
      Buy-in: $
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        size="sm"
        textAlign="center"
        fontWeight="bold"
        ml={1}
      />
    </Box>
  );
};

export default BuyInBox;
