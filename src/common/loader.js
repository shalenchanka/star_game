import React from 'react'

const Loader = () => {
    return (
        <div className="container loader">
            <div className="row justify-content-md-center align-items-center">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
};

export default Loader