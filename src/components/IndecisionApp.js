import React from 'react';

import AddOption from './AddOption';
import Options from './Options'
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e) {
            // do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount() {
        console.log("componet will unmount");
    }

    handleDeleteOptions() {
        this.setState( () => ({ options: [] }) );
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handlePick() {
        alert((this.state.options.length > 0) ? this.state.options[Math.floor(Math.random() * this.state.options.length)] : "There's no option");
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add items.';
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'This option already exist.';
        }
        this.setState((prevState) => ({ options : prevState.options.concat([option]) }));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Momo Toto Photo';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
