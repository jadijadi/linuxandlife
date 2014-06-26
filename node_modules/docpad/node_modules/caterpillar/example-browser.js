/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/ 	
/******/ 	// The require function
/******/ 	function require(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/ 		
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, require);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// The bundle contains no chunks. A empty chunk loading function.
/******/ 	require.e = function requireEnsure(_, callback) {
/******/ 		callback.call(null, this);
/******/ 	};
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	require.modules = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	require.cache = installedModules;
/******/ 	
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return require(0);
/******/ })
/************************************************************************/
/******/ ({
/******/ // __webpack_public_path__
/******/ c: "",

/***/ 0:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, process) {// Import
	var level   = process.argv.indexOf('-d') === -1 ? 6 : 7;
	var logger  = require(3).createLogger({level:level});
	var filter  = require(5).createFilter();
	var human   = require(4).createHuman();

	// Where to output?
	if ( process.title === 'browser' ) {
		// Include the browser compatibility layer
		var browser = require(9).createBrowser();

		// Pipe to filter to human to browser
		logger.pipe(filter).pipe(human).pipe(browser);
	}
	else {
		// Pipe to filter to human to stdout
		logger.pipe(filter).pipe(human).pipe(process.stdout);

		// If we are debugging, then write the original logger data to debug.log
		if ( level === 7 ) {
			logger.pipe(require(2).createWriteStream('./debug.log'));
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
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(1)))

/***/ },

/***/ 1:
/***/ function(module, exports, require) {

	var events = require(6);

	exports = module.exports = new events.EventEmitter();

	exports.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	        && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	        && window.postMessage && window.addEventListener
	    ;

	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }

	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            if (ev.source === window && ev.data === 'browserify-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);

	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('browserify-tick', '*');
	        };
	    }

	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();

	exports.platform = exports.arch = 
	exports.execPath = exports.title = 'browser';
	exports.pid = 1;
	exports.browser = true;
	exports.env = {};
	exports.argv = [];

	exports.binding = function (name) {
	    if (name === 'evals') return (require)(7)
	    else throw new Error('No such module. (Possibly not yet loaded)')
	};

	(function () {
	    var cwd = '/';
	    var path;
	    exports.cwd = function () { return cwd };
	    exports.chdir = function (dir) {
	        if (!path) path = require(8);
	        cwd = path.resolve(dir, cwd);
	    };
	})();

	exports.exit = exports.kill = 
	exports.umask = exports.dlopen = 
	exports.uptime = exports.memoryUsage = 
	exports.uvCounters = function() {};
	exports.features = {};


/***/ },

/***/ 2:
/***/ function(module, exports, require) {

	// nothing to see here... no file methods for the browser


/***/ },

/***/ 3:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, __dirname) {// Generated by CoffeeScript 1.6.3
	(function() {
	  var Logger, Transform, extendr, stream, _ref,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __slice = [].slice;

	  extendr = require(15);

	  stream = require(10);

	  if ((stream.Transform != null) === false) {
	    stream = require(16);
	  }

	  Transform = (function(_super) {
	    __extends(Transform, _super);

	    Transform.prototype.config = null;

	    function Transform(opts) {
	      this._transform = __bind(this._transform, this);
	      this.setConfig = __bind(this.setConfig, this);
	      this.pipe = __bind(this.pipe, this);
	      this.config = extendr.deepClone(this.config);
	      this.setConfig(opts);
	      Transform.__super__.constructor.apply(this, arguments);
	    }

	    Transform.prototype.pipe = function(child) {
	      if (typeof child.setConfig === "function" ? child.setConfig(this.config) : void 0) {
	        this.on('config', child.setConfig);
	      }
	      return Transform.__super__.pipe.apply(this, arguments);
	    };

	    Transform.prototype.setConfig = function(opts) {
	      extendr.deepExtend(this.config, opts);
	      this.emit('config', this.config);
	      return this;
	    };

	    Transform.prototype.getConfig = function() {
	      return this.config;
	    };

	    Transform.prototype._transform = function(chunk, encoding, next) {
	      var entry, message;
	      entry = JSON.parse(chunk.toString());
	      message = this.format(entry);
	      if (message) {
	        message = JSON.stringify(message);
	      }
	      return next(null, message);
	    };

	    Transform.prototype.format = function(entry) {
	      return entry;
	    };

	    return Transform;

	  })(stream.Transform);

	  Logger = (function(_super) {
	    __extends(Logger, _super);

	    function Logger() {
	      this.log = __bind(this.log, this);
	      _ref = Logger.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    Logger.prototype.config = {
	      lineOffset: 0,
	      levels: {
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
	        "default": 6
	      }
	    };

	    Logger.prototype._transform = function(chunk, encoding, next) {
	      return next(null, chunk);
	    };

	    Logger.prototype.getLevelNumber = function(name) {
	      var _ref1;
	      return (_ref1 = this.config.levels[name]) != null ? _ref1 : null;
	    };

	    Logger.prototype.getLevelName = function(number) {
	      var key, value, _ref1;
	      _ref1 = this.config.levels;
	      for (key in _ref1) {
	        if (!__hasProp.call(_ref1, key)) continue;
	        value = _ref1[key];
	        if (value === number) {
	          return key;
	        }
	      }
	      return null;
	    };

	    Logger.prototype.getLevelInfo = function(level) {
	      var levelName, levelNumber, result;
	      result = {
	        levelNumber: null,
	        levelName: null,
	        defaulted: false
	      };
	      if (typeof level === 'number') {
	        levelNumber = level;
	        levelName = this.getLevelName(levelNumber);
	      } else {
	        levelName = level;
	        levelNumber = this.getLevelNumber(levelName);
	        levelName = this.getLevelName(levelNumber);
	        if (levelNumber == null) {
	          levelNumber = this.getLevelNumber('default');
	          levelName = this.getLevelName(levelNumber);
	          result.defaulted = true;
	        }
	      }
	      result.levelNumber = levelNumber;
	      result.levelName = levelName;
	      return result;
	    };

	    Logger.prototype.getLineInfo = function() {
	      var err, line, lines, offset, parts, result, _i, _len, _ref1;
	      result = {
	        line: -1,
	        method: 'unknown',
	        file: 'unknown'
	      };
	      err = new Error();
	      lines = ((_ref1 = err.stack) != null ? _ref1.split('\n') : void 0) || [];
	      offset = this.config.lineOffset;
	      for (_i = 0, _len = lines.length; _i < _len; _i++) {
	        line = lines[_i];
	        if (line.indexOf(__dirname) !== -1 || line.indexOf(' at ') === -1) {
	          continue;
	        }
	        if (offset !== 0) {
	          --offset;
	          continue;
	        }
	        parts = line.split(':');
	        if (parts[0].indexOf('(') === -1) {
	          result.method = 'unknown';
	          result.file = parts[0].replace(/^.+?\s+at\s+/, '');
	        } else {
	          result.method = parts[0].replace(/^.+?\s+at\s+/, '').replace(/\s+\(.+$/, '');
	          result.file = parts[0].replace(/^.+?\(/, '');
	        }
	        result.line = parts[1];
	        break;
	      }
	      return result;
	    };

	    Logger.prototype.format = function() {
	      var args, entry, level, levelInfo, lineInfo;
	      level = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      entry = {};
	      entry.date = new Date().toISOString();
	      levelInfo = this.getLevelInfo(level);
	      lineInfo = this.getLineInfo(level);
	      if (levelInfo.defaulted && level !== 'default') {
	        args.unshift(level);
	      }
	      delete levelInfo.defaulted;
	      entry.args = args;
	      extendr.extend(entry, levelInfo, lineInfo);
	      return entry;
	    };

	    Logger.prototype.log = function() {
	      var args, entry, entryString;
	      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      entry = this.format.apply(this, args);
	      this.emit('log', entry);
	      entryString = JSON.stringify(entry);
	      this.write(entryString);
	      return this;
	    };

	    return Logger;

	  })(Transform);

	  module.exports = {
	    Transform: Transform,
	    Logger: Logger,
	    createTransform: function() {
	      var args;
	      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      return (function(func, args, ctor) {
	        ctor.prototype = func.prototype;
	        var child = new ctor, result = func.apply(child, args);
	        return Object(result) === result ? result : child;
	      })(Transform, args, function(){});
	    },
	    createLogger: function() {
	      var args;
	      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      return (function(func, args, ctor) {
	        ctor.prototype = func.prototype;
	        var child = new ctor, result = func.apply(child, args);
	        return Object(result) === result ? result : child;
	      })(Logger, args, function(){});
	    }
	  };

	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, "/"))

/***/ },

/***/ 4:
/***/ function(module, exports, require) {

	// Generated by CoffeeScript 1.6.3
	var Human, ansiColors, ansiStyles, err, util, _ref,
	  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  __slice = [].slice;

	util = require(13);

	try {
	  ansiColors = require(22);
	  ansiStyles = require(21);
	} catch (_error) {
	  err = _error;
	  ansiColors = null;
	  ansiStyles = null;
	}

	Human = (function(_super) {
	  __extends(Human, _super);

	  function Human() {
	    this.format = __bind(this.format, this);
	    this._transform = __bind(this._transform, this);
	    _ref = Human.__super__.constructor.apply(this, arguments);
	    return _ref;
	  }

	  Human.prototype.config = {
	    color: true,
	    level: null,
	    colors: {
	      0: 'red',
	      1: 'red',
	      2: 'red',
	      3: 'red',
	      4: 'yellow',
	      5: 'yellow',
	      6: 'green',
	      7: 'green'
	    }
	  };

	  Human.prototype._transform = function(chunk, encoding, next) {
	    var entry, message;
	    entry = JSON.parse(chunk.toString());
	    message = this.format(entry);
	    return next(null, message);
	  };

	  Human.prototype.getColor = function(levelNumber) {
	    var color, _ref1;
	    color = ((_ref1 = this.config.colors) != null ? _ref1[levelNumber] : void 0) || false;
	    return color;
	  };

	  Human.prototype.padLeft = function(padding, size, msg) {
	    var i, _i, _ref1;
	    padding = String(padding);
	    msg = String(msg);
	    if (msg.length < size) {
	      for (i = _i = 0, _ref1 = size - msg.length; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
	        msg = padding + msg;
	      }
	    }
	    return msg;
	  };

	  Human.prototype.padRight = function(padding, size, msg) {
	    var i, _i, _ref1;
	    padding = String(padding);
	    msg = String(msg);
	    if (msg.length < size) {
	      for (i = _i = 0, _ref1 = size - msg.length; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
	        msg += padding;
	      }
	    }
	    return msg;
	  };

	  Human.prototype.formatArguments = function(args) {
	    var index, parts, text, value, _i, _len;
	    parts = [];
	    for (index = _i = 0, _len = args.length; _i < _len; index = ++_i) {
	      value = args[index];
	      parts[index] = typeof value === 'string' ? value : util.inspect(value, false, 10);
	    }
	    text = parts.join(' ');
	    return text;
	  };

	  Human.prototype.formatDate = function(now) {
	    var date, hours, minutes, month, ms, result, seconds, year;
	    now = new Date(now);
	    year = now.getFullYear();
	    month = this.padLeft('0', 2, now.getMonth() + 1);
	    date = this.padLeft('0', 2, now.getDate());
	    hours = this.padLeft('0', 2, now.getHours());
	    minutes = this.padLeft('0', 2, now.getMinutes());
	    seconds = this.padLeft('0', 2, now.getSeconds());
	    ms = this.padLeft('0', 3, now.getMilliseconds());
	    result = "" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "." + ms;
	    return result;
	  };

	  Human.prototype.format = function(entry) {
	    var config, debugFormatter, debugMode, debugString, entryString, levelFormatter, levelString, messageString, result, seperator, textFormatter, useColors;
	    config = this.getConfig();
	    entry.color = this.getColor(entry.levelNumber);
	    entry.timestamp = this.formatDate(entry.date);
	    entry.text = this.formatArguments(entry.args);
	    useColors = this.config.color === true;
	    debugMode = config.level === 7;
	    result = null;
	    if (entry.text) {
	      levelFormatter = useColors && ((ansiColors != null ? ansiColors[entry.color] : void 0) || (ansiStyles != null ? ansiStyles[entry.color] : void 0));
	      textFormatter = false && debugMode && useColors && (ansiStyles != null ? ansiStyles.bright : void 0);
	      debugFormatter = debugMode && useColors && (ansiStyles != null ? ansiStyles.dim : void 0);
	      levelString = entry.levelName + ':';
	      if (levelFormatter) {
	        levelString = levelFormatter(levelString);
	      }
	      entryString = entry.text;
	      if (textFormatter) {
	        entryString = textFormatter(entryString);
	      }
	      messageString = "" + levelString + " " + entryString;
	      if (debugMode) {
	        seperator = '\n    ';
	        debugString = "→ [" + entry.timestamp + "] [" + entry.file + ":" + entry.line + "] [" + entry.method + "]";
	        if (debugFormatter) {
	          debugString = debugFormatter(debugString);
	        }
	        result = "" + messageString + seperator + debugString + "\n";
	      } else {
	        result = messageString + '\n';
	      }
	    }
	    return result;
	  };

	  return Human;

	})(require(3).Transform);

	module.exports = {
	  Human: Human,
	  createHuman: function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Human, args, function(){});
	  }
	};


/***/ },

/***/ 5:
/***/ function(module, exports, require) {

	// Generated by CoffeeScript 1.6.3
	var Filter, _ref,
	  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  __slice = [].slice;

	Filter = (function(_super) {
	  __extends(Filter, _super);

	  function Filter() {
	    this._transform = __bind(this._transform, this);
	    _ref = Filter.__super__.constructor.apply(this, arguments);
	    return _ref;
	  }

	  Filter.prototype.config = {
	    level: 6
	  };

	  Filter.prototype._transform = function(chunk, encoding, next) {
	    var entry, message;
	    entry = JSON.parse(chunk.toString());
	    message = this.format(entry);
	    if (message) {
	      message = JSON.stringify(message);
	    }
	    return next(null, message);
	  };

	  Filter.prototype.format = function(entry) {
	    if (entry.levelNumber > this.config.level) {
	      return null;
	    }
	    return entry;
	  };

	  return Filter;

	})(require(3).Transform);

	module.exports = {
	  Filter: Filter,
	  createFilter: function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Filter, args, function(){});
	  }
	};


/***/ },

/***/ 6:
/***/ function(module, exports, require) {

	var EventEmitter = exports.EventEmitter = function EventEmitter() {};
	var isArray = require(11);
	var indexOf = require(12);



	// By default EventEmitters will print a warning if more than
	// 10 listeners are added to it. This is a useful default which
	// helps finding memory leaks.
	//
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	var defaultMaxListeners = 10;
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!this._events) this._events = {};
	  this._maxListeners = n;
	};


	EventEmitter.prototype.emit = function(type) {
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events || !this._events.error ||
	        (isArray(this._events.error) && !this._events.error.length))
	    {
	      if (arguments[1] instanceof Error) {
	        throw arguments[1]; // Unhandled 'error' event
	      } else {
	        throw new Error("Uncaught, unspecified 'error' event.");
	      }
	      return false;
	    }
	  }

	  if (!this._events) return false;
	  var handler = this._events[type];
	  if (!handler) return false;

	  if (typeof handler == 'function') {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        var args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	    return true;

	  } else if (isArray(handler)) {
	    var args = Array.prototype.slice.call(arguments, 1);

	    var listeners = handler.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	      listeners[i].apply(this, args);
	    }
	    return true;

	  } else {
	    return false;
	  }
	};

	// EventEmitter is defined in src/node_events.cc
	// EventEmitter.prototype.emit() is also defined there.
	EventEmitter.prototype.addListener = function(type, listener) {
	  if ('function' !== typeof listener) {
	    throw new Error('addListener only takes instances of Function');
	  }

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type == "newListeners"! Before
	  // adding it to the listeners, first emit "newListeners".
	  this.emit('newListener', type, listener);
	  if (!this._events[type]) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  } else if (isArray(this._events[type])) {

	    // If we've already got an array, just append.
	    this._events[type].push(listener);

	  } else {
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	  }

	  // Check for listener leak
	  if (isArray(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (this._maxListeners !== undefined) {
	      m = this._maxListeners;
	    } else {
	      m = defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(events) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      console.trace();
	    }
	  }
	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if ('function' !== typeof listener) {
	    throw new Error('.once only takes instances of Function');
	  }

	  var self = this;
	  function g() {
	    self.removeListener(type, g);
	    listener.apply(this, arguments);
	  }

	  g.listener = listener;
	  self.on(type, g);

	  return this;
	};

	EventEmitter.prototype.removeListener = function(type, listener) {
	  if ('function' !== typeof listener) {
	    throw new Error('removeListener only takes instances of Function');
	  }

	  // does not use listeners(), so no side effect of creating _events[type]
	  if (!this._events || !this._events[type]) return this;

	  var list = this._events[type];

	  if (isArray(list)) {
	    var position = -1;
	    for (var i = 0, length = list.length; i < length; i++) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener))
	      {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;
	    list.splice(position, 1);
	    if (list.length == 0)
	      delete this._events[type];
	  } else if (list === listener ||
	             (list.listener && list.listener === listener)) {
	    delete this._events[type];
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  if (arguments.length === 0) {
	    this._events = {};
	    return this;
	  }

	  // does not use listeners(), so no side effect of creating _events[type]
	  if (type && this._events && this._events[type]) this._events[type] = null;
	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  if (!this._events) this._events = {};
	  if (!this._events[type]) this._events[type] = [];
	  if (!isArray(this._events[type])) {
	    this._events[type] = [this._events[type]];
	  }
	  return this._events[type];
	};


/***/ },

/***/ 7:
/***/ function(module, exports, require) {

	var Object_keys = function (obj) {
	    if (Object.keys) return Object.keys(obj)
	    else {
	        var res = [];
	        for (var key in obj) res.push(key)
	        return res;
	    }
	};

	var forEach = function (xs, fn) {
	    if (xs.forEach) return xs.forEach(fn)
	    else for (var i = 0; i < xs.length; i++) {
	        fn(xs[i], i, xs);
	    }
	};

	var Script = exports.Script = function NodeScript (code) {
	    if (!(this instanceof Script)) return new Script(code);
	    this.code = code;
	};

	Script.prototype.runInNewContext = function (context) {
	    if (!context) context = {};
	    
	    var iframe = document.createElement('iframe');
	    if (!iframe.style) iframe.style = {};
	    iframe.style.display = 'none';
	    
	    document.body.appendChild(iframe);
	    
	    var win = iframe.contentWindow;
	    
	    forEach(Object_keys(context), function (key) {
	        win[key] = context[key];
	    });
	     
	    if (!win.eval && win.execScript) {
	        // win.eval() magically appears when this is called in IE:
	        win.execScript('null');
	    }
	    
	    var res = win.eval(this.code);
	    
	    forEach(Object_keys(win), function (key) {
	        context[key] = win[key];
	    });
	    
	    document.body.removeChild(iframe);
	    
	    return res;
	};

	Script.prototype.runInThisContext = function () {
	    return eval(this.code); // maybe...
	};

	Script.prototype.runInContext = function (context) {
	    // seems to be just runInNewContext on magical context objects which are
	    // otherwise indistinguishable from objects except plain old objects
	    // for the parameter segfaults node
	    return this.runInNewContext(context);
	};

	forEach(Object_keys(Script.prototype), function (name) {
	    exports[name] = Script[name] = function (code) {
	        var s = Script(code);
	        return s[name].apply(s, [].slice.call(arguments, 1));
	    };
	});

	exports.createScript = function (code) {
	    return exports.Script(code);
	};

	exports.createContext = Script.createContext = function (context) {
	    // not really sure what this one does
	    // seems to just make a shallow copy
	    var copy = {};
	    if(typeof context === 'object') {
	        forEach(Object_keys(context), function (key) {
	            copy[key] = context[key];
	        });
	    }
	    return copy;
	};


/***/ },

/***/ 8:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, process) {var filter = require(14);


	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length; i >= 0; i--) {
	    var last = parts[i];
	    if (last == '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Regex to split a filename into [*, dir, basename, ext]
	// posix version
	var splitPathRe =
		/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;


	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	var resolvedPath = '',
	    resolvedAbsolute = false;

	for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
	  var path = (i >= 0)
	      ? arguments[i]
	      : process.cwd();

	  // Skip empty and invalid entries
	  if (typeof path !== 'string' || !path) {
	    continue;
	  }

	  resolvedPath = path + '/' + resolvedPath;
	  resolvedAbsolute = path.charAt(0) === '/';
	}

	// At this point the path should be resolved to a full absolute path, but
	// handle relative paths to be safe (might happen when process.cwd() fails)

	// Normalize the path
	resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	var isAbsolute = path.charAt(0) === '/',
	    trailingSlash = path.slice(-1) === '/';

	// Normalize the path
	path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	  
	  return (isAbsolute ? '/' : '') + path;
	};


	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    return p && typeof p === 'string';
	  }).join('/'));
	};


	exports.dirname = function(path) {
	  var match = splitPathRe.exec(path);
	  var root = match[1] || '';
	  var dir = root + (match[2] || '');
	  var isWindows = false;
	  if (!dir) {
	    // No dirname
	    return '.';
	  } else if (dir.length === 1 ||
	      (isWindows && dir.length <= 3 && dir.charAt(1) === ':')) {
	    // It is just a slash or a drive letter with a slash
	    return dir;
	  } else {
	    // It is a full dirname, strip trailing slash
	    return dir.substring(0, dir.length - 1);
	  }
	};


	exports.basename = function(path, ext) {
	  var f = splitPathRe.exec(path)[3] || '';
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPathRe.exec(path)[4] || '';
	};

	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(1)))

/***/ },

/***/ 9:
/***/ function(module, exports, require) {

	// Generated by CoffeeScript 1.6.3
	var Browser, _ref,
	  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  __slice = [].slice;

	Browser = (function(_super) {
	  __extends(Browser, _super);

	  function Browser() {
	    this.format = __bind(this.format, this);
	    this._transform = __bind(this._transform, this);
	    _ref = Browser.__super__.constructor.apply(this, arguments);
	    return _ref;
	  }

	  Browser.prototype.config = {
	    color: true,
	    write: true,
	    styles: {
	      red: {
	        start: 31,
	        end: 39,
	        value: 'color:red'
	      },
	      yellow: {
	        start: 33,
	        end: 39,
	        value: 'color:orange'
	      },
	      green: {
	        start: 32,
	        end: 39,
	        value: 'color:green'
	      },
	      bright: {
	        start: 1,
	        end: 22,
	        value: 'font-weight:bold'
	      },
	      dim: {
	        start: 2,
	        end: 22,
	        value: 'color:lightGray'
	      },
	      italic: {
	        start: 3,
	        end: 23,
	        value: 'font-style:italic'
	      },
	      underline: {
	        start: 4,
	        end: 24,
	        value: 'text-decoration:underline'
	      }
	    }
	  };

	  Browser.prototype._transform = function(chunk, encoding, next) {
	    var args, entry, err, message, _err;
	    entry = chunk.toString();
	    if (entry[0] === '{') {
	      err = new Error("Input to the browser transform was not human readable");
	    } else {
	      try {
	        args = this.format(entry);
	        if (this.getConfig().write === true) {
	          console.log.apply(console, args);
	        }
	        message = JSON.stringify(args);
	      } catch (_error) {
	        _err = _error;
	        err = err;
	      }
	    }
	    return next(err, message);
	  };

	  Browser.prototype.format = function(entry) {
	    var args, config, result;
	    config = this.getConfig();
	    args = [];
	    result = entry.replace(/\u001b\[([0-9]+)m(.+?)\u001b\[([0-9]+)m/g, function(match, start, message, end) {
	      var key, matchedStyle, style, _ref1;
	      if (config.color === false) {
	        return message;
	      }
	      matchedStyle = null;
	      _ref1 = config.styles;
	      for (key in _ref1) {
	        style = _ref1[key];
	        if (String(style.start) === String(start) && String(style.end) === String(end)) {
	          matchedStyle = style;
	          break;
	        }
	      }
	      if (!matchedStyle) {
	        return message;
	      }
	      args.push(style.value);
	      args.push(message);
	      args.push('color:default; font:default; text-decoration:default');
	      return '%c%s%c';
	    });
	    return [result.trim()].concat(args);
	  };

	  return Browser;

	})(require(3).Transform);

	module.exports = {
	  Browser: Browser,
	  createBrowser: function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Browser, args, function(){});
	  }
	};


/***/ },

/***/ 10:
/***/ function(module, exports, require) {

	var events = require(6);
	var util = require(13);

	function Stream() {
	  events.EventEmitter.call(this);
	}
	util.inherits(Stream, events.EventEmitter);
	module.exports = Stream;
	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once, and
	  // only when all sources have ended.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    dest._pipeCount = dest._pipeCount || 0;
	    dest._pipeCount++;

	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest._pipeCount--;

	    // remove the listeners
	    cleanup();

	    if (dest._pipeCount > 0) {
	      // waiting for other incoming streams to end.
	      return;
	    }

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest._pipeCount--;

	    // remove the listeners
	    cleanup();

	    if (dest._pipeCount > 0) {
	      // waiting for other incoming streams to end.
	      return;
	    }

	    dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (this.listeners('error').length === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('end', cleanup);
	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('end', cleanup);
	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },

/***/ 11:
/***/ function(module, exports, require) {

	module.exports = typeof Array.isArray === 'function'
	    ? Array.isArray
	    : function (xs) {
	        return Object.prototype.toString.call(xs) === '[object Array]'
	    }
	;

	/*

	alternative

	function isArray(ar) {
	  return ar instanceof Array ||
	         Array.isArray(ar) ||
	         (ar && ar !== Object.prototype && isArray(ar.__proto__));
	}

	*/

/***/ },

/***/ 12:
/***/ function(module, exports, require) {

	module.exports = function indexOf (xs, x) {
	    if (xs.indexOf) return xs.indexOf(x);
	    for (var i = 0; i < xs.length; i++) {
	        if (x === xs[i]) return i;
	    }
	    return -1;
	}


/***/ },

/***/ 13:
/***/ function(module, exports, require) {

	var events = require(6);

	var isArray = require(11);
	var Object_keys = require(17);
	var Object_getOwnPropertyNames = require(18);
	var Object_create = require(19);
	var isRegExp = require(20);

	exports.isArray = isArray;
	exports.isDate = isDate;
	exports.isRegExp = isRegExp;


	exports.print = function () {};
	exports.puts = function () {};
	exports.debug = function() {};

	exports.inspect = function(obj, showHidden, depth, colors) {
	  var seen = [];

	  var stylize = function(str, styleType) {
	    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	    var styles =
	        { 'bold' : [1, 22],
	          'italic' : [3, 23],
	          'underline' : [4, 24],
	          'inverse' : [7, 27],
	          'white' : [37, 39],
	          'grey' : [90, 39],
	          'black' : [30, 39],
	          'blue' : [34, 39],
	          'cyan' : [36, 39],
	          'green' : [32, 39],
	          'magenta' : [35, 39],
	          'red' : [31, 39],
	          'yellow' : [33, 39] };

	    var style =
	        { 'special': 'cyan',
	          'number': 'blue',
	          'boolean': 'yellow',
	          'undefined': 'grey',
	          'null': 'bold',
	          'string': 'green',
	          'date': 'magenta',
	          // "name": intentionally not styling
	          'regexp': 'red' }[styleType];

	    if (style) {
	      return '\033[' + styles[style][0] + 'm' + str +
	             '\033[' + styles[style][1] + 'm';
	    } else {
	      return str;
	    }
	  };
	  if (! colors) {
	    stylize = function(str, styleType) { return str; };
	  }

	  function format(value, recurseTimes) {
	    // Provide a hook for user-specified inspect functions.
	    // Check that value is an object with an inspect function on it
	    if (value && typeof value.inspect === 'function' &&
	        // Filter out the util module, it's inspect function is special
	        value !== exports &&
	        // Also filter out any prototype objects using the circular check.
	        !(value.constructor && value.constructor.prototype === value)) {
	      return value.inspect(recurseTimes);
	    }

	    // Primitive types cannot have properties
	    switch (typeof value) {
	      case 'undefined':
	        return stylize('undefined', 'undefined');

	      case 'string':
	        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                                 .replace(/'/g, "\\'")
	                                                 .replace(/\\"/g, '"') + '\'';
	        return stylize(simple, 'string');

	      case 'number':
	        return stylize('' + value, 'number');

	      case 'boolean':
	        return stylize('' + value, 'boolean');
	    }
	    // For some reason typeof null is "object", so special case here.
	    if (value === null) {
	      return stylize('null', 'null');
	    }

	    // Look up the keys of the object.
	    var visible_keys = Object_keys(value);
	    var keys = showHidden ? Object_getOwnPropertyNames(value) : visible_keys;

	    // Functions without properties can be shortcutted.
	    if (typeof value === 'function' && keys.length === 0) {
	      if (isRegExp(value)) {
	        return stylize('' + value, 'regexp');
	      } else {
	        var name = value.name ? ': ' + value.name : '';
	        return stylize('[Function' + name + ']', 'special');
	      }
	    }

	    // Dates without properties can be shortcutted
	    if (isDate(value) && keys.length === 0) {
	      return stylize(value.toUTCString(), 'date');
	    }

	    var base, type, braces;
	    // Determine the object type
	    if (isArray(value)) {
	      type = 'Array';
	      braces = ['[', ']'];
	    } else {
	      type = 'Object';
	      braces = ['{', '}'];
	    }

	    // Make functions say that they are functions
	    if (typeof value === 'function') {
	      var n = value.name ? ': ' + value.name : '';
	      base = (isRegExp(value)) ? ' ' + value : ' [Function' + n + ']';
	    } else {
	      base = '';
	    }

	    // Make dates with properties first say the date
	    if (isDate(value)) {
	      base = ' ' + value.toUTCString();
	    }

	    if (keys.length === 0) {
	      return braces[0] + base + braces[1];
	    }

	    if (recurseTimes < 0) {
	      if (isRegExp(value)) {
	        return stylize('' + value, 'regexp');
	      } else {
	        return stylize('[Object]', 'special');
	      }
	    }

	    seen.push(value);

	    var output = keys.map(function(key) {
	      var name, str;
	      if (value.__lookupGetter__) {
	        if (value.__lookupGetter__(key)) {
	          if (value.__lookupSetter__(key)) {
	            str = stylize('[Getter/Setter]', 'special');
	          } else {
	            str = stylize('[Getter]', 'special');
	          }
	        } else {
	          if (value.__lookupSetter__(key)) {
	            str = stylize('[Setter]', 'special');
	          }
	        }
	      }
	      if (visible_keys.indexOf(key) < 0) {
	        name = '[' + key + ']';
	      }
	      if (!str) {
	        if (seen.indexOf(value[key]) < 0) {
	          if (recurseTimes === null) {
	            str = format(value[key]);
	          } else {
	            str = format(value[key], recurseTimes - 1);
	          }
	          if (str.indexOf('\n') > -1) {
	            if (isArray(value)) {
	              str = str.split('\n').map(function(line) {
	                return '  ' + line;
	              }).join('\n').substr(2);
	            } else {
	              str = '\n' + str.split('\n').map(function(line) {
	                return '   ' + line;
	              }).join('\n');
	            }
	          }
	        } else {
	          str = stylize('[Circular]', 'special');
	        }
	      }
	      if (typeof name === 'undefined') {
	        if (type === 'Array' && key.match(/^\d+$/)) {
	          return str;
	        }
	        name = JSON.stringify('' + key);
	        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	          name = name.substr(1, name.length - 2);
	          name = stylize(name, 'name');
	        } else {
	          name = name.replace(/'/g, "\\'")
	                     .replace(/\\"/g, '"')
	                     .replace(/(^"|"$)/g, "'");
	          name = stylize(name, 'string');
	        }
	      }

	      return name + ': ' + str;
	    });

	    seen.pop();

	    var numLinesEst = 0;
	    var length = output.reduce(function(prev, cur) {
	      numLinesEst++;
	      if (cur.indexOf('\n') >= 0) numLinesEst++;
	      return prev + cur.length + 1;
	    }, 0);

	    if (length > 50) {
	      output = braces[0] +
	               (base === '' ? '' : base + '\n ') +
	               ' ' +
	               output.join(',\n  ') +
	               ' ' +
	               braces[1];

	    } else {
	      output = braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	    }

	    return output;
	  }
	  return format(obj, (typeof depth === 'undefined' ? 2 : depth));
	};


	function isDate(d) {
	  if (d instanceof Date) return true;
	  if (typeof d !== 'object') return false;
	  var properties = Date.prototype && Object_getOwnPropertyNames(Date.prototype);
	  var proto = d.__proto__ && Object_getOwnPropertyNames(d.__proto__);
	  return JSON.stringify(proto) === JSON.stringify(properties);
	}

	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}

	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}

	exports.log = function (msg) {};

	exports.pump = null;

	exports.inherits = function(ctor, superCtor) {
	  ctor.super_ = superCtor;
	  ctor.prototype = Object_create(superCtor.prototype, {
	    constructor: {
	      value: ctor,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	};

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (typeof f !== 'string') {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(exports.inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j': return JSON.stringify(args[i++]);
	      default:
	        return x;
	    }
	  });
	  for(var x = args[i]; i < len; x = args[++i]){
	    if (x === null || typeof x !== 'object') {
	      str += ' ' + x;
	    } else {
	      str += ' ' + exports.inspect(x);
	    }
	  }
	  return str;
	};


/***/ },

/***/ 14:
/***/ function(module, exports, require) {

	module.exports = function filter (xs, fn) {
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (fn(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

/***/ },

/***/ 15:
/***/ function(module, exports, require) {

	// Generated by CoffeeScript 1.6.3
	var extendr, typeChecker,
	  __slice = [].slice,
	  __hasProp = {}.hasOwnProperty;

	typeChecker = require(30);

	extendr = {
	  clone: function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    args.unshift({});
	    return this.shallowExtendPlainObjects.apply(this, args);
	  },
	  deepClone: function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    args.unshift({});
	    return this.deepExtendPlainObjects.apply(this, args);
	  },
	  extend: function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return this.shallowExtendPlainObjects.apply(this, args);
	  },
	  deepExtend: function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    return this.deepExtendPlainObjects.apply(this, args);
	  },
	  shallowExtendPlainObjects: function() {
	    var key, obj, objs, target, value, _i, _len;
	    target = arguments[0], objs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	    for (_i = 0, _len = objs.length; _i < _len; _i++) {
	      obj = objs[_i];
	      obj || (obj = {});
	      for (key in obj) {
	        if (!__hasProp.call(obj, key)) continue;
	        value = obj[key];
	        target[key] = value;
	      }
	    }
	    return target;
	  },
	  safeShallowExtendPlainObjects: function() {
	    var key, obj, objs, target, value, _i, _len;
	    target = arguments[0], objs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	    for (_i = 0, _len = objs.length; _i < _len; _i++) {
	      obj = objs[_i];
	      obj || (obj = {});
	      for (key in obj) {
	        if (!__hasProp.call(obj, key)) continue;
	        value = obj[key];
	        if (value == null) {
	          continue;
	        }
	        target[key] = value;
	      }
	    }
	    return target;
	  },
	  deepExtendPlainObjects: function() {
	    var key, obj, objs, target, value, _i, _len;
	    target = arguments[0], objs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	    for (_i = 0, _len = objs.length; _i < _len; _i++) {
	      obj = objs[_i];
	      obj || (obj = {});
	      for (key in obj) {
	        if (!__hasProp.call(obj, key)) continue;
	        value = obj[key];
	        if (typeChecker.isPlainObject(value)) {
	          if (!typeChecker.isPlainObject(target[key])) {
	            target[key] = {};
	          }
	          this.deepExtendPlainObjects(target[key], value);
	        } else if (typeChecker.isArray(value)) {
	          target[key] = value.slice();
	        } else {
	          target[key] = value;
	        }
	      }
	    }
	    return target;
	  },
	  safeDeepExtendPlainObjects: function() {
	    var key, obj, objs, target, value, _i, _len;
	    target = arguments[0], objs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	    for (_i = 0, _len = objs.length; _i < _len; _i++) {
	      obj = objs[_i];
	      obj || (obj = {});
	      for (key in obj) {
	        if (!__hasProp.call(obj, key)) continue;
	        value = obj[key];
	        if (value == null) {
	          continue;
	        }
	        if (typeChecker.isPlainObject(value)) {
	          if (!typeChecker.isPlainObject(target[key])) {
	            target[key] = {};
	          }
	          this.safeDeepExtendPlainObjects(target[key], value);
	        } else if (typeChecker.isArray(value)) {
	          target[key] = value.slice();
	        } else {
	          target[key] = value;
	        }
	      }
	    }
	    return target;
	  },
	  dereference: function(source) {
	    var target;
	    target = JSON.parse(JSON.stringify(source));
	    return target;
	  }
	};

	module.exports = extendr;


/***/ },

/***/ 16:
/***/ function(module, exports, require) {

	exports = module.exports = require(23);
	exports.Stream = require(10);
	exports.Readable = exports;
	exports.Writable = require(24);
	exports.Duplex = require(25);
	exports.Transform = require(26);
	exports.PassThrough = require(27);


/***/ },

/***/ 17:
/***/ function(module, exports, require) {

	module.exports = Object.keys || function objectKeys(object) {
		if (object !== Object(object)) throw new TypeError('Invalid object');
		var result = [];
		for (var name in object) {
			if (Object.prototype.hasOwnProperty.call(object, name)) {
				result.push(name);
			}
		}
		return result;
	};


/***/ },

/***/ 18:
/***/ function(module, exports, require) {

	module.exports = Object.getOwnPropertyNames || function (obj) {
	    var res = [];
	    for (var key in obj) {
	        if (Object.hasOwnProperty.call(obj, key)) res.push(key);
	    }
	    return res;
	};

/***/ },

/***/ 19:
/***/ function(module, exports, require) {

	module.exports = Object.create || function (prototype, properties) {
	    // from es5-shim
	    var object;
	    if (prototype === null) {
	        object = { '__proto__' : null };
	    }
	    else {
	        if (typeof prototype !== 'object') {
	            throw new TypeError(
	                'typeof prototype[' + (typeof prototype) + '] != \'object\''
	            );
	        }
	        var Type = function () {};
	        Type.prototype = prototype;
	        object = new Type();
	        object.__proto__ = prototype;
	    }
	    if (typeof properties !== 'undefined' && Object.defineProperties) {
	        Object.defineProperties(object, properties);
	    }
	    return object;
	};

/***/ },

/***/ 20:
/***/ function(module, exports, require) {

	module.exports = function isRegExp(re) {
	  return re instanceof RegExp ||
	    (typeof re === 'object' && Object.prototype.toString.call(re) === '[object RegExp]');
	}

/***/ },

/***/ 21:
/***/ function(module, exports, require) {

	'use strict';

	/*
	 * Info: http://www.termsys.demon.co.uk/vtansi.htm#colors 
	 * Following caveats
	 * bright    - brightens the color (bold-blue is same as brigthtBlue)
	 * dim       - nothing on Mac or Linux
	 * italic    - nothing on Mac or Linux
	 * underline - underlines string
	 * blink     - nothing on Mac or linux
	 * inverse   - background becomes foreground and vice versa
	 *
	 * In summary, the only styles that work are:
	 *  - bright, underline and inverse
	 *  - the others are only included for completeness
	 */

	var styleNums = {
	    reset     :  [0, 22]
	  , bright    :  [1, 22]
	  , dim       :  [2, 22]
	  , italic    :  [3, 23]
	  , underline :  [4, 24]
	  , blink     :  [5, 25]
	  , inverse   :  [7, 27]
	  }
	  , styles = {}
	  ;

	Object.keys(styleNums).forEach(function (k) {
	  styles[k] = function (s) { 
	    var open = styleNums[k][0]
	      , close = styleNums[k][1];
	    return '\u001b[' + open + 'm' + s + '\u001b[' + close + 'm';
	  };
	});

	module.exports = styles;


/***/ },

/***/ 22:
/***/ function(module, exports, require) {

	// ColorCodes explained: http://www.termsys.demon.co.uk/vtansi.htm
	'use strict';

	var colorNums = {
	      white         :  37
	    , black         :  30
	    , blue          :  34
	    , cyan          :  36
	    , green         :  32
	    , magenta       :  35
	    , red           :  31
	    , yellow        :  33
	    , brightBlack   :  90
	    , brightRed     :  91
	    , brightGreen   :  92
	    , brightYellow  :  93
	    , brightBlue    :  94
	    , brightMagenta :  95
	    , brightCyan    :  96
	    , brightWhite   :  97
	    }
	  , backgroundColorNums = {
	      bgBlack         :  40
	    , bgRed           :  41
	    , bgGreen         :  42
	    , bgYellow        :  43
	    , bgBlue          :  44
	    , bgMagenta       :  45
	    , bgCyan          :  46
	    , bgWhite         :  47
	    , bgBrightBlack   :  100
	    , bgBrightRed     :  101
	    , bgBrightGreen   :  102
	    , bgBrightYellow  :  103
	    , bgBrightBlue    :  104
	    , bgBrightMagenta :  105
	    , bgBrightCyan    :  106
	    , bgBrightWhite   :  107
	    } 
	  , colors = {};


	Object.keys(colorNums).forEach(function (k) {
	  colors[k] = function (s) { 
	    return '\u001b[' + colorNums[k] + 'm' + s + '\u001b[39m';
	  };
	});

	Object.keys(backgroundColorNums).forEach(function (k) {
	  colors[k] = function (s) { 
	    return '\u001b[' + backgroundColorNums[k] + 'm' + s + '\u001b[49m';
	  };
	});

	module.exports = colors;


/***/ },

/***/ 23:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, global, Buffer, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;
	Readable.ReadableState = ReadableState;

	var EE = require(6).EventEmitter;
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};

	if (!global.setImmediate) global.setImmediate = function setImmediate(fn) {
	  return setTimeout(fn, 0);
	};
	if (!global.clearImmediate) global.clearImmediate = function clearImmediate(i) {
	  return clearTimeout(i);
	};

	var Stream = require(10);
	var util = require(13);
	if (!util.isUndefined) {
	  var utilIs = require(31);
	  for (var f in utilIs) {
	    util[f] = utilIs[f];
	  }
	}
	var StringDecoder;
	var debug;
	if (util.debuglog)
	  debug = util.debuglog('stream');
	else try {
	  debug = require(32)('stream');
	} catch (er) {
	  debug = function() {};
	}

	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = require(28).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = require(28).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode &&
	      !er) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended && state.decoder.end) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events.error)
	    dest.on('error', onerror);
	  else if (Array.isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = state.pipes.indexOf(dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  events.forEach(function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, (function() { return this; }()), require(29).Buffer, require(1)))

/***/ },

/***/ 24:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, process, Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;
	Writable.WritableState = WritableState;

	var util = require(13);
	if (!util.isUndefined) {
	  var utilIs = require(31);
	  for (var f in utilIs) {
	    util[f] = utilIs[f];
	  }
	}
	var Stream = require(10);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;
	}

	function Writable(options) {
	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof require(25)))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  state.needDrain = !ret;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(1), require(29).Buffer))

/***/ },

/***/ 25:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;
	var util = require(13);
	var Readable = require(23);
	var Writable = require(24);

	util.inherits(Duplex, Readable);

	Object.keys(Writable.prototype).forEach(function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(1)))

/***/ },

/***/ 26:
/***/ function(module, exports, require) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = require(25);
	var util = require(13);
	if (!util.isUndefined) {
	  var utilIs = require(31);
	  for (var f in utilIs) {
	    util[f] = utilIs[f];
	  }
	}
	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },

/***/ 27:
/***/ function(module, exports, require) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = require(26);
	var util = require(13);
	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },

/***/ 28:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, Buffer) {var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  this.charBuffer = new Buffer(6);
	  this.charReceived = 0;
	  this.charLength = 0;
	};


	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  var offset = 0;

	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var i = (buffer.length >= this.charLength - this.charReceived) ?
	                this.charLength - this.charReceived :
	                buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, offset, i);
	    this.charReceived += (i - offset);
	    offset = i;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (i == buffer.length) return charStr;

	    // otherwise cut off the characters end from the beginning of this buffer
	    buffer = buffer.slice(i, buffer.length);
	    break;
	  }

	  var lenIncomplete = this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - lenIncomplete, end);
	    this.charReceived = lenIncomplete;
	    end -= lenIncomplete;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    this.charBuffer.write(charStr.charAt(charStr.length - 1), this.encoding);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }

	  return i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  var incomplete = this.charReceived = buffer.length % 2;
	  this.charLength = incomplete ? 2 : 0;
	  return incomplete;
	}

	function base64DetectIncompleteChar(buffer) {
	  var incomplete = this.charReceived = buffer.length % 3;
	  this.charLength = incomplete ? 3 : 0;
	  return incomplete;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(29).Buffer))

/***/ },

/***/ 29:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, Buffer) {function SlowBuffer (size) {
	    this.length = size;
	};

	var assert = require(34);

	exports.INSPECT_MAX_BYTES = 50;


	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}

	function utf8ToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; i++)
	    if (str.charCodeAt(i) <= 0x7F)
	      byteArray.push(str.charCodeAt(i));
	    else {
	      var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
	      for (var j = 0; j < h.length; j++)
	        byteArray.push(parseInt(h[j], 16));
	    }

	  return byteArray;
	}

	function asciiToBytes(str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++ )
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push( str.charCodeAt(i) & 0xFF );

	  return byteArray;
	}

	function base64ToBytes(str) {
	  return require(35).toByteArray(str);
	}

	SlowBuffer.byteLength = function (str, encoding) {
	  switch (encoding || "utf8") {
	    case 'hex':
	      return str.length / 2;

	    case 'utf8':
	    case 'utf-8':
	      return utf8ToBytes(str).length;

	    case 'ascii':
	      return str.length;

	    case 'base64':
	      return base64ToBytes(str).length;

	    default:
	      throw new Error('Unknown encoding');
	  }
	};

	function blitBuffer(src, dst, offset, length) {
	  var pos, i = 0;
	  while (i < length) {
	    if ((i+offset >= dst.length) || (i >= src.length))
	      break;

	    dst[i + offset] = src[i];
	    i++;
	  }
	  return i;
	}

	SlowBuffer.prototype.utf8Write = function (string, offset, length) {
	  var bytes, pos;
	  return SlowBuffer._charsWritten =  blitBuffer(utf8ToBytes(string), this, offset, length);
	};

	SlowBuffer.prototype.asciiWrite = function (string, offset, length) {
	  var bytes, pos;
	  return SlowBuffer._charsWritten =  blitBuffer(asciiToBytes(string), this, offset, length);
	};

	SlowBuffer.prototype.base64Write = function (string, offset, length) {
	  var bytes, pos;
	  return SlowBuffer._charsWritten = blitBuffer(base64ToBytes(string), this, offset, length);
	};

	SlowBuffer.prototype.base64Slice = function (start, end) {
	  var bytes = Array.prototype.slice.apply(this, arguments)
	  return require(35).fromByteArray(bytes);
	}

	function decodeUtf8Char(str) {
	  try {
	    return decodeURIComponent(str);
	  } catch (err) {
	    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
	  }
	}

	SlowBuffer.prototype.utf8Slice = function () {
	  var bytes = Array.prototype.slice.apply(this, arguments);
	  var res = "";
	  var tmp = "";
	  var i = 0;
	  while (i < bytes.length) {
	    if (bytes[i] <= 0x7F) {
	      res += decodeUtf8Char(tmp) + String.fromCharCode(bytes[i]);
	      tmp = "";
	    } else
	      tmp += "%" + bytes[i].toString(16);

	    i++;
	  }

	  return res + decodeUtf8Char(tmp);
	}

	SlowBuffer.prototype.asciiSlice = function () {
	  var bytes = Array.prototype.slice.apply(this, arguments);
	  var ret = "";
	  for (var i = 0; i < bytes.length; i++)
	    ret += String.fromCharCode(bytes[i]);
	  return ret;
	}

	SlowBuffer.prototype.inspect = function() {
	  var out = [],
	      len = this.length;
	  for (var i = 0; i < len; i++) {
	    out[i] = toHex(this[i]);
	    if (i == exports.INSPECT_MAX_BYTES) {
	      out[i + 1] = '...';
	      break;
	    }
	  }
	  return '<SlowBuffer ' + out.join(' ') + '>';
	};


	SlowBuffer.prototype.hexSlice = function(start, end) {
	  var len = this.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; i++) {
	    out += toHex(this[i]);
	  }
	  return out;
	};


	SlowBuffer.prototype.toString = function(encoding, start, end) {
	  encoding = String(encoding || 'utf8').toLowerCase();
	  start = +start || 0;
	  if (typeof end == 'undefined') end = this.length;

	  // Fastpath empty strings
	  if (+end == start) {
	    return '';
	  }

	  switch (encoding) {
	    case 'hex':
	      return this.hexSlice(start, end);

	    case 'utf8':
	    case 'utf-8':
	      return this.utf8Slice(start, end);

	    case 'ascii':
	      return this.asciiSlice(start, end);

	    case 'binary':
	      return this.binarySlice(start, end);

	    case 'base64':
	      return this.base64Slice(start, end);

	    case 'ucs2':
	    case 'ucs-2':
	      return this.ucs2Slice(start, end);

	    default:
	      throw new Error('Unknown encoding');
	  }
	};


	SlowBuffer.prototype.hexWrite = function(string, offset, length) {
	  offset = +offset || 0;
	  var remaining = this.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = +length;
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2) {
	    throw new Error('Invalid hex string');
	  }
	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; i++) {
	    var byte = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(byte)) throw new Error('Invalid hex string');
	    this[offset + i] = byte;
	  }
	  SlowBuffer._charsWritten = i * 2;
	  return i;
	};


	SlowBuffer.prototype.write = function(string, offset, length, encoding) {
	  // Support both (string, offset, length, encoding)
	  // and the legacy (string, encoding, offset, length)
	  if (isFinite(offset)) {
	    if (!isFinite(length)) {
	      encoding = length;
	      length = undefined;
	    }
	  } else {  // legacy
	    var swap = encoding;
	    encoding = offset;
	    offset = length;
	    length = swap;
	  }

	  offset = +offset || 0;
	  var remaining = this.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = +length;
	    if (length > remaining) {
	      length = remaining;
	    }
	  }
	  encoding = String(encoding || 'utf8').toLowerCase();

	  switch (encoding) {
	    case 'hex':
	      return this.hexWrite(string, offset, length);

	    case 'utf8':
	    case 'utf-8':
	      return this.utf8Write(string, offset, length);

	    case 'ascii':
	      return this.asciiWrite(string, offset, length);

	    case 'binary':
	      return this.binaryWrite(string, offset, length);

	    case 'base64':
	      return this.base64Write(string, offset, length);

	    case 'ucs2':
	    case 'ucs-2':
	      return this.ucs2Write(string, offset, length);

	    default:
	      throw new Error('Unknown encoding');
	  }
	};


	// slice(start, end)
	SlowBuffer.prototype.slice = function(start, end) {
	  if (end === undefined) end = this.length;

	  if (end > this.length) {
	    throw new Error('oob');
	  }
	  if (start > end) {
	    throw new Error('oob');
	  }

	  return new Buffer(this, end - start, +start);
	};

	SlowBuffer.prototype.copy = function(target, targetstart, sourcestart, sourceend) {
	  var temp = [];
	  for (var i=sourcestart; i<sourceend; i++) {
	    assert.ok(typeof this[i] !== 'undefined', "copying undefined buffer bytes!");
	    temp.push(this[i]);
	  }

	  for (var i=targetstart; i<targetstart+temp.length; i++) {
	    target[i] = temp[i-targetstart];
	  }
	};

	function coerce(length) {
	  // Coerce length to a number (possibly NaN), round up
	  // in case it's fractional (e.g. 123.456) then do a
	  // double negate to coerce a NaN to 0. Easy, right?
	  length = ~~Math.ceil(+length);
	  return length < 0 ? 0 : length;
	}


	// Buffer

	function Buffer(subject, encoding, offset) {
	  if (!(this instanceof Buffer)) {
	    return new Buffer(subject, encoding, offset);
	  }

	  var type;

	  // Are we slicing?
	  if (typeof offset === 'number') {
	    this.length = coerce(encoding);
	    this.parent = subject;
	    this.offset = offset;
	  } else {
	    // Find the length
	    switch (type = typeof subject) {
	      case 'number':
	        this.length = coerce(subject);
	        break;

	      case 'string':
	        this.length = Buffer.byteLength(subject, encoding);
	        break;

	      case 'object': // Assume object is an array
	        this.length = coerce(subject.length);
	        break;

	      default:
	        throw new Error('First argument needs to be a number, ' +
	                        'array or string.');
	    }

	    if (this.length > Buffer.poolSize) {
	      // Big buffer, just alloc one.
	      this.parent = new SlowBuffer(this.length);
	      this.offset = 0;

	    } else {
	      // Small buffer.
	      if (!pool || pool.length - pool.used < this.length) allocPool();
	      this.parent = pool;
	      this.offset = pool.used;
	      pool.used += this.length;
	    }

	    // Treat array-ish objects as a byte array.
	    if (isArrayIsh(subject)) {
	      for (var i = 0; i < this.length; i++) {
	        this.parent[i + this.offset] = subject[i];
	      }
	    } else if (type == 'string') {
	      // We are a string
	      this.length = this.write(subject, 0, encoding);
	    }
	  }

	}

	function isArrayIsh(subject) {
	  return Array.isArray(subject) || Buffer.isBuffer(subject) ||
	         subject && typeof subject === 'object' &&
	         typeof subject.length === 'number';
	}

	exports.SlowBuffer = SlowBuffer;
	exports.Buffer = Buffer;

	Buffer.poolSize = 8 * 1024;
	var pool;

	function allocPool() {
	  pool = new SlowBuffer(Buffer.poolSize);
	  pool.used = 0;
	}


	// Static methods
	Buffer.isBuffer = function isBuffer(b) {
	  return b instanceof Buffer || b instanceof SlowBuffer;
	};

	Buffer.concat = function (list, totalLength) {
	  if (!Array.isArray(list)) {
	    throw new Error("Usage: Buffer.concat(list, [totalLength])\n \
	      list should be an Array.");
	  }

	  if (list.length === 0) {
	    return new Buffer(0);
	  } else if (list.length === 1) {
	    return list[0];
	  }

	  if (typeof totalLength !== 'number') {
	    totalLength = 0;
	    for (var i = 0; i < list.length; i++) {
	      var buf = list[i];
	      totalLength += buf.length;
	    }
	  }

	  var buffer = new Buffer(totalLength);
	  var pos = 0;
	  for (var i = 0; i < list.length; i++) {
	    var buf = list[i];
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};

	// Inspect
	Buffer.prototype.inspect = function inspect() {
	  var out = [],
	      len = this.length;

	  for (var i = 0; i < len; i++) {
	    out[i] = toHex(this.parent[i + this.offset]);
	    if (i == exports.INSPECT_MAX_BYTES) {
	      out[i + 1] = '...';
	      break;
	    }
	  }

	  return '<Buffer ' + out.join(' ') + '>';
	};


	Buffer.prototype.get = function get(i) {
	  if (i < 0 || i >= this.length) throw new Error('oob');
	  return this.parent[this.offset + i];
	};


	Buffer.prototype.set = function set(i, v) {
	  if (i < 0 || i >= this.length) throw new Error('oob');
	  return this.parent[this.offset + i] = v;
	};


	// write(string, offset = 0, length = buffer.length-offset, encoding = 'utf8')
	Buffer.prototype.write = function(string, offset, length, encoding) {
	  // Support both (string, offset, length, encoding)
	  // and the legacy (string, encoding, offset, length)
	  if (isFinite(offset)) {
	    if (!isFinite(length)) {
	      encoding = length;
	      length = undefined;
	    }
	  } else {  // legacy
	    var swap = encoding;
	    encoding = offset;
	    offset = length;
	    length = swap;
	  }

	  offset = +offset || 0;
	  var remaining = this.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = +length;
	    if (length > remaining) {
	      length = remaining;
	    }
	  }
	  encoding = String(encoding || 'utf8').toLowerCase();

	  var ret;
	  switch (encoding) {
	    case 'hex':
	      ret = this.parent.hexWrite(string, this.offset + offset, length);
	      break;

	    case 'utf8':
	    case 'utf-8':
	      ret = this.parent.utf8Write(string, this.offset + offset, length);
	      break;

	    case 'ascii':
	      ret = this.parent.asciiWrite(string, this.offset + offset, length);
	      break;

	    case 'binary':
	      ret = this.parent.binaryWrite(string, this.offset + offset, length);
	      break;

	    case 'base64':
	      // Warning: maxLength not taken into account in base64Write
	      ret = this.parent.base64Write(string, this.offset + offset, length);
	      break;

	    case 'ucs2':
	    case 'ucs-2':
	      ret = this.parent.ucs2Write(string, this.offset + offset, length);
	      break;

	    default:
	      throw new Error('Unknown encoding');
	  }

	  Buffer._charsWritten = SlowBuffer._charsWritten;

	  return ret;
	};


	// toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function(encoding, start, end) {
	  encoding = String(encoding || 'utf8').toLowerCase();

	  if (typeof start == 'undefined' || start < 0) {
	    start = 0;
	  } else if (start > this.length) {
	    start = this.length;
	  }

	  if (typeof end == 'undefined' || end > this.length) {
	    end = this.length;
	  } else if (end < 0) {
	    end = 0;
	  }

	  start = start + this.offset;
	  end = end + this.offset;

	  switch (encoding) {
	    case 'hex':
	      return this.parent.hexSlice(start, end);

	    case 'utf8':
	    case 'utf-8':
	      return this.parent.utf8Slice(start, end);

	    case 'ascii':
	      return this.parent.asciiSlice(start, end);

	    case 'binary':
	      return this.parent.binarySlice(start, end);

	    case 'base64':
	      return this.parent.base64Slice(start, end);

	    case 'ucs2':
	    case 'ucs-2':
	      return this.parent.ucs2Slice(start, end);

	    default:
	      throw new Error('Unknown encoding');
	  }
	};


	// byteLength
	Buffer.byteLength = SlowBuffer.byteLength;


	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill(value, start, end) {
	  value || (value = 0);
	  start || (start = 0);
	  end || (end = this.length);

	  if (typeof value === 'string') {
	    value = value.charCodeAt(0);
	  }
	  if (!(typeof value === 'number') || isNaN(value)) {
	    throw new Error('value is not a number');
	  }

	  if (end < start) throw new Error('end < start');

	  // Fill 0 bytes; we're done
	  if (end === start) return 0;
	  if (this.length == 0) return 0;

	  if (start < 0 || start >= this.length) {
	    throw new Error('start out of bounds');
	  }

	  if (end < 0 || end > this.length) {
	    throw new Error('end out of bounds');
	  }

	  return this.parent.fill(value,
	                          start + this.offset,
	                          end + this.offset);
	};


	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function(target, target_start, start, end) {
	  var source = this;
	  start || (start = 0);
	  end || (end = this.length);
	  target_start || (target_start = 0);

	  if (end < start) throw new Error('sourceEnd < sourceStart');

	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length == 0 || source.length == 0) return 0;

	  if (target_start < 0 || target_start >= target.length) {
	    throw new Error('targetStart out of bounds');
	  }

	  if (start < 0 || start >= source.length) {
	    throw new Error('sourceStart out of bounds');
	  }

	  if (end < 0 || end > source.length) {
	    throw new Error('sourceEnd out of bounds');
	  }

	  // Are we oob?
	  if (end > this.length) {
	    end = this.length;
	  }

	  if (target.length - target_start < end - start) {
	    end = target.length - target_start + start;
	  }

	  return this.parent.copy(target.parent,
	                          target_start + target.offset,
	                          start + this.offset,
	                          end + this.offset);
	};


	// slice(start, end)
	Buffer.prototype.slice = function(start, end) {
	  if (end === undefined) end = this.length;
	  if (end > this.length) throw new Error('oob');
	  if (start > end) throw new Error('oob');

	  return new Buffer(this.parent, end - start, +start + this.offset);
	};


	// Legacy methods for backwards compatibility.

	Buffer.prototype.utf8Slice = function(start, end) {
	  return this.toString('utf8', start, end);
	};

	Buffer.prototype.binarySlice = function(start, end) {
	  return this.toString('binary', start, end);
	};

	Buffer.prototype.asciiSlice = function(start, end) {
	  return this.toString('ascii', start, end);
	};

	Buffer.prototype.utf8Write = function(string, offset) {
	  return this.write(string, offset, 'utf8');
	};

	Buffer.prototype.binaryWrite = function(string, offset) {
	  return this.write(string, offset, 'binary');
	};

	Buffer.prototype.asciiWrite = function(string, offset) {
	  return this.write(string, offset, 'ascii');
	};

	Buffer.prototype.readUInt8 = function(offset, noAssert) {
	  var buffer = this;

	  if (!noAssert) {
	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  return buffer.parent[buffer.offset + offset];
	};

	function readUInt16(buffer, offset, isBigEndian, noAssert) {
	  var val = 0;


	  if (!noAssert) {
	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 1 < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  if (isBigEndian) {
	    val = buffer.parent[buffer.offset + offset] << 8;
	    val |= buffer.parent[buffer.offset + offset + 1];
	  } else {
	    val = buffer.parent[buffer.offset + offset];
	    val |= buffer.parent[buffer.offset + offset + 1] << 8;
	  }

	  return val;
	}

	Buffer.prototype.readUInt16LE = function(offset, noAssert) {
	  return readUInt16(this, offset, false, noAssert);
	};

	Buffer.prototype.readUInt16BE = function(offset, noAssert) {
	  return readUInt16(this, offset, true, noAssert);
	};

	function readUInt32(buffer, offset, isBigEndian, noAssert) {
	  var val = 0;

	  if (!noAssert) {
	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 3 < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  if (isBigEndian) {
	    val = buffer.parent[buffer.offset + offset + 1] << 16;
	    val |= buffer.parent[buffer.offset + offset + 2] << 8;
	    val |= buffer.parent[buffer.offset + offset + 3];
	    val = val + (buffer.parent[buffer.offset + offset] << 24 >>> 0);
	  } else {
	    val = buffer.parent[buffer.offset + offset + 2] << 16;
	    val |= buffer.parent[buffer.offset + offset + 1] << 8;
	    val |= buffer.parent[buffer.offset + offset];
	    val = val + (buffer.parent[buffer.offset + offset + 3] << 24 >>> 0);
	  }

	  return val;
	}

	Buffer.prototype.readUInt32LE = function(offset, noAssert) {
	  return readUInt32(this, offset, false, noAssert);
	};

	Buffer.prototype.readUInt32BE = function(offset, noAssert) {
	  return readUInt32(this, offset, true, noAssert);
	};


	/*
	 * Signed integer types, yay team! A reminder on how two's complement actually
	 * works. The first bit is the signed bit, i.e. tells us whether or not the
	 * number should be positive or negative. If the two's complement value is
	 * positive, then we're done, as it's equivalent to the unsigned representation.
	 *
	 * Now if the number is positive, you're pretty much done, you can just leverage
	 * the unsigned translations and return those. Unfortunately, negative numbers
	 * aren't quite that straightforward.
	 *
	 * At first glance, one might be inclined to use the traditional formula to
	 * translate binary numbers between the positive and negative values in two's
	 * complement. (Though it doesn't quite work for the most negative value)
	 * Mainly:
	 *  - invert all the bits
	 *  - add one to the result
	 *
	 * Of course, this doesn't quite work in Javascript. Take for example the value
	 * of -128. This could be represented in 16 bits (big-endian) as 0xff80. But of
	 * course, Javascript will do the following:
	 *
	 * > ~0xff80
	 * -65409
	 *
	 * Whoh there, Javascript, that's not quite right. But wait, according to
	 * Javascript that's perfectly correct. When Javascript ends up seeing the
	 * constant 0xff80, it has no notion that it is actually a signed number. It
	 * assumes that we've input the unsigned value 0xff80. Thus, when it does the
	 * binary negation, it casts it into a signed value, (positive 0xff80). Then
	 * when you perform binary negation on that, it turns it into a negative number.
	 *
	 * Instead, we're going to have to use the following general formula, that works
	 * in a rather Javascript friendly way. I'm glad we don't support this kind of
	 * weird numbering scheme in the kernel.
	 *
	 * (BIT-MAX - (unsigned)val + 1) * -1
	 *
	 * The astute observer, may think that this doesn't make sense for 8-bit numbers
	 * (really it isn't necessary for them). However, when you get 16-bit numbers,
	 * you do. Let's go back to our prior example and see how this will look:
	 *
	 * (0xffff - 0xff80 + 1) * -1
	 * (0x007f + 1) * -1
	 * (0x0080) * -1
	 */
	Buffer.prototype.readInt8 = function(offset, noAssert) {
	  var buffer = this;
	  var neg;

	  if (!noAssert) {
	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  neg = buffer.parent[buffer.offset + offset] & 0x80;
	  if (!neg) {
	    return (buffer.parent[buffer.offset + offset]);
	  }

	  return ((0xff - buffer.parent[buffer.offset + offset] + 1) * -1);
	};

	function readInt16(buffer, offset, isBigEndian, noAssert) {
	  var neg, val;

	  if (!noAssert) {
	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 1 < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  val = readUInt16(buffer, offset, isBigEndian, noAssert);
	  neg = val & 0x8000;
	  if (!neg) {
	    return val;
	  }

	  return (0xffff - val + 1) * -1;
	}

	Buffer.prototype.readInt16LE = function(offset, noAssert) {
	  return readInt16(this, offset, false, noAssert);
	};

	Buffer.prototype.readInt16BE = function(offset, noAssert) {
	  return readInt16(this, offset, true, noAssert);
	};

	function readInt32(buffer, offset, isBigEndian, noAssert) {
	  var neg, val;

	  if (!noAssert) {
	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 3 < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  val = readUInt32(buffer, offset, isBigEndian, noAssert);
	  neg = val & 0x80000000;
	  if (!neg) {
	    return (val);
	  }

	  return (0xffffffff - val + 1) * -1;
	}

	Buffer.prototype.readInt32LE = function(offset, noAssert) {
	  return readInt32(this, offset, false, noAssert);
	};

	Buffer.prototype.readInt32BE = function(offset, noAssert) {
	  return readInt32(this, offset, true, noAssert);
	};

	function readFloat(buffer, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset + 3 < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  return require(33).readIEEE754(buffer, offset, isBigEndian,
	      23, 4);
	}

	Buffer.prototype.readFloatLE = function(offset, noAssert) {
	  return readFloat(this, offset, false, noAssert);
	};

	Buffer.prototype.readFloatBE = function(offset, noAssert) {
	  return readFloat(this, offset, true, noAssert);
	};

	function readDouble(buffer, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset + 7 < buffer.length,
	        'Trying to read beyond buffer length');
	  }

	  return require(33).readIEEE754(buffer, offset, isBigEndian,
	      52, 8);
	}

	Buffer.prototype.readDoubleLE = function(offset, noAssert) {
	  return readDouble(this, offset, false, noAssert);
	};

	Buffer.prototype.readDoubleBE = function(offset, noAssert) {
	  return readDouble(this, offset, true, noAssert);
	};


	/*
	 * We have to make sure that the value is a valid integer. This means that it is
	 * non-negative. It has no fractional component and that it does not exceed the
	 * maximum allowed value.
	 *
	 *      value           The number to check for validity
	 *
	 *      max             The maximum value
	 */
	function verifuint(value, max) {
	  assert.ok(typeof (value) == 'number',
	      'cannot write a non-number as a number');

	  assert.ok(value >= 0,
	      'specified a negative value for writing an unsigned value');

	  assert.ok(value <= max, 'value is larger than maximum value for type');

	  assert.ok(Math.floor(value) === value, 'value has a fractional component');
	}

	Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
	  var buffer = this;

	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset < buffer.length,
	        'trying to write beyond buffer length');

	    verifuint(value, 0xff);
	  }

	  buffer.parent[buffer.offset + offset] = value;
	};

	function writeUInt16(buffer, value, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 1 < buffer.length,
	        'trying to write beyond buffer length');

	    verifuint(value, 0xffff);
	  }

	  if (isBigEndian) {
	    buffer.parent[buffer.offset + offset] = (value & 0xff00) >>> 8;
	    buffer.parent[buffer.offset + offset + 1] = value & 0x00ff;
	  } else {
	    buffer.parent[buffer.offset + offset + 1] = (value & 0xff00) >>> 8;
	    buffer.parent[buffer.offset + offset] = value & 0x00ff;
	  }
	}

	Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
	  writeUInt16(this, value, offset, false, noAssert);
	};

	Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
	  writeUInt16(this, value, offset, true, noAssert);
	};

	function writeUInt32(buffer, value, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 3 < buffer.length,
	        'trying to write beyond buffer length');

	    verifuint(value, 0xffffffff);
	  }

	  if (isBigEndian) {
	    buffer.parent[buffer.offset + offset] = (value >>> 24) & 0xff;
	    buffer.parent[buffer.offset + offset + 1] = (value >>> 16) & 0xff;
	    buffer.parent[buffer.offset + offset + 2] = (value >>> 8) & 0xff;
	    buffer.parent[buffer.offset + offset + 3] = value & 0xff;
	  } else {
	    buffer.parent[buffer.offset + offset + 3] = (value >>> 24) & 0xff;
	    buffer.parent[buffer.offset + offset + 2] = (value >>> 16) & 0xff;
	    buffer.parent[buffer.offset + offset + 1] = (value >>> 8) & 0xff;
	    buffer.parent[buffer.offset + offset] = value & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
	  writeUInt32(this, value, offset, false, noAssert);
	};

	Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
	  writeUInt32(this, value, offset, true, noAssert);
	};


	/*
	 * We now move onto our friends in the signed number category. Unlike unsigned
	 * numbers, we're going to have to worry a bit more about how we put values into
	 * arrays. Since we are only worrying about signed 32-bit values, we're in
	 * slightly better shape. Unfortunately, we really can't do our favorite binary
	 * & in this system. It really seems to do the wrong thing. For example:
	 *
	 * > -32 & 0xff
	 * 224
	 *
	 * What's happening above is really: 0xe0 & 0xff = 0xe0. However, the results of
	 * this aren't treated as a signed number. Ultimately a bad thing.
	 *
	 * What we're going to want to do is basically create the unsigned equivalent of
	 * our representation and pass that off to the wuint* functions. To do that
	 * we're going to do the following:
	 *
	 *  - if the value is positive
	 *      we can pass it directly off to the equivalent wuint
	 *  - if the value is negative
	 *      we do the following computation:
	 *         mb + val + 1, where
	 *         mb   is the maximum unsigned value in that byte size
	 *         val  is the Javascript negative integer
	 *
	 *
	 * As a concrete value, take -128. In signed 16 bits this would be 0xff80. If
	 * you do out the computations:
	 *
	 * 0xffff - 128 + 1
	 * 0xffff - 127
	 * 0xff80
	 *
	 * You can then encode this value as the signed version. This is really rather
	 * hacky, but it should work and get the job done which is our goal here.
	 */

	/*
	 * A series of checks to make sure we actually have a signed 32-bit number
	 */
	function verifsint(value, max, min) {
	  assert.ok(typeof (value) == 'number',
	      'cannot write a non-number as a number');

	  assert.ok(value <= max, 'value larger than maximum allowed value');

	  assert.ok(value >= min, 'value smaller than minimum allowed value');

	  assert.ok(Math.floor(value) === value, 'value has a fractional component');
	}

	function verifIEEE754(value, max, min) {
	  assert.ok(typeof (value) == 'number',
	      'cannot write a non-number as a number');

	  assert.ok(value <= max, 'value larger than maximum allowed value');

	  assert.ok(value >= min, 'value smaller than minimum allowed value');
	}

	Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
	  var buffer = this;

	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset < buffer.length,
	        'Trying to write beyond buffer length');

	    verifsint(value, 0x7f, -0x80);
	  }

	  if (value >= 0) {
	    buffer.writeUInt8(value, offset, noAssert);
	  } else {
	    buffer.writeUInt8(0xff + value + 1, offset, noAssert);
	  }
	};

	function writeInt16(buffer, value, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 1 < buffer.length,
	        'Trying to write beyond buffer length');

	    verifsint(value, 0x7fff, -0x8000);
	  }

	  if (value >= 0) {
	    writeUInt16(buffer, value, offset, isBigEndian, noAssert);
	  } else {
	    writeUInt16(buffer, 0xffff + value + 1, offset, isBigEndian, noAssert);
	  }
	}

	Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
	  writeInt16(this, value, offset, false, noAssert);
	};

	Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
	  writeInt16(this, value, offset, true, noAssert);
	};

	function writeInt32(buffer, value, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 3 < buffer.length,
	        'Trying to write beyond buffer length');

	    verifsint(value, 0x7fffffff, -0x80000000);
	  }

	  if (value >= 0) {
	    writeUInt32(buffer, value, offset, isBigEndian, noAssert);
	  } else {
	    writeUInt32(buffer, 0xffffffff + value + 1, offset, isBigEndian, noAssert);
	  }
	}

	Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
	  writeInt32(this, value, offset, false, noAssert);
	};

	Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
	  writeInt32(this, value, offset, true, noAssert);
	};

	function writeFloat(buffer, value, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 3 < buffer.length,
	        'Trying to write beyond buffer length');

	    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }

	  require(33).writeIEEE754(buffer, value, offset, isBigEndian,
	      23, 4);
	}

	Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
	  writeFloat(this, value, offset, false, noAssert);
	};

	Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
	  writeFloat(this, value, offset, true, noAssert);
	};

	function writeDouble(buffer, value, offset, isBigEndian, noAssert) {
	  if (!noAssert) {
	    assert.ok(value !== undefined && value !== null,
	        'missing value');

	    assert.ok(typeof (isBigEndian) === 'boolean',
	        'missing or invalid endian');

	    assert.ok(offset !== undefined && offset !== null,
	        'missing offset');

	    assert.ok(offset + 7 < buffer.length,
	        'Trying to write beyond buffer length');

	    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }

	  require(33).writeIEEE754(buffer, value, offset, isBigEndian,
	      52, 8);
	}

	Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
	  writeDouble(this, value, offset, false, noAssert);
	};

	Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
	  writeDouble(this, value, offset, true, noAssert);
	};

	SlowBuffer.prototype.readUInt8 = Buffer.prototype.readUInt8;
	SlowBuffer.prototype.readUInt16LE = Buffer.prototype.readUInt16LE;
	SlowBuffer.prototype.readUInt16BE = Buffer.prototype.readUInt16BE;
	SlowBuffer.prototype.readUInt32LE = Buffer.prototype.readUInt32LE;
	SlowBuffer.prototype.readUInt32BE = Buffer.prototype.readUInt32BE;
	SlowBuffer.prototype.readInt8 = Buffer.prototype.readInt8;
	SlowBuffer.prototype.readInt16LE = Buffer.prototype.readInt16LE;
	SlowBuffer.prototype.readInt16BE = Buffer.prototype.readInt16BE;
	SlowBuffer.prototype.readInt32LE = Buffer.prototype.readInt32LE;
	SlowBuffer.prototype.readInt32BE = Buffer.prototype.readInt32BE;
	SlowBuffer.prototype.readFloatLE = Buffer.prototype.readFloatLE;
	SlowBuffer.prototype.readFloatBE = Buffer.prototype.readFloatBE;
	SlowBuffer.prototype.readDoubleLE = Buffer.prototype.readDoubleLE;
	SlowBuffer.prototype.readDoubleBE = Buffer.prototype.readDoubleBE;
	SlowBuffer.prototype.writeUInt8 = Buffer.prototype.writeUInt8;
	SlowBuffer.prototype.writeUInt16LE = Buffer.prototype.writeUInt16LE;
	SlowBuffer.prototype.writeUInt16BE = Buffer.prototype.writeUInt16BE;
	SlowBuffer.prototype.writeUInt32LE = Buffer.prototype.writeUInt32LE;
	SlowBuffer.prototype.writeUInt32BE = Buffer.prototype.writeUInt32BE;
	SlowBuffer.prototype.writeInt8 = Buffer.prototype.writeInt8;
	SlowBuffer.prototype.writeInt16LE = Buffer.prototype.writeInt16LE;
	SlowBuffer.prototype.writeInt16BE = Buffer.prototype.writeInt16BE;
	SlowBuffer.prototype.writeInt32LE = Buffer.prototype.writeInt32LE;
	SlowBuffer.prototype.writeInt32BE = Buffer.prototype.writeInt32BE;
	SlowBuffer.prototype.writeFloatLE = Buffer.prototype.writeFloatLE;
	SlowBuffer.prototype.writeFloatBE = Buffer.prototype.writeFloatBE;
	SlowBuffer.prototype.writeDoubleLE = Buffer.prototype.writeDoubleLE;
	SlowBuffer.prototype.writeDoubleBE = Buffer.prototype.writeDoubleBE;
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(29).Buffer))

/***/ },

/***/ 30:
/***/ function(module, exports, require) {

	// Generated by CoffeeScript 1.6.3
	(function() {
	  var typeChecker,
	    __hasProp = {}.hasOwnProperty;

	  typeChecker = {
	    getObjectType: function(value) {
	      return Object.prototype.toString.call(value);
	    },
	    getType: function(value) {
	      var result, type, _i, _len, _ref;
	      result = 'object';
	      _ref = ['Array', 'RegExp', 'Date', 'Function', 'Boolean', 'Number', 'Error', 'String', 'Null', 'Undefined'];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        type = _ref[_i];
	        if (typeChecker['is' + type](value)) {
	          result = type.toLowerCase();
	          break;
	        }
	      }
	      return result;
	    },
	    isPlainObject: function(value) {
	      return typeChecker.isObject(value) && value.__proto__ === Object.prototype;
	    },
	    isObject: function(value) {
	      return value && typeof value === 'object';
	    },
	    isError: function(value) {
	      return value instanceof Error;
	    },
	    isDate: function(value) {
	      return typeChecker.getObjectType(value) === '[object Date]';
	    },
	    isArguments: function(value) {
	      return typeChecker.getObjectType(value) === '[object Arguments]';
	    },
	    isFunction: function(value) {
	      return typeChecker.getObjectType(value) === '[object Function]';
	    },
	    isRegExp: function(value) {
	      return typeChecker.getObjectType(value) === '[object RegExp]';
	    },
	    isArray: function(value) {
	      var _ref;
	      return (_ref = typeof Array.isArray === "function" ? Array.isArray(value) : void 0) != null ? _ref : typeChecker.getObjectType(value) === '[object Array]';
	    },
	    isNumber: function(value) {
	      return typeof value === 'number' || typeChecker.getObjectType(value) === '[object Number]';
	    },
	    isString: function(value) {
	      return typeof value === 'string' || typeChecker.getObjectType(value) === '[object String]';
	    },
	    isBoolean: function(value) {
	      return value === true || value === false || typeChecker.getObjectType(value) === '[object Boolean]';
	    },
	    isNull: function(value) {
	      return value === null;
	    },
	    isUndefined: function(value) {
	      return typeof value === 'undefined';
	    },
	    isEmpty: function(value) {
	      return value != null;
	    },
	    isEmptyObject: function(value) {
	      var empty, key;
	      empty = true;
	      if (value != null) {
	        for (key in value) {
	          if (!__hasProp.call(value, key)) continue;
	          value = value[key];
	          empty = false;
	          break;
	        }
	      }
	      return empty;
	    }
	  };

	  module.exports = typeChecker;

	}).call(this);


/***/ },

/***/ 31:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) && objectToString(e) === '[object Error]';
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	function isBuffer(arg) {
	  return arg instanceof Buffer;
	}
	exports.isBuffer = isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(29).Buffer))

/***/ },

/***/ 32:
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, process) {var util = require(13);

	module.exports = util.debuglog || debuglog;

	var debugs = {};
	var debugEnviron = process.env.NODE_DEBUG || '';

	function debuglog(set) {
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = util.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(1)))

/***/ },

/***/ 33:
/***/ function(module, exports, require) {

	exports.readIEEE754 = function(buffer, offset, isBE, mLen, nBytes) {
	  var e, m,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = isBE ? 0 : (nBytes - 1),
	      d = isBE ? 1 : -1,
	      s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity);
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.writeIEEE754 = function(buffer, value, offset, isBE, mLen, nBytes) {
	  var e, m, c,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	      i = isBE ? (nBytes - 1) : 0,
	      d = isBE ? -1 : 1,
	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

	  buffer[offset + i - d] |= s * 128;
	};


/***/ },

/***/ 34:
/***/ function(module, exports, require) {

	// UTILITY
	var util = require(13);
	var pSlice = Array.prototype.slice;

	var objectKeys = require(17);
	var isRegExp = require(20);

	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	var assert = module.exports = ok;

	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })

	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.message = options.message;
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  var stackStartFunction = options.stackStartFunction || fail;

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  }
	};
	util.inherits(assert.AssertionError, Error);

	function replacer(key, value) {
	  if (value === undefined) {
	    return '' + value;
	  }
	  if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
	    return value.toString();
	  }
	  if (typeof value === 'function' || value instanceof RegExp) {
	    return value.toString();
	  }
	  return value;
	}

	function truncate(s, n) {
	  if (typeof s == 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}

	assert.AssertionError.prototype.toString = function() {
	  if (this.message) {
	    return [this.name + ':', this.message].join(' ');
	  } else {
	    return [
	      this.name + ':',
	      truncate(JSON.stringify(this.actual, replacer), 128),
	      this.operator,
	      truncate(JSON.stringify(this.expected, replacer), 128)
	    ].join(' ');
	  }
	};

	// assert.AssertionError instanceof Error

	assert.AssertionError.__proto__ = Error.prototype;

	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.

	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}

	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;

	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.

	function ok(value, message) {
	  if (!!!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;

	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);

	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};

	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);

	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};

	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);

	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};

	function _deepEqual(actual, expected) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (require(29).Buffer.isBuffer(actual) && require(29).Buffer.isBuffer(expected)) {
	    if (actual.length != expected.length) return false;

	    for (var i = 0; i < actual.length; i++) {
	      if (actual[i] !== expected[i]) return false;
	    }

	    return true;

	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (isRegExp(actual) && isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;

	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (typeof actual != 'object' && typeof expected != 'object') {
	    return actual == expected;

	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}

	function objEquiv(a, b) {
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b);
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b),
	        key, i;
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key])) return false;
	  }
	  return true;
	}

	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);

	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};

	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);

	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};

	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};

	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }

	  if (isRegExp(expected)) {
	    return expected.test(actual);
	  } else if (actual instanceof expected) {
	    return true;
	  } else if (expected.call({}, actual) === true) {
	    return true;
	  }

	  return false;
	}

	function _throws(shouldThrow, block, expected, message) {
	  var actual;

	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }

	  try {
	    block();
	  } catch (e) {
	    actual = e;
	  }

	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');

	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }

	  if (!shouldThrow && expectedException(actual, expected)) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }

	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}

	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);

	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws.apply(this, [true].concat(pSlice.call(arguments)));
	};

	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws.apply(this, [false].concat(pSlice.call(arguments)));
	};

	assert.ifError = function(err) { if (err) {throw err;}};


/***/ },

/***/ 35:
/***/ function(module, exports, require) {

	(function (exports) {
		'use strict';

		var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

		function b64ToByteArray(b64) {
			var i, j, l, tmp, placeHolders, arr;
		
			if (b64.length % 4 > 0) {
				throw 'Invalid string. Length must be a multiple of 4';
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			placeHolders = b64.indexOf('=');
			placeHolders = placeHolders > 0 ? b64.length - placeHolders : 0;

			// base64 is 4/3 + up to two characters of the original data
			arr = [];//new Uint8Array(b64.length * 3 / 4 - placeHolders);

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length;

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (lookup.indexOf(b64[i]) << 18) | (lookup.indexOf(b64[i + 1]) << 12) | (lookup.indexOf(b64[i + 2]) << 6) | lookup.indexOf(b64[i + 3]);
				arr.push((tmp & 0xFF0000) >> 16);
				arr.push((tmp & 0xFF00) >> 8);
				arr.push(tmp & 0xFF);
			}

			if (placeHolders === 2) {
				tmp = (lookup.indexOf(b64[i]) << 2) | (lookup.indexOf(b64[i + 1]) >> 4);
				arr.push(tmp & 0xFF);
			} else if (placeHolders === 1) {
				tmp = (lookup.indexOf(b64[i]) << 10) | (lookup.indexOf(b64[i + 1]) << 4) | (lookup.indexOf(b64[i + 2]) >> 2);
				arr.push((tmp >> 8) & 0xFF);
				arr.push(tmp & 0xFF);
			}

			return arr;
		}

		function uint8ToBase64(uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length;

			function tripletToBase64 (num) {
				return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
			};

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
				output += tripletToBase64(temp);
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1];
					output += lookup[temp >> 2];
					output += lookup[(temp << 4) & 0x3F];
					output += '==';
					break;
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
					output += lookup[temp >> 10];
					output += lookup[(temp >> 4) & 0x3F];
					output += lookup[(temp << 2) & 0x3F];
					output += '=';
					break;
			}

			return output;
		}

		module.exports.toByteArray = b64ToByteArray;
		module.exports.fromByteArray = uint8ToBase64;
	}());


/***/ }
/******/ })