import React, { Component } from 'react';

export default class PrimaryImage extends Component {
  render() {
    const { alt, wideCrop, title } = this.props;
    const { url, height, width } = wideCrop;

    return (
      <img src={ url } alt={ alt } title={ title } height={ height } width={ width } typeof="foaf:Image" className="image-style-scale-width-830" />
    );
  }
}


