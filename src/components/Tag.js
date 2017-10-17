import React, { Component } from 'react';

export default class Tag extends Component {
  render() {
    const { name } = this.props.attributes;

    return (
      <li className="field__item">
        <a href="/taxonomy/term/1">{ name }</a>
      </li>
    );
  }
}


