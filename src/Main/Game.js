import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
const Game = () => {
    const st = {
        color: "#fff",
        fontFamily: "McLaren",
        fontWeight: "200",
        fontSize: "30px",
        display: "inline-block",
        marginLeft: "20px",
        
    }
    const hed = {
        backgroundColor: "#a941c9",
        margin: "auto",
        padding: "16px 32px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        justifyContent:"space-between",

    }
    return (
        <div style={hed}>

            <Link to='/tictactoe'>
                <p style={st}>Tictactoe</p>
            </Link>

            <Link to='/guess'>
                <p style={st}>Guess the Word!</p>
            </Link>
            <Link to='/snake'>
                <p style={st}>Mini Snake</p>
            </Link>

        </div>

    )
}
export default Game;