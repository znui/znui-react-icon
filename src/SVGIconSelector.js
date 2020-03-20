var React = znui.React || require('react');
var SVGIconList = require('./SVGIconList');
var SVGIcon = require('./SVGIcon'),
	_ICONS = SVGIcon.ICONS;

var SVGIconSelector = React.createClass({
	displayName:'ZRSVGIconSelector',
	getInitialState:function(){
		return {
			searchKey: null,
			icons: [],
			value: this.props.value || 'faSearch'
		}
	},
	__onInputChange: function (){
		if(!event.target.value){
            this.state.icons = null;
        }
        this.state.searchKey = event.target.value;
        this.forceUpdate();
	},
	__onInputKeyUp: function (){
		var _value = event.target.value,
			_icon = null;
		this.state.searchKey = _value;
        if(event.keyCode == 13 && _value){
			this.state.icons = [];
			_value = _value.toLowerCase();
			for(var key in _ICONS) {
				_icon = _ICONS[key];
				if(key.toLowerCase().indexOf(_value)!=-1 || _icon.prefix.indexOf(_value) != -1 || _icon.iconName.indexOf(_value) != -1){
                    this.state.icons.push(key);
                }
			}
        }
        this.forceUpdate();
	},
	__onIconClick: function (item, index){
		this.setState({
			value: item,
			icons: null,
			searchKey: ''
		});
		this.props.onClick && this.props.onClick(item, index);
		this.props.onChange && this.props.onChange(item, index, this);
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-svg-icon-selector', this.props.className)} style={this.props.style}>
				<div className="selector">
					<SVGIcon className="icon" icon={this.state.value} />
					<div className="input-selector">
						<SVGIcon className="search-icon" icon="faSearch" />
						<input value={this.state.searchKey} className="search-input" onChange={this.__onInputChange} onKeyUp={this.__onInputKeyUp} type="search" name="icon" />
					</div>
				</div>
				{
					this.state.icons && !!this.state.icons.length && <div className="icons">
						{
							this.state.icons.map(function (item, index){
								return <div title={item} className={"icon " + (this.props.value == item?'curr':'')} onClick={()=>this.__onIconClick(item, index)}>
									<SVGIcon {...this.props.iconProps} key={index} icon={item} />
								</div>;
							}.bind(this))
						}
					</div>
				}
			</div>
		);
	}
});

if(znui.react.input && znui.react.input.isZNStaticObject && znui.react.input.isZNStaticObject()){
	znui.react.input.register(SVGIconSelector, 'SVGIconSelector');
}

module.exports = SVGIconSelector;
