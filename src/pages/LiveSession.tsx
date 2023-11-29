import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Text,
  Textarea,
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
      <Container>
        <Grid templateColumns="1fr" templateRows="1fr 1fr 1fr" height="100vh">
          <Center>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              bg="grey">
              {data.buyin}
            </Box>
          </Center>
          <Center>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              bg="grey">
              <Text>{data.location}</Text>
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
              bg="grey">
              <Text>{data.payType}</Text>
            </Box>
            <Box
              width="300px"
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              bg="grey">
              <Text>break</Text>
            </Box>
          </Center>
          <Box>
            <Center>
              <Textarea
                placeholder="Enter text here..."
                size="lg" // You can adjust the size if needed
                rows={4} // Specify the number of visible rows
              />
            </Center>
          </Box>
        </Grid>
        <Button type="submit" colorScheme="blue">
          end session
        </Button>
      </Container>
    </>
  );
};

export default LiveSession;
