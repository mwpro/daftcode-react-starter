import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';

import './styles/theme.sass';
import Counter from './components/Counter';

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
      </main>
    );
  }
}

export default hot(module)(App);
