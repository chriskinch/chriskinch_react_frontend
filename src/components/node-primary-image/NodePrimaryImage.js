import React, { Component } from 'react';

class NodePrimaryImage extends Component {
  render() {
    const { alt, wideCrop, title } = this.props;
    const { url, height, width } = wideCrop;

    return (
      <img src={ url } alt={ alt } title={ title } height={ height } width={ width } typeof="foaf:Image" className="image-style-scale-width-830" />
    );
  }
}

NodePrimaryImage.defaultProps = {
  wideCrop: {
    url: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    height: 900,
    width: 1600
  }
}

export default NodePrimaryImage