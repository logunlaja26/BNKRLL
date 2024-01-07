import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Session from "./pages/Session";
import LiveSession from "./pages/LiveSession";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FormData from "./components/FormData";
import Progress from "./pages/Progress";

function App() {
  const [dataList, setDataList] = useState<FormData>({} as FormData);

  const handleFormSubmit = async (formData: FormData) => {
    setDataList(formData);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/livesession"
            element={<LiveSession data={dataList} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/progress" element={<Progress />} />
          <Route
            path="/session"
            element={<Session onFormSubmit={handleFormSubmit} />}
          />
          <Route
            path="/livesession"
            element={<LiveSession data={dataList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
