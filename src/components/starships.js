import React from 'react';

import Card from '../common/card';
import Wrapper from '../common/wrapper';

const Starships = ({
        starships,
        leftCount,
        rightCount,
        replayAction
    }) => {
    return (
        <Wrapper
            leftCount={leftCount}
            rightCount={rightCount}
            replayAction={replayAction}
            title="Starships"
        >
            <div className="row pt-3">
                {starships.map((people, i) => (
                    <div className="col-md-6 form-group" key={i}>
                        <Card
                            highlight={people.winner}
                            title={people.name}
                            text={people.crew}
                            dark={i === 1}
                            header={i === 0 ? 'Light side' : 'Dark side'}
                        />
                    </div>
                ))}
            </div>
        </Wrapper>
    )
};

export default Starships;