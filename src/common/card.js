import React from 'react'

const Card = ({title, dark, text, header, highlight}) => {
    return (
        <div
            className={"card mb-3" + (dark ? ' text-white bg-dark' : ' bg-light') + (highlight ? ' shadow-drop-2-bottom' : '')}
        >
            <div className="card-header">{header}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
};

export default Card