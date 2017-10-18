import React, { Component } from 'react';

import * as AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import Node from '../components/Node';

export default class Page extends Component {
  constructor(){
    super();
    this.getNode = this.getNode.bind(this);
    this.state = {
      complete: false
    };
  }

  componentWillMount() {
    AppActions.loadNode(process.env.REACT_APP_ARTICLE_API_URL + this.props.params.uuid + process.env.REACT_APP_ARTICLE_API_QUERY);
    AppStore.on("change", this.getNode);
  }

  componentWillUnmount() {
    AppStore.removeListener("change", this.getNode);
  }

  getNode() {
    this.setState({
      node: AppStore.getAll('node'),
      complete: true
    });
    
  }

  render() {
    const { node } = this.state;
    const isComplete = this.state.complete;

    let NodeComponent = null;
    if (isComplete) {
      NodeComponent = <Node node={ node } />;
    }

    return (
      <div id="block-chriskinch-content" className="block block-system block-system-main-block">
        { NodeComponent }
      </div>

    );
  }
}