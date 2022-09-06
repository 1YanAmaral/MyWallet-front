import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import GlobalStyle from "../styles/globalStyles";
import SignUp from "./SignUp";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
