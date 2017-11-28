import React, { Component } from 'react';

import Image from 'components/node/Image'
import PrimaryImage from 'components/node/PrimaryImage'
import ProjectLink from 'components/node/ProjectLink'
import Tag from 'components/Tag';

export default class Node extends Component {
  render() {
    console.log(this.props)
    const { body, links, categories, tags, primaryImage, images } = this.props;  
    
    let CategoryComponents, TagComponents, ProjectLinkComponents, ImageComponents = [];
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
    if(links) {
      ProjectLinkComponents = links.map((link, i) => {
        return <ProjectLink key={ i } {...link}/>;
      });
    }
    if(images) {
      ImageComponents = images.map((image) => {
        return <Image key={image.uuid} {...image}/>;
      });
    }

    return (
      <article className="contextual-region node node--type-article node--promoted node--view-mode-full">
        <div className="group-meta">
          <div dangerouslySetInnerHTML={{__html: body.full }} className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field"></div>
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
          <PrimaryImage {...primaryImage} />
        </div>
        <ul className="field field--name-field-image field--type-image field--label-hidden field__items quickedit-field">
          { ImageComponents }
        </ul>
      </article>
    );
  }
}