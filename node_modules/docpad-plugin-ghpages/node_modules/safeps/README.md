
<!-- TITLE/ -->

# Safe PS

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/bevry/safeps/master.svg)](http://travis-ci.org/bevry/safeps "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/safeps.svg)](https://npmjs.org/package/safeps "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/safeps.svg)](https://npmjs.org/package/safeps "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/bevry/safeps.svg)](https://david-dm.org/bevry/safeps)
[![Dev Dependency Status](https://img.shields.io/david/dev/bevry/safeps.svg)](https://david-dm.org/bevry/safeps#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/bevry.svg)](https://www.gratipay.com/bevry/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Work with processes safely and easily with Node.js

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('safeps')`
- Install: `npm install --save safeps`

<!-- /INSTALL -->


## Usage

``` javascript
var safeps = require('safeps');
```

### Processes

- `openProcess(task)` fire a process task, and keep it open until the task's completion callback fires
	- `task(complete)`
- `spawn(command, opts?, next?)` spawn a process, with respect to the maximum amount of processes we can open at once
	- `command` an array of arguments to execute
	- `opts={safe:true, read:true, output:false, stdin:null}` options are also sent on to `require('child_process').spawn`
		- `safe` whether or not we should attempt to get the absolute executable path of the command to execute via `require('safeps').getExecPath`
		- `read` whether or not we should listen to the child process's stdout and stderr streams for use in the completion callback
		- `output` if set to `true` will output the child process's stdout to our process's stdout, and provide those values in the completion callback
		- `outputPrefix` if set to a string, this string will be outputted before each line of the output
		- `stdin` if set will be written to the child process's stdin
	- `next(err, stdout, stderr, code, signal)`
- `spawnMultiple(commands, opts?, next?)` spawn multiple processes, forwards on to `require('safeps').spawn`
	- `commands` an array of commands to execute
	- `opts={concurrency:1}` options are also sent on to `require('safeps').spawn`
		- `concurrency` how many processes should we execute at once?
	- `next(err, results)`
		- `results = [result...]`
			- `result = [err, stdout, stderr, code, signal]`
- `spawnCommand(command, args, opts?, next?)` alias of `require('safeps').spawn` but with the `command` prefixed to the `args`, e.g. `spawnCommand('git', 'status')`
- `spawnCommands(command, multiArgs, opts?, next?` alias of `require('safeps').spawnMultiple` but with the `command` prefixed to the `multiArgs`, e.g. `spawnCommands('git', [['status'],['pull']])`
- `exec(command, opts?, next?)` execute a process, with respect to the maximum amount of processes we can open at once
	- `command` a string to execute
	- `opts={output:false}` options are also sent on to `require('child_process').exec`
		- `output` if set to `true` will set the `stdio` option to `inherit` which will output the child process's stdout and stderr to our own
	- `next(err, stdout, stderr)`
- `execMultiple(commands, opts, next)` execute multiple processes, forwards on to `require('safeps').exec`
	- `commands` is an array of commands to execute
	- `opts={concurrency:1}` options are also sent to `require('safeps').exec`
		- `concurrency` how many processes should we execute at once?
	- `next(err, results)`
		- `results = [result...]`
			- `result = [err, stdout, stderr]`


### Paths

- `determineExecPath(possibleExecPaths, next)` determine an executable path from a list
	- `possibleExecPaths` an array of possible executable paths that we shall evaluate
	- `next(err, execPath)`
- `getEnvironmentPaths()` returns an array of the environment paths for executables
- `getStandardExecPaths(execName?)` return an array of the the environment paths for executables with the cwd prepended
	- `execName` if provided, is added onto each of the paths
- `getExecPath(execName, next)` get the absolute executable path, forwards to `get#{execName}Path` when appropriate
	- `next(err, execPath)`
- `getHomePath(next)` get the user's home path
	- `next(err, homePath)`
- `getTmpPath(next)` get the temporary path
	- `next(err, tmpPath)`
- `getGitPath(next)` get the git path
	- `next(err, gitPath)`
- `getNodePath(next)` get the node path
	- `next(err, nodePath)`
- `getNpmPath(next)` get the npm path
	- `next(err, npmPath)`


### Modules

- `initGitRepo(opts, next?)` get the git path, forwards on to `require('safeps').spawnCommand`
	- `opts={cwd:process.cwd(), url:null, remote:'origin', branch:'master'}` options are also sent on to `require('safeps').spawnCommand`
		- `cwd` the path to initialize the repo to
		- `url` the url to initialize
		- `remote` the remote name to associate the `url` to
		- `branch` the branch name to initialize the repo to
	- `next(err, results)`, `results = [result...]`, `result = [err, stdout, stderr, code, signal]`
- `initOrPullGitRepo(opts, next?)` if the path exists, update it, otherwise initialize it, forwards on to `require('safeps').spawnCommand`
	- `opts={cwd:process.cwd(), url:null, remote:'origin', branch:'master'}` options are also sent on to `require('safeps').spawnCommand`
	- `next(err, method, results)`
		- `method` is either `pull` or `init` depending on the method used
		- `results = [result...]`
			- `result = [err, stdout, stderr, code, signal]`
- `initNodeModules(opts, next?)` initialize node modules, forwards on to `require('safeps').spawn`
	- `opts={cwd:process.cwd(), args:[], force:false}` options are also sent on to `require('safeps').spawnCommand`
		- `cwd` the path to initialize the repo to
		- `args` an array of arguments to add onto the initialize command
		- `force` whether or not to still initialize modules if `node_modules` already exists
	- `next(err, results)`, `results = [result...]`, `result = [err, stdout, stderr, code, signal]`


### Environment

- `requireFresh(path)` require the file without adding it to the cache
- `isWindows()` are we running on windows?
- `getLocaleCode(lang?=process.env.LANG)` get the locale code from a language, e.g. `en_au`
- `getLanguageCode(localeCode?=getLocaleCode())` get the language code from a locale code, e.g. `en`
- `getCountryCode(localeCode?=getLocaleCode())` get the country code from a locale code, e.g. `au`


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/safeps/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/safeps/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/bevry.svg)](https://www.gratipay.com/bevry/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/safeps/commits?author=balupton)
- [giodamelio](https://github.com/giodamelio) — [view contributions](https://github.com/bevry/safeps/commits?author=giodamelio)
- [sfrdmn](https://github.com/sfrdmn) — [view contributions](https://github.com/bevry/safeps/commits?author=sfrdmn)

[Become a contributor!](https://github.com/bevry/safeps/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2013+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
<br/>Copyright &copy; 2011-2012 Benjamin Lupton <b@lupton.cc> (http://balupton.com)

<!-- /LICENSE -->


