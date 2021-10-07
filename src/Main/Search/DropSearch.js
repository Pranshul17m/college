import React from 'react';
import './DropSearch.css';
import InputSearch from './InputSearch';
import image from './Searchlogo1.png';
const DropSearch=()=> {
    return (
        <div className="drop__search">
        <img src={image} />
            <div className="search__bar">
                <InputSearch />
            </div>
        </div>
    )
}
export default DropSearch;