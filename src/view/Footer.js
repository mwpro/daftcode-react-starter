import * as React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="links">Follow SpaceX | <a href="#">Twitter</a> <a href="#">Youtube</a> <a href="#">Flickr</a> <a href="#">Instagram</a></div>
                <div className="copyright">2018 Space Exploration Technologies Corp.</div>
            </footer>
        );
    }
}

export default Footer;