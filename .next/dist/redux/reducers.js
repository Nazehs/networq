'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    html: '',
    css: '',
    js: ''
};

var databaseInjectionAndPublish = function databaseInjectionAndPublish(state) {
    //All the connection with the backend will be made here!
    return state;
};

var CodeCombiner = function CodeCombiner() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'HTML_SUBMIT':
            return (0, _assign2.default)({}, state, { html: action.html });
        case 'CSS_SUBMIT':
            return (0, _assign2.default)({}, state, { css: action.css });
        case 'JS_SUBMIT':
            return (0, _assign2.default)({}, state, { js: action.js });
        case 'SAVE_TO_DATABASE':
            return databaseInjectionAndPublish(state);
        default:
            return state;
    }
};

exports.default = CodeCombiner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4XFxyZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJodG1sIiwiY3NzIiwianMiLCJkYXRhYmFzZUluamVjdGlvbkFuZFB1Ymxpc2giLCJzdGF0ZSIsIkNvZGVDb21iaW5lciIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU07VUFBZSxBQUVqQjtTQUZpQixBQUdqQjtRQUhKLEFBQXFCO0FBQUEsQUFDakI7O0FBS0osSUFBTSw4QkFBOEIsU0FBOUIsQUFBOEIsNEJBQUEsQUFBQyxPQUFVLEFBQzNDO0FBQ0E7V0FBQSxBQUFPLEFBQ1Y7QUFIRDs7QUFLQSxJQUFNLGVBQWUsU0FBZixBQUFlLGVBQWtDO1FBQWpDLEFBQWlDLDRFQUF6QixBQUF5QjtRQUFYLEFBQVcsbUJBQ25EOztZQUFPLE9BQVAsQUFBYyxBQUNWO2FBQUEsQUFBSyxBQUFlO21CQUFPLHNCQUFBLEFBQWMsSUFBZCxBQUFrQixPQUFPLEVBQUMsTUFBTSxPQUF2QyxBQUFPLEFBQXlCLEFBQWMsQUFDbEU7YUFBQSxBQUFLLEFBQWM7bUJBQU8sc0JBQUEsQUFBYyxJQUFkLEFBQWtCLE9BQU8sRUFBQyxLQUFLLE9BQXRDLEFBQU8sQUFBeUIsQUFBYSxBQUNoRTthQUFBLEFBQUssQUFBYTttQkFBTyxzQkFBQSxBQUFjLElBQWQsQUFBa0IsT0FBTyxFQUFDLElBQUksT0FBckMsQUFBTyxBQUF5QixBQUFZLEFBQzlEO2FBQUEsQUFBSyxBQUFvQjttQkFBTyw0QkFBUCxBQUFPLEFBQTRCLEFBQzVEO0FBQVM7bUJBTGIsQUFLYSxBQUFPLEFBRXZCOztBQVJELEFBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiRTovUHJvamVjdHMgYW5kIElkZWFzL1N0YXJ0dmVyc2l0eS9uZXR3b3JxIn0=