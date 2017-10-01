import React, { Component } from 'react';

import logo from '../../images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div class="region region-header">
          <div id="block-chriskinch-branding" class="block block-system block-system-branding-block">
            <a href="/" title="Home" rel="home" class="site-logo">
              <img src={ logo } />
            </a>
            <div class="site-name">
              <a href="/" title="Home" rel="home">chriskinch.com</a>
            </div>
            <div class="site-slogan">Hello. I'm Chris Kinch. Designer, developer, Drupal themer &amp; all-round geek.</div>
          </div>
        </div>
      </header>
    );
  }
}