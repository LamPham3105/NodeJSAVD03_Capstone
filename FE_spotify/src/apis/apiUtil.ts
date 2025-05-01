import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});
api.interceptors.request.use((config: any) => {
  const userLocal = localStorage.getItem("user");
  const currentUser = userLocal ? JSON.parse(userLocal) : null;
  config.headers = {
    ...config.headers,
    token: currentUser ? currentUser.token : "",
    tokencybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgQWR2IDAzIiwiSGV0SGFuU3RyaW5nIjoiMjAvMDgvMjAyNSIsIkhldEhhblRpbWUiOiIxNzU1NjQ4MDAwMDAwIiwibmJmIjoxNzM1NTc4MDAwLCJleHAiOjE3NTU3OTU2MDB9.zhd-TJO0gE9p4RukPjsPXrnUxCFpIwyJx4Yw3fVyVas",
  };
  return config;
});
export default api;
