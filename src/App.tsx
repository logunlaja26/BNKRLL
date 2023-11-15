import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Session from "./pages/Session";
import LiveSession from "./pages/LiveSession";
import Login from "./pages/Login";
import Register from "./pages/Register";

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

function App() {
  const [dataList, setDataList] = useState<FormData>({} as FormData);
  const [serveList, setServeList] = useState<FormData[]>([]);

  const handleFormSubmit = (formData: FormData) => {
    setDataList(formData);
    setServeList([...serveList, formData]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/home" element={<Home dataDb={serveList} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
