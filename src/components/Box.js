import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: calc(100% / 3);
  height: calc(100% / 3);
  box-sizing: border-box;
  border: 1px solid black;
`;

const Box = ({ cell, id, symbol, handleClick }) => {
  return (
    <StyledBox key={cell} id={id} onClick={handleClick}>
      {symbol}
    </StyledBox>
  );
};

export default Box;
