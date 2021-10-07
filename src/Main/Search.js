import React from 'react';
import Sample from './Sample';
import DropSearch from './Search/DropSearch';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './Search/SearchPage';
const Search=()=> {
    return (
        <div>
            <Router><Switch>
            <Route path="/result">
                <SearchPage />
            </Route>
            <DropSearch />
            </Switch>
            </Router>
        </div>
    )
}
export default Search;