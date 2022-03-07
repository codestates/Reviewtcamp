import React from 'react';
import { Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar';
import RegisterPage from './Components/Views/RegisterPage/RegisterPage';
import ArticlePage from './Components/Views/ArticlePage/ArticlePage';
import Home from './Pages/Home';
import BoardPage from './Components/Views/BoardPage/BoardPage';
function App() {
  return (
<div>
        <NavBar />
        <Switch> <Route exact path="/"><Home /></Route>
       
         <Route exact path="/register"><RegisterPage /></Route>
        <Route exact path="/article"><ArticlePage /></Route>
        <Route exact path="/board"><BoardPage /></Route>
</Switch>
</div>
  );
}

export default App;
