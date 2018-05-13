import * as React from 'react';

class RocketFilter extends React.Component {
    render() {
        return (
            <div className="filters">
                <button onClick={this.props.handleRocketSelect.bind(this, undefined)}>All rockets</button>
                {Array.from(this.props.rockets).map((rocketName) => 
                    <button key={rocketName} onClick={this.props.handleRocketSelect.bind(this, rocketName)}>{rocketName}</button>
                )}                
            </div>
        );
    }
}

export default RocketFilter;