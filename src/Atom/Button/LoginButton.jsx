import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    margin-top: 15px;
    height: 50px;
    width: 70%;
    background-color: #002060;
    color: white;
    font-size: 32px;
    border-radius: 10px;
`;

function LoginButton() {
  return (
    <StyledButton>Login</StyledButton>
  );
}

export default LoginButton;