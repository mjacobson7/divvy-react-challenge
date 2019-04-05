import React from 'react';

const Input = props => {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">{props.properties.label}</span>
            </div>
            <input
                value={props.properties.value}
                onChange={e => props.handleInputChange({ type: props.properties.name, value: e.target.value })}
                type="number"
                className="form-control"
                max="100000"
                min="0"
            />
        </div>
    )
}

export default Input;