import React from 'react';
import './Square.scss';

const Square = ({ numbers, initialNumber, id, onChange }) => {
    const setColor = (initialNumber) => {
        switch(initialNumber) {
            case 1:
              return 'green-sea'
            case 2:
              return 'belize-hole'
            case 3:
              return 'wisteria'
            case 4:
              return 'mat-purple'
            case 5:
              return 'carrot'
            case 6:
              return 'alizarin'
            case 7:
              return 'wet-asphalt'
            case 8:
              return 'clouds'
            case 9:
              return 'sun-flower'
            default:
              return 'white'
          }
    }

    const handleChange = e => {
        e.preventDefault();
        onChange(initialNumber, id);
    }

    return (
        <div 
            className={`square ${setColor(initialNumber)}`}
            onClick = { handleChange }
        > {numbers && initialNumber} </div>
    )
}

export default Square;