'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

var _StatsSlider = require('./StatsSlider');

var _StatsSlider2 = _interopRequireDefault(_StatsSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('it renders', function () {
	var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_StatsSlider2.default, { stats: [] })).toJSON();
	expect(tree).toMatchSnapshot();
});