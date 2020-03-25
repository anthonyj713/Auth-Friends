import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/login'> Login </Link>
      <Switch>
      <Login />
      </Switch>
        <Route path='/login'/>
    </div>
    </Router>
  );
}

export default App;
