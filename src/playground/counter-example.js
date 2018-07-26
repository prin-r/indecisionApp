

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const data = JSON.parse(localStorage.getItem('count'));
            const count = parseInt(data, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState( (prevState) => {
            return {
                count : prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState( (prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }
    reset() {
        this.setState( (prevState) => {
            return {
                count : 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));