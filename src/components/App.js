import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import GlobalStyle from "../styles/globalStyles";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import AddValue from "./AddValue";
import RemoveValue from "./RemoveValue";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/inicio" element={<LandingPage />} />
          <Route path="/entrada" element={<AddValue />} />
          <Route path="/saida" element={<RemoveValue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
