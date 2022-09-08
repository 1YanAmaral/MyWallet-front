import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import GlobalStyle from "../styles/globalStyles";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/inicio" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
