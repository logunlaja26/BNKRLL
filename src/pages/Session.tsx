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

interface FormData {
  name: string;
  email: string;
  limit: string[];
  payType: string[];
  gameType: string;
  location: string;
  buyin: number;
  profit: number;
  message: string;
}

interface Props {
  onFormSubmit: (data: FormData) => void;
}

const Session = ({ onFormSubmit }: Props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "jeff",
    email: "logunlaja26@gmail.com",
    limit: ["NO_LIMIT", "POT_LIMIT"],
    gameType: "Texas_Hold_em",
    payType: ["CASH", "TOURNEY"],
    location: "",
    buyin: 0,
    profit: 0,
    message: "testing 3...",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //console.log("submitted...", formData.buyin);
    onFormSubmit(formData);
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
            <Input
              type="tel"
              placeholder="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  location: e.target.value,
                })
              }
            />
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
