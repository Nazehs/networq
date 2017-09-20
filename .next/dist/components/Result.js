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

var _less = require('less');

var _less2 = _interopRequireDefault(_less);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\components\\Result.js';


var Result = function (_React$Component) {
    (0, _inherits3.default)(Result, _React$Component);

    function Result(props) {
        (0, _classCallCheck3.default)(this, Result);

        return (0, _possibleConstructorReturn3.default)(this, (Result.__proto__ || (0, _getPrototypeOf2.default)(Result)).call(this, props));
    }

    (0, _createClass3.default)(Result, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var rendering = void 0;
            _less2.default.render('#renderSc{' + _store2.default.getState().css + '}', function (e, output) {
                rendering = '<style>' + output.css + '</style>' + _store2.default.getState().html;
            });
            document.getElementById('renderSc').innerHTML = rendering;

            eval(_store2.default.getState().js);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                id: 'renderSc',
                style: {
                    height: '90vh',
                    width: '50vw',
                    border: 'solid 1px black'
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            });
        }
    }]);

    return Result;
}(_react2.default.Component);

Result.unsubscribe = _store2.default.subscribe(function () {});

Result.contextType;

exports.default = Result;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlc3VsdC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIlNBVkVfVE9fREFUQUJBU0UiLCJIVE1MX1NVQk1JVCIsIkNTU19TVUJNSVQiLCJKU19TVUJNSVQiLCJsZXNzIiwiUmVzdWx0IiwicHJvcHMiLCJyZW5kZXJpbmciLCJyZW5kZXIiLCJnZXRTdGF0ZSIsImNzcyIsImUiLCJvdXRwdXQiLCJodG1sIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImV2YWwiLCJqcyIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImNvbnRleHRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFrQixBQUFhLEFBQVk7O0FBQ25ELEFBQU87Ozs7Ozs7OztJQUdELEE7b0NBQ0Y7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7cUlBQUEsQUFDVCxBQUNUOzs7Ozs0Q0FJbUIsQUFDaEI7Z0JBQUksaUJBQUosQUFDQTsyQkFBQSxBQUFLLHNCQUFvQixnQkFBQSxBQUFNLFdBQS9CLEFBQTBDLFdBQVEsVUFBQSxBQUFVLEdBQVYsQUFBYSxRQUFRLEFBQ25FO3dDQUFzQixPQUF0QixBQUE2QixtQkFBYyxnQkFBQSxBQUFNLFdBQWpELEFBQTRELEFBQy9EO0FBRkQsQUFHQTtxQkFBQSxBQUFTLGVBQVQsQUFBd0IsWUFBeEIsQUFBb0MsWUFBcEMsQUFBZ0QsQUFFaEQ7O2lCQUFLLGdCQUFBLEFBQU0sV0FBWCxBQUFzQixBQUN6Qjs7OztpQ0FFUSxBQUNMOztvQkFDSSxBQUNPLEFBQ0g7OzRCQUFPLEFBQ0MsQUFDUjsyQkFGTyxBQUVBLEFBQ1A7NEJBTEosQUFFVyxBQUdDO0FBSEQsQUFDUDs4QkFISjtnQ0FESixBQUNJLEFBUVA7QUFSTztBQUNJLGFBREo7Ozs7O0VBbkJTLGdCQUFNLEE7O0FBQXJCLEEsT0FLSyxBLGNBQWMsZ0JBQUEsQUFBTSxVQUFVLFlBQU0sQUFBRSxDLEFBQXhCOztBQXlCekIsT0FBQSxBQUFPLEFBRVA7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IkU6L1Byb2plY3RzIGFuZCBJZGVhcy9TdGFydHZlcnNpdHkvbmV0d29ycSJ9