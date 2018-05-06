import * as React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
        super();

        this.state = { counter: 0, intervalId: undefined };
    }

    static propTypes = {
        to: PropTypes.number.isRequired
    }

    componentDidMount() {
        this.setState({ counter: Math.floor(new Date().getTime() / 1000) });
        this.setState({ intervalId: setInterval(() => this.tick(), 1000) });
    }

    componentWillUnmount() {
        this.stop();
    }

    tick() {
        this.setState({ counter: this.state.counter + 1 });
        if (this.isFinished()) {
            this.stop();
        }
    }

    isRunning = () => this.state.intervalId !== undefined;
    isFinished = () => this.secondsLeft() <= 0;
    secondsLeft = () => this.props.to - this.state.counter;

    stop() {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: undefined });
    }

    render() {
        var secondsLeft = this.secondsLeft();
        var day = Math.floor(secondsLeft / 86400);
        secondsLeft -= day * 86400;
        var hours = Math.floor(secondsLeft / 3600);
        secondsLeft -= hours * 3600;
        var minutes = Math.floor(secondsLeft / 60);
        secondsLeft -= minutes * 60;
        var seconds = Math.floor(secondsLeft % 60);

        return (
            <div>
            { !this.isFinished() ?
                    <span>
                        {day} days {hours} hrs {minutes} mins {seconds} seconds to start
                    </span>
                : 
                    <span>Already started</span>
            }            
            </div>
        );
    }
}

export default Counter;