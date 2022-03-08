import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Mypage from "./Pages/Mypage";
import BoardList from "./Pages/BoardList";
import BoardPage from "./Pages/BoardPage";
import ArticlePage from "./Pages/ArticlePage";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/RegisterPage";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(true);
  const loginHandler = (data) => {
    setIsLogin(true);
    setAccessToken(data.token.accessToken);
  };

  // ! New AccessToken발급
  useEffect(() => {
    async function checkRefreshToKen() {
      // ! New AccessToken 어디서 발급 받나? 엔드포인드?
      const result = await await fetch("https://reviewtcamp.com/refreshtoken", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      setAccessToken({
        accesstoken: result.accessToken,
      });
      // setLoading(false);
    }
    setLoading(false);
    checkRefreshToKen();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>   
    <NavBar />
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

        <Route exact path="/"> 
          {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/signin" />}
    
          </Route>

          <Route exact path="/home">
          <Home />
        </Route>
      <Route exact path="/article/:id">
        <ArticlePage />
      </Route>
      <Route exact path="/board/:id">
        <BoardPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      
      
      
      
      
      
      
        </Switch>





    </div>






  );
}
