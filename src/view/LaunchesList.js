import * as React from 'react';

import { format } from 'date-fns';

import Rocket from '../components/Rocket';
import LaunchSite from '../components/LaunchSite'

import RocketFilter from "../components/RocketFilter";
import LaunchListItem from "../components/LaunchListItem";

import { RiseLoader } from 'react-spinners';

class LaunchDetails extends React.Component {
    constructor(props) {
        super();
        this.state = { rocketFilter: undefined, launches: [], loading: true, failed: false };

        this.handleRocketSelect = this.handleRocketSelect.bind(this);
    }


    async componentDidMount() {
        await this.fetchLaunches();
    }

    get rocketNames() {
        return ["Falcon 1", "Falcon 9", "Falcon 10"];
    }

    get areLaunchesEmpty() {
        return !this.state.loading && !this.state.failed && this.state.launches.length == 0;
    }

    get areLaunchesAvailable() {
        return !this.state.loading && !this.state.failed && this.state.launches.length > 0;
    }

    get isFetchFailed() {
        return !this.state.loading && this.state.failed;
    }

    async handleRocketSelect(rocket) {
        this.setState({ rocketFilter: rocket });
        await this.fetchLaunches(rocket);
    }

    async fetchLaunches(rocket) {
        try {
            this.setState({ loading: true, failed: false });
            // todo would be nice to use URL and URLSearchParams classes but could not get polyfills working :( ...
            let URL = "https://api.spacexdata.com/v2/launches/all?order=desc";
            if (rocket !== undefined) {
                URL += `&rocket_name=${rocket}`;
            }
            const fetchResult = fetch(URL);
            const response = await fetchResult;
            if (response.status !== 200)
                throw Error(`Unexpected response from SpaceX API - ${response.status}`);
            const jsonData = await response.json();

            this.setState({ launches: jsonData, });
        }
        catch (error) {
            this.setState({ failed: true });
        }
        finally {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <div className="launchesList">
                <header>
                    <a href="#" className="logo" alt="SpaceX"></a>
                    <h1>Launches 2018</h1>
                </header>
                <RocketFilter rockets={this.rocketNames} handleRocketSelect={this.handleRocketSelect} />
                
                {this.state.loading && <div className="loader"><RiseLoader color={'#ccac5b'} size={20} loading={this.state.loading} /></div>}

                {this.areLaunchesEmpty && <div className="alert"><h2>🚀<br />Sorry, no launches found</h2></div>}
                {this.areLaunchesAvailable &&
                    <ul>
                        {this.state.launches.map((launch) =>
                            <LaunchListItem key={launch.flight_number} launch={launch} onLaunchClick={this.props.onLaunchClick} />
                        )}
                    </ul>}
                       
                {this.isFetchFailed && <div className="alert"><h2>🚀<br />Sorry, problem while loading launches. Try again later.</h2></div>}

            </div>
        );
    }
}
export default LaunchDetails;