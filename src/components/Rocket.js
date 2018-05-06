import * as React from 'react';

import { format } from 'date-fns'

class Rocket extends React.Component {
    render() {
        return (
            <div>
                <h3>Rocket</h3>
                <ul>
                    <li><span>Name:</span>{this.props.rocket.name}</li>
                    <li><span>Company:</span>{this.props.rocket.company}</li>
                    <li><span>Height:</span>{this.props.rocket.height.meters}M / {this.props.rocket.height.feet}FT</li>
                    <li><span>Diameter:</span>{this.props.rocket.diameter.meters}M / {this.props.rocket.diameter.feet}FT</li>
                    <li><span>Mass:</span>{this.props.rocket.mass.kg}KG / {this.props.rocket.mass.lb}LB</li>
                    <li><span>First flight:</span>{format(this.props.rocket.first_flight, 'DD MMMM YYYY')}</li>
                    <li><span>Country:</span>{this.props.rocket.country}</li>
                    <li><span>Success rate:</span>{this.props.rocket.success_rate_pct}%</li>
                    <li><span>Cost per launch:</span>${this.props.rocket.cost_per_launch}</li>
                </ul>
                <p>{this.props.rocket.description}</p>
            </div>
        );
    }
}

export default Rocket;