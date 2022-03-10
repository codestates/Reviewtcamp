import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// axios.defaults.withCredentials = true;

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
  // 토큰 상태 저장
  const [accessToken, setAccessToken] = useState("");

  const history = useHistory();
  // 로그인을 누를 경우 POST 요청
  const handleSignin = () => {
    // 이메일, 로그인을 입력하지 않은 경우 에러 메시지
    const { email, password } = userInfo;
    if (!email) {
      setErrorMessage("이메일을 입력해주세요");
    } else if (!password) {
      setErrorMessage("비밀번호를 입력해주세요");
    } else {
      // POST 보냈으나 아이디 또는 비밀번호를 잘못 입력한 경우
      // console.log("작동중?");
      axios
        .post("https://localhost:4000/signin", {
          email: email,
          password: password,
        })
        .then((res) => {
          // ! 로그인 시 응답으로 useremail 보내주고있나? 응답에 없는거 같은데?
          if (res.data.token === undefined) {
            setErrorMessage("아이디 또는 비밀번호를 잘못 입력했습니다.");
          } else {
            setAccessToken(res.data.accesstokenf);
            props.loginHandler(res.data);
            // ! 로그인 완료 시 -> 메인 게시판 URI가 어딨지? -> 민주씨 메인 게시판으로 이동하기
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-wrapper">
      <center>
        <h2>Signin</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="login-input">
            <p>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={handleInputValue("email")}
                autoComplete="off"
              ></input>
            </p>
            <p>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={handleInputValue("password")}
                autoComplete="off"
              ></input>
            </p>
            <p>{errorMessage}</p>
            <button type="reset">Cancel</button>
            {/*취소 버튼은 최근에는 만들지 않는추세. 잘못누를수도*/}
            <button type="submit" onClick={handleSignin}>
              Login
            </button>
            <p>
              <Link to="/signup">아직 아이디가 없으신가요?</Link>
            </p>
          </div>
        </form>
      </center>
    </div>
  );
}
