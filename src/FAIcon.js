var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRFAIcon',
	render: function(){
		return (
			<span {...this.props} className={"zr-fa-icon " + this.props.className}><i className={"fa " + this.props.icon} /></span>
		);
	}
});
