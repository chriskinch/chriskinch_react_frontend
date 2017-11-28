import React, { Component } from 'react';

export default class Tag extends Component {
  render() {
    const { name, url } = this.props;
    const { alias } = url;

    return (
      <li className="field__item">
        <a href={ alias }>{ name }</a>
      </li>
    );
  }
}


