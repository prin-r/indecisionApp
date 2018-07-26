class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDetail = this.toggleDetail.bind(this);
        this.state = {
            visibility : false
        }
    }
    toggleDetail() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleDetail}>{(this.state.visibility)? 'Hide details' : 'Show details'}</button>
            <p>{this.state.visibility && 'Hey. These are some details you can now seelkelrkelrekrlekr!'}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));