"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var SVGIcon = require('./SVGIcon');

var FAIcon = require('./FAIcon');

module.exports = React.createClass({
  displayName: 'ZRIcons',
  __itemRender: function __itemRender(item, index) {
    if (item.type == 'svg') {
      return /*#__PURE__*/React.createElement(SVGIcon, _extends({
        key: index
      }, item));
    } else if (item.type == 'fa') {
      return /*#__PURE__*/React.createElement(FAIcon, _extends({
        key: index
      }, item));
    } else {
      return /*#__PURE__*/React.createElement(SVGIcon, _extends({
        key: index
      }, item));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-icons', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataViewer, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});