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

var _Result = require('../components/Result');

var _Result2 = _interopRequireDefault(_Result);

var _Css = require('../components/Css');

var _Css2 = _interopRequireDefault(_Css);

var _JS = require('../components/JS');

var _JS2 = _interopRequireDefault(_JS);

var _Html = require('../components/Html');

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Projects and Ideas\\Startversity\\networq\\pages\\index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

        _this.state = {
            type: 'result'
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: '_changeTitle',
        value: function _changeTitle(type) {
            this.setState({ type: type });
        }
    }, {
        key: '_getInitialContentFromServer',
        value: function _getInitialContentFromServer() {
            // gets initial contents from the database and then dispatches it to the store
            var initialContent = {
                html: "<p>yo</p>",
                css: 'p{\n  color:red;\n }',
                js: 'console.log("Hello Gentleman");'
            };
            _store2.default.dispatch((0, _actions.HTML_SUBMIT)(initialContent.html));
            _store2.default.dispatch((0, _actions.CSS_SUBMIT)(initialContent.css));
            _store2.default.dispatch((0, _actions.JS_SUBMIT)(initialContent.js));
            // mock initial content

            initialContent;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._getInitialContentFromServer();
        }
    }, {
        key: '_renderElement',
        value: function _renderElement() {

            switch (this.state.type) {
                case 'result':
                    return _react2.default.createElement(_Result2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    });
                case 'html':
                    return _react2.default.createElement(_Html2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    });
                case 'css':
                    return _react2.default.createElement(_Css2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    });
                default:
                    return _react2.default.createElement(_JS2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    });

            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('result');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Result'), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('html');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'HTML'), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('css');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'CSS'), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2._changeTitle('js');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'JavaScript'), this._renderElement(), _react2.default.createElement('button', { onClick: function onClick() {
                    return _store2.default.dispatch((0, _actions.SAVE_TO_DATABASE)());
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Publish your Snippet!'));
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIlNBVkVfVE9fREFUQUJBU0UiLCJIVE1MX1NVQk1JVCIsIkNTU19TVUJNSVQiLCJKU19TVUJNSVQiLCJSZXN1bHQiLCJDc3MiLCJKcyIsIkh0bWwiLCJJbmRleCIsInN0YXRlIiwidHlwZSIsInNldFN0YXRlIiwiaW5pdGlhbENvbnRlbnQiLCJodG1sIiwiY3NzIiwianMiLCJkaXNwYXRjaCIsIl9nZXRJbml0aWFsQ29udGVudEZyb21TZXJ2ZXIiLCJfY2hhbmdlVGl0bGUiLCJfcmVuZGVyRWxlbWVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFrQixBQUFhLEFBQVk7O0FBRW5ELEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVELEE7bUNBQ0Y7O3FCQUFjOzRDQUFBOztrSUFFVjs7Y0FBQSxBQUFLO2tCQUZLLEFBRVYsQUFBYSxBQUNIO0FBREcsQUFDVDtlQUVQOzs7OztxQyxBQUVZLE1BQU0sQUFDZjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFDakI7Ozs7dURBRThCLEFBQzNCO0FBQ0E7Z0JBQUk7c0JBQWlCLEFBQ1gsQUFDTjtxQkFGaUIsQUFHakI7b0JBSEosQUFBcUIsQUFLckI7QUFMcUIsQUFDakI7NEJBSUosQUFBTSxTQUFTLDBCQUFZLGVBQTNCLEFBQWUsQUFBMkIsQUFDMUM7NEJBQUEsQUFBTSxTQUFTLHlCQUFXLGVBQTFCLEFBQWUsQUFBMEIsQUFDekM7NEJBQUEsQUFBTSxTQUFTLHdCQUFVLGVBQXpCLEFBQWUsQUFBeUIsQUFDeEM7QUFFQTs7QUFDSDs7Ozs2Q0FFb0IsQUFDakI7aUJBQUEsQUFBSyxBQUNSOzs7O3lDQUVnQixBQUViOztvQkFBUSxLQUFBLEFBQUssTUFBYixBQUFtQixBQUNmO3FCQUFBLEFBQUssQUFDRDsyQ0FBUSxBQUFDOztzQ0FBRDt3Q0FBUixBQUFRLEFBQ1o7QUFEWTtBQUFBLHFCQUFBO3FCQUNaLEFBQUssQUFDRDsyQ0FBUSxBQUFDOztzQ0FBRDt3Q0FBUixBQUFRLEFBQ1o7QUFEWTtBQUFBLHFCQUFBO3FCQUNaLEFBQUssQUFDRDsyQ0FBUSxBQUFDOztzQ0FBRDt3Q0FBUixBQUFRLEFBQ1o7QUFEWTtBQUFBLHFCQUFBO0FBRVI7MkNBQVEsQUFBQzs7c0NBQUQ7d0NBUmhCLEFBUVEsQUFBUSxBQUduQjtBQUhtQjtBQUFBLHFCQUFBOzs7Ozs7aUNBS1g7eUJBQ0w7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQSxZQUFRLFNBQVMsbUJBQUE7MkJBQU0sT0FBQSxBQUFLLGFBQVgsQUFBTSxBQUFrQjtBQUF6Qzs4QkFBQTtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLDJCQUFBLGNBQUEsWUFBUSxTQUFTLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxhQUFYLEFBQU0sQUFBa0I7QUFBekM7OEJBQUE7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSx5QkFBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTsyQkFBTSxPQUFBLEFBQUssYUFBWCxBQUFNLEFBQWtCO0FBQXpDOzhCQUFBO2dDQUFBO0FBQUE7ZUFISixBQUdJLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLFNBQVMsbUJBQUE7MkJBQU0sT0FBQSxBQUFLLGFBQVgsQUFBTSxBQUFrQjtBQUF6Qzs4QkFBQTtnQ0FBQTtBQUFBO2VBSkosQUFJSSxBQUNDLG9CQUxMLEFBS0ssQUFBSyxBQUNOLGtDQUFBLGNBQUEsWUFBUSxTQUFXLG1CQUFBOzJCQUFNLGdCQUFBLEFBQU0sU0FBWixBQUFNLEFBQWU7QUFBeEM7OEJBQUE7Z0NBQUE7QUFBQTtlQVBSLEFBQ0ksQUFNSSxBQUtYOzs7OztFQTNEZSxnQkFBTSxBLEFBK0QxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9Qcm9qZWN0cyBhbmQgSWRlYXMvU3RhcnR2ZXJzaXR5L25ldHdvcnEifQ==