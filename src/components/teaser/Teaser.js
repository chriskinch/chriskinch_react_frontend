import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Tag from '../tag/Tag';
import TeaserImage from '../teaser-image/TeaserImage';
import style from './style.scss';

/**
 * @render react
 * @name Teaser
 * @description Card rendering teaser data with an image.
 * @example
 * <Teaser url={{alias:"http://chriskinch.netlify.com"}} title="My teaser card" body="Example body txt" primaryImage={{wideCrop:{url:"http://www.roshe-run.co.uk/wp-content/uploads/2018/10/Cat-Picture-4.jpg"}}} />
 */

class Teaser extends Component {

  render() {
    const { url, title, body, categories, tags, teaserImage, primaryImage } = this.props;
    const { alias } = url;
    const image = (teaserImage)? teaserImage : primaryImage;

    let CategoryComponents, TagComponents = [];
    if(categories) {
      CategoryComponents = categories.map((category) => {
        return <Tag key={category.entity.uuid} {...category.entity}/>;
      });
    }
    if(tags) {
      TagComponents = tags.map((tag) => {   
        return <Tag key={tag.entity.uuid} {...tag.entity}/>;
      });
    }

    return (
      <div className={ style.Teaser }>
        <article className="node node--type-article node--promoted node--view-mode-teaser">
          <h2 className="node--title">
            <Link to={ alias }>{ title }</Link>
          </h2>
          <TeaserImage path={ alias } {...image} />
          <ul className="field field--name-field-category field__items">
            { CategoryComponents }
          </ul>
          <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field" dangerouslySetInnerHTML={{__html: body.full }}></div>
          <ul className="field field--name-field-tags field__items">
            { TagComponents }
          </ul>
        </article>
      </div>
    );
  }
}

Teaser.propTypes = {
  /**
   * @property {object} url URL data object
   */
  url: PropTypes.shape({

    /**
     * @property {string} alias URL alias
     */
    alias: PropTypes.string,
  }),

  /**
   * @property {string} body Full body content including markup
   */
  body: PropTypes.string,

  /**
   * @property {array} categories List of category objects
   */
  categories: PropTypes.array,

  /**
   * @property {array} tags List of tag objects
   */
  tags: PropTypes.array,

  /**
   * @property {object} [teaserImage] Teaser image data object
   */
  teaserImage: PropTypes.object,

  /**
   * @property {object} primaryImage Primary image data object
   */
  primaryImage: PropTypes.object,
}

Teaser.defaultProps = {
  url: { alias: null },
  title: "...",
  body: {
    full: ""
  }
}

export default Teaser