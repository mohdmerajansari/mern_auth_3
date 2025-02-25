import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import RefreshRouter from "./components/RefreshRouter";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const PrivateRouter = ({ element }) => {
    return authenticated ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <RefreshRouter setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRouter element={<Home />} />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
