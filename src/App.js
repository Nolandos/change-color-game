import React, { useState, useEffect } from 'react';
import './App.scss';
/* Import utils */
import mathRandom from './utils/mathRandom';
/* Import components */
import Board from './components/Board/Board';

const App = () => {
  const [state, setState] = useState({
    initialBoard: [],
    rows: 5,
    columns: 12
  });

  useEffect(() => {
    const randomArr = [];
    const squareAmount = state.rows * state.columns;
    for(let i=0; i<squareAmount; i++) randomArr[i] = mathRandom(1,9,0);
    setState({ ...state, initialBoard: randomArr });
  },[]);

    const check = (id,arr,i) => {
      const ind = [];
        while(arr[id] === arr[id+i]) {
            ind.push(id+i);
            i*= 2;
        }
        return ind;
      }
  

  const changeSquare = (number, id) => {
    const arr = state.initialBoard;
    let changeArr = [id];
    const left = check(id,arr,-1);
    const right = check(id,arr,1);
    const up = check(id,arr,-12);
    const down = check(id,arr,12);
    changeArr = changeArr.concat(left,right,up,down);
    //console.log(changeArr);

    if(changeArr.length >1) changeArr.forEach(id => arr[id] = 0);

   setState({...state, initialBoard: arr });

    const part = 1/12;

    for (let i=0; i<state.rows; i++){
      if(id/state.columns < i+1 && id/state.columns >= i ) {
        console.log(`wiersz${i+1}`);
        const column = (Math.round((id/12 - i)/ part)) + 1;
        console.log(`kolumna ${column}`)
      }
    }
  }

  return (
    <div className="App">
      <Board board = { state.initialBoard } onChange = { changeSquare } />
    </div>
  );
}

export default App;
