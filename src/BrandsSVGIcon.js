var React = znui.React || require('react');
var ReactFA = require('@fortawesome/react-fontawesome');
var BrandsSVGIcons = require('@fortawesome/free-brands-svg-icons').fab;

var BrandsSVGIcon = React.createClass({
	displayName:'ZRBrandsSVGIcon',
	render: function(){
		var _icon = this.props.icon;

		return (
			<ReactFA.FontAwesomeIcon {...this.props} icon={BrandsSVGIcons[_icon]} />
		);
	}
});

BrandsSVGIcon.ICONS = BrandsSVGIcons;

module.exports = BrandsSVGIcon;