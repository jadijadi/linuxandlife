# Watchr — better file system watching for Node.js

<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/watchr.png?branch=master)](http://travis-ci.org/bevry/watchr "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/watchr.png)](https://npmjs.org/package/watchr "View this project on NPM")
[![Dependency Status](https://david-dm.org/bevry/watchr.png?theme=shields.io)](https://david-dm.org/bevry/watchr)
[![Development Dependency Status](https://david-dm.org/bevry/watchr/dev-status.png?theme=shields.io)](https://david-dm.org/bevry/watchr#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


Watchr provides a normalised API the file watching APIs of different node versions, nested/recursive file and directory watching, and accurate detailed events for file/directory creations, updates, and deletions.

Watchr is made to be a module that other tools include. If you are looking for a command line tool to perform actions when files are changed, check out [Watchy](https://github.com/caseywebdev/watchy).

You install it via `npm install watchr` and use it via `require('watchr').watch(config)`. Available configuration options are:

- `path` a single path to watch
- `paths` an array of paths to watch
- `listener` a single change listener to fire when a change occurs
- `listeners` an array of listeners to fire when a change occurs, overloaded to accept the following values:
	- `changeListener` a single change listener
	- `[changeListener]` an array of change listeners
	- `{eventName:eventListener}` an object keyed with the event names and valued with a single event listener
	- `{eventName:[eventListener]}` an object keyed with the event names and valued with an array of event listeners
- `next` (optional, defaults to `null`) a completion callback to fire once the watchers have been setup, arguments are:
	- when using the `path` configuration option: `err, watcherInstance`
	- when using the `paths` configuration option: `err, [watcherInstance,...]` 
- `stat` (optional, defaults to `null`) a file stat object to use for the path, instead of fetching a new one
- `interval` (optional, defaults to `5007`) for systems that poll to detect file changes, how often should it poll in millseconds
- `persistent` (optional, defaults to `true`) whether or not we should keep the node process alive for as long as files are still being watched
- `catchupDelay` (optional, defaults to `2000`) because swap files delete the original file, then rename a temporary file over-top of the original file, to ensure the change is reported correctly we must have a delay in place that waits until all change events for that file have finished, before starting the detection of what changed
- `preferredMethods` (optional, defaults to `['watch','watchFile']`) which order should we prefer our watching methods to be tried?
- `followLinks` (optional, defaults to `true`) follow symlinks, i.e. use stat rather than lstat
- `ignorePaths` (optional, defaults to `false`) an array of full paths to ignore
- `ignoreHiddenFiles` (optional, defaults to `false`) whether or not to ignored files which filename starts with a `.`
- `ignoreCommonPatterns` (optional, defaults to `true`) whether or not to ignore common undesirable file patterns (e.g. `.svn`, `.git`, `.DS_Store`, `thumbs.db`, etc)
- `ignoreCustomPatterns` (optional, defaults to `null`) any custom ignore patterns that you would also like to ignore along with the common patterns

The following events are available to your via the listeners:

- `log` for debugging, receives the arguments `logLevel ,args...`
- `error` for gracefully listening to error events, receives the arguments `err`
	- you should always have an error listener, otherwise node.js's behavior is to throw the error and possibly crash your application, see [#40](https://github.com/bevry/watchr/issues/40)
- `watching` for when watching of the path has completed, receives the arguments `err, isWatching`
- `change` for listening to change events, receives the arguments `changeType, fullPath, currentStat, previousStat`, received arguments will be:
	- for updated files: `'update', fullPath, currentStat, previousStat`
	- for created files: `'create', fullPath, currentStat, null`
	- for deleted files: `'delete', fullPath, null, previousStat`


To wrap it all together, it would look like this:

``` javascript
// Require
var watchr = require('watchr');

// Watch a directory or file
console.log('Watch our paths');
watchr.watch({
	paths: ['path1','path2','path3'],
	listeners: {
		log: function(logLevel){
			console.log('a log message occured:', arguments);
		},
		error: function(err){
			console.log('an error occured:', err);
		},
		watching: function(err,watcherInstance,isWatching){
			if (err) {
				console.log("watching the path " + watcherInstance.path + " failed with error", err);
			} else {
				console.log("watching the path " + watcherInstance.path + " completed");
			}
		},
		change: function(changeType,filePath,fileCurrentStat,filePreviousStat){
			console.log('a change event occured:',arguments);
		}
	},
	next: function(err,watchers){
		if (err) {
			return console.log("watching everything failed with error", err);
		} else {
			console.log('watching everything completed', watchers);
		}

		// Close watchers after 60 seconds
		setTimeout(function(){
			var i;
			console.log('Stop watching our paths');
			for ( i=0;  i<watchers.length; i++ ) {
				watchers[i].close();
			}
		},60*1000);
	}
});
```

You can test the above code snippet by running the following:

```
npm install -g watchr
watchr
```


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/watchr/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/watchr/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (http://balupton.com)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [AaronO](https://github.com/AaronO) — [view contributions](https://github.com/bevry/watchr/commits?author=AaronO)
- [adamsanderson](https://github.com/adamsanderson) — [view contributions](https://github.com/bevry/watchr/commits?author=adamsanderson)
- [balupton](https://github.com/balupton) — [view contributions](https://github.com/bevry/watchr/commits?author=balupton)
- [Casey Foster](https://github.com/caseywebdev) — [view contributions](https://github.com/bevry/watchr/commits?author=caseywebdev)
- [FredrikNoren](https://github.com/FredrikNoren) — [view contributions](https://github.com/bevry/watchr/commits?author=FredrikNoren)
- [Robson Roberto Souza Peixoto](https://github.com/robsonpeixoto) <robsonpeixoto@gmail.com> — [view contributions](https://github.com/bevry/watchr/commits?author=robsonpeixoto)

[Become a contributor!](https://github.com/bevry/watchr/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2012+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
<br/>Copyright &copy; 2011 Benjamin Lupton <b@lupton.cc> (http://balupton.com)

<!-- /LICENSE -->


