import { hot } from 'react-hot-loader';
import * as React from 'react';

import { Provider, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import './styles/theme.sass';

import LaunchDetails from './view/LaunchDetails';
import Footer from './view/Footer';

import MainStore from './stores/MainStore';

import LaunchesList from './view/LaunchesList';

@observer
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  get activeViewComponent() {
    switch (MainStore.currentViewName) {
      case 'list':
        return (
          <LaunchesList />
        );

      case 'details':
        return (
          <LaunchDetails />
        );

      default: return null;
    }
  }

  render() {
    return (
      <main>
        <Provider mainStore={MainStore}>
          {this.activeViewComponent}
        </Provider>
        <Footer />
        <DevTools />
      </main>
    );
  }
}

export default hot(module)(App);
