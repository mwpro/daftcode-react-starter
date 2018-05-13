import * as React from 'react';

import { format } from 'date-fns'

import Rocket from '../components/Rocket';
import LaunchSite from '../components/LaunchSite'
import Counter from '../components/Counter'

import RocketFilter from "../components/RocketFilter";
import LaunchListItem from "../components/LaunchListItem";

class LaunchDetails extends React.Component {
    constructor(props) {
        super();
        this.state = { rocketFilter: undefined };
        
        this.handleRocketSelect = this.handleRocketSelect.bind(this);
    }

    get rocketNames() {
        return new Set(this.props.launches.map((launch) => launch.rocket.rocket_name));
    }

    get launches() {
        const launches = [...this.props.launches].reverse();

        return this.state.rocketFilter ? launches.filter(launch => launch.rocket.rocket_name === this.state.rocketFilter) : launches;
    }
    
    handleRocketSelect(rocket) {
        this.setState({ rocketFilter: rocket });
    }

    render() {
        return (
            <div className="launchesList">
                <header>
                    <a href="#" className="logo" alt="SpaceX"></a>   
                    <h1>Launches 2018</h1>
                </header>
                <RocketFilter rockets={this.rocketNames} handleRocketSelect={this.handleRocketSelect} />
                <ul className="launches">
                    {this.launches.map((launch) =>
                        <LaunchListItem key={launch.flight_number} launch={launch} onLaunchClick={this.props.onLaunchClick} />
                    )}
                </ul>
            </div>
        );
    }
}
export default LaunchDetails;