import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// axios.defaults.withCredentials = true;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 600px;
  height: 400px;

  > div.close_btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 40px;
    color: #000;
  }
`;

export default function Signin(props) {
  // 엑세스 토큰 상태
  const [accessToken, setAccessToken] = useState("");
  // 리프레스 토큰 상태
  const [refreshToken, setRefreshToken] = useState("");

  // 이름, 패스워드 확인
  const [name, setName] = useState("");
  const [curPassword, setCurPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

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


  const handleEditUserinfo = (e) => {
    // 이메일, 로그인을 입력하지 않은 경우 에러 메시지
    console.log("작동중?");
    console.log(e.target.value);
    axios
      .put(
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
          // withCredentials: true,
        }
      )
      .then((res) => {
        // ! 토큰을 보내주기 때문에 회원 수정이 거부될 경우가 x
        // ! 수정 완료 시 -> 보드 게시판으로 이동
        history.push("/board");
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
        "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"
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

  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={(e) => e.defaultPrevented()}>
        <div className="login-input">
          <button>
            <Link to="/mypage">나의정보변경</Link>
          </button>
          {/* 내가 쓴글 불러오는 uri가 어떤거? */}
          <button type="submit">
            <Link to="/">내가 쓴글 불러오기</Link>
          </button>
          <input
            id="newname"
            type="text"
            name="newname"
            placeholder="이름변경"
            autoComplete="off"
            onChange={onChangeName}
          />
          <div className="formbox">
            {name.length > 0 && (
              <span className={`message ${isName ? "success" : "error"}`}>
                {nameMessage}
              </span>
            )}
          </div>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="현재 비밀번호"
          />
          <div>{curPasswordMessage}</div>

          <input
            id="newpassword"
            type="password"
            name="newpassword"
            placeholder="새 비밀번호"
            onChange={onChangePassword}
          />
          <div className="formbox">
            {password.length > 0 && (
              <span className={`message ${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </span>
            )}
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
                className={`message ${isPasswordConfirm ? "success" : "error"}`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </div>

          <button type="reset">취소</button>
          <button type="submit" onClick={handleEditUserinfo}>
            수정하기
          </button>
          {/* 탈퇴하기 누르면 메인페이지로 넘어가야함 -> 링크 주소 확인할 것  */}
          {/*탈퇴하기 클릭 > 모달창 오픈 > 취소하기 or 탈퇴하기 > 이동 */}
          <button type="submit" onClick={openModalHandler}>
            탈퇴하기
          </button>
          <ModalContainer>
            {isOpen === true ? (
              <ModalBackdrop onClick={openModalHandler}>
                <ModalView onClick={(e) => e.stopPropagation()}>
                  <div className="desc">정말 탈퇴하시겠습니까?</div>
                  <button>취소</button>
                  <button>탈퇴</button>
                </ModalView>
              </ModalBackdrop>
            ) : null}
          </ModalContainer>
        </div>
      </form>
    </div>
  );
}
