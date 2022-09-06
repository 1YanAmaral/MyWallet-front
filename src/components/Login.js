import {
  Wrapper,
  Logo,
  Info,
  Bigbutton,
  Content,
  SpanLink,
} from "../styles/sharedStyles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  /* function sendLogin(e) {
    e.preventDefault();

    //const promise = signup(form);
    promise.then((res) => {
      console.log("FOI", res);

      navigate("/");
    });
    promise.catch(() => alert("Algo está errado, verifique suas informações!"));
  } */
  return (
    <>
      <Content>
        <Wrapper>
          <Logo>MyWallet</Logo>

          <form onSubmit={() => {}}>
            <Wrapper>
              <Info
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleForm}
                value={form.email}
                required
              />
              <Info
                type="password"
                placeholder="Senha"
                name="password"
                onChange={handleForm}
                value={form.password}
                required
              />

              <Bigbutton type="submit">Entrar</Bigbutton>
            </Wrapper>
          </form>
          <SpanLink>Primeira vez? Cadastre-se!</SpanLink>
        </Wrapper>
      </Content>
    </>
  );
}
