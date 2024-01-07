import NavBar from "../components/NavBar";
import { Center, Container } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    amt: 2400,
  },
  {
    name: "Feb",
    amt: 1398,
  },
  {
    name: "Mar",
    amt: 9800,
  },
  {
    name: "Apr",
    amt: 3908,
  },
  {
    name: "May",
    amt: 4800,
  },
  {
    name: "Jun",
    amt: 3800,
  },
  {
    name: "Jul",
    amt: 4300,
  },
];

const Progress = () => {
  return (
    <>
      <NavBar />
      <h3>Here are your accumulated results</h3>
      <Container>
        <Center>
          <LineChart width={600} height={500} data={data}>
            <YAxis />
            <XAxis dataKey="name" />
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </Center>
      </Container>
    </>
  );
};

export default Progress;
