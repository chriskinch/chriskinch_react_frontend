import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Collection from "./pages/Collection";
import Layout from "./pages/Layout";
import Page from "./pages/Page";

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Collection}></IndexRoute>
      <Route path="node(/:uuid)" name="page" component={Page}></Route>
    </Route>
  </Router>,
app);

registerServiceWorker();