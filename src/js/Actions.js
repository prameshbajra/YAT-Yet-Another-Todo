import React from 'react';

const Actions = props => (
    <div>
        <button
          className="big-button-action"
          onClick={props.handlePick}
          disabled={!props.hasOption}
        >
            What should I do?
        </button>
    </div>
);

export default Actions;
