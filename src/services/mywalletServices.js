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

export { login, signup, createHeader };
