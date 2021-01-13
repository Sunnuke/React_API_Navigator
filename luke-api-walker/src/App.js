import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Search from './components/Search';
import DisplaySearch from './components/DisplaySearch';


function App() {
  const [ search, setSearch ] = useState("/");
  const [ searchType, setSearchType ] = useState("");
  
  const searching = (newSearch) => {
    console.log("here",newSearch.goto)
    setSearch(newSearch.goto);
    setSearchType(newSearch.type);
    go(newSearch.goto);
  }
  const go = (blah) => {
    navigate(blah);
  }
  return (
    <div className="App">
      <Search searching={searching} />
      <Router>
        <DisplaySearch path={search} type={searchType} />
      </Router>
    </div>
  );
}


export default App;
