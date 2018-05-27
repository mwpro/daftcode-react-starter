import * as React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
    render() {        
        return (
            <div className="loader">
                { this.props.isLoading && <div className="loaderElement"></div> }
            </div>
        );
    }
}

export default Loader;