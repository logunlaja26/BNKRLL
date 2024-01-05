import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Spacer,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <>
      <Grid bg="blue.500" p="3">
        <Flex alignItems="center">
          <Stack spacing={4} direction="row">
            {/* <Button
              colorScheme="whiteAlpha"
              variant="ghost"
              onClick={handleLoginClick}
              _hover={{ color: "white" }}>
              Login
            </Button> */}
            {/* <Button
              colorScheme="whiteAlpha"
              variant="ghost"
              onClick={() => navigate("/home")}
              _hover={{ color: "white" }}>
              Home
            </Button> */}
            {/* <Button
              colorScheme="whiteAlpha"
              variant="ghost"
              onClick={() => navigate("/register")}
              _hover={{ color: "white" }}>
              Register
            </Button> */}
            <Button
              colorScheme="whiteAlpha"
              variant="ghost"
              onClick={() => navigate("/Session")}
              _hover={{ color: "white" }}>
              Session
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="ghost"
              onClick={() => navigate("/progress")}
              _hover={{ color: "white" }}>
              Progress
            </Button>
          </Stack>

          <Spacer />

          <HStack spacing="20px">
            <Box
              bg="blue.600"
              p="10px"
              borderRadius="md"
              _hover={{ cursor: "pointer" }}>
              <Text color="white">johhdoe@yahoo.com</Text>
            </Box>
            <IconButton
              colorScheme="whiteAlpha"
              variant="ghost"
              aria-label="Logout"
              icon={<FaSignOutAlt />}
              onClick={() => console.log("Logout clicked")}
              _hover={{ color: "white" }}
            />
          </HStack>
        </Flex>
      </Grid>
    </>
  );
};

export default NavBar;
