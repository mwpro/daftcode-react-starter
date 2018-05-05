import * as React from 'react';

class LaunchDetails extends React.Component {
    render() {
        return (
            <div>
                <a>Go back</a>
                <h1>SpaceX</h1>
                <p>{this.props.launch.launch_date_utc}</p>
                <h2>{this.props.launch.rocket.second_stage.payloads[0].payload_id} launch</h2>
                <h2>time to start...</h2>
                <img src={this.props.launch.links.mission_patch_small} />
                <h3>Details</h3>
                <p>{this.props.launch.details}</p>
                <h3>Rocket</h3>
                <p>Separate component for info about rocket to be used</p>
                <h3>Launch pad</h3>
                <p>Separate component for info about launch pad to be used</p>
                <h3>Mission links</h3>
                <p><a href={this.props.launch.links.reddit_campaign}>Reddit Campaign</a></p>
                <p><a href={this.props.launch.links.presskit}>Presskit</a></p>
                <p><a href={this.props.launch.links.video_link}>Mission video</a></p>
            </div>
        );
    }
}

export default LaunchDetails;