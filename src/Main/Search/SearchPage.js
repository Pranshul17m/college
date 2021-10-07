import React from 'react'
import './SearchPage.css';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import image from './Searchlogo1.png';
import InputSearch from './InputSearch';
function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); // LIVE API CALL FROM GOOGLE FOR SEARCH
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src={image} alt="" />
                </Link>
                <div className="searchPage__headerBody">
                    <InputSearch hideButtons />
                </div>
                <div className="searchPage__options">

                </div>
            </div>
            {term && (
                <div className="searchPage__results">

                    {data?.items.map(item => (
                        <div className="searchPage__result">

                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>

                            <p className="searchPage__resultSnippet">
                                {item.snippet}</p>


                            <a href={item.link}>
                                {item.displayLink}
                            </a>
                        </div>

                    ))}
                </div>
            )}

        </div>
    )
}

export default SearchPage
