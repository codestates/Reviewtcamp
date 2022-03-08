import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Signup() {
  // 이메일, 이름, 패스워드 확인
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const handleInputValue = (key) => (e) => {
  //   setSignInfo({ ...signInfo, [key]: e.target.value });
  // };

  // 오류 메시지 상태 저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사 상태 저장
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const history = useHistory();

  // 회원가입 버튼을 누르면 post 요청
  const handleSignup = () => {
    console.log("작동하니?");
    axios
      .post(
        "https://reviewtcamp.com/signup",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((data) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  // 이메일 유효성 검사
  const onChangeEmail = useCallback((e) => {
    const emailPattern =
      /^[0-9a-zA-Z]([-\_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-\_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmail(e.target.value);
    const emailCurrent = e.target.value;
    // console.log(e.target.value);
    if (!emailPattern.test(emailCurrent)) {
      setEmailMessage(
        "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."
      );
      setIsEmail(false);
    } else {
      setEmailMessage("멋진 아이디네요!");
    }
  }, []);

  // 이름 유효성 검사
  const onChangeName = useCallback((e) => {
    const namePattern = /^[가-힣a-zA-Z]+$/; // 한글 영문만 입력가능
    setName(e.target.value);
    const nameCurrent = e.target.value;
    if (!namePattern.test(nameCurrent)) {
      setNameMessage(
        "이름 패턴 한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"
      );
      setIsName(false);
    } else {
      setNameMessage("멋진 이름이네요!");
      setIsName(true);
    }
  }, []);

  // 비밀번호 유효성 검사
  const onChangePassword = useCallback((e) => {
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    setPassword(e.target.value);
    const passwordCurrent = e.target.value;
    if (!passwordPattern.test(passwordCurrent)) {
      setPasswordMessage("8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀 번호에요!");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인 유효성 검사
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);
      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  return (
    <center>
      <h2>회원가입</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          <div>
            <label htmlFor="email">이메일</label>
          </div>
          <input
            id="email"
            type="email"
            name="name"
            placeholder="이메일"
            onChange={onChangeEmail}
          ></input>
          {/* 중복검사 버튼 지움 -> 외부 누르면 post 요청 보내기 -> API가 없음 */}
          <div className="formbox">
            {email.length > 0 && (
              <span className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </span>
            )}
          </div>
        </p>

        <p>
          <div>
            <label htmlFor="name">이름</label>
          </div>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="이름"
            onChange={onChangeName}
          />
          <div className="formbox">
            {name.length > 0 && (
              <span className={`message ${isName ? "success" : "error"}`}>
                {nameMessage}
              </span>
            )}
          </div>
        </p>

        <p>
          <div>
            <label htmlFor="password">비밀번호</label>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
          />
          <div className="formbox">
            {password.length > 0 && (
              <span className={`message ${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </span>
            )}
          </div>
        </p>

        <p>
          <div>
            <label htmlFor="confirmpassword">비밀번호확인</label>
          </div>
          <input
            id="confirmpassword"
            type="password"
            name="confirmpassword"
            placeholder="비밀번호 확인"
            onChange={onChangePasswordConfirm}
          />
          <div className="formbox">
            {passwordConfirm.length > 0 && (
              <span
                className={`message ${isPasswordConfirm ? "success" : "error"}`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </div>
        </p>

        <button type="reset">취소</button>
        {/*취소 버튼은 최근에는 만들지 않는추세. 잘못누를수도*/}
        <button type="submit" onClick={handleSignup}>
          회원가입
        </button>

        <p>
          <div>or</div>
        </p>

        <p>
          <Link to="/login">이미 아이디가 있으신가요?</Link>
        </p>
      </form>
    </center>
  );
}
