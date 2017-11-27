import React, { Component } from 'react';

export default class Tag extends Component {
  render() {
    const { name, entityUrl } = this.props.entity;
    const { alias } = entityUrl;

    return (
      <li className="field__item">
        <a href={ alias }>{ name }</a>
      </li>
    );
  }
}


