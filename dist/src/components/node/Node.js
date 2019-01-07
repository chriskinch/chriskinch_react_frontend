'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NodeImage = require('../node-image/NodeImage');

var _NodeImage2 = _interopRequireDefault(_NodeImage);

var _NodePrimaryImage = require('../node-primary-image/NodePrimaryImage');

var _NodePrimaryImage2 = _interopRequireDefault(_NodePrimaryImage);

var _NodeLink = require('../node-link/NodeLink');

var _NodeLink2 = _interopRequireDefault(_NodeLink);

var _Tag = require('../tag/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_Component) {
  _inherits(Node, _Component);

  function Node() {
    _classCallCheck(this, Node);

    return _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).apply(this, arguments));
  }

  _createClass(Node, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          body = _props.body,
          links = _props.links,
          categories = _props.categories,
          tags = _props.tags,
          primaryImage = _props.primaryImage,
          images = _props.images;


      var CategoryComponents = void 0,
          TagComponents = void 0,
          LinkComponents = void 0,
          ImageComponents = [];
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
      if (links) {
        LinkComponents = links.map(function (link, i) {
          return _react2.default.createElement(_NodeLink2.default, Object.assign({ key: i }, link));
        });
      }
      if (images) {
        ImageComponents = images.map(function (image) {
          return _react2.default.createElement(_NodeImage2.default, Object.assign({ key: image.uuid }, image));
        });
      }

      return _react2.default.createElement(
        'article',
        { className: 'contextual-region node node--type-article node--promoted node--view-mode-full' },
        _react2.default.createElement(
          'div',
          { className: 'group-meta' },
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: body.full }, className: 'clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item quickedit-field' }),
          _react2.default.createElement(
            'div',
            { className: 'group-tags' },
            _react2.default.createElement(
              'ul',
              { className: 'field field--name-field-category field__items' },
              CategoryComponents
            ),
            _react2.default.createElement(
              'ul',
              { className: 'field field--name-field-tags field__items' },
              TagComponents
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'field field--name-field-link field--type-link field--label-visually_hidden quickedit-field' },
            _react2.default.createElement(
              'ul',
              { className: 'field__items' },
              LinkComponents
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'field field--name-field-primary-image field--type-image field--label-hidden field__item quickedit-field' },
          _react2.default.createElement(_NodePrimaryImage2.default, primaryImage)
        ),
        _react2.default.createElement(
          'ul',
          { className: 'field field--name-field-image field--type-image field--label-hidden field__items quickedit-field' },
          ImageComponents
        )
      );
    }
  }]);

  return Node;
}(_react.Component);

Node.defaultProps = {
  body: {
    full: "..."
  }
};

exports.default = Node;

//# sourceMappingURL=Node.js.map