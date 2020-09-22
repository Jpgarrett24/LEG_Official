import React, { Component } from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './custom.css'
import Landing from './views/Landing';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Router>
          <Landing path="/" />
        </Router>
      </>
    );
  }
}
