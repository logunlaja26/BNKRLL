import { Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <Heading>This the main paige</Heading>
      </div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      <Grid
        templateColumns="1fr 1fr"
        gap={4}
        justifyContent="center"
        alignItems="center"
        height="100vh">
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </>
  );
};

export default Home;
