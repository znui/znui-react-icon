var React = znui.React || require('react');
var ReactFA = require('@fortawesome/react-fontawesome');
var SolidSVGIcons = require('@fortawesome/free-solid-svg-icons').fas;

var SolidSVGIcon = React.createClass({
	displayName:'ZRSolidSVGIcon',
	render: function(){
		var _icon = this.props.icon;

		return (
			<ReactFA.FontAwesomeIcon {...this.props} icon={SolidSVGIcons[_icon]} />
		);
	}
});

SolidSVGIcon.ICONS = SolidSVGIcons;

module.exports = SolidSVGIcon;
