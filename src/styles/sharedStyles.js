import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 25px;
`;

const Info = styled.input`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px;

  ::placeholder {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: black;
    padding-left: 10px;
  }
`;

const Bigbutton = styled.button`
  width: 303px;
  height: 45px;
  background-color: #a328d6;
  border-radius: 4.63636px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20.976px;
  color: #ffffff;
  border: none;
`;
const SpanLink = styled.span`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  margin: 25px;
`;

export { Content, Wrapper, Logo, Info, Bigbutton, SpanLink };
