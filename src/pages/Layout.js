import React, { Component } from 'react';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Nav from "../components/layout/Nav";
import Social from "../components/Social";
import Title from "../components/Title";
import * as AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import "../css/styles.critical.css";
import "../css/styles.noncritical.css";

export default class Layout extends Component {
  constructor(){
    super();

    this.getBlocks = this.getBlocks.bind(this);
    this.state = {
      blocks: []
    }
    AppActions.loadBlocks(process.env.REACT_APP_BLOCK_API_URL);
  }

  componentWillMount() {
    AppStore.on("change", this.getBlocks);
  }

  componentWillUnmount() {
    AppStore.removeListener("change", this.getBlocks);
  }

  getBlocks() {
    this.setState({
      blocks: AppStore.getAll('blocks'),
    });
  }

  render() {
    console.log("BLOCKS:", this.state.blocks);
    const { location } = this.props;
    const TitleComponent = (location.pathname !== '/') ? <Title /> : null

    return (
      <div className="layout-container">
        <Header />
        <div className="region region-primary-menu">
          <Nav />
          <Social />
        </div>
        <main>
          <div className="layout-content">
            <div className="region region-content">
              { TitleComponent }
              <div id="block-chriskinch-content" className="block block-system block-system-main-block">
                { this.props.children }
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

