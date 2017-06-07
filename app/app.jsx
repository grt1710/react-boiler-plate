var React = require('react');
var ReactDOM = require('react-dom');
var {IndexRoute, Route, Router, hashHistory, HashRouter} = require('react-router');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <div>
      <h1>Hello World</h1>
    </div>,
    document.getElementById('app')
);
