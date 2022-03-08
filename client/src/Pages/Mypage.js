import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

//
export default function Signin(props) {
  // 엑세스 토큰 상태
  const [accessToken, setAccessToken] = useState("");
  // 리프레스 토큰 상태
  const [refreshToken, setRefreshToken] = useState("");

  // accessTokenRequest() {
  //   axios.get("")
  // }

  // 이름, 패스워드 확인
  const [name, setName] = useState("");
  const [curPassword, setCurPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const handleInputValue = (key) => (e) => {
  //   setSignInfo({ ...signInfo, [key]: e.target.value });
  // };

  // 오류 메시지 상태 저장
  const [nameMessage, setNameMessage] = useState("");
  const [curPasswordMessage, setCurPasswordMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사 상태 저장
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const history = useHistory();
  // 수정하기 버튼을 누르면  patch 요청
  const handleSignup = () => {
    console.log("작동하니?");
    axios
      .patch(
        "https://reviewtcamp.com/userinfo",
        {
          newname: name,
          password: curPassword,
          newpassword: password,
        },
        {
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
            "Content-Type": "applicaton/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.message !== "password changed") {
        }
        // ! 마이페이지 메인페이지로 돌아가야되는데?(수정,탈퇴 api가 없다.)
        history.push("/mypage");
      })
      .catch((err) => console.log(err.message));
  };

  // 비밀번호 누를 경우 POST 요청
  const handlePassword = (e) => {
    // 이메일, 로그인을 입력하지 않은 경우 에러 메시지
    console.log("작동중?");
    console.log(e.target.value);

    //  ! 비밀번호 맞는지 확인하는 uri 어떤거?
    axios
      .post("https://reviewtcamp.com/userinfo", {
        // ! 토큰으로 사용자 확인 할것
        password: password,
      })
      .then((res) => {
        if (res.data.message !== "password changed") {
          setCurPasswordMessage("비밀번호를 정확하게 입력해주세요.");
        } else {
          // ! 로그인 완료 시 -> 메인 게시판 URI가 어딨지?
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

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
      <form onSubmit={(e) => e.defaultPrevented()}>
        <button type="submit">
          <Link to="/mypage">나의정보변경</Link>
        </button>
        {/* 내가 쓴글 불러오는 uri가 어떤거? */}
        <button type="submit">
          <Link to="/">내가 쓴글 불러오기</Link>
        </button>
        <p>
          <div>
            <label htmlFor="newname">이름변경</label>
          </div>
          <input
            id="newname"
            type="text"
            name="newname"
            placeholder="이름변경"
            onChange={onChangeName}
          />
          <div className="formbox">
            {name.length > 0 && (
              <span className={`message${isName ? "success" : "error"}`}>
                {nameMessage}
              </span>
            )}
          </div>
        </p>

        <p>
          <div>
            <label htmlFor="password">현재 비밀번호</label>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="현재 비밀번호"
          />
          <div>{curPasswordMessage}</div>
        </p>

        <p>
          <div>
            <label htmlFor="newpassword">새 비밀번호</label>
          </div>
          <input
            id="newpassword"
            type="password"
            name="newpassword"
            placeholder="새 비밀번호"
            onChange={onChangePassword}
          />
          <div className="formbox">
            {password.length > 0 && (
              <span className={`message${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </span>
            )}
          </div>
        </p>

        <p>
          <div>
            <label htmlFor="newpasswordcheck">새 비밀번호 확인</label>
          </div>
          <input
            id="newpasswordcheck"
            type="password"
            name="newpasswordcheck"
            placeholder="새 비밀번호 확인"
            onChange={onChangePasswordConfirm}
          />
          <div className="formbox">
            {passwordConfirm.length > 0 && (
              <span
                className={`message${isPasswordConfirm ? "success" : "error"}`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </div>
        </p>

        <button type="reset">취소</button>
        <button type="submit" onClick={handlePassword}>
          수정하기
        </button>
        {/* 탈퇴하기 누르면 메인페이지로 넘어가야함 -> 링크 주소 확인할 것  */}
        <button type="submit">
          <Link to="/">탈퇴하기</Link>
        </button>
      </form>
    </center>
  );
}
