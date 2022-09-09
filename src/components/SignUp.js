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
import { signup } from "../services/mywalletServices";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  function sendSignUp(e) {
    e.preventDefault();
    const promise = signup(form);
    promise.then((res) => {
      console.log("FOI", res);
      navigate("/");
    });
    promise.catch(() => alert("Algo está errado, verifique suas informações!"));
  }

  return (
    <>
      <Content>
        <Wrapper>
          <Logo>MyWallet</Logo>

          <form onSubmit={sendSignUp}>
            <Wrapper>
              <Info
                type="text"
                placeholder="Nome"
                name="name"
                onChange={handleForm}
                value={form.name}
                required
              />
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
              <Info
                type="password"
                placeholder="Confirme a senha"
                name="confirm_password"
                onChange={handleForm}
                value={form.confirm_password}
                required
              />

              <Bigbutton type="submit">Cadastrar</Bigbutton>
            </Wrapper>
          </form>
          <SpanLink>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
          </SpanLink>
        </Wrapper>
      </Content>
    </>
  );
}
