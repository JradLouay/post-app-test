import AxiosClient from "../../services/axios-client";

const getUsers = () => AxiosClient.get("/user");
const getTags = () => AxiosClient.get("/tag");
const getPosts = (page, limit = 10) =>
  AxiosClient.get(
    `/post?${page !== null ? "page=" + page : ""}&limit=${limit}`
  );

export { getUsers, getTags, getPosts };
