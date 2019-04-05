import React from 'react';

const Result = props => {
    return (
        <div className="row" style={{ justifyContent: 'center' }}>
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-header">Item ID</div>
                {<h1 style={{ textAlign: 'center' }}>{props.itemId}</h1>}
            </div>
        </div>
    )
}

export default Result;