import axios from "axios";
const MOCK_SERVER_URL =
  "https://262c4566-ee19-410c-b221-ac4bba3d91dd.mock.pstmn.io";



  
export const fetchBoardById = async (boardId) => {
  const response = await axios.get(`${MOCK_SERVER_URL}/board/${boardId}`)
    .then(response => response.data);
  return response;
}
 
// fetchPost 함수는 비동기 함수이고, boardId와 postId 인자 두개를 받는다.
export const fetchPost = async (boardId, postId) => {
  
  // axios.get(url)을 호출하고, 
  // 응답값을 postResponse로 받아서(then 부분) 
  // postResponse.data를 return한다.
  // - url : ${MOCK_SERVER_URL}/${boardId}/${postId}

  const postResponse = await axios.get(`${MOCK_SERVER_URL}/${boardId}/${postId}`)
  .then(postResponse => postResponse.data)

return postResponse}






