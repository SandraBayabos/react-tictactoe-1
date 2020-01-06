import React from "react";
import styled from "styled-components";
import Box from "./Box";

const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid black;
  width: 70vh;
  height: 70vh;
  margin: 100px;
`;

const Board = ({ boardState, handleClick }) => {
  return (
    <div>
      <StyledBoard>
        {boardState.map((value, index) => {
          return (
            <Box
              handleClick={handleClick}
              key={index}
              id={index}
              symbol={value}
            />
          );
        })}
      </StyledBoard>
    </div>
  );
};

export default Board;
