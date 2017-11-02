import React, { Component } from 'react';
import { Link } from 'react-router';
import Tag from './Tag';
import TeaserImage from './teaser/TeaserImage';

export default class Teaser extends Component {

  render() {
    const base_url = process.env.REACT_APP_API_BASE_URL;
    const { attributes, relationships } = this.props;
    const { uuid, title, body } = attributes;
    const { field_category, field_tags, field_teaser_image } = relationships;
    const teaser_image_url = base_url + field_teaser_image.data.attributes.url;
    const node_path = "/node/" + uuid;
    
    let CategoryComponents, TagComponents = [];
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

    return (
      <div className="views-row">
        <article className="node node--type-article node--promoted node--view-mode-teaser">
          <h2 className="node--title">
            <Link to={ node_path }>{ title }</Link>
          </h2>
          <TeaserImage url={ teaser_image_url } meta={ field_teaser_image.data.meta } path={ node_path } />
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


