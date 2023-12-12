import { Heading } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <Heading>This the main paige</Heading>
        <div>
          <h2>Data List</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
