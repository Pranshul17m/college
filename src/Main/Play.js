import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuessPlay from './Play/GuessWord/GuessPlay';
import TicTacGame from './Play/TicTacToe/TicTacGame';
import Game from './Game';
import SnakeBoard from './Play/Snake/SnakeBoard';

const Play = () => {
    console.log("inside play")
    return (<Router>
        <div><Game />
            <Switch>
                <Route path="/tictactoe" component={TicTacGame} />
                <Route path="/guess" component={GuessPlay} />
                <Route path="/snake" component={SnakeBoard} />
            </Switch>
        </div>
    </Router>
    )
}
export default Play;