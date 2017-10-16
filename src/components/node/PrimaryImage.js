import React, { Component } from 'react';

export default class PrimaryImage extends Component {
  render() {
    const { meta, url } = this.props;
    const { alt, title } = meta;

    return (
      <img src={ url } width="830" height="572" alt={ alt } title={ title } typeof="foaf:Image" className="image-style-scale-width-830" />
    );
  }
}


