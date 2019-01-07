"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Social = function (_Component) {
	_inherits(Social, _Component);

	function Social() {
		_classCallCheck(this, Social);

		return _possibleConstructorReturn(this, (Social.__proto__ || Object.getPrototypeOf(Social)).apply(this, arguments));
	}

	_createClass(Social, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"ul",
				{ className: "menu" },
				_react2.default.createElement(
					"li",
					{ className: "menu-item" },
					_react2.default.createElement(
						"a",
						{ href: "http://www.linkedin.com/profile/view?id=111572824", className: "menu-linkedin", target: "_blank", rel: "noopener noreferrer" },
						"Linkedin"
					)
				),
				_react2.default.createElement(
					"li",
					{ className: "menu-item" },
					_react2.default.createElement(
						"a",
						{ href: "https://github.com/chriskinch", className: "menu-github", target: "_blank", rel: "noopener noreferrer" },
						"GitHub"
					)
				),
				_react2.default.createElement(
					"li",
					{ className: "menu-item" },
					_react2.default.createElement(
						"a",
						{ href: "http://www.facebook.com/iamchriskinch", className: "menu-facebook", target: "_blank", rel: "noopener noreferrer" },
						"Facebook"
					)
				),
				_react2.default.createElement(
					"li",
					{ className: "menu-item" },
					_react2.default.createElement(
						"a",
						{ href: "https://plus.google.com/+ChrisKinch/posts", className: "menu-google", target: "_blank", rel: "noopener noreferrer" },
						"Google+"
					)
				),
				_react2.default.createElement(
					"li",
					{ className: "menu-item" },
					_react2.default.createElement(
						"a",
						{ href: "https://twitter.com/chriskinch", className: "menu-twitter", target: "_blank", rel: "noopener noreferrer" },
						"Twitter"
					)
				)
			);
		}
	}]);

	return Social;
}(_react.Component);

exports.default = Social;

//# sourceMappingURL=Social.js.map