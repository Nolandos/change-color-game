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
    initialBoard: [],
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
    let asw = [];
    
    /*Check id of all square has the same color(number)*/ 
    board.forEach((item,index) => {
      if(item === number) singleColorBoard = [...singleColorBoard, checkSquare(index,state.initialBoard,state.columns)];
    });

   /*Generate sequence adjacent square*/
    const sequence = generateSequences(singleColorBoard, id);
    
    if(sequence.length >1) {
      sequence.forEach(id => board[id] = 0);
      state.points += sequence.length;
      sequence.forEach(item => {
        const currentRow = Math.floor(item/state.columns);
        for(let i=0; i<=currentRow; i++) {
          if(board[item - (i+1)*state.columns]) {
            [board[item - i*state.columns], board[item - (i+1)*state.columns]] = [board[item  - (i+1)*state.columns], board[item - i*state.columns]];
          }  
        }
      })

      board.forEach((item, index) => {
        if(item === 0) board[index] = mathRandom(1,9,0);
      });
    };
   
    const motionArray = board.filter((item, index) => {
      return checkSquare(index,state.initialBoard,state.columns).length > 1 ;
    });

    if(motionArray.length === 0) alert('Koniec Gry!');
    
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
