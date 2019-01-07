import React, { Component } from 'react';
import { Link } from 'react-router';

class TeaserImage extends Component {
  render() {
    const { path, alt, defaultCrop, title } = this.props;
    const { url, height, width } = defaultCrop;

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

TeaserImage.defaultProps = {
  defaultCrop: {
    url: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    height: 500,
    width: 500
  }
}

export default TeaserImage
