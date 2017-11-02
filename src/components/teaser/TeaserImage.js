import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TeaserImage extends Component {
  render() {
    const { meta, path, url } = this.props;
    const { alt, title } = meta;

    return (
      <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
        <Link to={ path }>
          <picture>
            <source src={ url } media="(max-width: 600px)" />
            <img src={ url } alt={ alt } title={ title } typeof="foaf:Image" />
          </picture>
        </Link>
      </div>
    );
  }
}


