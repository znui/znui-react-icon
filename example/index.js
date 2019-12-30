
require('znui-react');
require('../src/index.less');
require('./index.less');
var React = require('react');
var ReactDOM = require('react-dom');
var icon = require('../src/index.js');
console.log(icon);
ReactDOM.render(
    <div>
        <icon.SVGIconSelector />
        <icon.SVGIconList value={'faAd'} />
    </div>,
    document.getElementById('container'),
);

