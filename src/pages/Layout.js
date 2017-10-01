import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Nav from "../components/layout/Nav";
import Social from "../components/Social";

import "../css/styles.critical.css";
import "../css/styles.noncritical.css";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        <Header />
        <div className="region region-primary-menu">
          <Nav />
          <Social />
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

