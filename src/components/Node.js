import React, { Component } from 'react';

import Image from './node/Image'
import PrimaryImage from './node/PrimaryImage'
import ProjectLink from './node/ProjectLink'
import Tag from './Tag';

import AppStore from "../stores/AppStore";

export default class Node extends Component {
  render() {
    const base_url = process.env.REACT_APP_API_BASE_URL;
    const { node } = this.props;

    const { attributes, relationships } = node.data;
    const { body, field_link } = attributes;
    
    const { field_category, field_tags, field_primary_image, field_image } = relationships;
    
    const CategoryComponents = field_category.data.map((category) => {
      let mapped_category = AppStore.getInclude({'id': category.id}, 'node');
      return <Tag key={category.id} data={ mapped_category } {...category}/>;
    });
    const TagComponents = field_tags.data.map((tags) => {
      let mapped_tags = AppStore.getInclude({'id': tags.id}, 'node');
      return <Tag key={tags.id} data={ mapped_tags } {...tags}/>;
    });
    let ProjectLinkComponents = [];
    if(field_link) {
      ProjectLinkComponents = field_link.map((link, i) => {
        return <ProjectLink key={ i } {...link}/>;
      });
    }

    const mapped_primary_image = AppStore.getInclude({'id': field_primary_image.data.id}, 'node');
    const primary_image_url = base_url + mapped_primary_image.attributes.url;

    const ImageComponents = field_image.data.map((image) => {
      let mapped_images = AppStore.getInclude({'id': image.id}, 'node');
      return <Image key={image.id} data={ mapped_images } {...image}/>;
    });

    return (
      <article className="contextual-region node node--type-article node--promoted node--view-mode-full">
        <div className="group-meta">
          <div dangerouslySetInnerHTML={{__html: body.value }} className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field"></div>
          <div className="group-tags">
            <ul className="field field--name-field-category field--type-entity-reference field--label-hidden field__items">
              { CategoryComponents }
            </ul>
            <ul className="field field--name-field-tags field--type-entity-reference field--label-hidden field__items">
              { TagComponents }
            </ul>
          </div>
          <div className="field field--name-field-link field--type-link field--label-visually_hidden quickedit-field">
            <ul className="field__items">
              { ProjectLinkComponents }
            </ul>
          </div>
        </div>
        <div className="field field--name-field-primary-image field--type-image field--label-hidden field__item quickedit-field">
          <PrimaryImage url={ primary_image_url } meta={ field_primary_image.data.meta } />
        </div>
        <ul className="field field--name-field-image field--type-image field--label-hidden field__items quickedit-field">
          { ImageComponents }
        </ul>
      </article>
    );
  }
}