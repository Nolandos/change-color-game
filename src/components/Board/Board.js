import React from 'react';
import Square from '../Square/Square';
import './Board.scss';

const Board = ({board}) => {
    return (
        <div className="board">
            {board.map(item => {
                return ( <Square id={item} />)
            }) 
            }
        </div>
    )
}

export default Board;