import * as React from 'react';

class RocketFilter extends React.Component {
    constructor() {
        super();
        this.state = { rocketName: undefined };

        this.handleRocketSelect = this.handleRocketSelect.bind(this);
    }

    handleRocketSelect(rocketName) {
        this.setState({ rocketName: rocketName });
        this.props.handleRocketSelect(rocketName);
    }

    render() {
        return (
            <div className="filters">
                <button className={this.state.rocketName === undefined ? 'active' : ''} onClick={this.handleRocketSelect.bind(this, undefined)}>All rockets</button>
                {Array.from(this.props.rockets).map((rocketName) => 
                    <button key={rocketName} className={this.state.rocketName === rocketName ? 'active' : ''} onClick={this.handleRocketSelect.bind(this, rocketName)}>{rocketName}</button>
                )}                
            </div>
        );
    }
}

export default RocketFilter;