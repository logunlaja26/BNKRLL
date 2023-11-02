import { Box, Button, Center, Grid, Text, Textarea } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

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
  data: FormData;
}

const LiveSession = ({ data }: Props) => {
  return (
    <>
      <NavBar />
      <Grid templateColumns="1fr" templateRows="1fr 1fr 1fr" height="100vh">
        <Center>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="white">
            {data.buyin}
            {/* Place your data display components or content here */}
          </Box>
        </Center>
        <Center>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="blue">
            <Text>{data.location}</Text>
            {/* Place your data display components or content here */}
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
            bg="blue">
            <Text>notes</Text>
            {/* Place your data display components or content here */}
          </Box>
          <Box
            width="300px"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="blue">
            <Text>break</Text>
            {/* Place your data display components or content here */}
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
      <Button type="submit" colorScheme="teal">
        end session
      </Button>
    </>
  );
};

export default LiveSession;