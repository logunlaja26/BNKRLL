import { Box, Button, Center, Grid, Text, Textarea } from "@chakra-ui/react";

const LiveSession = () => {
  return (
    <>
      <Grid templateColumns="1fr" templateRows="1fr 1fr 1fr" height="100vh">
        <Center>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="blue">
            <Text>Data Display Area 1</Text>
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
            <Text>Data Display Area 2</Text>
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
