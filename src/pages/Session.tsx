import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Session = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <VStack spacing={4} alignItems="center">
        <h1>Start a live session</h1>
        <form>
          <FormControl isRequired>
            <FormLabel>pay-type</FormLabel>
            <Input type="text" placeholder="pay-type" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>game</FormLabel>
            <Input type="text" placeholder="game" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>limit</FormLabel>
            <Input type="number" placeholder="limit" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>stakes</FormLabel>
            <Input type="number" placeholder="stakes" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>buy-in</FormLabel>
            <Input type="text" placeholder="buy-in" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>location</FormLabel>
            <Input type="tel" placeholder="location" />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            onClick={() => navigate("/livesession")}>
            Start Session
          </Button>
        </form>
      </VStack>
    </>
  );
};

export default Session;
