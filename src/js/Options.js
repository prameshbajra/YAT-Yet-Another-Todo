import React from 'react';

import Option from './Option';

const Options = props => (
    <div>
        <div className="widget-header">
            <h3>Your options</h3>
            <button
              className="button-remove"
              onClick={props.handleDeleteOptions}
            >Remove All
            </button>
        </div>
        {props.options.length === 0 &&
            <h4 className="widget-message">Come on you lazy, you must have something to do!</h4>}
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
