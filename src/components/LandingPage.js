import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Wrapper,
  WrapperLine,
  PageTitle,
  Content,
} from "../styles/sharedStyles";
import UserContext from "./context/UserContext";
import LoginContext from "./context/LoginContext";
import { getTransactions, createHeader } from "../services/mywalletServices";

export default function LandingPage() {
  const { user } = useContext(UserContext);
  const { token } = useContext(LoginContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const promise = getTransactions(createHeader(token));
    promise
      .then((res) => {
        setTransactions(res.data);
        console.log(token);
        console.log(res.data);
      })
      .catch(() => alert("!"));
  }, []);

  return (
    <Wrapper>
      <PageTitle>
        Olá, {user.name}
        <Wrapper>
          <ion-icon name="log-out-outline"></ion-icon>
        </Wrapper>
      </PageTitle>
      <Transactions>
        {transactions.length !== 0 ? (
          transactions.map((value) => (
            <EntryLine>
              <EntryDate>{value.date}</EntryDate>
              <EntryType>{value.description}</EntryType>
              {value.type === "credit" ? (
                <PositiveEntryValue>{value.amount}</PositiveEntryValue>
              ) : (
                <NegativeEntryValue>{value.amount}</NegativeEntryValue>
              )}
            </EntryLine>
          ))
        ) : (
          <Empty>
            <EmptyMsg>Não há registros de entrada ou saída</EmptyMsg>
          </Empty>
        )}
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

const PositiveEntryValue = styled.div`
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #03ac00;
  position: fixed;
  right: 7vw;
`;

const NegativeEntryValue = styled.div`
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #03ac00;
  position: fixed;
  right: 7vw;
`;

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 445px;
`;
const EmptyMsg = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #868686;
  font-size: 20px;
  width: 50vw;
`;
