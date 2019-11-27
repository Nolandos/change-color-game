import React from 'react';
import './Square.scss';

const Square = ({ id }) => {
    const setColor = (id) => {
        console.log(id)
        switch(id) {
            case 1:
              return 'green-sea'
            case 2:
              return 'belize-hole'
            case 3:
              return 'wisteria'
            case 4:
              return 'carrot'
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
              return ''
          }
    }
    return (
        <div className={`square ${setColor(id)}`}> {id} </div>
    )
}

export default Square;