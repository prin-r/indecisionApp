import React from 'react';

import AddOption from './AddOption';
import Options from './Options'
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState( () => ({ options: [] }) );
    };

    handleClearSelectedOption = () => {
        this.setState((prevState) => ({
            selectedOption : undefined
        }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    };

    handlePick = () => {
        this.setState((prevState) => ({
            selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)]
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add items.';
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'This option already exist.';
        }
        this.setState((prevState) => ({ options : prevState.options.concat([option]) }));
    };

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
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    };

    componentWillUnmount() {
        console.log("componet will unmount");
    };

    render() {
        const title = 'Indecision';
        const subtitle = 'null is an assignment value that means “no value”';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    };
}
