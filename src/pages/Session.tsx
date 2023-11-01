import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

interface Props {
  onFormSubmit: (data: number) => void;
}

const Session = ({ onFormSubmit }: Props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "testing 1 ..",
    email: "testing 2...",
    message: "testing 3...",
    buyin: 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //console.log("submitted...", formData.buyin);
    onFormSubmit(formData.buyin);
    navigate("/livesession");
  };

  return (
    <>
      <NavBar />
      <VStack spacing={4} alignItems="center">
        <h1>Start a live session</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>pay-type</FormLabel>
            <Input type="text" placeholder="pay-type" />
          </FormControl>
          <FormControl>
            <FormLabel>game</FormLabel>
            <Input type="text" placeholder="game" />
          </FormControl>
          <FormControl>
            <FormLabel>limit</FormLabel>
            <Input type="number" placeholder="limit" />
          </FormControl>
          <FormControl>
            <FormLabel>stakes</FormLabel>
            <Input type="number" placeholder="stakes" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>buy-in</FormLabel>
            <Input
              type="number"
              placeholder="buy-in"
              value={formData.buyin}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  buyin: parseInt(e.target.value),
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>location</FormLabel>
            <Input type="tel" placeholder="location" />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Start Session
          </Button>
        </form>
      </VStack>
    </>
  );
};

export default Session;
