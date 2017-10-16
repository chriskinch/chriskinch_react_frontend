import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TeaserImage extends Component {
  render() {
    const { meta, path, url } = this.props;
    const { alt, title } = meta;

    return (
      <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
        <Link to={ path }>
          <img src={ url } width="500" height="500" alt={ alt } title={ title } typeof="foaf:Image" className="image-style-scale-crop-500" />
        </Link>
      </div>
    );
  }
}


