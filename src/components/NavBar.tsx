import {
  Box,
  Button,
  ButtonGroup,
  Center,
  HStack,
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
      <Center>
        <Stack spacing={4} direction="row">
          <Button onClick={handleClick}>Login</Button>
          <Button onClick={() => navigate("/register")}>Register</Button>
          <Button onClick={() => navigate("/Session")}>Session</Button>
        </Stack>
      </Center>
    </>
  );
};

export default NavBar;
