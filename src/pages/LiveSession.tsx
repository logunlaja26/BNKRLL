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

interface Props {
  data: FormData;
}

const LiveSession = ({ data }: Props) => {
  return (
    <>
      <NavBar />
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
                Buy-in: {data.buyin ? data.buyin : ""}
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
                Location: {data.location}
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
                Payment Type: {data.payType}
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
