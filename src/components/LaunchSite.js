import * as React from 'react';

import Loader from "../components/Loader";

import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class LaunchSite extends React.Component {
    render() {        
        const { mainStore } = this.props;
        const { site } = mainStore;

        return (
            <div className="launchTableDetails">
                <h3>Launch Pad</h3>
                {mainStore.isSiteAvailable && <div>
                    <ul>
                        <li><span>Name:</span> {site.siteData.full_name}</li>
                        <li><span>Location:</span> {site.siteData.location.name}, {site.siteData.location.region}</li>
                    </ul>
                    <p>{site.siteData.details}</p> 
                </div>}
                <Loader isLoading={site.isLoading} />               
                {mainStore.isSiteFetchFailed && <div className="alert"><h2>🚀<br />Sorry, problem while loading site details. Try again later.</h2></div>}
            </div>
        );
    }
}

export default LaunchSite;