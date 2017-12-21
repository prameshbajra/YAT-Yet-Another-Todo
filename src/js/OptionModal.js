import React from 'react';
import Modal from 'react-modal';


const OptionModal = props => (
    <Modal
      className="react-modal"
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      ariaHideApp={false}
      closeTimeoutMS={800}
    >
        {props.selectedOption && <h2>{props.selectedOption}</h2>}
        <br /><br />
        <button
          className="modal-button"
          onClick={props.handleSelectedOption}
        >OK, Thanks!
        </button>
    </Modal >
);

export default OptionModal;
