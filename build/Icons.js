"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var SVGIcon = require('./SVGIcon');

var FAIcon = require('./FAIcon');

module.exports = React.createClass({
  displayName: 'Icons',
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