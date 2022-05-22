import AxiosClient from "./services/axios-client";

const getUsers = () => AxiosClient.get("/user");
const getTags = () => AxiosClient.get("/tag");

const getPosts = (page, selectedUser = null, selectedTags = [], limit = 10) => {
  //filtering posts by tag or user dynamically utilizing the same method
  let filter = "";
  if (selectedUser) {
    filter = `/user/${selectedUser.id}`;
  } else if (selectedTags.length) {
    filter = `/tag/${selectedTags[0].id}`; // because route doesn't support filtering by a union of tags unless we use a request for each tag
  }
  return AxiosClient.get(
    `${filter}/post?${page !== null ? "page=" + page : ""}&limit=${limit}`
  );
};

// pagination on this url didn't work
const getComments = (postId, page, limit = 10) =>
  AxiosClient.get(`/post/${postId}/comment`);
// pagination version:
// AxiosClient.get(
//   `/post/${postId}/comment?${
//     page !== null ? "page=" + page : ""
//   }&limit=${limit}&created=1
//   `
// );

const createComment = (comment, postId, ownerId = "60d0fe4f5311236168a109e6") =>
  AxiosClient.post(`/comment/create`, {
    message: comment, // string(length: 2-500)
    owner: ownerId, // string(User Id)
    post: postId, // string(Post Id)
  });
export { getUsers, getTags, getPosts, getComments, createComment };
