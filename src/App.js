import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <switch>
    <Route path='/' />
    </switch>
    </Router>
    </>
  );
}

export default App;
