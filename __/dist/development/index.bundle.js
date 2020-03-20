(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./BrandsSVGIcon.js":
/*!**************************!*\
  !*** ./BrandsSVGIcon.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactFA = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var BrandsSVGIcons = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons").fab;

var BrandsSVGIcon = React.createClass({
  displayName: 'ZRBrandsSVGIcon',
  render: function render() {
    var _icon = this.props.icon;
    return React.createElement(ReactFA.FontAwesomeIcon, _extends({}, this.props, {
      icon: BrandsSVGIcons[_icon]
    }));
  }
});
BrandsSVGIcon.ICONS = BrandsSVGIcons;
module.exports = BrandsSVGIcon;

/***/ }),

/***/ "./FAIcon.js":
/*!*******************!*\
  !*** ./FAIcon.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRFAIcon',
  render: function render() {
    return React.createElement("span", _extends({}, this.props, {
      className: "zr-fa-icon " + this.props.className
    }), React.createElement("i", {
      className: "fa " + this.props.icon
    }));
  }
});

/***/ }),

/***/ "./Icons.js":
/*!******************!*\
  !*** ./Icons.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var SVGIcon = __webpack_require__(/*! ./SVGIcon */ "./SVGIcon.js");

var FAIcon = __webpack_require__(/*! ./FAIcon */ "./FAIcon.js");

module.exports = React.createClass({
  displayName: 'ZRIcons',
  __itemRender: function __itemRender(item, index) {
    if (item.type == 'svg') {
      return React.createElement(SVGIcon, _extends({
        key: index
      }, item));
    } else if (item.type == 'fa') {
      return React.createElement(FAIcon, _extends({
        key: index
      }, item));
    } else {
      return React.createElement(SVGIcon, _extends({
        key: index
      }, item));
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-icons', this.props.className),
      style: this.props.style
    }, React.createElement(znui.react.DataViewer, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});

/***/ }),

/***/ "./RegularSVGIcon.js":
/*!***************************!*\
  !*** ./RegularSVGIcon.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactFA = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var RegularSVGIcons = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons").far;

var RegularSVGIcon = React.createClass({
  displayName: 'ZRRegularSVGIcon',
  render: function render() {
    var _icon = this.props.icon;
    return React.createElement(ReactFA.FontAwesomeIcon, _extends({}, this.props, {
      icon: RegularSVGIcons[_icon]
    }));
  }
});
RegularSVGIcon.ICONS = RegularSVGIcons;
module.exports = RegularSVGIcon;

/***/ }),

/***/ "./SVGIcon.js":
/*!********************!*\
  !*** ./SVGIcon.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactFA = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var SolidSVGIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");

var BrandsSVGCore = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");

var RegularSVGCore = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");

var _icons = zn.extend({}, SolidSVGIcons.fas, BrandsSVGCore.fab, RegularSVGCore.fbr);

var SVGIcon = React.createClass({
  displayName: 'ZRSVGIcon',
  render: function render() {
    var _icon = this.props.icon;
    return React.createElement(ReactFA.FontAwesomeIcon, _extends({}, this.props, {
      icon: _icons[_icon]
    }));
  }
});
SVGIcon.ICONS = _icons;
module.exports = SVGIcon;

/***/ }),

/***/ "./SVGIconList.js":
/*!************************!*\
  !*** ./SVGIconList.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactFA = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var SolidSVGIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");

var BrandsSVGCore = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");

var RegularSVGCore = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");

module.exports = React.createClass({
  displayName: 'ZRSVGIconList',
  getDefaultProps: function getDefaultProps() {
    return {
      types: ['solid', 'brands', 'regular']
    };
  },
  getInitialState: function getInitialState() {
    return {
      type: 'solid',
      icons: this.__getIconsByType('solid')
    };
  },
  __getIconsByType: function __getIconsByType(type) {
    var _icons = SolidSVGIcons.fas,
        _array = [];

    if (type == 'solid') {
      _icons = SolidSVGIcons.fas;
    } else if (type == 'brands') {
      _icons = BrandsSVGCore.fab;
    } else if (type == 'regular') {
      _icons = RegularSVGCore.far;
    }

    for (var key in _icons) {
      _icons[key].key = key;

      _array.push(_icons[key]);
    }

    return _array;
  },
  __onTypeClick: function __onTypeClick(type, index) {
    this.setState({
      type: type,
      icons: this.__getIconsByType(type)
    });
  },
  __onIconClick: function __onIconClick(item, index) {
    this.props.onIconClick && this.props.onIconClick(item, index);
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-svg-icon-list', this.props.className),
      style: this.props.style
    }, React.createElement("div", {
      className: "type-container"
    }, React.createElement("ul", {
      className: "type-list"
    }, this.props.types.map(function (type, index) {
      var _this = this;

      return React.createElement("li", {
        className: "type-item " + (this.state.type == type ? 'curr' : ''),
        onClick: function onClick() {
          return _this.__onTypeClick(type, index);
        },
        key: index
      }, type);
    }.bind(this)))), React.createElement("div", {
      className: "icon-container"
    }, this.state.icons.map(function (item, index) {
      var _this2 = this;

      return React.createElement("div", {
        title: item.key,
        className: "icon " + (this.props.value == item.key ? 'curr' : ''),
        onClick: function onClick() {
          return _this2.__onIconClick(item, index);
        }
      }, React.createElement(ReactFA.FontAwesomeIcon, _extends({}, this.props.iconProps, {
        key: index,
        icon: item
      })));
    }.bind(this))));
  }
});

/***/ }),

/***/ "./SVGIconSelector.js":
/*!****************************!*\
  !*** ./SVGIconSelector.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var SVGIconList = __webpack_require__(/*! ./SVGIconList */ "./SVGIconList.js");

var SVGIcon = __webpack_require__(/*! ./SVGIcon */ "./SVGIcon.js"),
    _ICONS = SVGIcon.ICONS;

var SVGIconSelector = React.createClass({
  displayName: 'ZRSVGIconSelector',
  getInitialState: function getInitialState() {
    return {
      searchKey: null,
      icons: [],
      value: this.props.value || 'faSearch'
    };
  },
  __onInputChange: function __onInputChange() {
    if (!event.target.value) {
      this.state.icons = null;
    }

    this.state.searchKey = event.target.value;
    this.forceUpdate();
  },
  __onInputKeyUp: function __onInputKeyUp() {
    var _value = event.target.value,
        _icon = null;
    this.state.searchKey = _value;

    if (event.keyCode == 13 && _value) {
      this.state.icons = [];
      _value = _value.toLowerCase();

      for (var key in _ICONS) {
        _icon = _ICONS[key];

        if (key.toLowerCase().indexOf(_value) != -1 || _icon.prefix.indexOf(_value) != -1 || _icon.iconName.indexOf(_value) != -1) {
          this.state.icons.push(key);
        }
      }
    }

    this.forceUpdate();
  },
  __onIconClick: function __onIconClick(item, index) {
    this.setState({
      value: item,
      icons: null,
      searchKey: ''
    });
    this.props.onClick && this.props.onClick(item, index);
    this.props.onChange && this.props.onChange(item, index, this);
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname('zr-svg-icon-selector', this.props.className),
      style: this.props.style
    }, React.createElement("div", {
      className: "selector"
    }, React.createElement(SVGIcon, {
      className: "icon",
      icon: this.state.value
    }), React.createElement("div", {
      className: "input-selector"
    }, React.createElement(SVGIcon, {
      className: "search-icon",
      icon: "faSearch"
    }), React.createElement("input", {
      value: this.state.searchKey,
      className: "search-input",
      onChange: this.__onInputChange,
      onKeyUp: this.__onInputKeyUp,
      type: "search",
      name: "icon"
    }))), this.state.icons && !!this.state.icons.length && React.createElement("div", {
      className: "icons"
    }, this.state.icons.map(function (item, index) {
      var _this = this;

      return React.createElement("div", {
        title: item,
        className: "icon " + (this.props.value == item ? 'curr' : ''),
        onClick: function onClick() {
          return _this.__onIconClick(item, index);
        }
      }, React.createElement(SVGIcon, _extends({}, this.props.iconProps, {
        key: index,
        icon: item
      })));
    }.bind(this))));
  }
});

if (znui.react.input && znui.react.input.isZNStaticObject && znui.react.input.isZNStaticObject()) {
  znui.react.input.register(SVGIconSelector, 'SVGIconSelector');
}

module.exports = SVGIconSelector;

/***/ }),

/***/ "./SolidSVGIcon.js":
/*!*************************!*\
  !*** ./SolidSVGIcon.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactFA = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var SolidSVGIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons").fas;

var SolidSVGIcon = React.createClass({
  displayName: 'ZRSolidSVGIcon',
  render: function render() {
    var _icon = this.props.icon;
    return React.createElement(ReactFA.FontAwesomeIcon, _extends({}, this.props, {
      icon: SolidSVGIcons[_icon]
    }));
  }
});
SolidSVGIcon.ICONS = SolidSVGIcons;
module.exports = SolidSVGIcon;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  SVGIcon: __webpack_require__(/*! ./SVGIcon */ "./SVGIcon.js"),
  BrandsSVGIcon: __webpack_require__(/*! ./BrandsSVGIcon */ "./BrandsSVGIcon.js"),
  RegularSVGIcon: __webpack_require__(/*! ./RegularSVGIcon */ "./RegularSVGIcon.js"),
  SolidSVGIcon: __webpack_require__(/*! ./SolidSVGIcon */ "./SolidSVGIcon.js"),
  SVGIconList: __webpack_require__(/*! ./SVGIconList */ "./SVGIconList.js"),
  SVGIconSelector: __webpack_require__(/*! ./SVGIconSelector */ "./SVGIconSelector.js"),
  Icons: __webpack_require__(/*! ./Icons */ "./Icons.js"),
  ReactFA: __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome"),
  SolidSVGIcons: __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons"),
  BrandsSVGCore: __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons"),
  RegularSVGCore: __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons"),
  FASVGCore: __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core")
};

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!**********************!*\
  !*** external "fsc" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["fsc"]; }());

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!***********************!*\
  !*** external "fbsi" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["fbsi"]; }());

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!***********************!*\
  !*** external "frsi" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["frsi"]; }());

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!***********************!*\
  !*** external "fssi" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["fssi"]; }());

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*********************!*\
  !*** external "rf" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["rf"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnJhbmRzU1ZHSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9GQUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vSWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vUmVndWxhclNWR0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vU1ZHSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9TVkdJY29uTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9TVkdJY29uU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vU29saWRTVkdJY29uLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZic2lcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcnNpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNzaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiUmVhY3RGQSIsIkJyYW5kc1NWR0ljb25zIiwiZmFiIiwiQnJhbmRzU1ZHSWNvbiIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJyZW5kZXIiLCJfaWNvbiIsInByb3BzIiwiaWNvbiIsIklDT05TIiwibW9kdWxlIiwiZXhwb3J0cyIsImNsYXNzTmFtZSIsIlNWR0ljb24iLCJGQUljb24iLCJfX2l0ZW1SZW5kZXIiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdHlsZSIsImRhdGEiLCJSZWd1bGFyU1ZHSWNvbnMiLCJmYXIiLCJSZWd1bGFyU1ZHSWNvbiIsIlNvbGlkU1ZHSWNvbnMiLCJCcmFuZHNTVkdDb3JlIiwiUmVndWxhclNWR0NvcmUiLCJfaWNvbnMiLCJ6biIsImV4dGVuZCIsImZhcyIsImZiciIsImdldERlZmF1bHRQcm9wcyIsInR5cGVzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaWNvbnMiLCJfX2dldEljb25zQnlUeXBlIiwiX2FycmF5Iiwia2V5IiwicHVzaCIsIl9fb25UeXBlQ2xpY2siLCJzZXRTdGF0ZSIsIl9fb25JY29uQ2xpY2siLCJvbkljb25DbGljayIsIm1hcCIsInN0YXRlIiwiYmluZCIsInZhbHVlIiwiaWNvblByb3BzIiwiU1ZHSWNvbkxpc3QiLCJfSUNPTlMiLCJTVkdJY29uU2VsZWN0b3IiLCJzZWFyY2hLZXkiLCJfX29uSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZvcmNlVXBkYXRlIiwiX19vbklucHV0S2V5VXAiLCJfdmFsdWUiLCJrZXlDb2RlIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicHJlZml4IiwiaWNvbk5hbWUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJsZW5ndGgiLCJpbnB1dCIsImlzWk5TdGF0aWNPYmplY3QiLCJyZWdpc3RlciIsIlNvbGlkU1ZHSWNvbiIsIkljb25zIiwiRkFTVkdDb3JlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtR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QTVDLGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdEZBID0gcmVxdWlyZSgnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJyk7XG52YXIgQnJhbmRzU1ZHSWNvbnMgPSByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJykuZmFiO1xuXG52YXIgQnJhbmRzU1ZHSWNvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQnJhbmRzU1ZHSWNvbicsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX2ljb24gPSB0aGlzLnByb3BzLmljb247XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0RkEuRm9udEF3ZXNvbWVJY29uIHsuLi50aGlzLnByb3BzfSBpY29uPXtCcmFuZHNTVkdJY29uc1tfaWNvbl19IC8+XG5cdFx0KTtcblx0fVxufSk7XG5cbkJyYW5kc1NWR0ljb24uSUNPTlMgPSBCcmFuZHNTVkdJY29ucztcblxubW9kdWxlLmV4cG9ydHMgPSBCcmFuZHNTVkdJY29uOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZBSWNvbicsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17XCJ6ci1mYS1pY29uIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PjxpIGNsYXNzTmFtZT17XCJmYSBcIiArIHRoaXMucHJvcHMuaWNvbn0gLz48L3NwYW4+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJy4vU1ZHSWNvbicpO1xudmFyIEZBSWNvbiA9IHJlcXVpcmUoJy4vRkFJY29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJJY29ucycsXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdzdmcnKXtcblx0XHRcdHJldHVybiA8U1ZHSWNvbiBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz47XG5cdFx0fWVsc2UgaWYoaXRlbS50eXBlID09ICdmYScpe1xuXHRcdFx0cmV0dXJuIDxGQUljb24ga2V5PXtpbmRleH0gey4uLml0ZW19IC8+O1xuXHRcdH1lbHNlIHtcblx0XHRcdHJldHVybiA8U1ZHSWNvbiBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz47XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItaWNvbnMnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXdlciBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RGQSA9IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZScpO1xudmFyIFJlZ3VsYXJTVkdJY29ucyA9IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJykuZmFyO1xuXG52YXIgUmVndWxhclNWR0ljb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJlZ3VsYXJTVkdJY29uJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfaWNvbiA9IHRoaXMucHJvcHMuaWNvbjtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3RGQS5Gb250QXdlc29tZUljb24gey4uLnRoaXMucHJvcHN9IGljb249e1JlZ3VsYXJTVkdJY29uc1tfaWNvbl19IC8+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlZ3VsYXJTVkdJY29uLklDT05TID0gUmVndWxhclNWR0ljb25zO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJTVkdJY29uO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RkEgPSByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnKTtcbnZhciBTb2xpZFNWR0ljb25zID0gcmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJyk7XG52YXIgQnJhbmRzU1ZHQ29yZSA9IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnKTtcbnZhciBSZWd1bGFyU1ZHQ29yZSA9IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJyk7XG52YXIgX2ljb25zID0gem4uZXh0ZW5kKHt9LCBTb2xpZFNWR0ljb25zLmZhcywgQnJhbmRzU1ZHQ29yZS5mYWIsIFJlZ3VsYXJTVkdDb3JlLmZicik7XG5cbnZhciBTVkdJY29uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTVkdJY29uJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfaWNvbiA9IHRoaXMucHJvcHMuaWNvbjtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3RGQS5Gb250QXdlc29tZUljb24gey4uLnRoaXMucHJvcHN9IGljb249e19pY29uc1tfaWNvbl19IC8+XG5cdFx0KTtcblx0fVxufSk7XG5cblNWR0ljb24uSUNPTlMgPSBfaWNvbnM7XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHSWNvbjtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdEZBID0gcmVxdWlyZSgnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJyk7XG52YXIgU29saWRTVkdJY29ucyA9IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucycpO1xudmFyIEJyYW5kc1NWR0NvcmUgPSByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJyk7XG52YXIgUmVndWxhclNWR0NvcmUgPSByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU1ZHSWNvbkxpc3QnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlczogWydzb2xpZCcsICdicmFuZHMnLCAncmVndWxhciddXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ3NvbGlkJyxcblx0XHRcdGljb25zOiB0aGlzLl9fZ2V0SWNvbnNCeVR5cGUoJ3NvbGlkJylcblx0XHR9XG5cdH0sXG5cdF9fZ2V0SWNvbnNCeVR5cGU6IGZ1bmN0aW9uICh0eXBlKXtcblx0XHR2YXIgX2ljb25zID0gU29saWRTVkdJY29ucy5mYXMsXG5cdFx0XHRfYXJyYXkgPSBbXTtcblx0XHRpZih0eXBlID09ICdzb2xpZCcpe1xuXHRcdFx0X2ljb25zID0gU29saWRTVkdJY29ucy5mYXM7XG5cdFx0fSBlbHNlIGlmKHR5cGUgPT0gJ2JyYW5kcycpe1xuXHRcdFx0X2ljb25zID0gQnJhbmRzU1ZHQ29yZS5mYWI7XG5cdFx0fSBlbHNlIGlmKHR5cGUgPT0gJ3JlZ3VsYXInKSB7XG5cdFx0XHRfaWNvbnMgPSBSZWd1bGFyU1ZHQ29yZS5mYXI7XG5cdFx0fVxuXHRcdGZvcih2YXIga2V5IGluIF9pY29ucyl7XG5cdFx0XHRfaWNvbnNba2V5XS5rZXkgPSBrZXk7XG5cdFx0XHRfYXJyYXkucHVzaChfaWNvbnNba2V5XSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9hcnJheTtcblx0fSxcblx0X19vblR5cGVDbGljazogZnVuY3Rpb24gKHR5cGUsIGluZGV4KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRpY29uczogdGhpcy5fX2dldEljb25zQnlUeXBlKHR5cGUpXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25JY29uQ2xpY2s6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dGhpcy5wcm9wcy5vbkljb25DbGljayAmJiB0aGlzLnByb3BzLm9uSWNvbkNsaWNrKGl0ZW0sIGluZGV4KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXN2Zy1pY29uLWxpc3QnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0eXBlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJ0eXBlLWxpc3RcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnR5cGVzLm1hcChmdW5jdGlvbiAodHlwZSwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpIGNsYXNzTmFtZT17XCJ0eXBlLWl0ZW0gXCIgKyAodGhpcy5zdGF0ZS50eXBlPT10eXBlPydjdXJyJzonJyl9IG9uQ2xpY2s9eygpPT50aGlzLl9fb25UeXBlQ2xpY2sodHlwZSwgaW5kZXgpfSBrZXk9e2luZGV4fT57dHlwZX08L2xpPjtcblx0XHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmljb25zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiB0aXRsZT17aXRlbS5rZXl9IGNsYXNzTmFtZT17XCJpY29uIFwiICsgKHRoaXMucHJvcHMudmFsdWUgPT0gaXRlbS5rZXk/J2N1cnInOicnKX0gb25DbGljaz17KCk9PnRoaXMuX19vbkljb25DbGljayhpdGVtLCBpbmRleCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdEZBLkZvbnRBd2Vzb21lSWNvbiB7Li4udGhpcy5wcm9wcy5pY29uUHJvcHN9IGtleT17aW5kZXh9IGljb249e2l0ZW19IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2Pjtcblx0XHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU1ZHSWNvbkxpc3QgPSByZXF1aXJlKCcuL1NWR0ljb25MaXN0Jyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJy4vU1ZHSWNvbicpLFxuXHRfSUNPTlMgPSBTVkdJY29uLklDT05TO1xuXG52YXIgU1ZHSWNvblNlbGVjdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTVkdJY29uU2VsZWN0b3InLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VhcmNoS2V5OiBudWxsLFxuXHRcdFx0aWNvbnM6IFtdLFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJ2ZhU2VhcmNoJ1xuXHRcdH1cblx0fSxcblx0X19vbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoKXtcblx0XHRpZighZXZlbnQudGFyZ2V0LnZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaWNvbnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoS2V5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fb25JbnB1dEtleVVwOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLFxuXHRcdFx0X2ljb24gPSBudWxsO1xuXHRcdHRoaXMuc3RhdGUuc2VhcmNoS2V5ID0gX3ZhbHVlO1xuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IDEzICYmIF92YWx1ZSl7XG5cdFx0XHR0aGlzLnN0YXRlLmljb25zID0gW107XG5cdFx0XHRfdmFsdWUgPSBfdmFsdWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGZvcih2YXIga2V5IGluIF9JQ09OUykge1xuXHRcdFx0XHRfaWNvbiA9IF9JQ09OU1trZXldO1xuXHRcdFx0XHRpZihrZXkudG9Mb3dlckNhc2UoKS5pbmRleE9mKF92YWx1ZSkhPS0xIHx8IF9pY29uLnByZWZpeC5pbmRleE9mKF92YWx1ZSkgIT0gLTEgfHwgX2ljb24uaWNvbk5hbWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pY29ucy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19vbkljb25DbGljazogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBpdGVtLFxuXHRcdFx0aWNvbnM6IG51bGwsXG5cdFx0XHRzZWFyY2hLZXk6ICcnXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtLCBpbmRleCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGl0ZW0sIGluZGV4LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXN2Zy1pY29uLXNlbGVjdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3JcIj5cblx0XHRcdFx0XHQ8U1ZHSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgaWNvbj17dGhpcy5zdGF0ZS52YWx1ZX0gLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXNlbGVjdG9yXCI+XG5cdFx0XHRcdFx0XHQ8U1ZHSWNvbiBjbGFzc05hbWU9XCJzZWFyY2gtaWNvblwiIGljb249XCJmYVNlYXJjaFwiIC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoS2V5fSBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIiBvbkNoYW5nZT17dGhpcy5fX29uSW5wdXRDaGFuZ2V9IG9uS2V5VXA9e3RoaXMuX19vbklucHV0S2V5VXB9IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwiaWNvblwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5pY29ucyAmJiAhIXRoaXMuc3RhdGUuaWNvbnMubGVuZ3RoICYmIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5pY29ucy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiB0aXRsZT17aXRlbX0gY2xhc3NOYW1lPXtcImljb24gXCIgKyAodGhpcy5wcm9wcy52YWx1ZSA9PSBpdGVtPydjdXJyJzonJyl9IG9uQ2xpY2s9eygpPT50aGlzLl9fb25JY29uQ2xpY2soaXRlbSwgaW5kZXgpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxTVkdJY29uIHsuLi50aGlzLnByb3BzLmljb25Qcm9wc30ga2V5PXtpbmRleH0gaWNvbj17aXRlbX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbmlmKHpudWkucmVhY3QuaW5wdXQgJiYgem51aS5yZWFjdC5pbnB1dC5pc1pOU3RhdGljT2JqZWN0ICYmIHpudWkucmVhY3QuaW5wdXQuaXNaTlN0YXRpY09iamVjdCgpKXtcblx0em51aS5yZWFjdC5pbnB1dC5yZWdpc3RlcihTVkdJY29uU2VsZWN0b3IsICdTVkdJY29uU2VsZWN0b3InKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTVkdJY29uU2VsZWN0b3I7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RGQSA9IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZScpO1xudmFyIFNvbGlkU1ZHSWNvbnMgPSByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnKS5mYXM7XG5cbnZhciBTb2xpZFNWR0ljb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlNvbGlkU1ZHSWNvbicsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX2ljb24gPSB0aGlzLnByb3BzLmljb247XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0RkEuRm9udEF3ZXNvbWVJY29uIHsuLi50aGlzLnByb3BzfSBpY29uPXtTb2xpZFNWR0ljb25zW19pY29uXX0gLz5cblx0XHQpO1xuXHR9XG59KTtcblxuU29saWRTVkdJY29uLklDT05TID0gU29saWRTVkdJY29ucztcblxubW9kdWxlLmV4cG9ydHMgPSBTb2xpZFNWR0ljb247XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTVkdJY29uOiByZXF1aXJlKCcuL1NWR0ljb24nKSxcbiAgICBCcmFuZHNTVkdJY29uOiByZXF1aXJlKCcuL0JyYW5kc1NWR0ljb24nKSxcbiAgICBSZWd1bGFyU1ZHSWNvbjogcmVxdWlyZSgnLi9SZWd1bGFyU1ZHSWNvbicpLFxuICAgIFNvbGlkU1ZHSWNvbjogcmVxdWlyZSgnLi9Tb2xpZFNWR0ljb24nKSxcbiAgICBTVkdJY29uTGlzdDogcmVxdWlyZSgnLi9TVkdJY29uTGlzdCcpLFxuICAgIFNWR0ljb25TZWxlY3RvcjogcmVxdWlyZSgnLi9TVkdJY29uU2VsZWN0b3InKSxcbiAgICBJY29uczogcmVxdWlyZSgnLi9JY29ucycpLFxuICAgIFJlYWN0RkE6IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZScpLFxuICAgIFNvbGlkU1ZHSWNvbnM6IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucycpLFxuICAgIEJyYW5kc1NWR0NvcmU6IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnKSxcbiAgICBSZWd1bGFyU1ZHQ29yZTogcmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnKSxcbiAgICBGQVNWR0NvcmU6IHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZnNjXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZmJzaVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImZyc2lcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmc3NpXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicmZcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9