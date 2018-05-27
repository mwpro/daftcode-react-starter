import * as React from 'react';
import PropTypes from 'prop-types';

import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class RocketFilter extends React.Component {
    static propTypes = {
        todoStore: PropTypes.object,
    }

    constructor() {
        super();
    }

    @action.bound
    handleRocketSelect(rocketName) {
        this.props.mainStore.setFilter(rocketName);
    }

    render() {
        const { launchesList, rocketNames } = this.props.mainStore;
        
        return (
            <div className="filters">
                <button className={launchesList.rocketFilter === null ? 'active' : ''} onClick={this.handleRocketSelect.bind(null, null)}>All rockets</button>
                {Array.from(rocketNames).map((rocketName) => 
                    <button key={rocketName} className={launchesList.rocketFilter === rocketName ? 'active' : ''} onClick={this.handleRocketSelect.bind(null, rocketName)}>{rocketName}</button>
                )}                
            </div>
        );
    }
}

export default RocketFilter;