import React from 'react';

const Square = ({value, onClick, isWinningSquares}) => {

    return(
        <button className='square'
                style={{color: isWinningSquares ? 'red' : '',
                fontWeight: isWinningSquares ? 'bold' : 'normal'}}
                type="button"
                onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;