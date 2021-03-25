import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
  useLocation
} from "react-router-dom";
import Menu from '../header/Menu';
import Products from '../products/Products'
const Content = ({ isLogin, maxx }) => {
  const history = useHistory();

  const checkLogin = () => {
    console.log(isLogin)
    if (isLogin) {
      alert("ok")
    } else {
      alert("you need to login first")
      history.push('/login')
    }
  }

  const [id, setId] = useState(parseInt(useParams().id) || 1);

  useEffect(() => {
    if(id == 1) {
      var pre = document.getElementById("pre") 
      pre.classList.add("disabled")
  }
  },[])

  const onClickHandle = (action) => {
    // console.log(id)
    var pre = document.getElementById("pre")
    var next = document.getElementById("next")
    if(action === 'pre')
    {
      
      if(id>1) {
        setId(id-1)
        if(id == 2) pre.classList.add("disabled")
      } 
    }
    else
    {
      if(id>=1)
      {
        pre.classList.remove("disabled")
        setId(id+1)
      } 
    }
  }

  // console.log(loca)
  return (
    <Router>
      <div >
        <Router forceRefresh={true}>
          <Link to="/login">login</Link> </Router>
        <Menu />
        {/* {typeof loca !== 'number' ? <Products id={id || 1}/> : null } */}
        <ul class="pagination">
          <li class="page-item" id="pre"><Link  class="page-link" onClick={() => onClickHandle("pre")} to={`/page/${id>1? id-1: id}`} >Previous</Link></li>
          <li class="page-item" id = "next"><Link class="page-link" onClick={() => onClickHandle("next")} to={`/page/${id+1}`}>Next</Link></li>
        </ul>
        <Switch>
          <Route path="/">
            <Products id={id}/>
          </Route>
          <Route path="/page/:id">
            <Products id={id}/>
          </Route>
        </Switch>
        {/* <button onClick={checkLogin}>asd</button> */}
      </div>
    </Router>
  );
}

export default Content