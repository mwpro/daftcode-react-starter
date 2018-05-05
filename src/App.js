import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';

import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';

import './styles/theme.sass';
import Counter from './components/Counter';
import LaunchDetails from './view/LaunchDetails'

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();

    this.onTimerFinish = this.onTimerFinish.bind(this);
  }
  
  state = { timerFinished: false }

  onTimerFinish() {
    this.setState({ timerFinished: true });
  }

  render() {
    const potatoes = this.state.timerFinished ?
      (<div className="cookingResult">🥔 ➡ 🍽️</div>) : "";

    return (
      <main>
        <Home username="DaftCoder" />
        <Counter from={64} to={54} onSuccess={this.onTimerFinish} />
        {potatoes}
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
      </main>
    );
  }
}

export default hot(module)(App);
