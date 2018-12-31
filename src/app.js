import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/apollo-client';

import history from './history';
import './main.scss';
import { Home, Friend, Settings } from './components';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter history={history}>
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
              <Route path="/friends/:id" component={Friend} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
