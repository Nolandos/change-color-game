import React, { useState, useEffect } from 'react';
import './App.scss';
/* Import utils */
import mathRandom from './utils/mathRandom';
/* Import components */
import Board from './components/Board/Board';

const App = () => {
  const [state, setState] = useState({
    initialBoard: []
  });

  useEffect(() => {
    const randomArr = [];
    for(let i=0; i<60; i++) randomArr[i] = mathRandom(1,9);
    setState({ ...state, initialBoard: randomArr });
  },[]);

  return (
    <div className="App">
      <Board board = { state.initialBoard } />
    </div>
  );
}

export default App;
