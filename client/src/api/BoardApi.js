import axios from "axios";
const SERVER_URL =
  "http://c7ca5631-5216-45b9-b7c4-8ce1e76cb0da.mock.pstmn.io";



  
export const fetchBoardById = async (boardId) => {

  const response = await axios.get(`${SERVER_URL}/board/${boardId}`)
    .then(response => response.data);
  return response;
}

export const fetchPost = async (boardId, postId) => {
  const postResponse = await axios.get(`${SERVER_URL}/${boardId}/${postId}`)
  .then(postResponse => postResponse.data)

return postResponse}

export const fetchComment = async (boardId, postId, commentId) => {
  const commentResponse = await axios.get(`${SERVER_URL}/${boardId}/${postId}/${commentId}`)
  .then(commentResponse => commentResponse.data)
return commentResponse }






