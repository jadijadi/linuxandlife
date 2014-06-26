
<!-- TITLE/ -->

# Event Emitter Grouped

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/event-emitter-grouped.png?branch=master)](http://travis-ci.org/bevry/event-emitter-grouped "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/event-emitter-grouped.png)](https://npmjs.org/package/event-emitter-grouped "View this project on NPM")
[![Dependency Status](https://david-dm.org/bevry/event-emitter-grouped.png?theme=shields.io)](https://david-dm.org/bevry/event-emitter-grouped)
[![Development Dependency Status](https://david-dm.org/bevry/event-emitter-grouped/dev-status.png?theme=shields.io)](https://david-dm.org/bevry/event-emitter-grouped#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Emit events in serial or parallel with support for synchronous and asynchronous listeners

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('event-emitter-grouped')`
- Install: `npm install --save event-emitter-grouped`

### [Browserify](http://browserify.org/)
- Use: `require('event-emitter-grouped')`
- Install: `npm install --save event-emitter-grouped`
- CDN URL: `//wzrd.in/bundle/event-emitter-grouped@2.4.3`

### [Ender](http://ender.jit.su/)
- Use: `require('event-emitter-grouped')`
- Install: `ender add event-emitter-grouped`

<!-- /INSTALL -->


## Usage

``` javascript
// Importer
var EventEmitterGrouped = require('event-emitter-grouped').EventEmitterGrouped;

// Instantiate a new instance
var emitter = new EventEmitterGrouped();

// Bind an asynchronous event
emitter.on('hello', function(next){
	console.log('\tasync started');
	setTimeout(function(){
		console.log('\tasync finished');
		next();
	}, 1000);
});

// Bind a synchronous event
emitter.on('hello', function(){
	console.log('\tsync started and finished');
});

// Bind a prioritized event
vipListener = function(){
	console.log('\tvip started and finished');
};
vipListener.priority = 1;
emitter.on('hello', vipListener);

// Emit the events in serial (one after the other in a waiting fashion)
console.log('hello in serial started');
emitter.emitSerial('hello', function(err){
	console.log('hello in serial finished');

	// Emit the events in parallel (all at once)
	console.log('hello in parallel started');
	emitter.emitParallel('hello', function(err){
		console.log('hello in parallel finished');
	});
});

/* Outputs:
hello in serial started
	vip started and finished
	async started
	async finished
	sync started and finished
hello in serial finished
hello in parallel started
	vip started and finished
	async started
	sync started and finished
	async finished
hello in parallel finished
*/
```


### EventEmitterGrouped, extends [events.EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)

- `getListenerGroup(eventName, args..., next?)` - returns a [TaskGroup](https://github.com/bevry/taskgroup#files) where each listener is a task, ordered by the highest priority listeners first
	- `eventName` is the event that we should get the listeners for
	- `args...` is an optional set of arguments that should be passed to the listeners when they are executed
	- `next` is an optional completion callback that will fire once all the tasks/listeners have compeleted
- `off` - alias for [events.EventEmitter.prototype.removeListener](http://nodejs.org/api/events.html#events_emitter_removelistener_event_listener)
- `emitSerial(eventName, args..., next?)` - fetch the listener group and execute it in serial
- `emitParallel(eventName, args..., next?)` - fetch the listener group and execute it in parallel



<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/event-emitter-grouped/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/event-emitter-grouped/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


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
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/event-emitter-grouped/commits?author=balupton)
- [sfrdmn](https://github.com/sfrdmn) — [view contributions](https://github.com/bevry/event-emitter-grouped/commits?author=sfrdmn)

[Become a contributor!](https://github.com/bevry/event-emitter-grouped/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2013+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
<br/>Copyright &copy; 2011-2012 Benjamin Lupton <b@lupton.cc> (http://balupton.com)

<!-- /LICENSE -->


