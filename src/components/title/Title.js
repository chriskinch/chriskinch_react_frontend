import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * @render react
 * @name Title
 * @description Content for the `Title` component
 * @example
 * <Title text="Hello world!" />
 */

class Title extends Component {
  render() {
    const { text } = this.props;

    return (
      <div id="block-chriskinch-page-title" className="block block-core block-page-title-block">
        <h1 className="page-title">{ text }</h1>
      </div>
    );
  }
}

Title.propTypes = {
  /**
   * @property {string} text content of the title
   */
  title: PropTypes.string
}

Title.defaultProps = {
  text: 'Hello world!',
}

export default Title