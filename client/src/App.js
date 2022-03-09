import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Mypage from "./Pages/Mypage";
import Modal from "./Pages/Modal";
import BoardList from "./Pages/BoardList";
import BoardPage from "./Pages/BoardPage";
import ArticlePage from "./Pages/ArticlePage";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/RegisterPage";
import Comments from "./Pages/Comments";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = (data) => {
    setIsLogin(true);
    setAccessToken(data.token.accessToken);
  };


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
        </Route>
        <Route exact path="/"> {/*여기부분 어떻게 해야하지?? */}
          {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/signin" />}
        </Route>
        <Route exact path="/modal">
          <Modal />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/article/:boardId/:postId">
          <ArticlePage />
        </Route>
        <Route exact path="/board/:id">
          <BoardPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
      </Switch>
    </div>
  );
}
