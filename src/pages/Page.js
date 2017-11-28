import React, { Component } from 'react';
import Node from 'components/Node';
import { graphql } from 'react-apollo';
import { RoutePath } from 'queries/node.graphql.js';

class Page extends Component {

  render() {
    console.log(this.props);
    if(this.props.data.loading) {
      return(
        <div>LOADING</div>
      );
    }
    console.log(this.props);
    const { nodeContext } = this.props.data.route;

    return (
      <div id="block-chriskinch-content" className="block block-system block-system-main-block">
        <Node {... nodeContext } />
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