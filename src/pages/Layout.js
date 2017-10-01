import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Nav from "../components/layout/Nav";
import Social from "../components/Social";

import "../css/styles.critical.css";
import "../css/styles.noncritical.css";

export default class Layout extends Component {
  render() {
    return (
      <div class="layout-container">
        <Header />
        <div class="region region-primary-menu">
          <Nav />
          <Social />
        </div>
        <div class="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

