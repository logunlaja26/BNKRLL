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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
  Center,
  Heading,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import FormData from "../components/FormData";

interface Props {
  onFormSubmit: (data: FormData) => void;
}

const Session = ({ onFormSubmit }: Props) => {
  const navigate = useNavigate();
  const format = (val: number) => `$` + val;
  const parse = (val: number) => {
    const stringValue = val.toString();
    return stringValue.replace(/^\$/, "");
  };

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
    buyin: 0,
    gameProfit: 1000,
    message: "any additional message...",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onFormSubmit(formData);
    console.log("THis is the uuid...", formData.sessionId);
    axios.post<FormData, { message: string }>(
      "http://localhost:8080/api/session/submit-session",
      formData
    );
    navigate("/livesession");
  };

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
                <NumberInput
                  textAlign="center"
                  inputMode="numeric"
                  onChange={(valueString) =>
                    setFormData({
                      ...formData,
                      buyin: parse(valueString),
                    })
                  }
                  value={format(formData.buyin)}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
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
