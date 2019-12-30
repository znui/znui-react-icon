var React = znui.React || require('react');
var ReactFA = require('@fortawesome/react-fontawesome');
var SolidSVGIcons = require('@fortawesome/free-solid-svg-icons');
var BrandsSVGCore = require('@fortawesome/free-brands-svg-icons');
var RegularSVGCore = require('@fortawesome/free-regular-svg-icons');

module.exports = React.createClass({
	displayName:'SVGIconList',
	getDefaultProps: function (){
		return {
			types: ['solid', 'brands', 'regular']
		}
	},
	getInitialState:function(){
		return {
			type: 'solid',
			icons: this.__getIconsByType('solid')
		}
	},
	__getIconsByType: function (type){
		var _icons = SolidSVGIcons.fas,
			_array = [];
		if(type == 'solid'){
			_icons = SolidSVGIcons.fas;
		} else if(type == 'brands'){
			_icons = BrandsSVGCore.fab;
		} else if(type == 'regular') {
			_icons = RegularSVGCore.far;
		}
		for(var key in _icons){
			_icons[key].key = key;
			_array.push(_icons[key]);
		}

		return _array;
	},
	__onTypeClick: function (type, index){
		this.setState({
			type: type,
			icons: this.__getIconsByType(type)
		});
	},
	__onIconClick: function (item, index){
		this.props.onIconClick && this.props.onIconClick(item, index);
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-svg-icon-list', this.props.className)} style={this.props.style}>
				<div className="type-container">
					<ul className="type-list">
					{
						this.props.types.map(function (type, index){
							return <li className={"type-item " + (this.state.type==type?'curr':'')} onClick={()=>this.__onTypeClick(type, index)} key={index}>{type}</li>;
						}.bind(this))
					}
					</ul>
				</div>
				<div className="icon-container">
					{
						this.state.icons.map(function (item, index){
							return <div title={item.key} className={"icon " + (this.props.value == item.key?'curr':'')} onClick={()=>this.__onIconClick(item, index)}>
								<ReactFA.FontAwesomeIcon {...this.props.iconProps} key={index} icon={item} />
							</div>;
						}.bind(this))
					}
				</div>
			</div>
		);
	}
});
