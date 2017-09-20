'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../redux/store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\components\\Css.js';


var Css = function (_React$Component) {
    (0, _inherits3.default)(Css, _React$Component);

    function Css(props) {
        (0, _classCallCheck3.default)(this, Css);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Css.__proto__ || (0, _getPrototypeOf2.default)(Css)).call(this, props));

        _this.state = {
            content: _store2.default.getState().css
        };
        return _this;
    }

    (0, _createClass3.default)(Css, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _store2.default.dispatch((0, _actions.CSS_SUBMIT)(this.state.content));
        }
    }, {
        key: '_updateState',
        value: function _updateState(content) {
            this.setState({ content: content });
            _store2.default.dispatch((0, _actions.CSS_SUBMIT)(this.state.content));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _store2.default.dispatch((0, _actions.CSS_SUBMIT)(this.state.content));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'CSS'), _react2.default.createElement('textarea', { style: { resize: 'none' },
                onChange: function onChange(node) {
                    return _this2._updateState(node.target.value);
                },
                rows: 20,
                cols: 100,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, this.state.content), _react2.default.createElement('button', { onClick: function onClick() {
                    return _store2.default.dispatch((0, _actions.CSS_SUBMIT)(_this2.state.content));
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Submit CSS'));
        }
    }]);

    return Css;
}(_react2.default.Component);

exports.default = Css;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENzcy5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIkNTU19TVUJNSVQiLCJDc3MiLCJwcm9wcyIsInN0YXRlIiwiY29udGVudCIsImdldFN0YXRlIiwiY3NzIiwiZGlzcGF0Y2giLCJzZXRTdGF0ZSIsInJlc2l6ZSIsIm5vZGUiLCJfdXBkYXRlU3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUTs7Ozs7OztJQUVGLEE7aUNBQ0Y7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7cUJBQ1EsZ0JBQUEsQUFBTSxXQUhKLEFBRWYsQUFBYSxBQUNpQjtBQURqQixBQUNUO2VBRVA7Ozs7OzZDQUVtQixBQUNoQjs0QkFBQSxBQUFNLFNBQVMseUJBQVcsS0FBQSxBQUFLLE1BQS9CLEFBQWUsQUFBc0IsQUFDeEM7Ozs7cUNBRVksQSxTQUFRLEFBQ2pCO2lCQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUNkOzRCQUFBLEFBQU0sU0FBUyx5QkFBVyxLQUFBLEFBQUssTUFBL0IsQUFBZSxBQUFzQixBQUN4Qzs7OzsrQ0FFcUIsQUFDbEI7NEJBQUEsQUFBTSxTQUFTLHlCQUFXLEtBQUEsQUFBSyxNQUEvQixBQUFlLEFBQXNCLEFBQ3hDOzs7O2lDQUVRO3lCQUNMOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx3QkFBQSxjQUFBLGNBQVUsT0FBTyxFQUFFLFFBQW5CLEFBQWlCLEFBQVUsQUFDbkI7MEJBQVUsa0JBQUEsQUFBQyxNQUFEOzJCQUFRLE9BQUEsQUFBSyxhQUFhLEtBQUEsQUFBSyxPQUEvQixBQUFRLEFBQThCO0FBRHhELEFBRVE7c0JBRlIsQUFFYyxBQUNOO3NCQUhSLEFBR2M7OzhCQUhkO2dDQUFBLEFBS0s7QUFMTDtvQkFLSyxBQUFLLE1BUGQsQUFFSSxBQUtnQixBQUVoQiwwQkFBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTsyQkFBTSxnQkFBQSxBQUFNLFNBQVMseUJBQVcsT0FBQSxBQUFLLE1BQXJDLEFBQU0sQUFBZSxBQUFzQjtBQUE1RDs4QkFBQTtnQ0FBQTtBQUFBO2VBVlIsQUFDSSxBQVNJLEFBR1g7Ozs7O0VBbkNhLGdCQUFNLEEsQUF1Q3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNzcy5qcyIsInNvdXJjZVJvb3QiOiJFOi9Qcm9qZWN0cyBhbmQgSWRlYXMvU3RhcnR2ZXJzaXR5L25ldHdvcnEifQ==