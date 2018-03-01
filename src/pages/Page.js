import React, { Component } from 'react';
import Node from 'components/Node';
import { graphql } from 'react-apollo';
import { RoutePath } from 'queries/node.graphql.js';

class Page extends Component {
  constructor(){
    super();
    this.state = {
      nodeContext: null
    }
  }

  componentWillReceiveProps(props) {
    if(!props.data.loading) {
      this.setState({
        nodeContext: props.data.route.nodeContext
      });
    }
  }

  render() {
    return (
      <div id="block-chriskinch-content" className="block block-system block-system-main-block">
        <Node {... this.state.nodeContext } />
      </div>
    );
  }
}

const PageWithData = graphql(RoutePath, {
  options: (props) => ({
    variables: {
      path: props.location.pathname
    },
  }),
})(Page);

export default PageWithData