import axios from "axios";
const MOCK_SERVER_URL =
  "https://85870091-43be-41e2-b0cc-6aed2f186087.mock.pstmn.io";

export const fetchBoardById = async (boardId) => {
  const response = await axios.get(`${MOCK_SERVER_URL}/board/${boardId}`)
    .then(response => response.data);
  return response;
}

export const fetchPost = async (postId) => {
  const postResponse = await axios.get(`${MOCK_SERVER_URL}/${postId}`)
  .then(postResponse => postResponse.data)
return postResponse}