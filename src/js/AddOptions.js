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
                {this.state.error && <p className="widget-message">{this.state.error}</p>}
                <form className="widget-form" onSubmit={this.formHandler}>
                    <input className="widget-input" type="text" name="option" placeholder="Enter your todo here ..." />
                    <button className="button-ok" type="submit">Enter</button>
                </form>
                <h6 className="small-footer">Made with Love And React </h6>
                <h6 className="small-footer">
                    <a href="http://bajracharya.me" target="_blank" rel="noopener noreferrer">
                        (Pramesh Bajracharya)
                    </a>
                </h6>
            </div>
        );
    }
}

export default AddOptions;
