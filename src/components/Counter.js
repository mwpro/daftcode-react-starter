import * as React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
        super();

        this.state = { counter: 0 }

        this.onComponentClick = this.onComponentClick.bind(this);
    }

    static propTypes = {
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
        onSuccess: PropTypes.func
    }
    
    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }
    
    onComponentClick() {
        if (this.isRunning()) {
            this.stop();
        } else {
            this.start();
        }
    }

    tick() {
        this.setState({
            counter: this.state.counter - 1
        });

        if (this.isFinished()) {
            if (this.props.onSuccess)
                this.props.onSuccess();
            this.stop();
        }
    }

    isRunning = () => this.timerID !== undefined;
    isFinished = () => this.state.counter <= this.props.to;
    
    start() {
        if (this.isFinished()) {
            this.setState({ counter: this.props.from });
        }
            
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    stop() {
        clearInterval(this.timerID);
        this.timerID = undefined;
    }

    render() {
        return (
            <div onClick={this.onComponentClick}>
                <h1>
                    {Math.floor(this.state.counter / 60).toString().padStart(2, "0")}
                    :
                    {(this.state.counter % 60).toString().padStart(2, "0")}
                </h1>
            </div>
        );
    }
}

export default Counter;