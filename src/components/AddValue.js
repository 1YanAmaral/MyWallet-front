import {
  Wrapper,
  Logo,
  Info,
  Bigbutton,
  Content,
  SpanLink,
  PageTitle,
} from "../styles/sharedStyles";
import { useState, useContext } from "react";
import { creditValue, createHeader } from "../services/mywalletServices";
import { useNavigate } from "react-router-dom";
import LoginContext from "./context/LoginContext";

export default function AddValue() {
  const navigate = useNavigate();
  const { token } = useContext(LoginContext);
  const [form, setForm] = useState({
    amount: "",
    description: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  function creditTransaction(e) {
    e.preventDefault();
    const promise = creditValue(form, createHeader(token));
    promise
      .then((res) => {
        navigate("/inicio");
      })
      .catch((res) => {
        //alert(res.response.data.message);
        alert("Algo está errado, verifique suas informações!");
      });
  }

  return (
    <Wrapper>
      <PageTitle>Nova entrada</PageTitle>
      <form onSubmit={creditTransaction}>
        <Wrapper>
          <Info
            type="number"
            placeholder="Valor"
            name="amount"
            onChange={handleForm}
            value={form.amount}
            required
          />
          <Info
            type="text"
            placeholder="Descrição"
            name="description"
            onChange={handleForm}
            value={form.description}
            required
          />

          <Bigbutton type="submit">Salvar entrada</Bigbutton>
        </Wrapper>
      </form>
    </Wrapper>
  );
}
