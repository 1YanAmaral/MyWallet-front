import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import GlobalStyle from "../styles/globalStyles";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
