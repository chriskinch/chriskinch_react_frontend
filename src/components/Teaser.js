import React, { Component } from 'react';

export default class Teaser extends Component {
  constructor(){
    super();
  }

  render() {
    const { attributes } = this.props;
    const { title, body } = attributes;

    return (
      <div className="views-row">
        <h2>{ title }</h2>
        <div dangerouslySetInnerHTML={{__html: body.value }}></div>
      </div>
    );
  }
}


