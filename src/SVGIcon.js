var React = znui.React || require('react');
var ReactFA = require('@fortawesome/react-fontawesome');
var SolidSVGIcons = require('@fortawesome/free-solid-svg-icons');
var BrandsSVGCore = require('@fortawesome/free-brands-svg-icons');
var RegularSVGCore = require('@fortawesome/free-regular-svg-icons');
var _icons = zn.extend({}, SolidSVGIcons.fas, BrandsSVGCore.fab, RegularSVGCore.fbr);

var SVGIcon = React.createClass({
	displayName:'ZRSVGIcon',
	render: function(){
		var _icon = this.props.icon;

		return (
			<ReactFA.FontAwesomeIcon {...this.props} icon={_icons[_icon]} />
		);
	}
});

SVGIcon.ICONS = _icons;

module.exports = SVGIcon;
