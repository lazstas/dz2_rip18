import React, { Component, Fragment } from 'react';
import 'components/App/styles.css';
import Header from 'components/Header/Header';
import List from 'components/List/List';
import About from 'components/About/About';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/about/' component={About} />
          <Route exact path='/' component={List} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
