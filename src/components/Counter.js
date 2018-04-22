import * as React from 'react';
import PropTypes from 'prop-types';

import './Counter.sass';

const counterStyles = {
    running: {
        color: 'green'
    },
    stopped: {
        color: 'red'
    }
}

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
        this.setState({ counter: this.state.counter - 1 });

        if (this.isFinished()) {
            if (this.props.onSuccess)
                this.props.onSuccess();
            this.stop();
        }
    }

    isRunning = () => this.state.timerID !== undefined;
    isFinished = () => this.state.counter <= this.props.to;
    minutes = () => Math.floor(this.state.counter / 60).toString().padStart(2, "0");
    seconds = () => (this.state.counter % 60).toString().padStart(2, "0");

    start() {
        if (this.isFinished()) {
            this.setState({ counter: this.props.from });
        }

        this.setState({ timerID: setInterval(() => this.tick(), 1000) });
    }

    stop() {
        clearInterval(this.state.timerID);
        this.setState({ timerID: undefined });
    }


    render() {
        return (
            <div className="counter" onClick={this.onComponentClick} style={(this.isRunning()) ? counterStyles.running : counterStyles.stopped} >
                {this.minutes()}:{this.seconds()}
            </div>
        );
    }
}

export default Counter;