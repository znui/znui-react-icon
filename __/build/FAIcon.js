"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

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