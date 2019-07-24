import React from 'react'

const Counter = ({leftNumber, rightNumber}) => {
    return (
        <div className="row pb-3 counter">
            <div className="col">
                <h2>Wins: {leftNumber}</h2>
            </div>
            <div className="col">
                <h2>Wins: {rightNumber}</h2>
            </div>
        </div>
    )
};

export default Counter