import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }

  return (
    <HStack spacing={6} direction="row" align="center">
      <Button onClick={handleClick} colorScheme="whiteAlpha">
        Login
      </Button>
      <Button onClick={() => navigate("/register")} colorScheme="blue">
        Register
      </Button>
    </HStack>
  );
};

export default NavBar;
