import React, { useState, useEffect } from 'react';
import './App.scss';

/* Import utils */
import mathRandom from './utils/mathRandom';

const App = () => {
  const [state, setState] = useState({
    initialBoard: new Array(20)
  });

  useEffect(() => {
    //console.log(state.initialBoard)
    state.initialBoard.forEach(field => {
      console.log(field)
    })
  },[]);

  return (
    <div className="App"></div>
  );
}

export default App;
