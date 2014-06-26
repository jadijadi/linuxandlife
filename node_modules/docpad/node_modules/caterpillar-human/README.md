
<!-- TITLE/ -->

# Human Transform for [Caterpillar](https://github.com/bevry/caterpillar)

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/caterpillar-human.png?branch=master)](http://travis-ci.org/bevry/caterpillar-human "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/caterpillar-human.png)](https://npmjs.org/package/caterpillar-human "View this project on NPM")
[![Dependency Status](https://david-dm.org/bevry/caterpillar-human.png?theme=shields.io)](https://david-dm.org/bevry/caterpillar-human)
[![Development Dependency Status](https://david-dm.org/bevry/caterpillar-human/dev-status.png?theme=shields.io)](https://david-dm.org/bevry/caterpillar-human#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Turn your [Caterpillar](https://github.com/bevry/caterpillar) logger stream into a beautiful readable format with colors and optional debug information

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [Node](http://nodejs.org/)
- Use: `require('caterpillar-human')`
- Install: `npm install --save caterpillar-human`

### [Browserify](http://browserify.org/)
- Use: `require('caterpillar-human')`
- Install: `npm install --save caterpillar-human`
- CDN URL: `//wzrd.in/bundle/caterpillar-human@2.1.2`

### [Ender](http://ender.jit.su/)
- Use: `require('caterpillar-human')`
- Install: `ender add caterpillar-human`

<!-- /INSTALL -->


## Usage

### Example

``` javascript
// Import
var logger = require('caterpillar').createLogger();
var human = require('caterpillar-human').createHuman();

// Pipe logger output to our human interface, then our human interface output to stdout
logger.pipe(human).pipe(process.stdout);

// Log
logger.log('warn',  'this is the first log entry');
// warn:  this is the first log entry
logger.log('info', 'this is the second log entry');
// info: this is the second log entry

// Wait
setTimeout(function(){
	// Set debug mode
	logger.setConfig({level:7});

	// Log
	logger.log('warn',  'this is the first log entry');
	// warn: this is the first log entry
	//	→ [2013-04-25 20:37:22.692] [/Users/balupton/Projects/caterpillar-human/example.js:20] [null._onTimeout]
	logger.log('info', 'this is the second log entry');
	// info: this is the second log entry
	//	→ [2013-04-25 20:37:22.693] [/Users/balupton/Projects/caterpillar-human/example.js:22] [null._onTimeout]
},0);
```

### Human API, extends [caterpillar.Transform](https://github.com/bevry/caterpillar), which extends [stream.Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform)

``` javascript
new (require('caterpillar-human').Human)(config)
```

- Methods
	- `constructor(config?)` create our new human instance with the config, config is optional
	- `pipe(child)` pipe our stream to the child, also sync our config to it
	- `setConfig(config)` set the configuration and emit the `config` event
	- `getConfig()` get the configuration
	- `format(entry)` format the caterpillar logger entry
- Configuration
	- `level` number, defaults to `null`, when set to `7` (debug level) we will debug information with the log entries
	- `color` boolean, defaults to `true`, set to `false` to turn off colors
	- `colors` objects of the level to color mapping, defaults to:
		
		``` javascript
		{
			0: 'red',
			1: 'red',
			2: 'red',
			3: 'red',
			4: 'yellow',
			5: 'yellow',
			6: 'green',
			7: 'green'
		}
		```

- Events
	- `config(config)` emitted once our configuration has updated


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/caterpillar-human/blob/master/HISTORY.md#files)

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
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/caterpillar-human/commits?author=balupton)

[Become a contributor!](https://github.com/bevry/caterpillar-human/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2012+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
<br/>Copyright &copy; 2011 Benjamin Lupton <b@lupton.cc> (http://balupton.com)

<!-- /LICENSE -->


