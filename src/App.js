import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import SingupPage from './Page/SingupPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SingupPage} />   
    </BrowserRouter>  
  );
}

export default App;
