import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import GetFriend from './components/GetFriend';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
    <div className="App">
  <div>
    <Link to='/login'>Login</Link>
    </div>
  <div>
    <Link to='/friendlist'>FriendList</Link>
  </div>
  <div>
    <Link to='/addfriend'>Add Friend</Link>
  </div>
    <Switch>
      <PrivateRoute exact path='/friendlist' component={GetFriend} />
      <PrivateRoute exact path='/addfriend' component={AddFriend} />
      <Route path='/login' component={Login} />
      <Route component={Login} />
    </Switch>
    </div>
    </Router>   
  );
}

export default App;
