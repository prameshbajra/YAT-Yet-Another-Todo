import React from 'react';
import Modal from 'react-modal';


const OptionModal = props => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
    >
        <h3>Here you go.</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleSelectedOption}>OK, Thanks!</button>
    </Modal >
);

export default OptionModal;
