import React from "react";
import Main from "../Component/Main";
import BackkyoungWalk1 from "../Image/BackkyoungWalk1.png";
import Background from "../Atom/Background";

function MainPage() {
  return (
    <Background>
      <div style={{marginLeft: "400px"}}>
        <h1>Back Kyung</h1>
        <h1>Random Chatting</h1>
        <img src={BackkyoungWalk1} width="200px" alt="LoginBackground" />      
      </div>
      <Main />
    </Background>
  );
}

export default MainPage;