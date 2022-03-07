import React from 'react';
import { Route, Switch } from 'react-router-dom'

import RegisterPage from './Components/Views/RegisterPage/RegisterPage';
import ArticlePage from './Components/Views/ArticlePage/ArticlePage';
import Home from './Pages/Home';
import BoardPage from './Components/Views/BoardPage/BoardPage';
import Tweets from './Pages/Tweets';
function App() {
  return (
    <div className='App'>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/article/:id">
        <ArticlePage />
      </Route>
      <Route path="/board">
        <BoardPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/tweets">
      <Tweets />
    </Route>
    </Switch>
  </div>

  );
}

export default App;
