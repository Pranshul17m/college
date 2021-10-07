import React, { Component } from 'react';
import './Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './Navigator';
import About from './About';
import ShowNotes from './ShowNotes';
import Game from './Game';
// import TicTacGame from './Play/TicTacToe/TicTacGame';
import './Play/TicTacToe/TicTacToe.css';
import GuessPlay from './Play/GuessWord/GuessPlay';
import Play from './Play';
// import Navigator from './Sample';
import Sample from './Sample';
import Search from './Search';
import ShowNews from './ShowNews';
import TicTacGame from './Play/TicTacToe/TicTacGame';   
class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Sample />
                    
                    {/* <ShowNews /> */}
                    {/* <TicTacGame/> */}
                    <Switch>
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/play" component={Play} />
                        <Route exact path="/news" component={ShowNews} />
                        <Route exact path="/notes" component={ShowNotes} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/tictactoe" component={TicTacGame} />
                        <Route exact path="/guess" component={GuessPlay} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Main;