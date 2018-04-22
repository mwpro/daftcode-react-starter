import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';

import './styles/theme.sass';
import Counter from './components/Counter';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  sampleFunc() {
    console.log('Ziemniaki gotowe!');
  }

  render() {
    return (
      <main>
        <Home username="DaftCoder" />
        <Counter from={64} to={54} onSuccess={this.sampleFunc} />
      </main>
    );
  }
}

export default hot(module)(App);
