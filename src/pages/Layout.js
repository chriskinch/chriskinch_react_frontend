import React, { Component } from 'react';

import Header from '../components/layout/Header';
import Nav from "../components/layout/Nav";
import Social from "../components/Social";
import Title from "../components/Title";

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
        <div className="layout-content">
          <div className="region region-content">
            <Title title="My new title" />
            <div id="block-chriskinch-content" className="block block-system block-system-main-block">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

