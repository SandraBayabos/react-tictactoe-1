import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const winningCombos = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // Diagonal
    [2, 4, 6] // Diagonal
  ];

  const handleClick = e => {
    console.log(e.target.id);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    console.log(currentPlayer);
  };

  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <h1 className="title">TIC TAC TOE</h1>
      <Board boardState={board} handleClick={handleClick} />
      <button>Play Again</button>
    </div>
  );
}

export default App;
