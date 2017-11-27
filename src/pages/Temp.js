import React, { Component } from 'react';

export default class Temp extends Component {
  render() {
    //console.log(this.props);
    const { description } = this.props;
    return (
      <div className="views-row">
        <article className="node node--type-article node--promoted node--view-mode-teaser">
          { description }
        </article>
      </div>
    );
  }
}


