'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeaserImage = function (_Component) {
  _inherits(TeaserImage, _Component);

  function TeaserImage() {
    _classCallCheck(this, TeaserImage);

    return _possibleConstructorReturn(this, (TeaserImage.__proto__ || Object.getPrototypeOf(TeaserImage)).apply(this, arguments));
  }

  _createClass(TeaserImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          alt = _props.alt,
          defaultCrop = _props.defaultCrop,
          title = _props.title;
      var url = defaultCrop.url,
          height = defaultCrop.height,
          width = defaultCrop.width;


      return _react2.default.createElement(
        'div',
        { className: 'field field--name-field-teaser-image field--type-image field--label-hidden field__item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: path },
          _react2.default.createElement(
            'picture',
            null,
            _react2.default.createElement('source', { srcSet: url, media: '(max-width: 600px)' }),
            _react2.default.createElement('img', { src: url, alt: alt, title: title, height: height, width: width, 'typeof': 'foaf:Image' })
          )
        )
      );
    }
  }]);

  return TeaserImage;
}(_react.Component);

TeaserImage.defaultProps = {
  defaultCrop: {
    url: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    height: 500,
    width: 500
  }
};

exports.default = TeaserImage;

//# sourceMappingURL=TeaserImage.js.map