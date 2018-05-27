import * as React from 'react';

import { format } from 'date-fns'

import Rocket from '../components/Rocket';
import LaunchSite from '../components/LaunchSite'
import Counter from '../components/Counter'

import { action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class LaunchDetails extends React.Component {    
    @action.bound
    handleGoBack() {
        this.props.mainStore.switchView("list");
    }

    render() {
        const { launch } = this.props.mainStore;
        
        return (
            <div className="launchDetails">
                <header>
                    <a className="goback" onClick={this.handleGoBack}>Go back</a>
                    <a className="logo" onClick={this.handleGoBack}></a>                    
                </header>
                <div className="launchDetailsDetails">
                    <div className="basics">
                        <p className="launchDate">{format(launch.launch_date_utc, 'DD MMMM YYYY')}</p>
                        <h1>{launch.rocket.second_stage.payloads[0].payload_id} launch</h1>
                        <Counter className="timeLeft" to={launch.launch_date_unix} />
                        <img src={launch.links.mission_patch_small} />
                    </div>
                    <div className="details">
                        <div>
                        <h3>Details</h3>
                        <p>{launch.details}</p>
                        </div>
                        <Rocket />
                        <LaunchSite />
                    </div>                    
                </div>
                <div className="links">
                    <h3>Mission links</h3>
                    <a href={launch.links.reddit_campaign}>Reddit Campaign</a>
                    <a href={launch.links.presskit}>Presskit</a>
                    <a href={launch.links.video_link}>Mission video</a>
                </div>
            </div>
        );
    }
}
export default LaunchDetails;