import React, { Component } from 'react';

class NodeLink extends Component {
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

export default NodeLink