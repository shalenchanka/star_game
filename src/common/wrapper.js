import React from 'react';

import Counter from '../common/counter';

const Wrapper = ({
        leftCount,
        rightCount,
        replayAction,
        title,
        children
    }) => {
    return (
        <div className="container">
            <div className="row pb-3 pt-4">
                <div className="col">
                    <h1>{title}</h1>
                </div>
            </div>
            <Counter 
                leftNumber={leftCount}
                rightNumber={rightCount}
            />
            {children}
            <div className="container">
                <div className="row justify-content-md-center">
                    <button className="btn btn-primary btn-lg" onClick={() => replayAction()}>
                        Replay
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Wrapper;