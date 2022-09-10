import axios from "axios";

const BASE_URL = "http://localhost:5000";

function login(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function signup(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function createHeader(token) {
  const auth = token;
  const config = {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
  console.log(config);
  return config;
}

function getTransactions(config) {
  const promise = axios.get(`${BASE_URL}/transactions`, config);
  return promise;
}

function creditValue(body, config) {
  const promise = axios.post(`${BASE_URL}/credit`, body, config);
  return promise;
}

function debitValue(body, config) {
  const promise = axios.post(`${BASE_URL}/debit`, body, config);
  return promise;
}

export {
  login,
  signup,
  createHeader,
  getTransactions,
  creditValue,
  debitValue,
};
