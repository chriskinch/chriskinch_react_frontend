import React, { Component } from 'react';

import NodeImage from '../node-image/NodeImage'
import NodePrimaryImage from '../node-primary-image/NodePrimaryImage'
import NodeLink from '../node-link/NodeLink'
import Tag from '../tag/Tag';

class Node extends Component {
  render() {
    const { body, links, categories, tags, primaryImage, images } = this.props;  
    
    let CategoryComponents, TagComponents, LinkComponents, ImageComponents = [];
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
      LinkComponents = links.map((link, i) => {
        return <NodeLink key={ i } {...link}/>;
      });
    }
    if(images) {
      ImageComponents = images.map((image) => {
        return <NodeImage key={image.uuid} {...image}/>;
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
              { LinkComponents }
            </ul>
          </div>
        </div>
        <div className="field field--name-field-primary-image field--type-image field--label-hidden field__item quickedit-field">
          <NodePrimaryImage {...primaryImage} />
        </div>
        <ul className="field field--name-field-image field--type-image field--label-hidden field__items quickedit-field">
          { ImageComponents }
        </ul>
      </article>
    );
  }
}

Node.defaultProps = {
  body: {
    full: "..."
  }
}

export default Node