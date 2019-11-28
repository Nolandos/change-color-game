import React, { useState, useEffect } from 'react';
import './App.scss';
/* Import utils */
import mathRandom from './utils/mathRandom';
import checkSquare from './utils/checkSquare';

/* Import components */
import Board from './components/Board/Board';

const App = () => {
  const [state, setState] = useState({
    initialBoard: [2, 2, 2, 2, 2, 2, 2, 8, 4, 9, 4, 5, 5, 3, 2, 6, 6, 3, 2, 2, 2, 2, 3, 6, 1, 3, 8, 4, 4, 2, 8, 1, 5, 2, 3, 7, 3, 3, 9, 2, 6, 3, 9, 2, 8, 2, 6, 9, 1, 9, 5, 4, 2, 1, 6, 4, 5, 2, 2, 2],
    rows: 5,
    columns: 12
  });

  useEffect(() => {
    //const randomArr = [];
    //const squareAmount = state.rows * state.columns;
    //for(let i=0; i<squareAmount; i++) randomArr[i] = mathRandom(1,9,0);
    //setState({ ...state, initialBoard: randomArr });
  },[]);
  const findFirst = (a,b=[]) => a.find(x => b.some(y => x == y));

  const changeSquare = (number, id) => {
    const arr = state.initialBoard;
    let changeTemp = [];
    let arra = [];
    //const changeArr = checkSquare(id,state.initialBoard,state.columns);

    const newArr = arr.forEach((item,index) => {
      if(item === number) changeTemp = [...changeTemp, checkSquare(index,state.initialBoard,state.columns)];
    })
    console.log(changeTemp);
    arra = changeTemp.find(item => item.includes(id));
    //console.log(changeTemp.find(item => item.includes(id)));
    //console.log(arra)

    for(let i=0; i<changeTemp.length; i++) {
      if(findFirst(arra, changeTemp[i])) arra=[...arra,...changeTemp[i]];
    }

    arra = [...new Set(arra)];

    console.log('arra', arra);
  
  //console.log(findFirst(changeTemp[3], changeTemp[4]));
    if(arra.length >1) arra.forEach(id => arr[id] = 0);

    setState({...state, initialBoard: arr });
    /*  
    const part = 1/12;
    
    for (let i=0; i<state.rows; i++){
      if(id/state.columns < i+1 && id/state.columns >= i ) {
        console.log(`wiersz${i+1}`);
        const column = (Math.round((id/12 - i)/ part)) + 1;
        console.log(`kolumna ${column}`)
      }
    }
  */
  }

  return (
    <div className="App">
      <Board board = { state.initialBoard } onChange = { changeSquare } />
    </div>
  );
}

export default App;
