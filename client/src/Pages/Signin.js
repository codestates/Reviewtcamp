import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Signin(props) {
  // 로그인 정보 상태 저장
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  // 에러 메시지 상태 저장
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  // 로그인을 누를 경우 POST 요청
  const handleSignin = () => {
    // 이메일, 로그인을 입력하지 않은 경우 에러 메시지
    const { email, password } = userInfo;
    if (!email) {
      setErrorMessage("아이디를 입력해주세요");
    } else if (!password) {
      setErrorMessage("비밀번호를 입력해주세요");
    } else {
      // POST 보냈으나 아이디 또는 비밀번호를 잘못 입력한 경우
      // console.log("작동중?");
      axios
        .post("https://reviewtcamp.com/signin", {
          email: email,
          password: password,
        })
        .then((res) => {
          // ! 로그인 시 응답으로 useremail 보내주고있나? 응답에 없는거 같은데?
          if (res.data.token === undefined) {
            setErrorMessage("아이디 또는 비밀번호를 잘못 입력했습니다.");
          } else {
            props.loginHandler(res.data);
            // ! 로그인 완료 시 -> 메인 게시판 URI가 어딨지? -> 민주씨 메인 게시판으로 이동하기
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <center>
      <h2>로그인</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          <div>
            <label htmlFor="email">이메일</label>
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={handleInputValue("email")}
          ></input>
        </p>
        <p>
          <div>
            <label htmlFor="password">비밀번호</label>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputValue("password")}
          ></input>
        </p>
        <div>{errorMessage}</div>
        <button type="reset">취소</button>
        {/*취소 버튼은 최근에는 만들지 않는추세. 잘못누를수도*/}
        <button type="submit" onClick={handleSignin}>
          로그인
        </button>
        <div>or</div>
        <div>
          <Link to="/signup">아직 아이디가 없으신가요?</Link>
        </div>
      </form>
    </center>
  );
}
