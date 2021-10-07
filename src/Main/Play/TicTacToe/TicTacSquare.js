import React from "react";
import './TicTacToe.css';
const TicTacSquare = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default TicTacSquare;