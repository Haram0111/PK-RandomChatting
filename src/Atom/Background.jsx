import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
    background-color: #DFE6F4;
    display: flex;
    width: 100%;
    height: 800px;
`;

function Background({ children }) {
    return (
        <StyledBackground>{children}</StyledBackground>
    );
}

export default Background;