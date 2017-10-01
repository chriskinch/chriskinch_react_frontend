import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="menu">
        <a className="menu-item" href="/">Portfolio</a>
        <a className="menu-item" href="#footer">About</a>
        <a className="menu-item" href="#footer">Contact</a>
        <a className="menu-item" href="http://www.linkedin.com/profile/view?id=111572824">CV</a>
      </nav>
    );
  }
}