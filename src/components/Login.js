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
import { login } from "../services/mywalletServices";

export default function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
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

  function sendLogin(e) {
    e.preventDefault();
    const promise = login(form);
    promise
      .then((res) => {
        //setUser(res.data);
        setToken(res.data);
        console.log(res.data);
        navigate("/inicio");
      })
      .catch((res) => {
        //alert(res.response.data.message);
        alert("Algo está errado, verifique suas informações!");
      });
  }
  return (
    <>
      <Content>
        <Wrapper>
          <Logo>MyWallet</Logo>

          <form onSubmit={sendLogin}>
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
          <SpanLink>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
          </SpanLink>
        </Wrapper>
      </Content>
    </>
  );
}
