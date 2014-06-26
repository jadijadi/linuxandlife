<!-- TITLE/ -->

# Query-Engine

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/query-engine.png?branch=master)](http://travis-ci.org/bevry/query-engine "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/query-engine.png)](https://npmjs.org/package/query-engine "View this project on NPM")
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Query-Engine is a NoSQL and MongoDb compliant query engine. It can run on the server-side with Node.js, or on the client-side within web browsers

<!-- /DESCRIPTION -->


QueryEngine provides extensive Querying, Filtering, and Searching abilities for [Backbone.js Collections](http://documentcloud.github.com/backbone/#Collection) as well as JavaScript arrays and objects. The Backbone.js and Underscore dependencies are optional.


## Features

* includes a [live interactive demos](http://bevry.github.com/query-engine/) with several examples, [wiki documentation](https://github.com/bevry/query-engine/wiki/Using) and [source-code documentation](https://github.com/bevry/query-engine/blob/master/lib/query-engine.coffee#files)
* runs on [node.js](http://nodejs.org/) and in the browser
* supports [NoSQL](http://www.mongodb.org/display/DOCS/Advanced+Queries) queries (like [MongoDB](http://www.mongodb.org/))
* supports filters (applying a filter function to a collection)
* supports search strings (useful for turning search input fields into useful queries)
* supports pills for search strings (e.g. `author:ben priority:important`)
* supports optional live collections (when a model is changed, added or removed, it can automatically be tested against the collections queries, filters, and search string, if it fails, remove it from the collection)
* supports parent and child collections (when a parent collection has a model removed, it is removed from the child collection too, when a parent collection has a model added or changed, it is retested against the child collection)
* actively maintained, supported, and implemented by several companies


## Compatability

Tested and working against:

- No library
- [Backbone](http://backbonejs.org) v0.9.2, v0.9.9, v1.0.0, v1.1.0
- [Exoskeleton](http://exosjs.com/) v0.5.1


## Using

[View the Complete Query Engine Documentation on the Bevry Website](http://bevry.me/queryengine/guide)


<!-- INSTALL/ -->

## Install

### [Node](http://nodejs.org/)
- Use: `require('query-engine')`
- Install: `npm install --save query-engine`

### [Browserify](http://browserify.org/)
- Use: `require('query-engine')`
- Install: `npm install --save query-engine`
- CDN URL: `//wzrd.in/bundle/query-engine@1.5.7`

### [Ender](http://ender.jit.su/)
- Use: `require('query-engine')`
- Install: `ender add query-engine`

<!-- /INSTALL -->


### Direct
- Use: `window.queryEngine` or `window.QueryEngine` whichever you prefer
- CDN URL: `//bevry.github.io/query-engine/lib/query-engine.js`


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/query-engine/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/query-engine/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

These amazing people have contributed finances to this project:

- BugHerd <support@bugherd.com> (http://bugherd.com/)

Become a sponsor!

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")

### Contributors

These amazing people have contributed code to this project:

- [Andrew Shults](https://github.com/andrewjshults) <andrewjshults@gmail.com> — [view contributions](https://github.com/bevry/query-engine/commits?author=andrewjshults)
- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/query-engine/commits?author=balupton)
- [Farid Neshat](https://github.com/alFReD-NSH) <FaridN_SOAD@yahoo.com> — [view contributions](https://github.com/bevry/query-engine/commits?author=alFReD-NSH)
- [Khalid Jebbari](https://github.com/DjebbZ) <https://github.com/DjebbZ> — [view contributions](https://github.com/bevry/query-engine/commits?author=DjebbZ)
- [Nicholas Firth-McCoy](https://github.com/nfm) — [view contributions](https://github.com/bevry/query-engine/commits?author=nfm)

[Become a contributor!](https://github.com/bevry/query-engine/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2012+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
<br/>Copyright &copy; 2011 Benjamin Lupton <b@lupton.cc> (http://balupton.com)

<!-- /LICENSE -->


