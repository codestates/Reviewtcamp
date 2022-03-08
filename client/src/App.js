import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Mypage from "./Pages/Mypage";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  <h2>여기 충돌이 나네요.....</h2>;

  const loginHandler = (data) => {
    setIsLogin(true);
    setAccessToken(data.token.accessToken);
  };
  return (
    <div>
      <Switch>
        <Route exact path="/signin">
          <Signin loginHandler={loginHandler} />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/mypage">
          <Mypage accessToken={accessToken} />
          {/* 로그인이된 상황이면 -> 토큰 받아와서 mypage에서 사용자 정보시 사용하기 */}
          {/* {isLogin ? (
            <Mypage accessToken={accessToken} />
          ) : (
            <Redirect to="/" />
          )} */}
        </Route>

        <Route path="/">
          {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </div>
  );
}
