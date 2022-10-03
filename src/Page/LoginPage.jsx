import React from "react";
import Login from "../Component/Login";
import Background from "../Atom/Background";
import Title from "../Component/title";

function LoginPage() {
  return (
    <Background>
      <Title/>
      <Login/>
    </Background>
  );
}

export default LoginPage;