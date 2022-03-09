import axios from "axios";
const SERVER_URL =
  "http://reviewtcamp.com";



  
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






