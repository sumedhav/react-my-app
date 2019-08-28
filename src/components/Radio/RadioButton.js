import React from 'react';

export const Radio = (props) => {
    return (
        <div>
            {props.options.map((option, index) =>
                <React.Fragment>
                    <label htmlFor={`radio_${index}`}>{option}</label>
                    <input id={`radio_${index}`} type='radio' value={option} name={props.name}/>
                </React.Fragment>
            )}
        </div>
    )
}
