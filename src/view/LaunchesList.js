import * as React from 'react';
import PropTypes from 'prop-types';

import RocketFilter from "../components/RocketFilter";
import LaunchListItem from "../components/LaunchListItem";

import Loader from "../components/Loader";

import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class LaunchesList extends React.Component {
    static propTypes = {
        todoStore: PropTypes.object,
    }

    constructor(props) {
        super();
    }

    render() {
        const { mainStore } = this.props;

        return (
            <div className="launchesList">
                <header>
                    <a href="#" className="logo" alt="SpaceX"></a>
                    <h1>Launches 2018</h1>
                </header>
                <RocketFilter />                
                <Loader isLoading={this.props.mainStore.launchesList.isLoading} />

                {mainStore.areLaunchesAvailable &&
                    <ul>
                        {mainStore.launchesList.lauchesData.map((launch) =>
                            <LaunchListItem key={launch.flight_number} launch={launch} />
                        )}
                    </ul>
                }
                {mainStore.areLaunchesEmpty && <div className="alert"><h2>🚀<br />Sorry, no launches found</h2></div>}                       
                {mainStore.isLaunchesFetchFailed && <div className="alert"><h2>🚀<br />Sorry, problem while loading launches. Try again later.</h2></div>}

            </div>
        );
    }
}
export default LaunchesList;