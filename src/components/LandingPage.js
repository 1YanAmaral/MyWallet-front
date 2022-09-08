import styled from "styled-components";
import {
  Wrapper,
  WrapperLine,
  Logo,
  Info,
  Bigbutton,
  Content,
  SpanLink,
  PageTitle,
} from "../styles/sharedStyles";

export default function LandingPage() {
  return (
    <Wrapper>
      <PageTitle>
        Olá, Fulano
        <Wrapper>
          <ion-icon name="log-out-outline"></ion-icon>
        </Wrapper>
      </PageTitle>
      <Transactions></Transactions>
      <WrapperLine>
        <Entry>
          <ion-icon name="add-circle-outline"></ion-icon>Nova Entrada
        </Entry>
        <Entry>
          <ion-icon name="remove-circle-outline"></ion-icon>Nova Saída
        </Entry>
      </WrapperLine>
    </Wrapper>
  );
}

const Transactions = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 445px;
  background-color: white;
  border-radius: 5px;
`;

const Entry = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  padding: 5px;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;
