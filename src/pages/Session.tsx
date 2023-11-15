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
    console.log(formData);
    onFormSubmit(formData);
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
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                  {/* Actions */}
                </MenuButton>
                <MenuList>
                  <MenuItem>NO_LIMIT</MenuItem>
                  <MenuItem>POT_LIMIT</MenuItem>
                </MenuList>
              </Menu>
              {/* <Input type="text" placeholder="pay-type" /> */}
            </FormControl>
            <FormControl>
              {/* <FormLabel textAlign="center">game</FormLabel> */}
              <Input
                type="text"
                placeholder="game"
                textAlign="center"
                fontWeight="bold"
              />
            </FormControl>
            <FormControl>
              {/* <FormLabel textAlign="center">limit</FormLabel> */}
              <Input
                type="number"
                placeholder="limit"
                textAlign="center"
                fontWeight="bold"
              />
            </FormControl>
            <FormControl>
              {/* <FormLabel textAlign="center">stakes</FormLabel> */}
              <Input
                type="number"
                placeholder="stakes"
                textAlign="center"
                fontWeight="bold"
              />
            </FormControl>
            <FormControl isRequired>
              {/* <FormLabel textAlign="center">buy-in</FormLabel> */}
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
              {/* <FormLabel textAlign="center">location</FormLabel> */}
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
