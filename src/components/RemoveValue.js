import {
  Wrapper,
  Logo,
  Info,
  Bigbutton,
  Content,
  SpanLink,
  PageTitle,
} from "../styles/sharedStyles";
import { useState } from "react";

export default function AddValue() {
  const [form, setForm] = useState({
    amount: "",
    type: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  return (
    <Wrapper>
      <PageTitle>Nova saída</PageTitle>
      <form onSubmit={() => {}}>
        <Wrapper>
          <Info
            type="text"
            placeholder="Valor"
            name="amount"
            onChange={handleForm}
            value={form.amount}
            required
          />
          <Info
            type="text"
            placeholder="Descrição"
            name="type"
            onChange={handleForm}
            value={form.type}
            required
          />

          <Bigbutton type="submit">Salvar saída</Bigbutton>
        </Wrapper>
      </form>
    </Wrapper>
  );
}
