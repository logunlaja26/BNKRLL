import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import pageroutes from "./data/pageroutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is the base home default route */}
        <Route index element={<Home />} />
        {pageroutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
