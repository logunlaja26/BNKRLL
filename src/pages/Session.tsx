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
import { FormEvent, useEffect, useState } from "react";
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

  // useEffect(() => {
  const postData = async () => {
    try {
      const postResponse = await axios.post<FormData>(
        "http://localhost:8080/api/session/submit-session",
        formData
      );
      console.log("Result from the POST response: ", postResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //   if (formData) {
  //     fetchData();
  //   }
  // }, []);

  return (
    <>
      <NavBar />
      <VStack
        spacing={6}
        alignItems="center"
        p={4}
        bg="whitesmoke"
        h="100vh"
        justify="center">
        <Heading>Start a live session</Heading>
        <Container
          //maxWidth="2xs"
          maxWidth="md"
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md">
          <Center>
            <form onSubmit={handleSubmit}>
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
              <Button type="submit" colorScheme="blue" mt={4}>
                Start Session
              </Button>
            </form>
          </Center>
        </Container>
      </VStack>
    </>
  );
};

export default Session;
