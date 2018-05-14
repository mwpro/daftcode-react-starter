import * as React from 'react';

import { format } from 'date-fns'

class LaunchListItem extends React.Component {
    render() {
        return (
            <li onClick={this.props.onLaunchClick}>
                <h3>{format(this.props.launch.launch_date_utc, 'DD MMMM YYYY')}</h3>
                <p>Rocket: <span>{this.props.launch.rocket.rocket_name}</span> | Launch site: <span>{this.props.launch.launch_site.site_name_long}</span></p>
            </li>
        );
    }
}

export default LaunchListItem;