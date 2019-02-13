import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * @render react
 * @name TeaserImage
 * @description Linked teaser image using the <picture> tag
 * @example
 * <TeaserImage path="http://chriskinch.netlify.com" alt="Teaser Image" title="Grey pixel" />
 */

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

TeaserImage.propTypes = {
  /**
   * @property {string} path URL for the image to be linked to
   */
  path: PropTypes.string,

  /**
   * @property {string} alt Text for the image alt tag
   */
  alt: PropTypes.string,

  /**
   * @property {object} defaultCrop Crop information
   */
  defaultCrop: PropTypes.shape({
    /**
     * @property {string} defaultCrop.url URL for the image src
     */
    url: PropTypes.string,
    /**
     * @property {number} defaultCrop.height Image height
     */
    height: PropTypes.number,
    /**
     * @property {number} defaultCrop.width Image width
     */
    width: PropTypes.number,
  }),

  /**
   * @property {string} title Text content of the image title
   */
  title: PropTypes.string
}

TeaserImage.defaultProps = {
  defaultCrop: {
    url: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    height: 500,
    width: 500
  }
}

export default TeaserImage
