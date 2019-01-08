import React, { Component } from 'react';

import logo from '../../images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="region region-header">
          <div id="block-chriskinch-branding" className="block block-system block-system-branding-block">
            <a href="/" title="Home" rel="home" className="site-logo">
              <img src={ logo } alt="chriskinch.com logo" />
            </a>
            <div className="site-name">
              <a href="/" title="Home" rel="home">chriskinch.com</a>
            </div>
            <div className="site-slogan">Hello. I'm Chris Kinch. Designer, developer, Drupal themer &amp; all-round geek.</div>
          </div>
        </div>
      </header>
    );
  }
}