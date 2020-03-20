require('@zeanium/core');
var argv = zn.convertArrayArgv(process.argv).argv;
var _path = argv['znui-react.path'] || '';
module.exports = require(_path + 'znui-react/webpack').component.production(function (config){
    return {
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "znui-react": "zr",
            "@fortawesome/fontawesome-svg-core": "fsc",
            "@fortawesome/react-fontawesome": "rf",
            "@fortawesome/free-solid-svg-icons": "fssi",
            "@fortawesome/free-brands-svg-icons": "fbsi",
            "@fortawesome/free-regular-svg-icons": 'frsi'
        }
    };
});