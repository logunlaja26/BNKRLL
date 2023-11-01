import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Session from "./pages/Session";
import LiveSession from "./pages/LiveSession";
import Login from "./pages/Login";
import Register from "./pages/Register";

// interface Session {
//   buyinValue: number;
// }

function App() {
  //const [session, setSession] = useState<Session>({} as Session);
  const [formData, setFormData] = useState<number>(0);

  const handleFormSubmit = (data: number) => {
    setFormData(data);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/session"
            element={<Session onFormSubmit={handleFormSubmit} />}
          />
          <Route
            path="/livesession"
            element={<LiveSession inputData={formData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
