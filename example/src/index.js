require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var icon = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <icon.SVGIconSelector />
        <icon.SVGIconList value={'faAd'} />
    </div>
});