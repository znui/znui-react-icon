var React = znui.React || require('react');
var ReactFA = require('@fortawesome/react-fontawesome');
var RegularSVGIcons = require('@fortawesome/free-regular-svg-icons').far;

var RegularSVGIcon = React.createClass({
	displayName:'ZRRegularSVGIcon',
	render: function(){
		var _icon = this.props.icon;

		return (
			<ReactFA.FontAwesomeIcon {...this.props} icon={RegularSVGIcons[_icon]} />
		);
	}
});

RegularSVGIcon.ICONS = RegularSVGIcons;

module.exports = RegularSVGIcon;
