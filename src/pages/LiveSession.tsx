import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import FormData from "../components/FormData";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  data: FormData;
}

const LiveSession = ({ data }: Props) => {
  const [session, setSession] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSessions = async () => {
      const controller = new AbortController();
      try {
        setLoading(true);
        const postResponse = await axios.post<FormData>(
          "https://52.15.68.122:8080/api/session/submit-session",
          data
        );
        console.log("Result from the POST response: ", postResponse);

        const response = await axios.get<FormData[]>(
          "https://52.15.68.122:8080/api/session/1",
          { signal: controller.signal }
        );
        setSession(response.data);
        console.log("Result from the GET response: ", response.data);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      } finally {
        setLoading(false);
      }
    };

    if (data) {
      fetchSessions();
    }
  }, [data]);

  return (
    <>
      <NavBar />
      {loading && <p>Loading...</p>}
      <VStack spacing={6} alignItems="center" p={4} bg="whitesmoke">
        <h1 style={{ color: "black" }}>Live Session Details</h1>
        <Container maxWidth="2xl" p={6} bg="white" borderRadius="md">
          <Grid templateColumns="1fr" templateRows="1fr 1fr 1fr 1fr" gap={4}>
            <Center>
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                bg="blue.500"
                width="100%"
                textAlign="center"
                fontWeight="bold">
                Buy-in: {session.map((s) => s.buyin)}
              </Box>
            </Center>
            <Center>
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                bg="blue.500"
                width="100%"
                textAlign="center"
                fontWeight="bold">
                Location: {session.map((s) => s.location)}
              </Box>
            </Center>
            <Center>
              <Box
                width="300px"
                p={4}
                mr={6}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                bg="blue.500"
                textAlign="center"
                fontWeight="bold">
                Payment Type: {session.map((s) => s.payType)}
              </Box>
              <Box
                width="300px"
                p={4}
                mr={6}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                textAlign="center"
                fontWeight="bold"
                bg="blue.500">
                Details
              </Box>
            </Center>
            <Box width="100%">
              <Center>
                <Textarea
                  placeholder="Enter text here..."
                  size="lg"
                  rows={4}
                  width="100%"
                  textAlign="center"
                  fontWeight="bold"
                />
              </Center>
            </Box>
          </Grid>
          <Center mt={4}>
            <VStack spacing={4}>
              <Button
                type="submit"
                colorScheme="blue"
                variant="solid"
                size="lg">
                Submit
              </Button>
              <Button
                type="submit"
                colorScheme="blue"
                variant="outline"
                size="lg">
                Cancel
              </Button>
            </VStack>
          </Center>
        </Container>
      </VStack>
    </>
  );
};

export default LiveSession;
