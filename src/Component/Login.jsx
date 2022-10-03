import React from "react";
import LoginButton from "../Atom/Button/LoginButton";
import IDinputBox from "../Atom/InputBox/IDinputBox";
import PasswordInputBox from "../Atom/InputBox/PasswordinputBox";
import styled from "styled-components";

const StyledLoginContanier = styled.div`
    background-color: #f0f2f5;
    border-radius: 15px;
    width: 500px;;
    height: 500px;
    margin: auto 0 auto 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Styledfont = styled.h3`
    padding: 0px;
    margin: 15px 0px 0px 0px;
    font-size: 20px;
    color: #002060;
`;

function Login() {
  return (
    <StyledLoginContanier>
        <h1>Login!</h1>
        <Styledfont htmlFor="email">id</Styledfont>
        <IDinputBox/>
        <Styledfont htmlFor="password">Password</Styledfont>
        <PasswordInputBox/>
        <Styledfont>Forgot id?</Styledfont>
        <Styledfont>Forgot password?</Styledfont>
        <LoginButton/>
    </StyledLoginContanier>
  );
}

export default Login;