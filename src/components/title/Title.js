import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    const { title } = this.props;

    return (
      <div id="block-chriskinch-page-title" className="block block-core block-page-title-block">
        <h1 className="page-title">{ title }</h1>
      </div>
    );
  }
}

