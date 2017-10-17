import React, { Component } from 'react';

export default class Image extends Component {
  render() {
  	const base_url = process.env.REACT_APP_API_BASE_URL;
    const { meta, attributes} = this.props;
    const { url } = attributes;
    const { alt, title } = meta;
    const image_url = base_url + url;

    return (
      <li className="field__item">
        <img src={ image_url } width="830" height="572" alt={ alt } title={ title } typeof="foaf:Image" className="image-style-scale-width-830" />
      </li>
    );
  }
}


