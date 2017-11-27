import React, { Component } from 'react';

import Image from 'components/node/Image'
import PrimaryImage from 'components/node/PrimaryImage'
import ProjectLink from 'components/node/ProjectLink'
import Tag from 'components/Tag';

export default class Node extends Component {
  render() {
    const base_url = process.env.REACT_APP_API_BASE_URL;
    const { node } = this.props;
    const { attributes, relationships } = node.data;
    const { body, field_link } = attributes;  
    const { field_category, field_tags, field_primary_image, field_image } = relationships;
    const primary_image_url = base_url + field_primary_image.data.attributes.url;
    
    let CategoryComponents, TagComponents, ProjectLinkComponents, ImageComponents = [];
    if(field_category) {
      CategoryComponents = field_category.data.map((category) => {
        return <Tag key={category.id} {...category}/>;
      });
    }
    if(field_tags) {
      TagComponents = field_tags.data.map((tags) => {
        return <Tag key={tags.id} {...tags}/>;
      });
    }
    if(field_link) {
      ProjectLinkComponents = field_link.map((link, i) => {
        return <ProjectLink key={ i } {...link}/>;
      });
    }
    if(field_image) {
      ImageComponents = field_image.data.map((image) => {
        return <Image key={ image.id } {...image}/>;
      });
    }

    return (
      <article className="contextual-region node node--type-article node--promoted node--view-mode-full">
        <div className="group-meta">
          <div dangerouslySetInnerHTML={{__html: body.value }} className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field"></div>
          <div className="group-tags">
            <ul className="field field--name-field-category field__items">
              { CategoryComponents }
            </ul>
            <ul className="field field--name-field-tags field__items">
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