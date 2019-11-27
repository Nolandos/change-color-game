import React from 'react';
import Square from '../Square/Square';
import './Board.scss';

const Board = ({ board, onChange }) => {
    return (
        <div className="board">
            {board.map((item, index) => {
                return ( <Square id = { index } initialNumber = { item } onChange = {(number, id) => onChange(number, id) } />)
            }) 
            }
        </div>
    )
}

export default Board;