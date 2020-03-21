"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var ReactFA = require('@fortawesome/react-fontawesome');

var SolidSVGIcons = require('@fortawesome/free-solid-svg-icons');

var BrandsSVGCore = require('@fortawesome/free-brands-svg-icons');

var RegularSVGCore = require('@fortawesome/free-regular-svg-icons');

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
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-svg-icon-list', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "type-container"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "type-list"
    }, this.props.types.map(function (type, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("li", {
        className: "type-item " + (this.state.type == type ? 'curr' : ''),
        onClick: function onClick() {
          return _this.__onTypeClick(type, index);
        },
        key: index
      }, type);
    }.bind(this)))), /*#__PURE__*/React.createElement("div", {
      className: "icon-container"
    }, this.state.icons.map(function (item, index) {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        title: item.key,
        className: "icon " + (this.props.value == item.key ? 'curr' : ''),
        onClick: function onClick() {
          return _this2.__onIconClick(item, index);
        }
      }, /*#__PURE__*/React.createElement(ReactFA.FontAwesomeIcon, _extends({}, this.props.iconProps, {
        key: index,
        icon: item
      })));
    }.bind(this))));
  }
});