'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TeaserImage = require('./TeaserImage');

var _TeaserImage2 = _interopRequireDefault(_TeaserImage);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('Snapshot renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_TeaserImage2.default, { path: 'http://chriskinch.netlify.com', alt: 'Teaser Image', title: 'Grey pixel' })).toJSON();
  expect(tree).toMatchSnapshot();
});

//# sourceMappingURL=TeaserImage.test.js.map