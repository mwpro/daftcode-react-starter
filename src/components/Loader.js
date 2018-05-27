import * as React from 'react';
import PropTypes from 'prop-types';

import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Loader extends React.Component {
    constructor(props) {
        super();
    }

    render() {        
        const { mainStore } = this.props;

        return (
            <div className="loader">
                { mainStore.launchesList.isLoading && <div className="loaderElement"></div> }
            </div>
        );
    }
}

export default Loader;