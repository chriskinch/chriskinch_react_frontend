'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _Tag = require('../tag/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _TeaserImage = require('../teaser-image/TeaserImage');

var _TeaserImage2 = _interopRequireDefault(_TeaserImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @render react
 * @name Teaser
 * @description Card rendering teaser data with an image.
 * @example
 * <Teaser url="http://chriskinch.netlify.com" title="My teaser card" body="Example body txt" primaryImage="http://www.roshe-run.co.uk/wp-content/uploads/2018/10/Cat-Picture-4.jpg" />
 */

var Teaser = function (_Component) {
  _inherits(Teaser, _Component);

  function Teaser() {
    _classCallCheck(this, Teaser);

    return _possibleConstructorReturn(this, (Teaser.__proto__ || Object.getPrototypeOf(Teaser)).apply(this, arguments));
  }

  _createClass(Teaser, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          title = _props.title,
          body = _props.body,
          categories = _props.categories,
          tags = _props.tags,
          teaserImage = _props.teaserImage,
          primaryImage = _props.primaryImage;
      var alias = url.alias;

      var image = teaserImage ? teaserImage : primaryImage;

      var CategoryComponents = void 0,
          TagComponents = [];
      if (categories) {
        CategoryComponents = categories.map(function (category) {
          return _react2.default.createElement(_Tag2.default, Object.assign({ key: category.entity.uuid }, category.entity));
        });
      }
      if (tags) {
        TagComponents = tags.map(function (tag) {
          return _react2.default.createElement(_Tag2.default, Object.assign({ key: tag.entity.uuid }, tag.entity));
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'views-row' },
        _react2.default.createElement(
          'article',
          { className: 'node node--type-article node--promoted node--view-mode-teaser' },
          _react2.default.createElement(
            'h2',
            { className: 'node--title' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: alias },
              title
            )
          ),
          _react2.default.createElement(_TeaserImage2.default, Object.assign({ path: alias }, image)),
          _react2.default.createElement(
            'ul',
            { className: 'field field--name-field-category field__items' },
            CategoryComponents
          ),
          _react2.default.createElement('div', { className: 'clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field', dangerouslySetInnerHTML: { __html: body.full } }),
          _react2.default.createElement(
            'ul',
            { className: 'field field--name-field-tags field__items' },
            TagComponents
          )
        )
      );
    }
  }]);

  return Teaser;
}(_react.Component);

Teaser.propTypes = {
  /**
   * @property {object} url URL data object
   */
  url: _propTypes2.default.shape({

    /**
     * @property {string} alias URL alias
     */
    alias: _propTypes2.default.string
  }),

  /**
   * @property {string} body Full body content including markup
   */
  body: _propTypes2.default.string,

  /**
   * @property {array} categories List of category objects
   */
  categories: _propTypes2.default.array,

  /**
   * @property {array} tags List of tag objects
   */
  tags: _propTypes2.default.array,

  /**
   * @property {object} [teaserImage] Teaser image data object
   */
  teaserImage: _propTypes2.default.object,

  /**
   * @property {object} primaryImage Primary image data object
   */
  primaryImage: _propTypes2.default.object
};

Teaser.defaultProps = {
  url: { alias: null },
  title: "...",
  body: {
    full: ""
  }
};

exports.default = Teaser;

//# sourceMappingURL=Teaser.js.map