import React, { Component } from 'react';
import { Link } from 'react-router';
import Tag from 'components/Tag';
import TeaserImage from 'components/teaser/TeaserImage';

export default class Teaser extends Component {

  render() {
    const {
      entityUuid,
      entityLabel,
      body,
      fieldCategory,
      fieldTags,
      fieldTeaserImage,
      fieldPrimaryImage
    } = this.props;
    const node_path = "/node/" + entityUuid;

    const image_path = (fieldTeaserImage)? fieldTeaserImage.defaultCrop.url : fieldPrimaryImage.defaultCrop.url;
    let CategoryComponents, TagComponents = [];
    if(fieldCategory) {
      CategoryComponents = fieldCategory.map((category) => {
        return <Tag key={category.entity.uuid} {...category}/>;
      });
    }
    if(fieldTags) {
      TagComponents = fieldTags.map((tags) => {   
        return <Tag key={tags.entity.uuid} {...tags}/>;
      });
    }

    return (
      <div className="views-row">
        <article className="node node--type-article node--promoted node--view-mode-teaser">
          <h2 className="node--title">
            <Link to={ node_path }>{ entityLabel }</Link>
          </h2>
          <TeaserImage url={ image_path } path={ node_path } {...fieldTeaserImage} />
          <ul className="field field--name-field-category field__items">
            { CategoryComponents }
          </ul>
          <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field" dangerouslySetInnerHTML={{__html: body.value }}></div>
          <ul className="field field--name-field-tags field__items">
            { TagComponents }
          </ul>
        </article>
      </div>
    );
  }
}


