import React, { Component } from 'react';
import AppStore from "../stores/AppStore";
import TeaserImage from './teaser/TeaserImage.js';
import Tag from './teaser/Tag.js';

export default class Teaser extends Component {
  render() {
    const base_url = process.env.REACT_APP_API_BASE_URL;
    const { attributes, relationships } = this.props;
    const { title, body, nid } = attributes;
    const { field_category, field_tags, field_teaser_image } = relationships;
    const node_path = "/node/" + nid;

    const CategoryComponents = field_category.data.map((category) => {
      let mapped_category = AppStore.getInclude({'id': category.id});
      return <Tag key={category.id} data={ mapped_category } {...category}/>;
    });
    const TagComponents = field_tags.data.map((tags) => {
      let mapped_tags = AppStore.getInclude({'id': tags.id});      
      return <Tag key={tags.id} data={ mapped_tags } {...tags}/>;
    });
    const mapped_teaser_image = AppStore.getInclude({'id': field_teaser_image.data.id});
    const teaser_image_url = base_url + mapped_teaser_image.attributes.url;

    return (
      <div className="views-row">
        <article className="node node--type-article node--promoted node--view-mode-teaser">
          <h2 className="node--title">
            <a href={ node_path }>{ title }</a>
          </h2>
          <TeaserImage url={ teaser_image_url } meta={ field_teaser_image.data.meta } path={ node_path } />
          <ul className="field field--name-field-category field--type-entity-reference field--label-hidden field__items quickedit-field">
            { CategoryComponents }
          </ul>
          <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field" dangerouslySetInnerHTML={{__html: body.value }}></div>
          <ul className="field field--name-field-tags field--type-entity-reference field--label-hidden field__items quickedit-field">
            { TagComponents }
          </ul>
        </article>
      </div>
    );
  }
}


