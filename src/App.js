import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import SingupPage1 from './Page/SingupPage1';
import SingupPage2 from './Page/SingupPage2';
import ForgotIDPage from './Page/ForgotIDPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/forgotid" component={ForgotIDPage} />
        <Route exact path="/signup" component={SingupPage1} />
        <Route exact path="/signup/detail" component={SingupPage2} />
    </BrowserRouter>  
  );
}

export default App;
