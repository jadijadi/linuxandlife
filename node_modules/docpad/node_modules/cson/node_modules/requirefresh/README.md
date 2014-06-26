# Require Fresh

[![Build Status](https://secure.travis-ci.org/bevry/requirefresh.png?branch=master)](http://travis-ci.org/bevry/requirefresh "Check this project's build status on TravisCI")
[![NPM version](https://badge.fury.io/js/requirefresh.png)](https://npmjs.org/package/requirefresh "View this project on NPM")
[![Gittip donate button](http://badgr.co/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](https://raw.github.com/balupton/flattr-buttons/master/badge-89x18.gif)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif)](https://www.paypal.com/au/cgi-bin/webscr?cmd=_flow&SESSION=IHj3DG3oy_N9A9ZDIUnPksOi59v0i-EWDTunfmDrmU38Tuohg_xQTx0xcjq&dispatch=5885d80a13c0db1f8e263663d3faee8d14f86393d55a810282b64afed84968ec "Donate once-off to this project using Paypal")

Require a file without adding it into the require cache



## Install

1. [Install Node.js](http://bevry.me/node/install)
2. `npm install --save requirefresh`



## Usage

``` javascript
// Via call and return with no error handling
var result = require('requirefresh').requireFresh('my-module-path')

// Via callback uses domains for errors (with try/catch for node 0.8 support)
var resultOrError = require('requireFresh').requireFreshSafe('my-module-path', function(err,result){
	
});
```


## History
[You can discover the history inside the `History.md` file](https://github.com/bevry/requirefresh/blob/master/History.md#files)



## License
Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://creativecommons.org/licenses/MIT/)
<br/>Copyright © 2013+ [Bevry Pty Ltd](http://bevry.me)
<br/>Copyright © 2011-2012 [Benjamin Arthur Lupton](http://balupton.com)
