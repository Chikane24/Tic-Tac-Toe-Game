import React, { useState } from "react";
import Board from "./Board";

export default function Game() {

  const squares = Array(9).fill(null);

  const [board, setBoard] = useState(squares);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  /* Function to handle the click */
  const handleClick = (i) => {
    const boardCopy = [...board];

    /* If user clicked on an occupied square or if game is won, return  */
    if(winner || boardCopy[i]) return;

    /* Put X or O in clicked square */
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const status = winner ? 'winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O');
  const moves = (
      <button onClick={()=>{setBoard(squares)}} className="startBtn">Start the game</button>
  );
  

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={board} onClick={handleClick}></Board>
      </div>
      <div className="game-info">
        <div className="game-status">{status}</div>
        <div>{moves}</div>
      </div>
    </div>
  );
}
