import { Heading } from "@chakra-ui/react";
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
  dataDb: FormData[];
}

const Home = ({ dataDb }: Props) => {
  return (
    <>
      <NavBar />
      <div>
        <Heading>This the main paige</Heading>
        {/* <Session onFormSubmit={handleSubmit} /> */}
        <div>
          <h2>Data List</h2>
          <ul>
            {dataDb.map((data, index) => (
              <li key={index}>
                Name: {data.name}
                Email: {data.email}
                buyin: {data.buyin}
                Limit : {data.limit}
                gameType : {data.gameType}
                payType: {data.payType}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
