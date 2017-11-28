import React, { Component } from 'react';

export default class ProjectLink extends Component {
  render() {
    const { url, name } = this.props;

    return (
		<li className="field__item">
			<a href={ url }>
				{ name }
			</a>
		</li>
    );
  }
}


