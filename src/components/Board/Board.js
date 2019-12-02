import React from 'react';
import Square from '../Square/Square';
import './Board.scss';

const Board = ({numbers, board, onChange }) => {
    return (
        <div className="board">
            {board.map((item, index) => {
                return ( <Square numbers={numbers} id = { index } initialNumber = { item } onChange = {(number, id) => onChange(number, id) } />)
            }) 
            }
        </div>
    )
}

export default Board;