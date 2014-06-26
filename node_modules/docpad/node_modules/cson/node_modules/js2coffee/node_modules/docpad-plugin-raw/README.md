# Raw Files Plugin for [DocPad](http://docpad.org)
Copies all files in the raw directory to out.  Useful for large files that cause out of memory error when placed in files directory.

<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/docpad/docpad-plugin-raw.png?branch=master)](http://travis-ci.org/docpad/docpad-plugin-raw "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/docpad-plugin-raw.png)](https://npmjs.org/package/docpad-plugin-raw "View this project on NPM")
[![Dependency Status](https://david-dm.org/docpad/docpad-plugin-raw.png?theme=shields.io)](https://david-dm.org/docpad/docpad-plugin-raw)
[![Development Dependency Status](https://david-dm.org/docpad/docpad-plugin-raw/dev-status.png?theme=shields.io)](https://david-dm.org/docpad/docpad-plugin-raw#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/docpad.png)](https://www.gittip.com/docpad/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")

<!-- /BADGES -->


## Install

```
docpad install raw
```


## Configuration
Set as many sources as you want. Path should be relative to the `src` directory. The out folder specified in docpad.coffee is used for the destination.

If no configuration is specified, defaults to `raw` folder

```
# ...
plugins:
    raw:
        raw:
            src: 'raw'
        app:
            src: 'app'
# ...
```

You can also specify copy options as specified by ncp package

```
# ...
plugins:
    raw:
        raw:
            src: 'raw'
            options:
                clobber: false
# ...
```

If you would rather use a shell command

```
# ...
plugins:
    raw:
        command: ['rsync', '-a', './src/raw/', './out/']
# ...
```

## Deployment Notes

Using ncp should make this plugin work on a wide variety of platforms and hosted platforms such as Heroku

<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/docpad/docpad-plugin-raw/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/docpad/docpad-plugin-raw/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- J. Harshbarger <> (https://github.com/hypercubed)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/docpad.png)](https://www.gittip.com/docpad/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/docpad/docpad-plugin-raw/commits?author=balupton)
- [Hypercubed](https://github.com/Hypercubed) — [view contributions](https://github.com/docpad/docpad-plugin-raw/commits?author=Hypercubed)
- [Marcus Stong](https://github.com/stongo) <stongo@gmail.com> — [view contributions](https://github.com/docpad/docpad-plugin-raw/commits?author=stongo)
- [RobLoach](https://github.com/RobLoach) — [view contributions](https://github.com/docpad/docpad-plugin-raw/commits?author=RobLoach)

[Become a contributor!](https://github.com/docpad/docpad-plugin-raw/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2013+ J. Harshbarger <> (https://github.com/hypercubed)

<!-- /LICENSE -->


