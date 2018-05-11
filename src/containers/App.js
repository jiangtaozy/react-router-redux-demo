import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { history } from '../configureStore';

import Home from '../components/Home';
import About from '../components/About';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
