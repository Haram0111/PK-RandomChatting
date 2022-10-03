import React from "react";
import BackkyoungWalk1 from "../Image/BackkyoungWalk1.png";
import styled from "styled-components";

const StyledTitle = styled.div`
    margin: auto 0 auto 400px;
`;

const StyeldBackWalk1 = styled.img`
    width: 200px;
    height: 300px;
    src: "../Image/BackkyoungWalk1.png";
    margin: 0 auto 0 30px;
`;

function Title(){
    return (
        <StyledTitle>
            <h1>Back Kyung<br/>Random Chatting</h1>
            <StyeldBackWalk1 src={BackkyoungWalk1} alt="LoginBackground" /> 
        </StyledTitle>
    );
}

export default Title;

