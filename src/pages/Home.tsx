import FormData from "../components/FormData";
import Session from "./Session";

const Home = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted with data:", formData);
  };
  return (
    <>
      <Session onFormSubmit={handleFormSubmit} />
    </>
  );
};

export default Home;
