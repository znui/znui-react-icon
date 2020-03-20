"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var ReactFA = require('@fortawesome/react-fontawesome');

var RegularSVGIcons = require('@fortawesome/free-regular-svg-icons').far;

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