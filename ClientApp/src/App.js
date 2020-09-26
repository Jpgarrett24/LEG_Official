import React, { Component } from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './custom.css'
import Landing from './views/Landing';
import Home from './views/Home';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Router>
          <Landing path="/" />
          <Home path="/home" />
        </Router>
      </>
    );
  }
}
