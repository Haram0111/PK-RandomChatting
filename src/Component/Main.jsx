import React from "react";
import LoginButton from "../Atom/Button/LoginButton";
import SignUpButton from "../Atom/Button/SignupButton";
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

function Main() {
  return (
    <StyledLoginContanier>
        <h1>Welcome!</h1>
        <LoginButton/>
        <SignUpButton/>    
    </StyledLoginContanier>
  );
}

export default Main;