import React, { Component } from 'react';

import Teaser from "../components/Teaser";
import * as AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Temp from "./Temp";

class Collection extends Component {
  constructor(){
    super();
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: []
    }
    AppActions.loadCollection(process.env.REACT_APP_ARTCILE_COLLECTION_API_URL);
  }

  componentWillMount() {
    AppStore.on("change", this.getArticles);
  }

  componentWillUnmount() {
    AppStore.removeListener("change", this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: AppStore.getAll('articles'),
    });
  }

  render() {
    const Teasers = [{
      id: '1',
      description: 'The Coolest GraphQL Backend 😎',
      url: 'https://www.graph.cool'
    }, {
      id: '2',
      description: 'The Best GraphQL Client',
      url: 'http://dev.apollodata.com/'
    }]

    const articles = this.state.articles.data;
    let TeaserComponents = [];
    if(articles) {
      TeaserComponents = articles.map((article) => {
        return <Teaser key={article.id} {...article}/>;
      });
    }

    return (
      <div className="views-element-container">
        <div className="view view-frontpage view-id-frontpage">
          <div className="view-content">
            { Teasers.map(article => (
              <Temp key={article.id} {...article}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Collection

// const ALL_LINKS_QUERY = gql`
//   query AllLinksQuery {
//     allLinks {
//       id
//       createdAt
//       url
//       description
//     }
//   }
// `

// export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (Collection)