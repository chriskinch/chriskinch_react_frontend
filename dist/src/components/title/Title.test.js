'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

mockDom('<html><body></body></html>');

describe('Title', function () {
  function mountComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _enzyme.mount)(_react2.default.createElement(_Title2.default, null));
  }

  it('Should render', function () {
    (0, _chai.expect)(_Title2.default).to.be.ok;
  });
});

//# sourceMappingURL=Title.test.js.map