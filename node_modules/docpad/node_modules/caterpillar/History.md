# History

- v2.0.7 December 12, 2013
	-  Use native streams if available, otherwise fallback to [readable-stream](https://npmjs.org/package/readable-stream)
	- Repackaged

- v2.0.6 October 23, 2013
	- `Logger:log` is now permantely bound to the logger instance, for easy passing around

- v2.0.5 October 23, 2013
	- Added `create` API to make life easier when doing one liners
	- Project meta data files are now maintained by [Projectz](https://github.com/bevry/projectz)
	- Updated dependencies

- v2.0.4 July 23, 2013
	- Added `lineOffset` configuration offset to allow you to detect the correct line of the reporting when using wrappers
	- Updated dependencies

- v2.0.3 May 19, 2013
	- iOS support (iOS devices do not have `new Error().stack`)

- v2.0.2 May 7, 2013
	- Fixed defaulting the log level
		- Closes [issue #6](https://github.com/bevry/caterpillar/issues/6) reported by [Erik Dasque](https://github.com/edasque)

- v2.0.1 April 25, 2013
	- Node 0.8 support

- v2.0.0 April 25, 2013
	- Rewrote using streams

- v1.1.4 March 25, 2013
	- Repackaged

- v1.1.3 October 18, 2012
	- Updated cli-color from 0.1 to 0.2
	- Make cli-color an optional dependency

- v1.1.2 August 10, 2012
	- Rejigged directory structure
	- Re-added markdown files to npm distribution as they are required for the npm website

- v1.1.1 May 4, 2012
	- Fixed dependency overwrite

- v1.1.0 May 4, 2012
	- Caterpillar now pre-compiles, so the coffee-script dependency is no longer needed

- v1.0.0 February 11, 2012
	- Modularised
	- Added [docco](http://jashkenas.github.com/docco/) docs
	- Debug line is now only outputted if the log level is 7
	- Added `setLevel(level)`
	- Added `History.md`
	- Added new screenshots
	- `cli-color` dependency now accepts revisions

- v0.1 September 5, 2011
	- Initial commit
