import React from 'react';

import Option from './Option';

const Options = props => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <h6 > Come on you lazy ass , you must have something to do!</h6>}
        {
            props.options.map(option => (
                <Option
                  key={option}
                  optionText={option}
                  handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div >
);

export default Options;
