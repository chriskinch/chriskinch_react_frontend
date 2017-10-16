import React, { Component } from 'react';

export default class ProjectLink extends Component {
  render() {
    const { uri, title } = this.props;

    return (
		<li className="field__item">
			<a href={ uri }>
				{ title }
			</a>
		</li>
    );
  }
}


