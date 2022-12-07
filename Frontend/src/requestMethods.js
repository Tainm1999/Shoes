import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODIxYWI2MWRlNDA3Nzk0ZDVmYzVhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDMzMjUyOSwiZXhwIjoxNjcwNTkxNzI5fQ.o5QXt8HK1Uoc8qyRfDjnFoay6GgusUt_zUn1iQKkyZU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
