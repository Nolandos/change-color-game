import React, { useState, useEffect } from 'react';
import './App.scss';
/* Import utils */
import mathRandom from './utils/mathRandom';
import checkSquare from './utils/checkSquare';
import generateSequences from './utils/generateSequences';

/* Import components */
import Board from './components/Board/Board';

const App = () => {
  const [state, setState] = useState({
    initialBoard: [2, 2, 2, 2, 2, 2, 2, 8, 4, 9, 4, 5, 5, 3, 2, 6, 6, 3, 2, 2, 2, 2, 3, 6, 1, 3, 8, 4, 4, 2, 8, 1, 5, 2, 3, 7, 3, 3, 9, 2, 6, 3, 9, 2, 8, 2, 6, 9, 1, 9, 5, 4, 2, 1, 6, 4, 5, 2, 2, 2],
    points: 0,
    rows: 5,
    columns: 12
  });

  useEffect(() => {
    const randomArr = [];
    const squareAmount = state.rows * state.columns;
    for(let i=0; i<squareAmount; i++) randomArr[i] = mathRandom(1,9,0);
    setState({ ...state, initialBoard: randomArr });
  },[]);
  

  const changeSquare = (number, id) => {
    const board = state.initialBoard;
    let singleColorBoard = [];
    
    /*Check id of all square has the same color(number)*/ 
    board.forEach((item,index) => {
      if(item === number) singleColorBoard = [...singleColorBoard, checkSquare(index,state.initialBoard,state.columns)];
    });

   /*Generate sequence adjacent square*/
    const sequence = generateSequences(singleColorBoard, id);
    
    if(sequence.length >1) {
      sequence.forEach(id => board[id] = 0);
      state.points += sequence.length;
    };

    setState({...state, initialBoard: board });    
  }

  return (
    <div className="App">
      <h1>Punkty: {state.points}</h1>
      <Board board = { state.initialBoard } onChange = { changeSquare } />
    </div>
  );
}

export default App;
