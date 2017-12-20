import React, { Component } from 'react';

class AddOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined,
        };
    }
    formHandler = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.option.value = '';
        this.setState(() => ({
            error,
        }));
        e.target.option.focus();
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formHandler}>
                    <input type="text" name="option" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AddOptions;
