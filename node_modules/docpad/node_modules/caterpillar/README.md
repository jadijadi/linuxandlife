
<!-- TITLE/ -->

# Caterpillar

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/caterpillar.png?branch=master)](http://travis-ci.org/bevry/caterpillar "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/caterpillar.png)](https://npmjs.org/package/caterpillar "View this project on NPM")
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")

<!-- /BADGES -->


Caterpillar is the ultimate logging system for Node.js, based on [transform streams](http://nodejs.org/api/stream.html#stream_class_stream_transform) you can log to it and pipe the output off to different locations, including [some pre-made ones](http://npmjs.org/keyword/caterpillar-transform). Caterpillar also supports log levels according to the [RFC standard](http://www.faqs.org/rfcs/rfc3164.html), as well as line, method, and file fetching for messages. You can even use it in web browsers with the [Browser Transform](https://github.com/bevry/caterpillar-browser).


<!-- INSTALL/ -->

## Install

### [Node](http://nodejs.org/)
- Use: `require('caterpillar')`
- Install: `npm install --save caterpillar`

### [Browserify](http://browserify.org/)
- Use: `require('caterpillar')`
- Install: `npm install --save caterpillar`
- CDN URL: `//wzrd.in/bundle/caterpillar@2.0.7`

### [Ender](http://ender.jit.su/)
- Use: `require('caterpillar')`
- Install: `ender add caterpillar`

<!-- /INSTALL -->


## Usage

### Example with the [Filter](https://github.com/bevry/caterpillar-filter) and [Human](https://github.com/bevry/caterpillar-human) transforms

``` javascript
// Import
var level   = process.argv.indexOf('-d') === -1 ? 6 : 7;
var logger  = require('caterpillar').createLogger({level:level});
var filter  = require('caterpillar-filter').createFilter();
var human   = require('caterpillar-human').createHuman();

// Where to output?
if ( process.title === 'browser' ) {
	// Include the browser compatibility layer
	var browser = require('caterpillar-browser').createBrowser();

	// Pipe to filter to human to browser
	logger.pipe(filter).pipe(human).pipe(browser);
}
else {
	// Pipe to filter to human to stdout
	logger.pipe(filter).pipe(human).pipe(process.stdout);

	// If we are debugging, then write the original logger data to debug.log
	if ( level === 7 ) {
		logger.pipe(require('fs').createWriteStream('./debug.log'));
	}
}

// Log messages
logger.log('emergency', 'this is level 0');
logger.log('emerg', 'this is level 0');
logger.log('alert', 'this is level 1');
logger.log('critical', 'this is level 2');
logger.log('crit', 'this is level 2');
logger.log('error', 'this is level 3');
logger.log('err', 'this is level 3');
logger.log('warning', 'this is level 4');
logger.log('warn', 'this is level 4');
logger.log('notice', 'this is level 5');
logger.log('note', 'this is level 5');
logger.log('info', 'this is level 6');
logger.log('default', 'this is level 6');
logger.log('debug', 'this is level 7');
logger.log('this is level 6, the default level');
logger.log('you','can','also','use','as','many','arguments','as','you','want',1,[2,3],{four:5});
```

Result with log level 6 (info):

<img src="http://d.pr/i/DBFD+"/>


Result with log level 7 (debug):

<img src="http://d.pr/i/IZ8I+"/>


Result with log level 7 (debug) in the browser with the [Browser Transform](https://github.com/bevry/caterpillar-browser)

<img src="http://d.pr/i/SK8d+">


### Transform API, extends [stream.Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform)

``` javascript
new (require('caterpillar').Transform)(config)
```

- Methods
	- `constructor(config?)` create our new instance with the config, config is optional
	- `pipe(child)` pipe our stream to the child, also sync our config to it
	- `setConfig(config)` set the configuration and emit the `config` event
	- `getConfig()` get the configuration
	- `format(entry)` format the caterpillar logger entry
- Configuration
	- none by default
- Events
	- `config(config)` emitted once our configuration has updated


### Logger API, extends Transform API

``` javascript
new (require('caterpillar').Logger)(config)
```

- Methods
	- `constructor(config?)` create our new instance with the config, config is optional
	- `log(args...)` write a log message, the first argument is suppose to be the level (will use the default level if it isn't)
	- `format(level, args...)` create a log entry ready for writing to the logger stream, output is as follows:

		``` javascript
		{
			"args": ["this is emergency and is level 0"],
			"date": "2013-04-25T10:18:25.722Z",
			"levelNumber": 0,
			"levelName": "emergency",
			"line": "59",
			"method": "Task.fn",
			"file": "/Users/balupton/Projects/caterpillar/out/test/caterpillar-test.js"
		}
		```

	- `getLevelNumber(name)` get the level number for the level name
	- `getLevelName(number)` get the level name for the level number
	- `getLevelInfo(nameOrNumber)` get the level name and number for either a level name or number
	- `getLineInfo()` get the file, method, and line that the `log` method was called on

- Configuration
	- `lineOffset` the amount of lines to offset when doing our line detection, useful for wrappers, defaults to `0`
	- `levels` the level names and their associated number, also includes `default` for when no level was specified, defaults to:
	
		``` javascript
		{
			emergency: 0,
			alert: 1,
			critical: 2,
			error: 3,
			warning: 4,
			notice: 5,
			info: 6,
			debug: 7,

			emerg: 0,
			crit: 2,
			err: 3,
			warn: 4,
			note: 5,

			default: 6
		}
		```

- Events
	- only those inherited



<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/caterpillar/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")

### Contributors

These amazing people have contributed code to this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton) - [view contributions](https://github.com/bevry/caterpillar/commits?author=balupton)
- t-visualappeal (https://github.com/t-visualappeal) - [view contributions](https://github.com/bevry/caterpillar/commits?author=t-visualappeal)

[Become a contributor!](https://github.com/bevry/caterpillar/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2012+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
<br/>Copyright &copy; 2011 Benjamin Lupton <b@lupton.cc> (http://balupton.com)

<!-- /LICENSE -->


