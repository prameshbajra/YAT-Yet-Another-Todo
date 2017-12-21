import React from 'react';
import Modal from 'react-modal';


const OptionModal = props => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      ariaHideApp={false}
      closeTimeoutMS={800}
    >
        <h3>Here you go.</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
          className="button-done"
          onClick={props.handleSelectedOption}
        >OK, Thanks!
        </button>
    </Modal >
);

export default OptionModal;
