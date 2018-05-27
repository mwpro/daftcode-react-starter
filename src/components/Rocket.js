import * as React from 'react';

import { format } from 'date-fns'

import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Rocket extends React.Component {
    render() {
        const { rocket } = this.props.mainStore.launchDetails;

        return (
            <div>
                <h3>Rocket</h3>
                <ul>
                    <li><span>Name:</span>{rocket.name}</li>
                    <li><span>Company:</span>{rocket.company}</li>
                    <li><span>Height:</span>{rocket.height.meters}M / {rocket.height.feet}FT</li>
                    <li><span>Diameter:</span>{rocket.diameter.meters}M / {rocket.diameter.feet}FT</li>
                    <li><span>Mass:</span>{rocket.mass.kg}KG / {rocket.mass.lb}LB</li>
                    <li><span>First flight:</span>{format(rocket.first_flight, 'DD MMMM YYYY')}</li>
                    <li><span>Country:</span>{rocket.country}</li>
                    <li><span>Success rate:</span>{rocket.success_rate_pct}%</li>
                    <li><span>Cost per launch:</span>${rocket.cost_per_launch}</li>
                </ul>
                <p>{rocket.description}</p>
            </div>
        );
    }
}

export default Rocket;