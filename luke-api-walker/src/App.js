import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';


function App() {
  const [ search, setSearch ] = useState({
    item: "",
    idx: ""
  });
  const searching = (newSearch) => {
    setSearch(newSearch);
  }
  return (
    <div className="App">
      <Search searching={searching} />
    </div>
  );
}

export default App;
