import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Collection from "./pages/Collection";
import Layout from "./pages/Layout";
import Page from "./pages/Page";

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

export const client = new ApolloClient({
  link: new HttpLink({
    uri:'http://chriskinch.com.drupal-8.x.dev/graphql'
  }),
  cache: new InMemoryCache({
    fragmentMatcher
  }),
  dataIdFromObject: (result: Object) => {
    return result.id
  }
});

const app = document.getElementById('root');

ReactDOM.render(
	<ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Collection}></IndexRoute>
        <Route path="node(/:uuid)" name="page" component={Page}></Route>
      </Route>
    </Router>
  </ApolloProvider>,
app);

registerServiceWorker();