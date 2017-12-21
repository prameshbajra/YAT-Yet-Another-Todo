import React, { Component } from 'react';

import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import OptionModal from './OptionModal';
import AddOptions from './AddOptions';

class App extends Component {
    constructor(props) {
        super(props);
        const json = JSON.parse(localStorage.getItem('options'));
        // json.parse() will give error when null values are parse
        // hence to be on the safe side or operator is used ...
        this.state = { options: json || [], selectedOption: undefined };
    }
    // Reminder : Fires automatically whenever state is updated/ changed ...
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // For deleting all options present ...
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    // For deleting one option ...
    handleDeleteOption = (option) => {
        this.setState(prevState => ({
            options: prevState.options.filter(optionItem => optionItem !== option),
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option,
        }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter a valid option.';
        } else if (this.state.options.indexOf(option) >= 0) {
            return "Let's not keep duplicates.";
        }
        this.setState(prevState => ({
            // ES6 syntax for updating the array and adding option to previous readymade array ...
            options: [...prevState.options, option],
        }));
        // returning null because arrow functions need values to be returned and null doesnt get rendered in jsx ...
        return null;
    }
    handleSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined,
        }));
    }
    render() {
        return (
            <div className="container">
                <Header />
                <Actions
                  hasOption={this.state.options.length > 0}
                  handlePick={this.handlePick}
                />
                <Options
                  options={this.state.options}
                  handleDeleteOption={this.handleDeleteOption}
                  handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions handleAddOption={this.handleAddOption} />
                <OptionModal
                  selectedOption={this.state.selectedOption}
                  handleSelectedOption={this.handleSelectedOption}
                />
            </div>
        );
    }
}

export default App;
