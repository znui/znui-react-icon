"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var SVGIcon = require('./SVGIcon'),
    _ICONS = SVGIcon.ICONS;

module.exports = React.createClass({
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
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-svg-icon-selector', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "selector"
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      className: "icon",
      icon: this.state.value
    }), /*#__PURE__*/React.createElement("div", {
      className: "input-selector"
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      className: "search-icon",
      icon: "faSearch"
    }), /*#__PURE__*/React.createElement("input", {
      value: this.state.searchKey,
      className: "search-input",
      onChange: this.__onInputChange,
      onKeyUp: this.__onInputKeyUp,
      type: "search",
      name: "icon"
    }))), this.state.icons && !!this.state.icons.length && /*#__PURE__*/React.createElement("div", {
      className: "icons"
    }, this.state.icons.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("div", {
        title: item,
        className: "icon " + (this.props.value == item ? 'curr' : ''),
        onClick: function onClick() {
          return _this.__onIconClick(item, index);
        }
      }, /*#__PURE__*/React.createElement(SVGIcon, _extends({}, this.props.iconProps, {
        key: index,
        icon: item
      })));
    }.bind(this))));
  }
});