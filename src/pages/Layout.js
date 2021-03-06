import React, { Component } from 'react';

import AppStore from "stores/AppStore";

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Navigation from "components/navigation/Navigation";
import Social from "components/social/Social";
import Title from "components/title/Title";

import "sass/styles.critical.css";
import "sass/styles.noncritical.css";

class Layout extends Component {
  constructor(){
    super();
    this.getTitle = this.getTitle.bind(this);
    this.state = {
      title: null
    }
  }

  componentWillMount() {
    AppStore.on("change", this.getTitle);
  }

  componentWillUnmount() {
    AppStore.removeListener("change", this.getTitle);
    this.clearTitle.bind(this);
  }

  getTitle() {
    this.setState({
      title: AppStore.getTitle()
    });
  }

  clearTitle() {
    this.setState({
      title: null
    });
  }

  render() {
    const { location } = this.props;
    const { title } = this.state;
    const TitleComponent = (location.pathname !== '/') ? <Title title= { title } /> : null

    return (
      <div className="layout-container">
          <Header />
        <div className="region region-primary-menu">
          <Navigation />
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

export default Layout