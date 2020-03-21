"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var ReactFA = require('@fortawesome/react-fontawesome');

var SolidSVGIcons = require('@fortawesome/free-solid-svg-icons');

var BrandsSVGCore = require('@fortawesome/free-brands-svg-icons');

var RegularSVGCore = require('@fortawesome/free-regular-svg-icons');

var _icons = zn.extend({}, SolidSVGIcons.fas, BrandsSVGCore.fab, RegularSVGCore.fbr);

var SVGIcon = React.createClass({
  displayName: 'ZRSVGIcon',
  render: function render() {
    var _icon = this.props.icon;
    return /*#__PURE__*/React.createElement(ReactFA.FontAwesomeIcon, _extends({}, this.props, {
      icon: _icons[_icon]
    }));
  }
});
SVGIcon.ICONS = _icons;
module.exports = SVGIcon;