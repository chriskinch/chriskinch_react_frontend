import React, { Component } from 'react';

import AppStore from "../stores/AppStore";

export default class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      articles: AppStore.loadArticles()
    }
  }

  render() {
    return (
      <div>
        <h1>Homepage!</h1>
      </div>
    );
  }
}


