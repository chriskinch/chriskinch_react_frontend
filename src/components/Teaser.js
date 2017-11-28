import React, { Component } from 'react';
import { Link } from 'react-router';
import Tag from 'components/Tag';
import TeaserImage from 'components/teaser/TeaserImage';

export default class Teaser extends Component {

  render() {
    console.log(this.props);
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
      <div className="views-row">
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


