webpackHotUpdate(5,{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(60);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(61);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(63);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(568);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(569);

var _Result = __webpack_require__(594);

var _Result2 = _interopRequireDefault(_Result);

var _Css = __webpack_require__(595);

var _Css2 = _interopRequireDefault(_Css);

var _JS = __webpack_require__(596);

var _JS2 = _interopRequireDefault(_JS);

var _Html = __webpack_require__(597);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Projects and Ideas\\Startversity\\networq\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Projects and Ideas\\Startversity\\networq\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jNDljNmRkZGI1ZjlmOWIzZDdmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmJlNjI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnXHJcbmltcG9ydCB7U0FWRV9UT19EQVRBQkFTRSwgSFRNTF9TVUJNSVQsIENTU19TVUJNSVQsIEpTX1NVQk1JVH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcclxuXHJcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHQnXHJcbmltcG9ydCBDc3MgZnJvbSAnLi4vY29tcG9uZW50cy9Dc3MnO1xyXG5pbXBvcnQgSnMgZnJvbSAnLi4vY29tcG9uZW50cy9KUyc7XHJcbmltcG9ydCBIdG1sIGZyb20gJy4uL2NvbXBvbmVudHMvSHRtbCc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdyZXN1bHQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jaGFuZ2VUaXRsZSh0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dHlwZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbml0aWFsQ29udGVudEZyb21TZXJ2ZXIoKSB7XHJcbiAgICAgICAgLy8gZ2V0cyBpbml0aWFsIGNvbnRlbnRzIGZyb20gdGhlIGRhdGFiYXNlIGFuZCB0aGVuIGRpc3BhdGNoZXMgaXQgdG8gdGhlIHN0b3JlXHJcbiAgICAgICAgbGV0IGluaXRpYWxDb250ZW50ID0ge1xyXG4gICAgICAgICAgICBodG1sOiBcIjxwPnlvPC9wPlwiLFxyXG4gICAgICAgICAgICBjc3M6IGBwe1xcbiAgY29sb3I6cmVkO1xcbiB9YCxcclxuICAgICAgICAgICAganM6IGBjb25zb2xlLmxvZyhcIkhlbGxvIEdlbnRsZW1hblwiKTtgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKEhUTUxfU1VCTUlUKGluaXRpYWxDb250ZW50Lmh0bWwpKVxyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKENTU19TVUJNSVQoaW5pdGlhbENvbnRlbnQuY3NzKSlcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChKU19TVUJNSVQoaW5pdGlhbENvbnRlbnQuanMpKVxyXG4gICAgICAgIC8vIG1vY2sgaW5pdGlhbCBjb250ZW50XHJcblxyXG4gICAgICAgIGluaXRpYWxDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9nZXRJbml0aWFsQ29udGVudEZyb21TZXJ2ZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJFbGVtZW50KCkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXN1bHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8UmVzdWx0Lz4pXHJcbiAgICAgICAgICAgIGNhc2UgJ2h0bWwnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8SHRtbC8+KVxyXG4gICAgICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8Q3NzLz4pXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxKcy8+KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuX2NoYW5nZVRpdGxlKCdyZXN1bHQnKX0+UmVzdWx0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuX2NoYW5nZVRpdGxlKCdodG1sJyl9PkhUTUw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5fY2hhbmdlVGl0bGUoJ2NzcycpfT5DU1M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5fY2hhbmdlVGl0bGUoJ2pzJyl9PkphdmFTY3JpcHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJFbGVtZW50KCl9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9IHsgKCkgPT4gc3RvcmUuZGlzcGF0Y2goU0FWRV9UT19EQVRBQkFTRSgpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHVibGlzaCB5b3VyIFNuaXBwZXQhXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFKQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBREE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBQ0E7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBM0RBO0FBQ0E7QUE4REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==