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
    for(let i=0; i<60; i++) randomArr[i] = mathRandom(1,9,0);
    setState({ ...state, initialBoard: randomArr });
  },[]);

  const changeSquare = (number, id) => {
    const arr = state.initialBoard;
    arr[id] = mathRandom(1,9, number);
    setState({ ...state, initialBoard: arr }); 
  }

  return (
    <div className="App">
      <Board board = { state.initialBoard } onChange = { changeSquare } />
    </div>
  );
}

export default App;
