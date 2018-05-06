import * as React from 'react';

class LaunchSite extends React.Component {
    render() {
        return (
            <div>
                <h3>Launch Pad</h3>
                <ul>
                    <li><span>Name:</span> {this.props.launchSite.full_name}</li>
                    <li><span>Location:</span> {this.props.launchSite.location.name}, {this.props.launchSite.location.region}</li>
                </ul>
                <p>{this.props.launchSite.details}</p>                
            </div>
        );
    }
}

export default LaunchSite;