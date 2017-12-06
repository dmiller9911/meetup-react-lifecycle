import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { index, routesInOrder } from './routes';
import { Header } from './header';
import { styles } from './app.styles';

export class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.app}>
          <Header />
          <main style={styles.main}>
            <Switch>
              {routesInOrder.map(r => (
                <Route
                  key={r.path}
                  path={r.path}
                  component={r.component}
                />
              ))}
              <Route
                exact
                path={index.path}
                component={index.component}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
