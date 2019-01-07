import React, { Component } from 'react';

class NodeImage extends Component {
  render() {
    const { alt, wideCrop, title } = this.props;
    const { url, height, width } = wideCrop;

    return (
      <li className="field__item">
        <img src={ url } width={ width } height={ height } alt={ alt } title={ title } typeof="foaf:Image" className="image-style-scale-width-830" />
      </li>
    );
  }
}

NodeImage.defaultProps = {
  wideCrop: {
    url: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    height: 900,
    width: 1600
  }
}

export default NodeImage