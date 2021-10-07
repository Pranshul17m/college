import React, { useState } from 'react'
import './InputSearch.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import { actionTypes } from '../../reducer';
function InputSearch({ hideButtons = false }) {

    const [{},dispatch]=useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        console.log("button pressed and input was: ", input);
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        history.push('/result');
    }

    return (
        <form className="inputsearch">
            <div className="input__search">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (<div className="search__buttons">
                <Button type="submit" onClick={search} variant="outlined">Search</Button>
            </div>) : <div className="search__buttons">
                <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Search</Button>
            </div>}


        </form>
    )
}

export default InputSearch;
