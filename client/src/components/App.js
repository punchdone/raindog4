import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions'

import Header from './Header/header';
import Landing from './Landing/landing';
import Dashboard from './Dashboard/Dashboard';
import Checkout from './Checkout/CheckoutNew';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/samples" component={Dashboard} />
            <Route path="/samples/checkout" component={Checkout} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
