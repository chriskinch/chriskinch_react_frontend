import React, { Component } from 'react';

import Teaser from "components/Teaser";

import { graphql } from 'react-apollo';
import { HomePosts } from 'config/homepage.graphql.js';

class Collection extends Component {

  render() {

    if(this.props.data.loading) {
      return(
        <div>LOADING</div>
      );
    }

    const nodes = this.props.data.nodeQuery.entities;
    let TeaserComponents = [];
    if(nodes) {  
      TeaserComponents = nodes.map((node) => {
        return <Teaser key={node.entityUuid} {...node}/>;
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

const CollectionWithData = graphql(HomePosts)(Collection);

export default CollectionWithData

