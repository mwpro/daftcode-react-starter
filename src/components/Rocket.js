import * as React from 'react';

import { format } from 'date-fns'

import Loader from "../components/Loader";

import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Rocket extends React.Component {
    render() {
        const { mainStore } = this.props;
        const { rocket } = mainStore;

        return (
            <div className="launchTableDetails">
                <h3>Rocket</h3>
                {mainStore.isRocketAvailable && <div>
                    <ul>
                        <li><span>Name:</span>{rocket.rocketData.name}</li>
                        <li><span>Company:</span>{rocket.rocketData.company}</li>
                        <li><span>Height:</span>{rocket.rocketData.height.meters}M / {rocket.rocketData.height.feet}FT</li>
                        <li><span>Diameter:</span>{rocket.rocketData.diameter.meters}M / {rocket.rocketData.diameter.feet}FT</li>
                        <li><span>Mass:</span>{rocket.rocketData.mass.kg}KG / {rocket.rocketData.mass.lb}LB</li>
                        <li><span>First flight:</span>{format(rocket.rocketData.first_flight, 'DD MMMM YYYY')}</li>
                        <li><span>Country:</span>{rocket.rocketData.country}</li>
                        <li><span>Success rate:</span>{rocket.rocketData.success_rate_pct}%</li>
                        <li><span>Cost per launch:</span>${rocket.rocketData.cost_per_launch}</li>
                    </ul>
                    <p>{rocket.rocketData.description}</p>
                </div>}
                <Loader isLoading={rocket.isLoading} />
                {mainStore.isRocketFetchFailed && <div className="alert"><h2>🚀<br />Sorry, problem while loading rocket details. Try again later.</h2></div>}
            </div>
        );
    }
}

export default Rocket;