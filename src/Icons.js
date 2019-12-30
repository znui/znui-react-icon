var React = znui.React || require('react');
var SVGIcon = require('./SVGIcon');
var FAIcon = require('./FAIcon');
module.exports = React.createClass({
	displayName:'Icons',
	__itemRender: function (item, index){
		if(item.type=='svg'){
			return <SVGIcon key={index} {...item} />;
		}else if(item.type == 'fa'){
			return <FAIcon key={index} {...item} />;
		}else {
			return <SVGIcon key={index} {...item} />;
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-icons', this.props.className)} style={this.props.style}>
				<znui.react.DataViewer data={this.props.data} itemRender={this.__itemRender} />
			</div>
		);
	}
});
