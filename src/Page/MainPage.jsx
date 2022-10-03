import React from "react";
import Main from "../Component/Main";
import Background from "../Atom/Background";
import Title from "../Component/title";

function MainPage() {
  return (
    <Background>
      <Title/>
      <Main />
    </Background>
  );
}

export default MainPage;