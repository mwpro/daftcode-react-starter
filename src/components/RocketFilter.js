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
        const { mainStore } = this.props;
        mainStore.setFilter(rocketName);
    }

    render() {
        const { mainStore } = this.props;
        
        return (
            <div className="filters">
                <button className={mainStore.launchesList.rocketFilter === null ? 'active' : ''} onClick={this.handleRocketSelect.bind(null, null)}>All rockets</button>
                {Array.from(mainStore.rocketNames).map((rocketName) => 
                    <button key={rocketName} className={mainStore.launchesList.rocketFilter === rocketName ? 'active' : ''} onClick={this.handleRocketSelect.bind(null, rocketName)}>{rocketName}</button>
                )}                
            </div>
        );
    }
}

export default RocketFilter;