import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      {/* <Center> */}
      <Grid bg="gray.200" p="30px">
        <Flex alignItems="center">
          <Stack spacing={4} direction="row">
            <Button colorScheme="blue" onClick={handleClick}>
              Login
            </Button>
            <Button colorScheme="blue" onClick={() => navigate("/home")}>
              Home
            </Button>
            <Button colorScheme="blue" onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button colorScheme="blue" onClick={() => navigate("/Session")}>
              Session
            </Button>
          </Stack>

          {/* <Heading>Page</Heading> */}

          <Spacer />
          <HStack spacing="20px">
            <Box bg="gray.400" p="10px">
              <text>johhdoe@yahoo.com</text>
            </Box>
            <Button colorScheme="blue">Logout</Button>
          </HStack>
        </Flex>
      </Grid>

      {/* </Center> */}
    </>
  );
};

export default NavBar;
