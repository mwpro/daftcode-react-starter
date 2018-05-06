import * as React from 'react';

class LaunchSite extends React.Component {
    render() {
        return (
            <div>
                <h3>Launch Pad</h3>
                <p>Name: {this.props.launchSite.full_name}</p>
                <p>Location: {this.props.launchSite.location.name}, {this.props.launchSite.location.region}</p>
                <p>{this.props.launchSite.details}</p>
            </div>
        );
    }
}

export default LaunchSite;