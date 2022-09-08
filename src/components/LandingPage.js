import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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
      <Transactions>
        <EntryLine>
          <EntryDate>30/11</EntryDate>
          <EntryType>Almoço</EntryType>
          <EntryValue>39,90</EntryValue>
        </EntryLine>
        <EntryLine>
          <EntryDate>30/11</EntryDate>
          <EntryType>Almoço</EntryType>
          <EntryValue>39,90</EntryValue>
        </EntryLine>
        <EntryLine>
          <EntryDate>30/11</EntryDate>
          <EntryType>Almoço</EntryType>
          <EntryValue>39,90</EntryValue>
        </EntryLine>
        <EntryLine>
          <EntryDate>30/11</EntryDate>
          <EntryType>Almoço</EntryType>
          <EntryValue>39,90</EntryValue>
        </EntryLine>
      </Transactions>
      <WrapperLine>
        <EntryButton>
          <ion-icon name="add-circle-outline"></ion-icon>
          <Link to="/entrada">
            <EntryType>Nova entrada</EntryType>
          </Link>
        </EntryButton>
        <EntryButton>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <Link to="/saida">
            <EntryType>Nova saida</EntryType>
          </Link>
        </EntryButton>
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
  padding-top: 15px;
`;

const EntryButton = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  padding: 10px;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

const EntryType = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30px;
  line-height: 20px;
`;

const EntryLine = styled.div`
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin: 5px auto;
  width: 80vw;
  position: relative;
`;

const EntryDate = styled.div`
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #c6c6c6;
  margin-right: 7px;
`;

const EntryValue = styled.div`
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #03ac00;
  position: fixed;
  right: 7vw;
`;
