import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Article from "./pages/Article";

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homepage}></IndexRoute>
      <Route path="node(/:uuid)" name="article" component={Article}></Route>
    </Route>
  </Router>,
app);

registerServiceWorker();
