import React, { Component } from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <h1>hi there</h1>
        <Router>
        </Router>
      </>
    );
  }
}
