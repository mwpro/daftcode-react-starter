import * as React from 'react';

import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class LaunchSite extends React.Component {
    render() {        
        const { launchSite } = this.props.mainStore.launchDetails;

        return (
            <div>
                <h3>Launch Pad</h3>
                <ul>
                    <li><span>Name:</span> {launchSite.full_name}</li>
                    <li><span>Location:</span> {launchSite.location.name}, {launchSite.location.region}</li>
                </ul>
                <p>{launchSite.details}</p>                
            </div>
        );
    }
}

export default LaunchSite;