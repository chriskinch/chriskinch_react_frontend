'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Teaser = require('./Teaser');

var _Teaser2 = _interopRequireDefault(_Teaser);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('Snapshot renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Teaser2.default, { url: 'http://chriskinch.netlify.com', title: 'My teaser card', body: 'Example body txt', primaryImage: 'http://www.roshe-run.co.uk/wp-content/uploads/2018/10/Cat-Picture-4.jpg' })).toJSON();
  expect(tree).toMatchSnapshot();
});

//# sourceMappingURL=Teaser.test.js.map