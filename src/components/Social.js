import React, { Component } from 'react';

export default class Social extends Component {
  render() {
    return (
		<ul className="menu">
			<li className="menu-item">
				<a href="http://www.linkedin.com/profile/view?id=111572824" className="menu-linkedin" target="_blank" rel="noopener noreferrer">Linkedin</a>
			</li>
			<li className="menu-item">
				<a href="https://github.com/chriskinch" className="menu-github" target="_blank" rel="noopener noreferrer">GitHub</a>
			</li>
			<li className="menu-item">
				<a href="http://www.facebook.com/iamchriskinch" className="menu-facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
			</li>
			<li className="menu-item">
				<a href="https://plus.google.com/+ChrisKinch/posts" className="menu-google" target="_blank" rel="noopener noreferrer">Google+</a>
			</li>
			<li className="menu-item">
				<a href="https://twitter.com/chriskinch" className="menu-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
			</li>
		</ul>
    );
  }
}