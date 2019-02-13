'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Title2.default, { text: 'My example title' })).toJSON();
  expect(tree).toMatchSnapshot();
});

//# sourceMappingURL=Title.test.js.map