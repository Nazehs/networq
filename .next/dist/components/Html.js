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

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\components\\Html.js';


var Html = function (_React$Component) {
    (0, _inherits3.default)(Html, _React$Component);

    function Html(props) {
        (0, _classCallCheck3.default)(this, Html);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).call(this, props));

        _this.state = {
            content: _store2.default.getState().html
        };
        return _this;
    }

    (0, _createClass3.default)(Html, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _store2.default.dispatch((0, _actions.HTML_SUBMIT)(this.state.content));
        }
    }, {
        key: '_updateState',
        value: function _updateState(content) {
            this.setState({ content: content });
            _store2.default.dispatch((0, _actions.HTML_SUBMIT)(this.state.content));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _store2.default.dispatch((0, _actions.HTML_SUBMIT)(this.state.content));
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
            }, 'HTML'), _react2.default.createElement('textarea', { style: { resize: 'none' },
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
                    return _store2.default.dispatch((0, _actions.HTML_SUBMIT)(_this2.state.content));
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Submit HTML'));
        }
    }]);

    return Html;
}(_react2.default.Component);

exports.default = Html;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEh0bWwuanMiXSwibmFtZXMiOlsic3RvcmUiLCJIVE1MX1NVQk1JVCIsIkh0bWwiLCJwcm9wcyIsInN0YXRlIiwiY29udGVudCIsImdldFN0YXRlIiwiaHRtbCIsImRpc3BhdGNoIiwic2V0U3RhdGUiLCJyZXNpemUiLCJub2RlIiwiX3VwZGF0ZVN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVE7Ozs7Ozs7SUFFRixBO2tDQUNGOztrQkFBQSxBQUFZLE9BQU87NENBQUE7O3NJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3FCQUNRLGdCQUFBLEFBQU0sV0FISixBQUVmLEFBQWEsQUFDaUI7QUFEakIsQUFDVDtlQUVQOzs7Ozs2Q0FFbUIsQUFDaEI7NEJBQUEsQUFBTSxTQUFTLDBCQUFZLEtBQUEsQUFBSyxNQUFoQyxBQUFlLEFBQXVCLEFBQ3pDOzs7O3FDQUVZLEEsU0FBUSxBQUNqQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFDZDs0QkFBQSxBQUFNLFNBQVMsMEJBQVksS0FBQSxBQUFLLE1BQWhDLEFBQWUsQUFBdUIsQUFDekM7Ozs7K0NBRXFCLEFBQ2xCOzRCQUFBLEFBQU0sU0FBUywwQkFBWSxLQUFBLEFBQUssTUFBaEMsQUFBZSxBQUF1QixBQUN6Qzs7OztpQ0FFUTt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUJBQUEsY0FBQSxjQUFVLE9BQU8sRUFBRSxRQUFuQixBQUFpQixBQUFVLEFBQ25COzBCQUFVLGtCQUFBLEFBQUMsTUFBRDsyQkFBUSxPQUFBLEFBQUssYUFBYSxLQUFBLEFBQUssT0FBL0IsQUFBUSxBQUE4QjtBQUR4RCxBQUVRO3NCQUZSLEFBRWMsQUFDTjtzQkFIUixBQUdjOzs4QkFIZDtnQ0FBQSxBQUtLO0FBTEw7b0JBS0ssQUFBSyxNQVBkLEFBRUksQUFLZ0IsQUFFaEIsMEJBQUEsY0FBQSxZQUFRLFNBQVMsbUJBQUE7MkJBQU0sZ0JBQUEsQUFBTSxTQUFTLDBCQUFZLE9BQUEsQUFBSyxNQUF0QyxBQUFNLEFBQWUsQUFBdUI7QUFBN0Q7OEJBQUE7Z0NBQUE7QUFBQTtlQVZSLEFBQ0ksQUFTSSxBQUdYOzs7OztFQW5DYyxnQkFBTSxBLEFBdUN6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIdG1sLmpzIiwic291cmNlUm9vdCI6IkU6L1Byb2plY3RzIGFuZCBJZGVhcy9TdGFydHZlcnNpdHkvbmV0d29ycSJ9