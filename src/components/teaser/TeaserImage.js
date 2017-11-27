import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TeaserImage extends Component {
  render() {
    const { path, url, alt, height, width, title } = this.props;

    return (
      <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
        <Link to={ path }>
          <picture>
            <source srcSet={ url } media="(max-width: 600px)" />
            <img src={ url } alt={ alt } title={ title } height={ height } width={ width } typeof="foaf:Image" />
          </picture>
        </Link>
      </div>
    );
  }
}


