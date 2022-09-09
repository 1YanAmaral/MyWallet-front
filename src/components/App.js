import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import GlobalStyle from "../styles/globalStyles";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import AddValue from "./AddValue";
import RemoveValue from "./RemoveValue";
import UserContext from "./context/UserContext";
import LoginContext from "./context/LoginContext";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <LoginContext.Provider value={{ token, setToken }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/inicio" element={<LandingPage />} />
              <Route path="/entrada" element={<AddValue />} />
              <Route path="/saida" element={<RemoveValue />} />
            </Routes>
          </UserContext.Provider>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  );
}
