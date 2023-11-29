import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { FormEvent, useState } from "react";
import axios from "axios";
import FormData from "../components/FormData";

interface Props {
  onFormSubmit: (data: FormData) => void;
}

const Session = ({ onFormSubmit }: Props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "John",
    email: "johndoe@gmail.com",
    limit: "NO_LIMIT",
    gameType: "TEXAS_HOLD_EM",
    payType: "CASH",
    location: "",
    buyin: 0,
    gameProfit: 1000,
    message: "any additional message...",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onFormSubmit(formData);
    axios.post<FormData, { message: string }>(
      "http://localhost:8080/api/session/submit-session",
      formData
    );
    navigate("/livesession");
  };

  return (
    <>
      <NavBar />
      <VStack spacing={4} alignItems="center">
        <h1>Start a live session</h1>
        <Container maxWidth="2xs" py="50px">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel textAlign="center" fontWeight="bold">
                pay-type
              </FormLabel>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<BsChevronDown />}></MenuButton>
                <MenuList>
                  <MenuItem>NO_LIMIT</MenuItem>
                  <MenuItem>POT_LIMIT</MenuItem>
                </MenuList>
              </Menu>
            </FormControl>
            <FormControl>
              <Input
                type="text"
                placeholder="game"
                textAlign="center"
                fontWeight="bold"
              />
            </FormControl>
            <FormControl>
              <Input
                type="number"
                placeholder="limit"
                textAlign="center"
                fontWeight="bold"
              />
            </FormControl>
            <FormControl>
              <Input
                type="number"
                placeholder="stakes"
                textAlign="center"
                fontWeight="bold"
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                fontWeight="bold"
                textAlign="center"
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
              <Input
                fontWeight="bold"
                textAlign="center"
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
            <Button type="submit" colorScheme="blue">
              Start Session
            </Button>
          </form>
        </Container>
      </VStack>
    </>
  );
};

export default Session;
