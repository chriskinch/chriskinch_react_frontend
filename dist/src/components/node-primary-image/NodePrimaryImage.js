"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodePrimaryImage = function (_Component) {
  _inherits(NodePrimaryImage, _Component);

  function NodePrimaryImage() {
    _classCallCheck(this, NodePrimaryImage);

    return _possibleConstructorReturn(this, (NodePrimaryImage.__proto__ || Object.getPrototypeOf(NodePrimaryImage)).apply(this, arguments));
  }

  _createClass(NodePrimaryImage, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          alt = _props.alt,
          wideCrop = _props.wideCrop,
          title = _props.title;
      var url = wideCrop.url,
          height = wideCrop.height,
          width = wideCrop.width;


      return _react2.default.createElement("img", { src: url, alt: alt, title: title, height: height, width: width, "typeof": "foaf:Image", className: "image-style-scale-width-830" });
    }
  }]);

  return NodePrimaryImage;
}(_react.Component);

NodePrimaryImage.defaultProps = {
  wideCrop: {
    url: "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    height: 900,
    width: 1600
  }
};

exports.default = NodePrimaryImage;

//# sourceMappingURL=NodePrimaryImage.js.map