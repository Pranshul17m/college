import React, { useState } from "react";
import { calculateWinner } from "./logic";
import TicTacBoard from "./TicTacBoard";
import './TicTacToe.css';

const TicTacGame = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Back move to #${move}` : "Reset!";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });

    return (
        <>

            <h1 style={{textAlign:"center"}}>Tic Tac Toe</h1>
            <h2 className="result">{winner ? "Congratulations!! Winner: " +   winner : "Player's Turn: " + xO}</h2>
            <TicTacBoard squares={history[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
                <div style={{textAlign:"center"}}>
                    <h3>History</h3>
                    {renderMoves()}
                </div>

                
            </div>
        </>
    );
};

export default TicTacGame;