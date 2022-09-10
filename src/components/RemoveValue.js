import { Wrapper, Info, Bigbutton, PageTitle } from "../styles/sharedStyles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "./context/LoginContext";
import { debitValue, createHeader } from "../services/mywalletServices";

export default function RemoveValue() {
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

  function debitTransaction(e) {
    e.preventDefault();
    const promise = debitValue(form, createHeader(token));
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
      <form onSubmit={debitTransaction}>
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

          <Bigbutton type="submit">Salvar saída</Bigbutton>
        </Wrapper>
      </form>
    </Wrapper>
  );
}
