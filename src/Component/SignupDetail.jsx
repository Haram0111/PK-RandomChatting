import React from "react";
import InputBox from "../Atom/InputBox/IDinputBox";
import styled from "styled-components";
import SignUpButton from "../Atom/Button/SignupButton";

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
function Signup() {
  return (
    <StyledLoginContanier>
        <h1>Sing Up!</h1>
        <Styledfont>id</Styledfont>
        <InputBox type="password" id="password"/>

        <Styledfont>password</Styledfont>
        <InputBox type="password" id="password"/>

        <Styledfont>confirm new password</Styledfont>
        <InputBox type="password" id="password"/>

        <Styledfont>nick name</Styledfont>
        <InputBox type="password" id="password"/>
        
        <SignUpButton/>
    </StyledLoginContanier>
  );
}

export default Signup;