import {
  Container,
  VStack,
  FormControl,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Center,
  Heading,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormData from "../components/FormData";
import axios from "axios";

interface Props {
  onFormSubmit: (data: FormData) => void;
}

const Session = ({ onFormSubmit }: Props) => {
  const navigate = useNavigate();
  const generateRandomUuid = (): string => {
    return uuidv4();
  };

  const [formData, setFormData] = useState<FormData>({
    sessionId: generateRandomUuid(),
    name: "John",
    email: "johndoe@gmail.com",
    limit: "NO_LIMIT",
    gameType: "TEXAS_HOLD_EM",
    payType: "CASH",
    location: "",
    buyin: NaN,
    gameProfit: 1000,
    message: "any additional message...",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData) {
      postData();
    }
    onFormSubmit(formData);
    navigate("/livesession");
  };

  const postData = async () => {
    try {
      if (formData && formData.buyin && formData.location) {
        const postResponse = await axios.post<FormData>(
          "https://www.bnkrll-service.cloud/api/session/submit-session",
          formData
        );
        console.log("Result from the POST response: ", postResponse);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Container
        maxWidth="md"
        p={8}
        bg="white"
        borderRadius="md"
        boxShadow="md">
        <Center>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} width="100%">
              <Heading size="lg" mb={6}>
                Start a live session
              </Heading>

              <FormControl>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<BsChevronDown />}
                    variant="outline"
                    size="md"
                    width="100%"
                    colorScheme="blue">
                    PAY
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() =>
                        setFormData({
                          ...formData,
                          payType: "CASH",
                        })
                      }>
                      CASH
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        setFormData({
                          ...formData,
                          payType: "TOURNEY",
                        })
                      }>
                      TOURNEY
                    </MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
              <FormControl>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<BsChevronDown />}
                    variant="outline"
                    size="md"
                    width="100%"
                    colorScheme="blue">
                    GAME
                  </MenuButton>
                  <MenuList>
                    <MenuItem>TEXAS_HOLD_EM</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Limit"
                  textAlign="center"
                  fontWeight="bold"
                />
              </FormControl>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Stakes"
                  textAlign="center"
                  fontWeight="bold"
                />
              </FormControl>
              <FormControl>
                <Spacer />
              </FormControl>
              <FormControl>
                <Input
                  textAlign="center"
                  type="number"
                  inputMode="numeric"
                  placeholder="$Buy-in Amount"
                  fontWeight="bold"
                  p={2}
                  value={formData.buyin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      buyin: parseInt(e.target.value),
                    })
                  }></Input>
              </FormControl>
              <FormControl>
                <Input
                  fontWeight="bold"
                  textAlign="center"
                  type="tel"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" mt={4} width="full">
                Start Session
              </Button>
            </VStack>
          </form>
        </Center>
      </Container>
    </>
  );
};

export default Session;
