import { Button, HStack, Stack } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack spacing={6} direction="row" align="center">
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
    </HStack>
  );
};

export default NavBar;
