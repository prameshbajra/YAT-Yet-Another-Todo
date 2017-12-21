import React from 'react';

const Option = props => (
    <div className="widget-body">
        {props.optionText}
        <button
          className="button-remove"
          onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;
