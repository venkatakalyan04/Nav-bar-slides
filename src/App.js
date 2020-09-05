import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Button } from 'reactstrap';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login}/>
          <Route path='/sign-up' component={Signup}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
