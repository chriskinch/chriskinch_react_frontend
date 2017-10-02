import React, { Component } from 'react';

import Teaser from "../components/Teaser";
import * as AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

export default class Homepage extends Component {
  constructor(){
    super();
    this.getArticles = this.getArticles.bind(this);
    this.state = {
      articles: []
    }
    AppActions.loadTodos();
  }

  componentWillMount() {
    AppStore.on("change", this.getArticles);
  }

  componentWillUnmount() {
    AppStore.removeListener("change", this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: AppStore.getAll(),
    });
  }

  render() {
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
            { TeaserComponents }
          </div>
        </div>
      </div>
    );
  }
}


