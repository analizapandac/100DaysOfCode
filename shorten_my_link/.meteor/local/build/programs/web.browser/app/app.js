var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/template.main.js                                                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
                                                                                                          // 1
Template.body.addContent((function() {                                                                    // 2
  var view = this;                                                                                        // 3
  return HTML.Raw('<div class="render-target"></div>');                                                   // 4
}));                                                                                                      // 5
Meteor.startup(Template.body.renderToDocument);                                                           // 6
                                                                                                          // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"header.js":["react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/components/header.js                                                                            //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
exports.__esModule = true;                                                                                //
                                                                                                          //
var _react = require("react");                                                                            // 1
                                                                                                          //
var _react2 = _interopRequireDefault(_react);                                                             //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
var Header = function Header() {                                                                          // 3
                                                                                                          //
    return _react2["default"].createElement(                                                              // 5
        "nav",                                                                                            //
        { className: "nav navbar-default" },                                                              //
        _react2["default"].createElement(                                                                 //
            "div",                                                                                        //
            { className: "navbar-header" },                                                               //
            _react2["default"].createElement(                                                             //
                "a",                                                                                      //
                { className: "navbar-brand" },                                                            //
                "ShortenMyLink"                                                                           //
            )                                                                                             //
        )                                                                                                 //
    );                                                                                                    //
};                                                                                                        //
                                                                                                          //
exports["default"] = Header;                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"link_create.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/components/link_create.js                                                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
exports.__esModule = true;                                                                                //
                                                                                                          //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                   //
                                                                                                          //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                          //
                                                                                                          //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");             //
                                                                                                          //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                    //
                                                                                                          //
var _inherits2 = require("babel-runtime/helpers/inherits");                                               //
                                                                                                          //
var _inherits3 = _interopRequireDefault(_inherits2);                                                      //
                                                                                                          //
var _react = require("react");                                                                            // 1
                                                                                                          //
var _react2 = _interopRequireDefault(_react);                                                             //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }         //
                                                                                                          //
var LinkCreate = function (_Component) {                                                                  //
    (0, _inherits3["default"])(LinkCreate, _Component);                                                   //
                                                                                                          //
    function LinkCreate() {                                                                               //
        (0, _classCallCheck3["default"])(this, LinkCreate);                                               //
        return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));      //
    }                                                                                                     //
                                                                                                          //
    LinkCreate.prototype.render = function () {                                                           //
        function render() {                                                                               //
            return _react2["default"].createElement(                                                      // 6
                "form",                                                                                   //
                { onSubmit: this.handleSubmit.bind(this) },                                               //
                _react2["default"].createElement(                                                         //
                    "div",                                                                                //
                    { className: "form-group" },                                                          //
                    _react2["default"].createElement(                                                     //
                        "label",                                                                          //
                        null,                                                                             //
                        "Link to Shorten"                                                                 //
                    ),                                                                                    //
                    _react2["default"].createElement("input", { ref: "link", className: "form-control" })
                ),                                                                                        //
                _react2["default"].createElement(                                                         //
                    "button",                                                                             //
                    { className: "btn btn-primary" },                                                     //
                    "Shorten!"                                                                            //
                )                                                                                         //
            );                                                                                            //
        }                                                                                                 //
                                                                                                          //
        return render;                                                                                    //
    }();                                                                                                  //
                                                                                                          //
    LinkCreate.prototype.handleSubmit = function () {                                                     // 3
        function handleSubmit(event) {                                                                    //
            event.preventDefault();                                                                       // 18
            console.log(this.refs.link.value);                                                            // 19
        }                                                                                                 //
                                                                                                          //
        return handleSubmit;                                                                              //
    }();                                                                                                  //
                                                                                                          //
    return LinkCreate;                                                                                    //
}(_react.Component);                                                                                      //
                                                                                                          //
exports["default"] = LinkCreate;                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"main.js":["react","react-dom","./components/header","./components/link_create",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/main.js                                                                                         //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _react = require('react');                                                                            // 1
                                                                                                          //
var _react2 = _interopRequireDefault(_react);                                                             //
                                                                                                          //
var _reactDom = require('react-dom');                                                                     // 2
                                                                                                          //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                       //
                                                                                                          //
var _header = require('./components/header');                                                             // 4
                                                                                                          //
var _header2 = _interopRequireDefault(_header);                                                           //
                                                                                                          //
var _link_create = require('./components/link_create');                                                   // 5
                                                                                                          //
var _link_create2 = _interopRequireDefault(_link_create);                                                 //
                                                                                                          //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }         //
                                                                                                          //
var App = function App() {                                                                                // 7
    return _react2['default'].createElement(                                                              // 8
        'div',                                                                                            //
        null,                                                                                             //
        _react2['default'].createElement(_header2['default'], null),                                      //
        _react2['default'].createElement(_link_create2['default'], null)                                  //
    );                                                                                                    //
};                                                                                                        //
                                                                                                          //
Meteor.startup(function () {                                                                              // 16
    _reactDom2['default'].render(_react2['default'].createElement(App, null), document.querySelector('.render-target'));
});                                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html"]});
require("./client/template.main.js");
require("./client/components/header.js");
require("./client/components/link_create.js");
require("./client/main.js");