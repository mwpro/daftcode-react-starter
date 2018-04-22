import * as React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

    constructor(props) {
        super();

        this.state = {
            counter: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    tick() {
        this.setState({
            counter: this.state.counter - 1
        });

        if (this.state.counter <= this.props.to) {
            if (this.props.onSuccess)
                this.props.onSuccess();
            this.stop();
        }
    }

    handleClick() {
        this.start();
    }

    start() {
        if (this.timerID == undefined) {
            this.setState({ counter: this.props.from });
            this.timerID = setInterval(() => this.tick(), 1000);
        }
    }

    stop() {
        clearInterval(this.timerID);
        this.timerID = undefined;
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>{this.state.counter}</h1>
            </div>
        );
    }
}

export default Counter;