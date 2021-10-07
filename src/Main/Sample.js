import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Search from './Search';
// import News from '../Main/News/News';
// import DropSearch from './Search/DropSearch';
const Sample = (props) => {
    const st = {
        color: "white",
        fontSize: "20px",

    }
    const logo = {
        color: "white",
        fontSize: "30px",
        fontFamily: "lucida grande",
        cursor: "pointer",
    }
    const gotoHandler = () => {

    }

    return (
        <div>
            <nav><h2 style={logo} onClick={gotoHandler}>Drop Notion</h2>

                <ul className="nav-links">
                    <Link exact style={st} to='/search'>
                        <li>Search</li>
                    </Link>
                    <Link exact style={st} to='/play'>
                        <li>Games</li>
                    </Link>
                    <Link exact style={st} to='/news'>
                        <li>News</li>
                    </Link>
                    <Link exact style={st} to='/notes'>
                        <li>Notes</li>
                    </Link>
                    <Link exact style={st} to='/about'>
                        <li>About</li>
                    </Link>

                    {/* <News /> */}
                    
                </ul>
            </nav>
            {/* <DropSearch /> */}
            {/* <h1>Inside the main page</h1> */}
        </div>
    )
}
export default Sample;