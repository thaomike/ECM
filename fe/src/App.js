
import {useEffect} from 'react'

import Login from './components/login/index'
import Content from './components/contents/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <Switch>
          <Route exact path="/login">
            <Login
              isLogin = {isLogin}
              setIsLogin= {setIsLogin} />
          </Route> 
          <Route exact path="/">
            <Content isLogin={isLogin}/>
          </Route>
          <Route exact path="/home">
            <Content isLogin={isLogin}/>
          </Route>
          <Route exact path="/page/:id">
            <Content />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
