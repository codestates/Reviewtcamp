import logo from './logo.svg';
import React from 'react';
import { Route, Switch } from 'express';
import './App.css';
import RegisterPage from './Components/Views/RegisterPage/RegisterPage';
import ArticlePage from './Components/Views/ArticlePage/ArticlePage';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path = "/" component={Home} />
     <Route path = "/register" component= {RegisterPage} />
     <Route path = "/article/:articleID" component= {ArticlePage} />
     </Switch>
    </div>
  );
}

export default App;
