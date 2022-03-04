import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from '../src/Pages/Home'
import { Route, Switch } from 'react-router-dom';
import BoardPage from './Components/Views/BoardPage/BoardPage';
import ArticlePage from './Components/Views/ArticlePage/ArticlePage';
import RegisterPage from './Components/Views/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Switch>
      <Route exact path="/" component={BoardPage} />
      <Route path ="/article/:articleId" component={ArticlePage} />
      <Route path='/register' component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
