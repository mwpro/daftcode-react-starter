import * as React from 'react';

import { format } from 'date-fns'

class LaunchListItem extends React.Component {
    render() {
        return (
            <li onClick={this.props.onLaunchClick}>
                <h3>{format(this.props.launch.launch_date_utc, 'DD MMMM YYYY')}</h3>
                Rocket: {this.props.launch.rocket.rocket_name} | Launch site: {this.props.launch.launch_site.site_name_long}
            </li>
        );
    }
}

export default LaunchListItem;