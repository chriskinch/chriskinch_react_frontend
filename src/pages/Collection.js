import React, { Component } from 'react';

import Teaser from "components/teaser/Teaser";

import { graphql } from 'react-apollo';
import { HomeNodes } from 'queries/homepage.graphql.js';

class Collection extends Component {

  render() {
    const { entities } = this.props.data.nodeQuery || {};
    console.log("DATA:", this.props.data);
    let TeaserComponents = [];
    if(entities) {  
      TeaserComponents = entities.map((entity) => {
        return <Teaser key={entity.uuid} {...entity}/>;
      });
    }

    return (
      <div className="views-element-container">
        <div className="view view-frontpage view-id-frontpage">
          <div className="view-content">
            { TeaserComponents }
          </div>
        </div>
      </div>
    );
  }
}

const CollectionWithData = graphql(HomeNodes)(Collection);

export default CollectionWithData

