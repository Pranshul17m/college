import React from "react";
import './TicTacToe.css';
import TicTacSquare from "./TicTacSquare";

const TicTacBoard = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <TicTacSquare key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default TicTacBoard;