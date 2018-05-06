import * as React from 'react';

import Rocket from '../components/Rocket';
import LaunchSite from '../components/LaunchSite'

class LaunchDetails extends React.Component {
    render() {
        return (
            <div class="launchDetails">
                <header>
                    <a href="#" class="goback">Go back</a>
                    <a href="#" class="logo" alt="SpaceX"></a>
                    
                </header>
                <div class="launchDetailsDetails">
                    <div class="basics">
                        <p class="launchDate">{this.props.launch.launch_date_utc}</p>
                        <h1>{this.props.launch.rocket.second_stage.payloads[0].payload_id} launch</h1>
                        <p>time to start...</p>
                        <img src={this.props.launch.links.mission_patch_small} />
                    </div>
                    <div class="details">
                        <div>
                        <h3>Details</h3>
                        <p>{this.props.launch.details}</p>
                        </div>
                        <Rocket rocket={this.props.rocket} />
                        <LaunchSite launchSite={this.props.launchSite} />
                    </div>                    
                </div>
                <div class="links">
                    <h3>Mission links</h3>
                    <p><a href={this.props.launch.links.reddit_campaign}>Reddit Campaign</a></p>
                    <p><a href={this.props.launch.links.presskit}>Presskit</a></p>
                    <p><a href={this.props.launch.links.video_link}>Mission video</a></p>
                </div>
            </div>
        );
    }
}
export default LaunchDetails;