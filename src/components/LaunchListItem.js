import * as React from 'react';

import { format } from 'date-fns'

import { action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class LaunchListItem extends React.Component {
    @action.bound
    handleLaunchSelect() {
        this.props.mainStore.switchView("details");
    }

    render() {
        return (
            <li onClick={this.handleLaunchSelect}>
                <h3>{format(this.props.launch.launch_date_utc, 'DD MMMM YYYY')}</h3>
                <p>Rocket: <span>{this.props.launch.rocket.rocket_name}</span> | Launch site: <span>{this.props.launch.launch_site.site_name_long}</span></p>
            </li>
        );
    }
}

export default LaunchListItem;