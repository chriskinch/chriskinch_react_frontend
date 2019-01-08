import React, { Component } from 'react';
import GoogleMap from '../google-map/GoogleMap';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="region region-footer">
          <div id="block-googlemapfullwidth" className="block block-block-content block-block-content8c1e0e1f-2eb8-417c-86c0-0d8f5e02f65b">
            <GoogleMap />
          </div>
        </div>
      </footer>
    );
  }
}