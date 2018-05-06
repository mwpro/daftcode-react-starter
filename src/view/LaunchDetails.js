import * as React from 'react';

import { format } from 'date-fns'

import Rocket from '../components/Rocket';
import LaunchSite from '../components/LaunchSite'
import Counter from '../components/Counter'

class LaunchDetails extends React.Component {
    render() {
        return (
            <div className="launchDetails">
                <header>
                    <a href="#" className="goback">Go back</a>
                    <a href="#" className="logo" alt="SpaceX"></a>                    
                </header>
                <div className="launchDetailsDetails">
                    <div className="basics">
                        <p className="launchDate">{format(this.props.launch.launch_date_utc, 'DD MMMM YYYY')}</p>
                        <h1>{this.props.launch.rocket.second_stage.payloads[0].payload_id} launch</h1>
                        <Counter className="timeLeft" to={this.props.launch.launch_date_unix} />
                        <img src={this.props.launch.links.mission_patch_small} />
                    </div>
                    <div className="details">
                        <div>
                        <h3>Details</h3>
                        <p>{this.props.launch.details}</p>
                        </div>
                        <Rocket rocket={this.props.rocket} />
                        <LaunchSite launchSite={this.props.launchSite} />
                    </div>                    
                </div>
                <div className="links">
                    <h3>Mission links</h3>
                    <a href={this.props.launch.links.reddit_campaign}>Reddit Campaign</a>
                    <a href={this.props.launch.links.presskit}>Presskit</a>
                    <a href={this.props.launch.links.video_link}>Mission video</a>
                </div>
            </div>
        );
    }
}
export default LaunchDetails;