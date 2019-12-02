import React, { useState } from 'react';
import './App.scss';

/* Import utils */
import mathRandom from './utils/mathRandom';
import checkSquare from './utils/checkSquare';
import generateSequences from './utils/generateSequences';

/* Import components */
import Board from './components/Board/Board';
import Modal from './components/Modal/Modal';

const App = () => {
  const [state, setState] = useState({
    initialBoard: [4, 2, 7, 2, 6, 4, 2, 7, 9, 4, 3, 8, 1, 4, 5, 5, 5, 5, 1, 9, 9, 6, 3, 7, 4, 8, 4, 6, 2, 5, 5, 9, 3, 6, 1, 4, 3, 6, 4, 6, 7, 7, 8, 6, 5, 6, 5, 3, 4, 8, 6, 8, 1, 4, 2, 4, 6, 6, 4, 4],
    points: 0,
    rows: 5,
    columns: 12,
    endGame: false,
    digits: 'none'
  });
  
  const setNewGame = () => {
    if(state.digits === 'none') alert('Musisz wybrać tryb!');
    else { 
      document.querySelector('.overlay').classList.add('hide');
      const randomArr = [];
      const squareAmount = state.rows * state.columns;
      for(let i=0; i<squareAmount; i++) randomArr[i] = mathRandom(1,9);
      setState({ 
        ...state, 
        initialBoard: randomArr, 
        endGame: false, 
        points: 0 
      });
    }
  }
  
  const setNumberOption = flag => {
    if(flag) {
      document.querySelector('.btn-numbers').classList.add('active');
      document.querySelector('.btn-no-numbers').classList.remove('active');
    } else if(!flag) {
      document.querySelector('.btn-numbers').classList.remove('active');
      document.querySelector('.btn-no-numbers').classList.add('active');
    }
    setState({...state, digits: flag })
  }

  const changeSquare = (number, id) => {
    const board = state.initialBoard;
    let singleColorBoard = [];
    
    /*Check id of all square has the same color(number)*/ 
    board.forEach((item,index) => {
      if(item === number) singleColorBoard = [...singleColorBoard, checkSquare(index,state.initialBoard,state.columns)];
    });

   /*Generate sequence adjacent square*/
    const sequence = generateSequences(singleColorBoard, id);
    
    /*Fall down squares*/
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
      });

      /*Generatre new random squares*/
      board.forEach((item, index) => {
        if(item === 0) board[index] = mathRandom(1,9);
      });
    };
   
    /*Check all possible motion for player*/
    const motionArray = board.filter((item, index) => {
      return checkSquare(index,state.initialBoard,state.columns).length > 1;
    });

    setState({...state, initialBoard: board });  

    if(motionArray.length === 0) {
      document.querySelector('.overlay').classList.remove('hide');
      setState({...state, endGame: true })
    };  
  }

  return (
    <div className="App">
       <h1>Punkty: {state.points}</h1> 
      <div className="overlay">
        <Modal>
        <p className="game-status-text">{ state.endGame ? 'Koniec gry!' : 'Nowa gra' }</p>
        { state.endGame && <p className="total-score">Wynik: { state.points } punktów</p> }
        <p>Wybierz Tryb gry:</p>
          <div className="options-buttons">
            <button className="btn btn-numbers tooltip" onClick={() => setNumberOption(true)}>
              <span className="tooltiptext">Pola z cyframi</span>
              9
            </button>
            <button className="btn btn-no-numbers tooltip" onClick={() => setNumberOption(false)}>
              <span className="tooltiptext">Pola z samymi kolorami</span>
            </button>
          </div>         
          <button className="btn btn-new-game" onClick={setNewGame}>Nowa Gra</button>
        </Modal>
      </div>
      <Board 
        board = { state.initialBoard } 
        onChange = { changeSquare } 
        digits={ state.digits } 
      />
    </div>
  );
}

export default App;
