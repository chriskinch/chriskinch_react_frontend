import React, { Component } from 'react';
import AppStore from "../stores/AppStore";
import TeaserImage from './teaser/TeaserImage';
import Tag from './Tag';
import { Link } from 'react-router';

export default class Teaser extends Component {

  render() {
    const base_url = process.env.REACT_APP_API_BASE_URL;
    const { attributes, relationships } = this.props;
    const { uuid, title, body } = attributes;
    const { field_category, field_tags, field_teaser_image } = relationships;
    const node_path = "/node/" + uuid;

    const CategoryComponents = field_category.data.map((category) => {
      let mapped_category = AppStore.getInclude({'id': category.id}, 'articles');
      return <Tag key={category.id} attributes={ mapped_category.attributes } {...category}/>;
    });
    const TagComponents = field_tags.data.map((tags) => {
      let mapped_tags = AppStore.getInclude({'id': tags.id}, 'articles');      
      return <Tag key={tags.id} attributes={ mapped_tags.attributes } {...tags}/>;
    });
    const mapped_teaser_image = AppStore.getInclude({'id': field_teaser_image.data.id}, 'articles');
    const teaser_image_url = base_url + mapped_teaser_image.attributes.url;

    return (
      <div className="views-row">
        <article className="node node--type-article node--promoted node--view-mode-teaser">
          <h2 className="node--title">
            <Link to={ node_path }>{ title }</Link>
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


