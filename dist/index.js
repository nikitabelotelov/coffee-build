/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gud__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");






var MAX_SIGNED_31_BIT_INT = 1073741823;

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + gud__WEBPACK_IMPORTED_MODULE_3___default()() + '__';

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer =
  /*#__PURE__*/
  function (_Component2) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

Provider.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }),
  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");








 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (true) {
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_5__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_4__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_5__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(didStoreComeFromProps || didStoreComeFromContext, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options.")); // Based on the previous check, one of these must be true

      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_6__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__["useIsomorphicLayoutEffect"])(function () {
        // We want to capture the wrapper props and child props we used for later comparisons
        lastWrapperProps.current = wrapperProps;
        lastChildProps.current = actualChildProps;
        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

        if (childPropsFromStoreUpdate.current) {
          childPropsFromStoreUpdate.current = null;
          notifyNestedSubs();
        }
      }); // Our re-subscribe logic only runs when the store/subscription setup changes

      Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__["useIsomorphicLayoutEffect"])(function () {
        // If we're not subscribed to the store, nothing to do here
        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

        var didUnsubscribe = false;
        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

        var checkForUpdates = function checkForUpdates() {
          if (didUnsubscribe) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
          }

          var latestStoreState = store.getState();
          var newChildProps, error;

          try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
          } catch (e) {
            error = e;
            lastThrownError = e;
          }

          if (!error) {
            lastThrownError = null;
          } // If the child props haven't changed, nothing to do here - cascade the subscription update


          if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
              notifyNestedSubs();
            }
          } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

            forceComponentUpdateDispatch({
              type: 'STORE_UPDATED',
              payload: {
                error: error
              }
            });
          }
        }; // Actually subscribe to the nearest connected ancestor (or store)


        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe(); // Pull data from the store after first render in case the store has
        // changed since we began.

        checkForUpdates();

        var unsubscribeWrapper = function unsubscribeWrapper() {
          didUnsubscribe = true;
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;

          if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
          }
        };

        return unsubscribeWrapper;
      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]);
  invariant__WEBPACK_IMPORTED_MODULE_1___default()(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");







var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occurred while selecting the store state: " + err.message + ".";

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\nOriginal stack trace:";
    }

    throw new Error(errorMessage);
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_5__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_5__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    invariant__WEBPACK_IMPORTED_MODULE_1___default()(selector, "You must pass a selector to useSelectors");

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var isHopefullyDomEnvironment = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
var useIsomorphicLayoutEffect = isHopefullyDomEnvironment ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, NavLink, MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["MemoryRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["StaticRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["generatePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useRouteMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"]; });

/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  HashRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : undefined;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : undefined : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    replace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : undefined : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, styleProp, {}, activeStyle) : styleProp;

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    exact: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  });
}




/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return useLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return useParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return useRouteMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/react-router/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = Object(mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
      children: this.props.children || null,
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    });
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Router.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : undefined;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : undefined;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Prompt> outside a <Router>") : undefined : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]);
  Prompt.propTypes = {
    when: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Redirect> outside a <Router>") : undefined : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(prevProps.to);

        if (!Object(history__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"])(prevLocation, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    from: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : undefined;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Route> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : children : component ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
    component: function component(props, propName) {
      if (props[propName] && !Object(react_is__WEBPACK_IMPORTED_MODULE_9__["isValidElementType"])(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),
    render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
  };

  Route.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : undefined;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
}

function staticHandler(methodName) {
  return function () {
      true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : undefined ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Switch> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Switch.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : undefined : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : undefined : void 0;
  }

  return useContext(context).history;
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : undefined : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : undefined : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : undefined : void 0;
  }

  return path ? matchPath(useLocation().pathname, path) : useContext(context).match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}




/***/ }),

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./server/stm/Converter.ts":
/*!*********************************!*\
  !*** ./server/stm/Converter.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StmMessages;
(function (StmMessages) {
    StmMessages["SteamPressure"] = "a";
    StmMessages["Group1Pressure"] = "b";
    StmMessages["Group1Temperature"] = "c";
    StmMessages["Group2Pressure"] = "d";
    StmMessages["Group2Temperature"] = "e";
    StmMessages["PredictGroupTemperature"] = "f";
    StmMessages["Error"] = "g";
    StmMessages["Valve1"] = "h";
    StmMessages["Valve2"] = "k";
    StmMessages["Valve3"] = "l";
    StmMessages["Valve4"] = "m";
    StmMessages["Valve5"] = "n";
    StmMessages["Valve6"] = "o";
    StmMessages["Relay1"] = "p";
    StmMessages["Relay2"] = "q";
    StmMessages["Relay3"] = "r";
    StmMessages["Relay4"] = "s";
    StmMessages["Relay5"] = "t";
    StmMessages["Relay6"] = "u";
    StmMessages["Relay7"] = "v";
    StmMessages["Relay8"] = "w";
    StmMessages["Echo"] = "x";
    StmMessages["WaterLevel"] = "y";
    StmMessages["Button1"] = "z";
    StmMessages["Button2"] = "A";
    StmMessages["Button3"] = "B";
    StmMessages["Button4"] = "C";
    StmMessages["Button5"] = "D";
    StmMessages["Button6"] = "E";
    StmMessages["Button7"] = "F";
    StmMessages["Button8"] = "G";
    StmMessages["Button9"] = "H";
    StmMessages["VolumetricGroup1"] = "K";
    StmMessages["VolumetricGroup2"] = "L";
})(StmMessages = exports.StmMessages || (exports.StmMessages = {}));
var StmCommands;
(function (StmCommands) {
    StmCommands["SetValve1"] = "A";
    StmCommands["SetValve2"] = "B";
    StmCommands["SetValve3"] = "C";
    StmCommands["SetValve4"] = "D";
    StmCommands["SetValve5"] = "E";
    StmCommands["SetValve6"] = "F";
    StmCommands["SetRelay1"] = "G";
    StmCommands["SetRelay2"] = "H";
    StmCommands["SetRelay3"] = "J";
    StmCommands["SetRelay4"] = "K";
    StmCommands["SetRelay5"] = "L";
    StmCommands["SetRelay6"] = "M";
    StmCommands["SetRelay7"] = "N";
    StmCommands["SetRelay8"] = "O";
    StmCommands["SetRedGroup1"] = "P";
    StmCommands["SetGreenGroup1"] = "Q";
    StmCommands["SetBlueGroup1"] = "R";
    StmCommands["SetRedGroup2"] = "S";
    StmCommands["SetGreenGroup2"] = "T";
    StmCommands["SetBlueGroup2"] = "U";
    StmCommands["ResetVolumetricG1"] = "V";
    StmCommands["ResetVolumetricG2"] = "W";
    StmCommands["SetSecGroup1"] = "X";
    StmCommands["SetSecGroup2"] = "Y";
    StmCommands["SetRedMachine"] = "Z";
    StmCommands["SetGreenMachine"] = "a";
    StmCommands["SetBlueMachine"] = "b";
})(StmCommands = exports.StmCommands || (exports.StmCommands = {}));
/*
*/
var TempratureData = [4331, 4281, 4232, 4225, 4218, 4211, 4204, 4197, 4190, 4183, 4176,
    4467, 4348, 4229, 4107, 4085, 4063, 4040, 4018, 3996, 3971, 3946,
    3863, 3780, 3698, 3710, 3673, 3640, 3606, 3573, 3539, 3506, 3472,
    3437, 3416, 3395, 3375, 3400, 3359, 3317, 3276, 3235, 3193, 3152,
    3127, 3090, 3048, 3006, 2964, 2922, 2880, 2839, 2797, 2755, 2721,
    2688, 2656, 2618, 2594, 2531, 2494, 2469, 2436, 2402, 2353, 2317,
    2282, 2245, 2211, 2164, 2122, 2082, 2057, 2008, 1973, 1936, 1899,
    1874, 1812, 1775, 1737, 1712, 1675, 1638, 1626, 1570, 1514, 1458,
    1402, 1346, 1291, 1241, 1220, 1199, 1178, 1157, 1135, 1114, 1093,
    1072, 1051, 1030, 1009, 988, 967, 946, 924, 903, 882, 861,
    840, 819, 798, 777, 756, 735, 714, 692, 671, 650, 629,
    608, 587, 566, 545, 524, 503, 481, 460, 439, 418, 397,
    376, 355, 334, 313, 292, 271, 249, 228, 207, 186, 165,
    144, 123, 102, 81, 60, 38, 17, 2];
var HAND_COLIBR_VOLTAGE = 2290;
var VoltCalibrBase = 1950;
TempratureData.forEach(function (value, index) {
    TempratureData[index] = value * HAND_COLIBR_VOLTAGE / VoltCalibrBase;
});
var Converter = {
    fromString: function (msg) {
        return { id: msg[0], content: msg.substring(1) };
    },
    toString: function (msg) {
        return "" + msg.id + msg.content;
    },
    voltToCelsium: function (voltage) {
        var volt = parseInt(voltage, 10) || 0;
        for (var i = 0; i < TempratureData.length - 1; i++) {
            if (TempratureData[i + 1] < volt) {
                var desatki = (10 * (volt - TempratureData[i + 1])) /
                    (TempratureData[i] - TempratureData[i + 1]);
                return ((i + 1) * 10 - desatki) / 10;
            }
        }
        return 150;
    },
    volumetric: function (value) {
        if (value === 1) {
            return 1;
        }
        var DIFFUSOR07 = 365;
        //#define DIFFUSOR06 375
        //#define ACTIVEDIFFUSOR DIFFUSOR06
        return Math.round((value * 100) / DIFFUSOR07);
    },
    compressure: function (value) {
        if (value < 750) {
            return 0;
        }
        return (value - 750) / 2;
    }
};
exports.default = Converter;


/***/ }),

/***/ "./src/App.less":
/*!**********************!*\
  !*** ./src/App.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./App.less */ "./src/App.less");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var Panel_1 = __webpack_require__(/*! ./ManagerPanel/Panel */ "./src/ManagerPanel/Panel.tsx");
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Panel_1.Panel, null)));
};
exports.default = App;


/***/ }),

/***/ "./src/ManagerPanel/Admin.less":
/*!*************************************!*\
  !*** ./src/ManagerPanel/Admin.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ManagerPanel/Admin.tsx":
/*!************************************!*\
  !*** ./src/ManagerPanel/Admin.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Converter_1 = __webpack_require__(/*! ../../server/stm/Converter */ "./server/stm/Converter.ts");
__webpack_require__(/*! ./Admin.less */ "./src/ManagerPanel/Admin.less");
var Admin = function (props) {
    var tg1 = Math.round((props.life.tTrendG1.length ? props.life.tTrendG1[props.life.tTrendG1.length - 1].value : 0) * 10) / 10;
    var tg2 = Math.round((props.life.tTrendG2.length ? props.life.tTrendG2[props.life.tTrendG2.length - 1].value : 0) * 10) / 10;
    return (React.createElement("div", { className: 'setting__root panel_root' },
        React.createElement(react_router_dom_1.NavLink, { to: 'admin/trend', className: 'manager-panel__block admin__text' },
            "\u0413\u0440\u0443\u043F\u043F\u0430 1: P = ",
            props.machine[Converter_1.StmMessages.Group1Pressure],
            ", T = ",
            tg1,
            " (",
            props.settings.Group1Temperature,
            ")",
            React.createElement("br", null),
            "\u041A\u043B\u0430\u043F\u0430\u043D: Valve2 = ",
            props.machine[Converter_1.StmMessages.Valve2],
            " / valve4 = ",
            props.machine[Converter_1.StmMessages.Valve4],
            React.createElement("br", null),
            "\u0422\u0435\u043D: ",
            props.machine[Converter_1.StmMessages.Relay4],
            React.createElement("br", null),
            "\u0413\u0440\u0443\u043F\u043F\u0430 2: P = ",
            props.machine[Converter_1.StmMessages.Group2Pressure],
            ", T = ",
            tg2,
            " (",
            props.settings.Group2Temperature,
            ")",
            React.createElement("br", null),
            "\u041A\u043B\u0430\u043F\u0430\u043D: Valve3 = ",
            props.machine[Converter_1.StmMessages.Valve3],
            " / valve5 = ",
            props.machine[Converter_1.StmMessages.Valve5],
            React.createElement("br", null),
            "\u0422\u0435\u043D: ",
            props.machine[Converter_1.StmMessages.Relay6]),
        React.createElement("div", { className: 'manager-panel__block admin__text' },
            "\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430: ",
            props.machine[Converter_1.StmMessages.SteamPressure],
            " ",
            React.createElement("br", null),
            "\u041A\u043B\u0430\u043F\u0430\u043D: Valve1 = ",
            props.machine[Converter_1.StmMessages.Valve1],
            " ",
            React.createElement("br", null),
            "\u0422\u0435\u043D \u043F\u0430\u0440\u0430: ",
            props.machine[Converter_1.StmMessages.Relay1],
            " \u0438 ",
            props.machine[Converter_1.StmMessages.Relay2],
            " ",
            React.createElement("br", null),
            "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432 \u043F\u0440\u0435\u0434\u043D\u0430\u0433\u0440\u0435\u0432\u0435: ",
            props.machine[Converter_1.StmMessages.PredictGroupTemperature],
            " ",
            React.createElement("br", null),
            "\u0422\u0435\u043D \u043F\u0440\u0435\u0434\u043D\u0430\u0433\u0440\u0435\u0432\u0430: ",
            props.machine[Converter_1.StmMessages.Relay3]),
        React.createElement("div", { className: 'manager-panel__block admin__text' },
            React.createElement("div", { className: 'admin__buttons' },
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button1] === '1' ? " admin__button_active" : "") }, "B1"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button2] === '1' ? " admin__button_active" : "") }, "B2"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button3] === '1' ? " admin__button_active" : "") }, "B3"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button4] === '1' ? " admin__button_active" : "") }, "B4"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button5] === '1' ? " admin__button_active" : "") }, "B5"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button6] === '1' ? " admin__button_active" : "") }, "B6"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button7] === '1' ? " admin__button_active" : "") }, "B7"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button8] === '1' ? " admin__button_active" : "") }, "B8"),
                React.createElement("div", { className: "admin__button" + (props.machine[Converter_1.StmMessages.Button9] === '1' ? " admin__button_active" : "") }, "B9")),
            "\u041D\u0430\u0441\u043E\u0441: ",
            props.machine[Converter_1.StmMessages.Relay8],
            " ",
            React.createElement("br", null),
            "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u043E\u0434\u044B: ",
            props.machine[Converter_1.StmMessages.WaterLevel],
            React.createElement("br", null),
            "Volum1: ",
            props.machine[Converter_1.StmMessages.VolumetricGroup1],
            React.createElement("br", null),
            "Volum2: ",
            props.machine[Converter_1.StmMessages.VolumetricGroup2]),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block ' }, "\u041D\u0430\u0437\u0430\u0434")));
};
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var AdminConnected = react_redux_1.connect(mapStateToProps)(Admin);
exports.default = AdminConnected;


/***/ }),

/***/ "./src/ManagerPanel/Colors/ColorHot.tsx":
/*!**********************************************!*\
  !*** ./src/ManagerPanel/Colors/ColorHot.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var ColorHotView_1 = __importDefault(__webpack_require__(/*! ./ColorHotView */ "./src/ManagerPanel/Colors/ColorHotView.tsx"));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var ColorHot = react_redux_1.connect(mapStateToProps)(ColorHotView_1.default);
exports.default = ColorHot;


/***/ }),

/***/ "./src/ManagerPanel/Colors/ColorHotView.tsx":
/*!**************************************************!*\
  !*** ./src/ManagerPanel/Colors/ColorHotView.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var NumberInput_1 = __importDefault(__webpack_require__(/*! ../NumberInput */ "./src/ManagerPanel/NumberInput.tsx"));
var index_1 = __importDefault(__webpack_require__(/*! ../../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var index_2 = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.ts");
var ColorHotView = function (props) {
    return (React.createElement("div", { className: "setting__profile-parameters panel_root" },
        React.createElement("div", { className: "setting__profile-parameters__color manager-panel__block manager-panel__top" },
            React.createElement("div", { className: "manager-panel__block" },
                React.createElement("p", null, "\u0425\u043E\u043B\u043E\u0434\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"),
                React.createElement("p", null, "\u041A\u0440\u0430\u0441\u043D\u044B\u0439"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'RedCold',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'RedCold',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.RedCold) || 0 }),
                React.createElement("p", null, "\u0417\u0435\u043B\u0435\u043D\u044B\u0439"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'GreenCold',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'GreenCold',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.GreenCold) || 0 }),
                React.createElement("p", null, "\u0421\u0438\u043D\u0438\u0439"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'BlueCold',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'BlueCold',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.BlueCold) || 0 }),
                React.createElement("p", null, "\u0410\u043B\u044C\u0444\u0430"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'AlphaCold',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'AlphaCold',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.AlphaCold) || 0 })),
            React.createElement("div", { className: "manager-panel__block" },
                React.createElement("p", null, "\u041D\u0430\u0433\u0440\u0435\u0442\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"),
                React.createElement("p", null, "\u041A\u0440\u0430\u0441\u043D\u044B\u0439"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'RedHot',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'RedHot',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.RedHot) || 0 }),
                React.createElement("p", null, "\u0417\u0435\u043B\u0435\u043D\u044B\u0439"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'GreenHot',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'GreenHot',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.GreenHot) || 0 }),
                React.createElement("p", null, "\u0421\u0438\u043D\u0438\u0439"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'BlueHot',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'BlueHot',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.BlueHot) || 0 }),
                React.createElement("p", null, "\u0410\u043B\u044C\u0444\u0430"),
                React.createElement(NumberInput_1.default, { increment: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'AlphaHot',
                            content: "" + (value + 1)
                        }));
                    }, decrement: function (value) {
                        index_1.default.dispatch(index_2.setSetting({
                            id: 'AlphaHot',
                            content: "" + (value - 1)
                        }));
                    }, value: Number(props.settings.AlphaHot) || 0 }))),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block manager-panel__bottom" }, "\u041D\u0430\u0437\u0430\u0434")));
};
exports.default = ColorHotView;


/***/ }),

/***/ "./src/ManagerPanel/NumberInput.tsx":
/*!******************************************!*\
  !*** ./src/ManagerPanel/NumberInput.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
function NumberInput(props) {
    var _a = React.useState(0), startInc = _a[0], setStartInc = _a[1];
    var _b = React.useState(0), startDec = _b[0], setStartDec = _b[1];
    React.useEffect(function () {
        if (startInc) {
            setTimeout(function () {
                props.increment(props.value);
            }, 100);
        }
        if (startDec) {
            setTimeout(function () {
                props.decrement(props.value);
            }, 100);
        }
    });
    return (React.createElement("div", { className: "setting__input" },
        React.createElement("button", { onMouseDown: function () { return setStartDec(1); }, onMouseUp: function () { return setStartDec(0); }, onMouseLeave: function () { return setStartDec(0); }, className: " setting__inputButton" }, "-"),
        React.createElement("span", { className: "setting__inputValue" }, props.value),
        React.createElement("button", { onMouseDown: function () { return setStartInc(1); }, onMouseUp: function () { return setStartInc(0); }, onMouseLeave: function () { return setStartInc(0); }, className: " setting__inputButton" }, "+")));
}
exports.default = NumberInput;


/***/ }),

/***/ "./src/ManagerPanel/Panel.less":
/*!*************************************!*\
  !*** ./src/ManagerPanel/Panel.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ManagerPanel/Panel.tsx":
/*!************************************!*\
  !*** ./src/ManagerPanel/Panel.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Panel.less */ "./src/ManagerPanel/Panel.less");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var Root_1 = __importDefault(__webpack_require__(/*! ./Root */ "./src/ManagerPanel/Root.tsx"));
var SettingsIndex_1 = __importDefault(__webpack_require__(/*! ./SettingsIndex */ "./src/ManagerPanel/SettingsIndex.tsx"));
var Profile_1 = __importDefault(__webpack_require__(/*! ./Profile */ "./src/ManagerPanel/Profile.tsx"));
var Update_1 = __importDefault(__webpack_require__(/*! ./Update */ "./src/ManagerPanel/Update.tsx"));
var ParametersSettings_1 = __importDefault(__webpack_require__(/*! ./ParametersSettings */ "./src/ManagerPanel/ParametersSettings.tsx"));
var Steam_1 = __importDefault(__webpack_require__(/*! ./Parameters/Steam */ "./src/ManagerPanel/Parameters/Steam.tsx"));
var GroupTemperature_1 = __importDefault(__webpack_require__(/*! ./Parameters/GroupTemperature */ "./src/ManagerPanel/Parameters/GroupTemperature.tsx"));
var ColorHot_1 = __importDefault(__webpack_require__(/*! ./Colors/ColorHot */ "./src/ManagerPanel/Colors/ColorHot.tsx"));
var Admin_1 = __importDefault(__webpack_require__(/*! ./Admin */ "./src/ManagerPanel/Admin.tsx"));
var PreSoaking_1 = __importDefault(__webpack_require__(/*! ./Parameters/PreSoaking */ "./src/ManagerPanel/Parameters/PreSoaking.tsx"));
var AutoMode_1 = __importDefault(__webpack_require__(/*! ./Parameters/AutoMode */ "./src/ManagerPanel/Parameters/AutoMode.tsx"));
var Predict_1 = __importDefault(__webpack_require__(/*! ./Parameters/Predict */ "./src/ManagerPanel/Parameters/Predict.tsx"));
var Wifi_1 = __webpack_require__(/*! ./Wifi */ "./src/ManagerPanel/Wifi.tsx");
function Panel() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Root_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/admin", component: Admin_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings", component: SettingsIndex_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile", component: Profile_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/color", component: ColorHot_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/wifi", component: Wifi_1.Wifi }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/update", component: Update_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand", component: ParametersSettings_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand/steam", component: Steam_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand/temp", component: GroupTemperature_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand/soaking", component: PreSoaking_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand/automode", component: AutoMode_1.default }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "*/settings/profile/hand/predict", component: Predict_1.default })));
}
exports.Panel = Panel;


/***/ }),

/***/ "./src/ManagerPanel/Parameters/AutoMode.tsx":
/*!**************************************************!*\
  !*** ./src/ManagerPanel/Parameters/AutoMode.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var NumberInput_1 = __importDefault(__webpack_require__(/*! ../NumberInput */ "./src/ManagerPanel/NumberInput.tsx"));
var index_1 = __importDefault(__webpack_require__(/*! ../../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var index_2 = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var AutoMode = function (props) {
    var value1 = Number(props.settings.Group1AutoMode1) || 0;
    var value2 = Number(props.settings.Group2AutoMode1) || 0;
    return (React.createElement("div", { className: "setting__profile-parameters panel_root" },
        React.createElement("div", { className: "manager-panel__block manager-panel__top" },
            React.createElement("p", null, "\u0413\u0440\u0443\u043F\u043F\u0430 1: \u041E\u0431\u044A\u0435\u043C \u0432\u0430\u0440\u043A\u0438"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1AutoMode1',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1AutoMode1',
                        content: "" + (value - 1)
                    }));
                }, value: value1 }),
            React.createElement("p", null, "\u0413\u0440\u0443\u043F\u043F\u0430 2: \u041E\u0431\u044A\u0435\u043C \u0432\u0430\u0440\u043A\u0438"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2AutoMode1',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2AutoMode1',
                        content: "" + (value - 1)
                    }));
                }, value: value2 })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block manager-panel__bottom" }, "\u041D\u0430\u0437\u0430\u0434")));
};
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var AutoModeConnected = react_redux_1.connect(mapStateToProps)(AutoMode);
exports.default = AutoModeConnected;


/***/ }),

/***/ "./src/ManagerPanel/Parameters/GroupTemperature.tsx":
/*!**********************************************************!*\
  !*** ./src/ManagerPanel/Parameters/GroupTemperature.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var NumberInput_1 = __importDefault(__webpack_require__(/*! ../NumberInput */ "./src/ManagerPanel/NumberInput.tsx"));
var index_1 = __importDefault(__webpack_require__(/*! ../../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var index_2 = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var GroupTemperature = function (props) {
    var value = Number(props.settings.Group1Temperature) || 0;
    var value2 = Number(props.settings.Group2Temperature) || 0;
    return (React.createElement("div", { className: "setting__profile-parameters panel_root" },
        React.createElement("div", { className: "manager-panel__block manager-panel__top" },
            React.createElement("p", null, "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0433\u0440\u0443\u043F\u043F\u044B 1"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1Temperature',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1Temperature',
                        content: "" + (value - 1)
                    }));
                }, value: value }),
            React.createElement("p", null, "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0433\u0440\u0443\u043F\u043F\u044B 2"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2Temperature',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2Temperature',
                        content: "" + (value - 1)
                    }));
                }, value: value2 })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block manager-panel__bottom" }, "\u041D\u0430\u0437\u0430\u0434")));
};
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var GroupTemperatureConnected = react_redux_1.connect(mapStateToProps)(GroupTemperature);
exports.default = GroupTemperatureConnected;


/***/ }),

/***/ "./src/ManagerPanel/Parameters/PreSoaking.tsx":
/*!****************************************************!*\
  !*** ./src/ManagerPanel/Parameters/PreSoaking.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var NumberInput_1 = __importDefault(__webpack_require__(/*! ../NumberInput */ "./src/ManagerPanel/NumberInput.tsx"));
var index_1 = __importDefault(__webpack_require__(/*! ../../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var index_2 = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var PreSoaking = function (props) {
    var value1 = Number(props.settings.Group1Presoaking) || 0;
    var value2 = Number(props.settings.Group1PostPresoaking) || 0;
    var value3 = Number(props.settings.Group2Presoaking) || 0;
    var value4 = Number(props.settings.Group2PostPresoaking) || 0;
    return (React.createElement("div", { className: "setting__profile-parameters panel_root" },
        React.createElement("div", { className: "manager-panel__block manager-panel__top" },
            React.createElement("p", null, "\u0413\u0440\u0443\u043F\u043F\u0430 1: \u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0435\u0434\u0441\u043C\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1Presoaking',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1Presoaking',
                        content: "" + (value - 1)
                    }));
                }, value: value1 }),
            React.createElement("p", null, "\u0413\u0440\u0443\u043F\u043F\u0430 1: \u0412\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0442\u043F\u0440\u0435\u0434\u0441\u043C\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1PostPresoaking',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group1PostPresoaking',
                        content: "" + (value - 1)
                    }));
                }, value: value2 }),
            React.createElement("p", null, "\u0413\u0440\u0443\u043F\u043F\u0430 2: \u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0435\u0434\u0441\u043C\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2Presoaking',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2Presoaking',
                        content: "" + (value - 1)
                    }));
                }, value: value3 }),
            React.createElement("p", null, "\u0413\u0440\u0443\u043F\u043F\u0430 2: \u0412\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0442\u043F\u0440\u0435\u0434\u0441\u043C\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2PostPresoaking',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'Group2PostPresoaking',
                        content: "" + (value - 1)
                    }));
                }, value: value4 })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block manager-panel__bottom" }, "\u041D\u0430\u0437\u0430\u0434")));
};
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var PreSoakingConnected = react_redux_1.connect(mapStateToProps)(PreSoaking);
exports.default = PreSoakingConnected;


/***/ }),

/***/ "./src/ManagerPanel/Parameters/Predict.tsx":
/*!*************************************************!*\
  !*** ./src/ManagerPanel/Parameters/Predict.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var NumberInput_1 = __importDefault(__webpack_require__(/*! ../NumberInput */ "./src/ManagerPanel/NumberInput.tsx"));
var index_1 = __importDefault(__webpack_require__(/*! ../../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var index_2 = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Predict = function (props) {
    var value1 = Number(props.settings.PredictTemperature) || 0;
    return (React.createElement("div", { className: "setting__profile-parameters panel_root" },
        React.createElement("div", { className: "manager-panel__block manager-panel__top" },
            React.createElement("p", null, "\u0413\u0440\u0443\u043F\u043F\u0430 1: \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432 \u043F\u0440\u0435\u0434\u043D\u0430\u0433\u0440\u0435\u0432\u0435"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'PredictTemperature',
                        content: "" + (value + 1)
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'PredictTemperature',
                        content: "" + (value - 1)
                    }));
                }, value: value1 })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block manager-panel__bottom" }, "\u041D\u0430\u0437\u0430\u0434")));
};
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var PredictConnected = react_redux_1.connect(mapStateToProps)(Predict);
exports.default = PredictConnected;


/***/ }),

/***/ "./src/ManagerPanel/Parameters/Steam.tsx":
/*!***********************************************!*\
  !*** ./src/ManagerPanel/Parameters/Steam.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var SteamView_1 = __importDefault(__webpack_require__(/*! ./SteamView */ "./src/ManagerPanel/Parameters/SteamView.tsx"));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var Steam = react_redux_1.connect(mapStateToProps)(SteamView_1.default);
exports.default = Steam;


/***/ }),

/***/ "./src/ManagerPanel/Parameters/SteamView.tsx":
/*!***************************************************!*\
  !*** ./src/ManagerPanel/Parameters/SteamView.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var NumberInput_1 = __importDefault(__webpack_require__(/*! ../NumberInput */ "./src/ManagerPanel/NumberInput.tsx"));
var index_1 = __importDefault(__webpack_require__(/*! ../../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var index_2 = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.ts");
var SteamView = function (props) {
    var value = Number(props.settings.SteamPressure) || 0;
    return (React.createElement("div", { className: "setting__profile-parameters panel_root" },
        React.createElement("div", { className: "manager-panel__block manager-panel__top" },
            React.createElement("p", null, "\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u0432\u043E\u0433\u043E \u0431\u043E\u0439\u043B\u0435\u0440\u0430"),
            React.createElement(NumberInput_1.default, { increment: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'SteamPressure',
                        content: "" + Math.round((value + 0.1) * 10) / 10
                    }));
                }, decrement: function (value) {
                    index_1.default.dispatch(index_2.setSetting({
                        id: 'SteamPressure',
                        content: "" + Math.round((value - 0.1) * 10) / 10
                    }));
                }, value: value })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block manager-panel__bottom" }, "\u041D\u0430\u0437\u0430\u0434")));
};
exports.default = SteamView;


/***/ }),

/***/ "./src/ManagerPanel/ParametersSettings.tsx":
/*!*************************************************!*\
  !*** ./src/ManagerPanel/ParametersSettings.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var Parameters = [
    {
        key: 0,
        title: "Паровой бойлер",
        route: "steam"
    },
    {
        key: 1,
        title: "Температуры группы",
        route: "temp"
    },
    {
        key: 2,
        title: "Предсмачивания",
        route: "soaking"
    },
    {
        key: 3,
        title: "Время варки",
        route: "automode"
    },
    {
        key: 4,
        title: "Преднагревательный бойлер",
        route: "predict"
    }
];
function ParametersSettings() {
    return (React.createElement("div", { className: "setting__profile panel_root" },
        React.createElement("ul", { className: "setting__profile-list list-group list-group-flush" }, Parameters.map(function (el) {
            return (React.createElement(react_router_dom_1.NavLink, { to: "hand/" + el.route, className: "setting__hand-listItem list-group-item", key: el.key }, el.title));
        })),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: "manager-panel__block " }, "\u041D\u0430\u0437\u0430\u0434")));
}
exports.default = ParametersSettings;


/***/ }),

/***/ "./src/ManagerPanel/Profile.tsx":
/*!**************************************!*\
  !*** ./src/ManagerPanel/Profile.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var ProfileView_1 = __importDefault(__webpack_require__(/*! ./ProfileView */ "./src/ManagerPanel/ProfileView.tsx"));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var Profile = react_redux_1.connect(mapStateToProps)(ProfileView_1.default);
exports.default = Profile;


/***/ }),

/***/ "./src/ManagerPanel/ProfileView.tsx":
/*!******************************************!*\
  !*** ./src/ManagerPanel/ProfileView.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var index_1 = __importDefault(__webpack_require__(/*! ../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var index_2 = __webpack_require__(/*! ../actions/index */ "./src/actions/index.ts");
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var userProfileName = 'Пользовательские';
function ProfileView(opts) {
    return (React.createElement("div", { className: 'setting__profile panel_root' },
        React.createElement("ul", { className: 'list__root' }, opts.profiles.map(function (el, key) {
            return (React.createElement("li", { onClick: function () {
                    index_1.default.dispatch(index_2.setProfile(el.title));
                }, className: 'list-group-item' + (el.title === opts.choosenProfile ? ' list-group-item__selected' : ''), key: key }, el.title));
        })),
        React.createElement(react_router_dom_1.NavLink, { onClick: function () {
                index_1.default.dispatch(index_2.setProfile(userProfileName));
            }, to: 'profile/hand', className: 'manager-panel__block ' }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C"),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block ' }, "\u041D\u0430\u0437\u0430\u0434")));
}
exports.default = ProfileView;


/***/ }),

/***/ "./src/ManagerPanel/Root.tsx":
/*!***********************************!*\
  !*** ./src/ManagerPanel/Root.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var RootView_1 = __webpack_require__(/*! ./RootView */ "./src/ManagerPanel/RootView.tsx");
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var Root = react_redux_1.connect(mapStateToProps)(RootView_1.RootView);
exports.default = Root;


/***/ }),

/***/ "./src/ManagerPanel/RootView.tsx":
/*!***************************************!*\
  !*** ./src/ManagerPanel/RootView.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var Converter_1 = __webpack_require__(/*! ../../server/stm/Converter */ "./server/stm/Converter.ts");
function RootView(props) {
    var tg1 = Math.round((props.life.tTrendG1.length ? props.life.tTrendG1[props.life.tTrendG1.length - 1].value : 0) * 10) / 10;
    var tg2 = Math.round((props.life.tTrendG2.length ? props.life.tTrendG2[props.life.tTrendG2.length - 1].value : 0) * 10) / 10;
    return (React.createElement("div", { className: "manager-panel__root panel_root" },
        React.createElement("div", { className: "manager-panel__block manager-panel__topleft " },
            React.createElement("b", null, "\u0413\u0440\u0443\u043F\u043F\u0430 1"),
            React.createElement("br", null),
            tg1,
            " C /",
            " ",
            props.settings.Group1Temperature,
            " C"),
        React.createElement("div", { className: "manager-panel__block manager-panel__topright" },
            React.createElement("b", null, "\u0413\u0440\u0443\u043F\u043F\u0430 2"),
            React.createElement("br", null),
            tg2,
            " C /",
            " ",
            props.settings.Group2Temperature,
            " C"),
        React.createElement(react_router_dom_1.NavLink, { to: "/admin", className: "manager-panel__block manager-panel__middleright" },
            React.createElement("b", null, "\u041F\u0440\u0435\u0434\u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439"),
            React.createElement("br", null),
            props.machine[Converter_1.StmMessages.PredictGroupTemperature],
            " C"),
        React.createElement("div", { className: "manager-panel__block manager-panel__bottomleft" },
            React.createElement("b", null, "\u041F\u0430\u0440\u043E\u0432\u043E\u0439"),
            React.createElement("br", null),
            "\u0423\u0440\u043E\u0432\u0435\u043D\u044C: ",
            props.machine[Converter_1.StmMessages.WaterLevel],
            React.createElement("br", null),
            "\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435: ",
            props.machine[Converter_1.StmMessages.SteamPressure],
            " /",
            " ",
            props.settings.SteamPressure),
        React.createElement(react_router_dom_1.NavLink, { to: "/settings", className: "manager-panel__block manager-panel__bottomright" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")));
}
exports.RootView = RootView;


/***/ }),

/***/ "./src/ManagerPanel/SettingsIndex.tsx":
/*!********************************************!*\
  !*** ./src/ManagerPanel/SettingsIndex.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
function Setting() {
    return (React.createElement("div", { className: 'setting__root panel_root' },
        React.createElement(react_router_dom_1.NavLink, { to: 'settings/profile', className: 'manager-panel__block manager-panel__topleft' }, "\u0412\u044B\u0431\u043E\u0440 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"),
        React.createElement(react_router_dom_1.NavLink, { to: 'settings/wifi', className: 'manager-panel__block manager-panel__topmiddle' }, "Wi-Fi"),
        React.createElement(react_router_dom_1.NavLink, { to: 'settings/color', className: 'manager-panel__block manager-panel__bottommleft' }, "\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0441\u0445\u0435\u043C\u0430"),
        React.createElement(react_router_dom_1.NavLink, { to: 'settings/update', className: 'manager-panel__block manager-panel__bottommiddle' }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435"),
        React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block manager-panel__right' }, "\u041D\u0430\u0437\u0430\u0434")));
}
exports.default = Setting;


/***/ }),

/***/ "./src/ManagerPanel/Update.tsx":
/*!*************************************!*\
  !*** ./src/ManagerPanel/Update.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var index_1 = __importDefault(__webpack_require__(/*! ../SettingsStore/index */ "./src/SettingsStore/index.ts"));
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions/index.ts");
function Update(props) {
    var _a = React.useState(false), isUpdate = _a[0], setIsUpdate = _a[1];
    return (React.createElement("div", { className: "" }, isUpdate ? "Ждем завершения обновления" :
        React.createElement("div", { className: 'manager-panel__update panel_root' },
            React.createElement("div", { className: "manager-panel__block manager-panel__left manager-panel__info" },
                React.createElement("b", null, "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u044B \u0431\u0443\u0434\u0435\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442. \u0412\u043E \u0432\u0440\u0435\u043C\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u0443 \u043E\u0442 \u0441\u0435\u0442\u0438.")),
            React.createElement("div", { className: 'manager-panel__block manager-panel__topright ' },
                React.createElement("div", { onClick: function () {
                        setIsUpdate(true);
                        // @ts-ignore
                        window.needRefreshGlobal = true;
                        index_1.default.dispatch(actions_1.update());
                    } }, "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F")),
            React.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block manager-panel__bottomright' }, "\u041D\u0430\u0437\u0430\u0434"))));
}
exports.default = Update;


/***/ }),

/***/ "./src/ManagerPanel/WIfi/Input.tsx":
/*!*****************************************!*\
  !*** ./src/ManagerPanel/WIfi/Input.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Keyboard.less */ "./src/ManagerPanel/WIfi/Keyboard.less");
var Key_1 = __webpack_require__(/*! ./Key */ "./src/ManagerPanel/WIfi/Key.tsx");
exports.Input = function (props) {
    var _a = react_1.useState(false), focused = _a[0], setFocused = _a[1];
    var _b = react_1.useState(false), shift = _b[0], setShift = _b[1];
    return (react_1.default.createElement("div", { className: focused ? 'input__fullscreen' : '' },
        react_1.default.createElement("input", { value: props.value, placeholder: props.placeholder, className: props.className, onChange: function (e) { return props.onChange(e.target.value); }, onFocus: function () {
                setFocused(true);
            } }),
        focused && react_1.default.createElement("div", { className: "keyboard" },
            react_1.default.createElement("div", { className: "keyboard_row" },
                react_1.default.createElement("div", { className: "key", onClick: function () { return setFocused(false); } }, "Close keyboard"),
                react_1.default.createElement("div", { className: "key", onClick: function () { return setShift(!shift); } }, "SHIFT"),
                react_1.default.createElement("div", { className: "key", onClick: function () {
                        var value = props.value.length > 0 ? props.value.slice(0, -1) : props.value;
                        props.onChange(value);
                    } }, "Backspace")),
            react_1.default.createElement("div", { className: "keyboard_row" },
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "1", shiftsymb: "!", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "2", shiftsymb: "@", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "3", shiftsymb: "#", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "4", shiftsymb: "$", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "5", shiftsymb: "%", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "6", shiftsymb: "^", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "7", shiftsymb: "&", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "8", shiftsymb: "*", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "9", shiftsymb: "(", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "0", shiftsymb: ")", onClick: function (value) { return props.onChange(props.value + value); } })),
            react_1.default.createElement("div", { className: "keyboard_row" },
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "q", shiftsymb: "Q", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "w", shiftsymb: "W", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "e", shiftsymb: "E", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "r", shiftsymb: "R", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "t", shiftsymb: "T", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "y", shiftsymb: "Y", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "u", shiftsymb: "U", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "i", shiftsymb: "I", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "o", shiftsymb: "O", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "p", shiftsymb: "P", onClick: function (value) { return props.onChange(props.value + value); } })),
            react_1.default.createElement("div", { className: "keyboard_row" },
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "a", shiftsymb: "A", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "s", shiftsymb: "S", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "d", shiftsymb: "D", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "f", shiftsymb: "F", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "g", shiftsymb: "G", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "h", shiftsymb: "H", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "j", shiftsymb: "J", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "k", shiftsymb: "K", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "l", shiftsymb: "L", onClick: function (value) { return props.onChange(props.value + value); } })),
            react_1.default.createElement("div", { className: "keyboard_row" },
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "z", shiftsymb: "Z", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "x", shiftsymb: "X", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "c", shiftsymb: "C", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "v", shiftsymb: "V", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "b", shiftsymb: "B", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "n", shiftsymb: "N", onClick: function (value) { return props.onChange(props.value + value); } }),
                react_1.default.createElement(Key_1.Key, { shift: shift, symb: "m", shiftsymb: "M", onClick: function (value) { return props.onChange(props.value + value); } })))));
};


/***/ }),

/***/ "./src/ManagerPanel/WIfi/Key.tsx":
/*!***************************************!*\
  !*** ./src/ManagerPanel/WIfi/Key.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Keyboard.less */ "./src/ManagerPanel/WIfi/Keyboard.less");
exports.Key = function (props) {
    return (react_1.default.createElement("div", { className: "key", onClick: function () { return props.onClick(props.shift ? props.shiftsymb : props.symb); } }, props.shift ? props.shiftsymb : props.symb));
};


/***/ }),

/***/ "./src/ManagerPanel/WIfi/Keyboard.less":
/*!*********************************************!*\
  !*** ./src/ManagerPanel/WIfi/Keyboard.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ManagerPanel/WIfi/WifiPanel.less":
/*!**********************************************!*\
  !*** ./src/ManagerPanel/WIfi/WifiPanel.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ManagerPanel/Wifi.tsx":
/*!***********************************!*\
  !*** ./src/ManagerPanel/Wifi.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var SettingsStore_1 = __importDefault(__webpack_require__(/*! ../SettingsStore */ "./src/SettingsStore/index.ts"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions/index.ts");
var NetChecker_1 = __webpack_require__(/*! ../actions/NetChecker */ "./src/actions/NetChecker.ts");
var Input_1 = __webpack_require__(/*! ./WIfi/Input */ "./src/ManagerPanel/WIfi/Input.tsx");
__webpack_require__(/*! ./WIfi/WifiPanel.less */ "./src/ManagerPanel/WIfi/WifiPanel.less");
function WifiView(opts) {
    var _a = react_1.useState(null), choosenNetwork = _a[0], setChoosenNetwork = _a[1];
    var _b = react_1.useState(false), netStatus = _b[0], setNetStatus = _b[1];
    var _c = react_1.useState(''), pass = _c[0], setPass = _c[1];
    var interval;
    react_1.useEffect(function () {
        NetChecker_1.checkConnection().then(function (res) {
            setNetStatus(res);
        });
        interval = window.setInterval(function () {
            NetChecker_1.checkConnection().then(function (res) {
                setNetStatus(res);
            });
        }, 5000);
        return function () {
            clearInterval(interval);
        };
    }, []);
    return (react_1.default.createElement("div", { className: 'wifi__root' },
        react_1.default.createElement("ul", { className: 'wifiPanel__list' }, opts.availableWifiNets.map(function (el, key) {
            return (react_1.default.createElement("li", { className: 'list-group-item' + (el.ssid === choosenNetwork ? ' list-group-item__selected' : ''), onClick: function () {
                    setChoosenNetwork(el.ssid);
                }, key: key },
                el.ssid,
                " ",
                (opts.wifiStatus.wifiStatus === types_1.WIFI_STATUS.CONNECTED && el.ssid === opts.wifiStatus.currentWifiNet.ssid) ? "*" : '',
                (opts.wifiStatus.wifiStatus === types_1.WIFI_STATUS.CONNECTING && el.ssid === opts.wifiStatus.currentWifiNet.ssid) ? "CONNECTING" : ''));
        })),
        react_1.default.createElement("div", { className: "wifiPanel__controls" },
            react_1.default.createElement("div", { onClick: function () {
                    if (choosenNetwork) {
                        SettingsStore_1.default.dispatch(actions_1.connectWifiNet({ ssid: choosenNetwork, password: pass }));
                    }
                }, className: 'manager-panel__block manager-panel__topright wifiPanel__controls_button' }, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F"),
            react_1.default.createElement(Input_1.Input, { className: "wifi__password", value: pass, onChange: setPass, placeholder: "\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" }),
            react_1.default.createElement("div", { className: "wifi__status" },
                "\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0435\u0442\u0438: ",
                react_1.default.createElement("span", { className: 'wifi__status_indicator ' + (netStatus ? 'wifi__status_indicator-success' : 'wifi__status_indicator-danger') })),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: types_1.getBackLink(), className: 'manager-panel__block manager-panel__bottomright wifiPanel__controls_button' }, "\u041D\u0430\u0437\u0430\u0434"))));
}
exports.WifiView = WifiView;
var mapStateToProps = function (state) {
    return __assign({}, state);
};
exports.Wifi = react_redux_1.connect(mapStateToProps)(WifiView);


/***/ }),

/***/ "./src/SettingsStore/index.ts":
/*!************************************!*\
  !*** ./src/SettingsStore/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var index_1 = __importDefault(__webpack_require__(/*! ../reducers/index */ "./src/reducers/index.ts"));
var WebSocketController_1 = __webpack_require__(/*! ../actions/WebSocketController */ "./src/actions/WebSocketController.ts");
var Converter_1 = __importStar(__webpack_require__(/*! ../../server/stm/Converter */ "./server/stm/Converter.ts"));
var actionTypes_1 = __importDefault(__webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.ts"));
var machineLife_1 = __webpack_require__(/*! ../actions/machineLife */ "./src/actions/machineLife.ts");
var index_2 = __importDefault(__webpack_require__(/*! ../reducers/index */ "./src/reducers/index.ts"));
var store = redux_1.createStore(index_1.default);
var localState = store.getState();
exports.getLocalState = function () {
    return localState;
};
var needDump = false;
var WebSocketInst = new WebSocketController_1.WebSocketController();
WebSocketInst.registerCallback(function (data) {
    var parsed = JSON.parse(data);
    if (parsed.stm) {
        var msg = Converter_1.default.fromString(parsed.stm);
        if (msg && msg.content !== '' && msg.content !== undefined) {
            localState = index_2.default(localState, {
                type: actionTypes_1.default.currentInfoUpdate,
                payload: msg
            });
            needDump = true;
        }
    }
    if (parsed.settingsProfiles) {
        store.dispatch({
            type: actionTypes_1.default.settingsProfilesInitialize,
            payload: parsed
        });
    }
    if (parsed.wifi) {
        if (parsed.wifi.list) {
            store.dispatch({
                type: actionTypes_1.default.wifiListUpdate,
                payload: parsed.wifi
            });
        }
        else if (parsed.wifi.wifiStatus) {
            store.dispatch({
                type: actionTypes_1.default.wifiStatusUpdate,
                payload: parsed.wifi
            });
        }
    }
});
setInterval(function () {
    if (needDump) {
        needDump = false;
        store.dispatch({ type: actionTypes_1.default.setMachineState, payload: localState });
        localState = store.getState();
    }
}, 300);
exports.emitSettingsChange = function (payload) {
    WebSocketInst.send(JSON.stringify({ settings: __assign({}, payload) }));
};
exports.emitChoosenProfileChange = function (payload) {
    WebSocketInst.send(JSON.stringify({ profile: payload }));
};
exports.emitConnectToWifi = function (payload) {
    WebSocketInst.send(JSON.stringify({ wifi: payload }));
};
exports.emitUpdate = function () {
    WebSocketInst.send(JSON.stringify({ update: true }));
};
exports.emitStm = function (payload, waitEcho) {
    //console.log("Message emitted " + JSON.stringify(payload));
    WebSocketInst.send(JSON.stringify({ stm: Converter_1.default.toString(payload) }));
    if (waitEcho) {
        var echoWaiter_1 = function (data) {
            var parsed = JSON.parse(data);
            var msg = Converter_1.default.fromString(parsed.stm);
            if (msg.id === Converter_1.StmMessages.Echo) {
                var converted = Converter_1.default.fromString(msg.content);
                // console.log('ECHO:', converted)
                if (payload.id === converted.id && payload.content === converted.content) {
                    clearTimeout(echoTimeout_1);
                }
                else {
                    exports.emitStm(payload, true);
                }
                WebSocketInst.unRegisterCallback(echoWaiter_1);
            }
        };
        var echoTimeout_1 = setTimeout(function () {
            exports.emitStm(payload, true);
            WebSocketInst.unRegisterCallback(echoWaiter_1);
        }, 1000);
        WebSocketInst.registerCallback(echoWaiter_1);
    }
};
setTimeout(function () {
    setInterval(function () {
        machineLife_1.Life.step();
    }, 50);
}, 5000);
exports.default = store;


/***/ }),

/***/ "./src/actions/NetChecker.ts":
/*!***********************************!*\
  !*** ./src/actions/NetChecker.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function checkConnection() {
    return new Promise(function (resolve) {
        fetch('https://ifconfig.me/').then(function (res) {
            if (res.ok) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }).catch(function () {
            resolve(false);
        });
    });
}
exports.checkConnection = checkConnection;


/***/ }),

/***/ "./src/actions/Process.ts":
/*!********************************!*\
  !*** ./src/actions/Process.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var Process = /** @class */ (function () {
    function Process(name, stateMachine, wipTimeout) {
        this.name = '';
        this.state = {};
        this.isActive = false;
        this.isReady = false;
        this.status = types_1.ProcessStatus.wip;
        this.errorTimeout = 0;
        this.wipTimeout = 0;
        this.wipStart = 0;
        this.timeDone = 0;
        this.name = name;
        this.stateMachine = stateMachine;
        this.onStatusChangeHdl = this.onStatusChangeHdl.bind(this);
        this.wipTimeout = wipTimeout;
        this.wipStart = Date.now();
    }
    Process.prototype.onStatusChangeHdl = function (newStatus) {
        if (this.status !== newStatus) {
            this.onStatusChange(newStatus, this.status);
            if (newStatus === types_1.ProcessStatus.done) {
                this.timeDone = Date.now();
            }
            else {
                this.timeDone = 0;
            }
            if (newStatus === types_1.ProcessStatus.wip) {
                this.wipStart = Date.now();
            }
            else {
                this.wipStart = 0;
            }
        }
        this.status = newStatus;
    };
    Process.prototype.start = function () {
        this.isActive = true;
        this.state.stop = false;
        this.errorTimeout = 0;
    };
    Process.prototype.stop = function () {
        this.isActive = false;
        this.onStatusChangeHdl(types_1.ProcessStatus.stopped);
    };
    Process.prototype.step = function (commands) {
        if (!this.errorTimeout && this.wipTimeout) {
            this.errorTimeout = Date.now();
        }
        if (this.status === types_1.ProcessStatus.wip) {
            var wipTime = Date.now() - this.wipStart;
            this.state.wipTime = wipTime;
        }
        else {
            this.state.wipTime = 0;
        }
        /*    if (this.wipTimeout &&  wipTime > this.wipTimeout) {
              this.state.stop = 0
              // TODO:: NOTFIFICATION ERROR
            }*/
        if (this.timeDone && this.status === types_1.ProcessStatus.done) {
            this.state.doneTime = Date.now() - this.timeDone;
        }
        else {
            this.state.doneTime = 0;
        }
        this.state = this.stateMachine(this.state, commands, this.onStatusChangeHdl);
    };
    return Process;
}());
exports.Process = Process;


/***/ }),

/***/ "./src/actions/WebSocketController.ts":
/*!********************************************!*\
  !*** ./src/actions/WebSocketController.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WebSocketController = /** @class */ (function () {
    function WebSocketController() {
        this.socket = null;
        this.receivedMsgCallbacks = [];
        this.socketConnected = false;
        this.queue = [];
        this.init();
    }
    WebSocketController.prototype.handleMessage = function (data) {
        this.receivedMsgCallbacks.forEach(function (el) {
            el(data);
        });
    };
    WebSocketController.prototype.init = function () {
        var _this = this;
        this.socket = new WebSocket(location.origin.replace(/^http/, 'ws'));
        this.socket.onopen = function () {
            // @ts-ignore
            if (window.needRefreshGlobal) {
                window.location.href = '/';
                return;
            }
            console.log("Соединение установлено.");
            _this.socketConnected = true;
            _this.queue.forEach(function (msg) {
                _this.send(msg);
            });
            _this.queue = [];
        };
        this.socket.onclose = function (event) {
            _this.socketConnected = false;
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            }
            else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
            setTimeout(function () {
                _this.init();
            }, 1000);
        };
        this.socket.onmessage = function (event) {
            _this.handleMessage(event.data);
        };
        this.socket.onerror = function (error) {
            //@ts-ignore
            console.log("Ошибка " + error.message);
        };
    };
    WebSocketController.prototype.registerCallback = function (callback) {
        this.receivedMsgCallbacks.push(callback);
    };
    WebSocketController.prototype.unRegisterCallback = function (callback) {
        this.receivedMsgCallbacks.splice(this.receivedMsgCallbacks.indexOf(callback));
    };
    WebSocketController.prototype.send = function (msg) {
        if (this.socketConnected) {
            this.socket.send(msg);
        }
        else {
            this.queue.push(msg);
        }
    };
    return WebSocketController;
}());
exports.WebSocketController = WebSocketController;


/***/ }),

/***/ "./src/actions/actionTypes.ts":
/*!************************************!*\
  !*** ./src/actions/actionTypes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ACTION_TYPES;
(function (ACTION_TYPES) {
    ACTION_TYPES["setSetting"] = "setSetting";
    ACTION_TYPES["setProfile"] = "setProfile";
    ACTION_TYPES["setMachineState"] = "setMachineState";
    ACTION_TYPES["currentInfoUpdate"] = "currentInfoUpdate";
    ACTION_TYPES["updateSettings"] = "updateSettings";
    ACTION_TYPES["settingsProfilesInitialize"] = "settingsProfilesInitialize";
    ACTION_TYPES["wifiListUpdate"] = "wifiListUpdate";
    ACTION_TYPES["connectingWifi"] = "connectingWifi";
    ACTION_TYPES["wifiStatusUpdate"] = "wifiStatusUpdate";
    ACTION_TYPES["needUpdate"] = "needUpdate";
})(ACTION_TYPES || (ACTION_TYPES = {}));
;
exports.default = ACTION_TYPES;


/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = __importDefault(__webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.ts"));
var SettingsStore_1 = __webpack_require__(/*! ../SettingsStore */ "./src/SettingsStore/index.ts");
function setSetting(payload) {
    SettingsStore_1.emitSettingsChange(payload);
    return { type: actionTypes_1.default.setSetting, payload: payload };
}
exports.setSetting = setSetting;
;
function setProfile(payload) {
    SettingsStore_1.emitChoosenProfileChange(payload);
    return { type: actionTypes_1.default.setProfile, payload: payload };
}
exports.setProfile = setProfile;
;
function connectWifiNet(payload) {
    SettingsStore_1.emitConnectToWifi(payload);
    return { type: actionTypes_1.default.connectingWifi, payload: payload };
}
exports.connectWifiNet = connectWifiNet;
function update() {
    SettingsStore_1.emitUpdate();
    return { type: actionTypes_1.default.needUpdate, payload: 'update' };
}
exports.update = update;


/***/ }),

/***/ "./src/actions/life/BoilProcessGroup.ts":
/*!**********************************************!*\
  !*** ./src/actions/life/BoilProcessGroup.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var SettingsStore_1 = __importStar(__webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts"));
var Converter_1 = __webpack_require__(/*! ../../../server/stm/Converter */ "./server/stm/Converter.ts");
var checkToStop = function (button, state) {
    var machine = SettingsStore_1.getLocalState().machine;
    if ((machine[button] === '1' || machine[button] === '2') && machine[button] !== state.buttonState) {
        state.step = '0';
        state.buttonState = machine[button];
        return false;
    }
    return true;
};
var calcTime = function (state, commands, sec) {
    var current = Date.now();
    var duration = Math.round((current - state.startBoil) / 1000);
    if (duration < 0) {
        duration = 0;
    }
    commands[sec] = duration;
};
exports.BoilProcessGroup = function (button, valveIn, valveOut, volumeSensor, resetVolumetric, sec, autoMode, presoaking, postPresoaking) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    if (machine[Converter_1.StmMessages.Button1] === '1') {
        state.step = '0';
        state.buttonState = machine[button];
        changeStatus(types_1.ProcessStatus.done);
        return __assign({}, state);
    }
    var presoakingTime = (parseInt(settings[presoaking], 10) || 0) * 1000;
    var postPresoakingTime = (parseInt(settings[postPresoaking], 10) || 0) * 1000;
    switch (state.step) {
        case '1':
            if (checkToStop(button, state)) {
                changeStatus(types_1.ProcessStatus.wip);
                if (machine[volumeSensor] === '1') {
                    state.step = '2';
                    state.startBoil = Date.now();
                }
                else {
                    commands[resetVolumetric]++;
                }
            }
            break;
        case '2':
            // START BEFORE BOIL
            if (checkToStop(button, state)) {
                calcTime(state, commands, sec);
                commands[valveOut]++;
                commands[Converter_1.StmCommands.SetRelay8]++;
                state.step = '3';
                state.beforePressure = Date.now();
            }
            break;
        case '3':
            if (checkToStop(button, state)) {
                calcTime(state, commands, sec);
                // time before boil. TODO: change 0 to setting
                if (Date.now() - state.beforePressure > presoakingTime) {
                    state.step = '4';
                    state.silentBeforePressure = Date.now();
                }
                else {
                    commands[valveOut]++;
                    commands[Converter_1.StmCommands.SetRelay8]++;
                }
            }
            break;
        case '4':
            if (checkToStop(button, state)) {
                calcTime(state, commands, sec);
                // time before boil. TODO: change 0 to setting
                if (Date.now() - state.silentBeforePressure > postPresoakingTime) {
                    state.step = '5';
                    state.silentBeforePressure = Date.now();
                }
            }
            break;
        case '5':
            if (checkToStop(button, state)) {
                calcTime(state, commands, sec);
                var volumne = parseInt(machine[volumeSensor], 10) || 0;
                var needVolume = parseInt(settings[autoMode]) || 150;
                if (volumne < needVolume) {
                    commands[valveIn]++;
                    commands[valveOut]++;
                    commands[Converter_1.StmCommands.SetRelay8]++;
                }
                else {
                    state.step = '0';
                }
            }
            break;
        default:
            changeStatus(types_1.ProcessStatus.done);
            if (machine[button] === '1' || machine[button] === '2') {
                if (state.buttonState === '1' || state.buttonState === '2') {
                    if (machine[button] !== state.buttonState) {
                        state.step = '1';
                        state.buttonState = machine[button];
                    }
                }
                else {
                    state.buttonState = machine[button];
                }
            }
            break;
    }
    return __assign({}, state);
}; };


/***/ }),

/***/ "./src/actions/life/CleanMode.ts":
/*!***************************************!*\
  !*** ./src/actions/life/CleanMode.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var SettingsStore_1 = __importStar(__webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts"));
var Converter_1 = __webpack_require__(/*! ../../../server/stm/Converter */ "./server/stm/Converter.ts");
var checkToStop = function (button, state) {
    var machine = SettingsStore_1.getLocalState().machine;
    if ((machine[button] === '1' || machine[button] === '2') && machine[button] !== state.buttonState) {
        state.step = '0';
        state.buttonState = machine[button];
        return false;
    }
    return true;
};
exports.CleanMode = function (button) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    if (machine[Converter_1.StmMessages.Button1] === '1') {
        state.step = '0';
        state.buttonState = machine[button];
        changeStatus(types_1.ProcessStatus.done);
        return __assign({}, state);
    }
    var g1Temp = parseInt(settings.Group1Temperature, 10) || 0;
    var g2Temp = parseInt(settings.Group2Temperature, 10) || 0;
    switch (state.step) {
        case '1':
            if (checkToStop(button, state)) {
                changeStatus(types_1.ProcessStatus.wip);
                state.step = '2';
                state.cleanStart1 = Date.now();
            }
            break;
        case '2':
            if (checkToStop(button, state)) {
                if (Date.now() - state.cleanStart1 < 3000) {
                    if (g1Temp > 70) {
                        commands[Converter_1.StmCommands.SetValve2]++;
                        commands[Converter_1.StmCommands.SetValve4]++;
                    }
                    if (g2Temp > 70) {
                        commands[Converter_1.StmCommands.SetValve3]++;
                        commands[Converter_1.StmCommands.SetValve5]++;
                    }
                    commands[Converter_1.StmCommands.SetRelay8]++;
                }
                else {
                    state.step = '3';
                    state.cleanStart1 = Date.now();
                }
            }
            break;
        case '3':
            if (checkToStop(button, state)) {
                if (Date.now() - state.cleanStart1 > 3000) {
                    state.step = '4';
                    state.cleanStart1 = Date.now();
                }
            }
            break;
        case '4':
            if (checkToStop(button, state)) {
                if (Date.now() - state.cleanStart1 < 3000) {
                    if (g1Temp > 70) {
                        commands[Converter_1.StmCommands.SetValve2]++;
                        commands[Converter_1.StmCommands.SetValve4]++;
                    }
                    if (g2Temp > 70) {
                        commands[Converter_1.StmCommands.SetValve3]++;
                        commands[Converter_1.StmCommands.SetValve5]++;
                    }
                    commands[Converter_1.StmCommands.SetRelay8]++;
                }
                else {
                    state.step = '5';
                    state.cleanStart1 = Date.now();
                }
            }
            break;
        case '5':
            if (checkToStop(button, state)) {
                if (Date.now() - state.cleanStart1 > 3000) {
                    state.step = '0';
                    state.cleanStart1 = Date.now();
                }
            }
            break;
        default:
            changeStatus(types_1.ProcessStatus.done);
            if (machine[button] === '1' || machine[button] === '2') {
                if (state.buttonState === '1' || state.buttonState === '2') {
                    if (machine[button] !== state.buttonState) {
                        state.step = '1';
                        state.buttonState = machine[button];
                    }
                }
                else {
                    state.buttonState = machine[button];
                }
            }
            break;
    }
    return __assign({}, state);
}; };


/***/ }),

/***/ "./src/actions/life/Color.ts":
/*!***********************************!*\
  !*** ./src/actions/life/Color.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var SettingsStore_1 = __importStar(__webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts"));
exports.Color = function (setTemp, trend, red, green, blue) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    var life = SettingsStore_1.getLocalState().life;
    var redHot = (parseInt(settings.RedHot, 10) || 0) / 16;
    var greenHot = (parseInt(settings.GreenHot, 10) || 0) / 16;
    var blueHot = (parseInt(settings.BlueHot, 10) || 0) / 16;
    var alphaHot = (parseInt(settings.AlphaHot, 10) || 0) / 16;
    var redCold = (parseInt(settings.RedCold, 10) || 0) / 16;
    var greenCold = (parseInt(settings.GreenCold, 10) || 0) / 16;
    var blueCold = (parseInt(settings.BlueCold, 10) || 0) / 16;
    var alphaCold = (parseInt(settings.AlphaCold, 10) || 0) / 16;
    if (state.stop) {
        return state;
    }
    var needTemp = parseInt(settings[setTemp], 10) || 0;
    var trendG = life[trend];
    var temperature = trendG[trendG.length - 1] && trendG[trendG.length - 1].value || 0;
    switch (state.step) {
        case '1':
            if (Date.now() - state.stepStart > 1000) {
                changeStatus(types_1.ProcessStatus.wip);
            }
            break;
        default:
            changeStatus(types_1.ProcessStatus.done);
            if (needTemp < 70) {
                commands[red] = 0;
                commands[green] = 0;
                commands[blue] = 0;
            }
            state.stepStart = Date.now();
            if (temperature - 20 >= needTemp) {
                commands[red] = Math.round((redHot * alphaHot) * 65534);
                commands[green] = Math.round((greenHot * alphaHot) * 65534);
                commands[blue] = Math.round((blueHot * alphaHot) * 65534);
            }
            else {
                commands[red] = Math.round((temperature * redHot * alphaHot / needTemp) * 65534 + ((needTemp - temperature) / needTemp) * redCold * alphaCold * 65534);
                commands[green] = Math.round((temperature * greenHot * alphaHot / needTemp) * 65534 + ((needTemp - temperature) / needTemp) * greenCold * alphaCold * 65534);
                commands[blue] = Math.round((temperature * blueHot * alphaHot / needTemp) * 65534 + ((needTemp - temperature) / needTemp) * blueCold * alphaCold * 65534);
                if (commands[red] > 65534) {
                    commands[red] = 65534;
                }
                if (commands[green] > 65534) {
                    commands[green] = 65534;
                }
                if (commands[blue] > 65534) {
                    commands[blue] = 65534;
                }
            }
            break;
    }
    return __assign({}, state);
}; };


/***/ }),

/***/ "./src/actions/life/SleepMode.ts":
/*!***************************************!*\
  !*** ./src/actions/life/SleepMode.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var SettingsStore_1 = __webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts");
var Converter_1 = __webpack_require__(/*! ../../../server/stm/Converter */ "./server/stm/Converter.ts");
exports.SleepMode = function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    if (state.stop) {
        return state;
    }
    switch (state.step) {
        case '1':
            if (machine[Converter_1.StmMessages.Button1] === '2') {
                state.step = '0';
            }
            else {
                changeStatus(types_1.ProcessStatus.wip);
            }
            break;
        default:
            changeStatus(types_1.ProcessStatus.done);
            if (machine[Converter_1.StmMessages.Button1] === '1') {
                state.step = '1';
            }
            break;
    }
    return __assign({}, state);
};


/***/ }),

/***/ "./src/actions/life/WarmGroup.ts":
/*!***************************************!*\
  !*** ./src/actions/life/WarmGroup.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SettingsStore_1 = __importStar(__webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts"));
var Converter_1 = __webpack_require__(/*! ../../../server/stm/Converter */ "./server/stm/Converter.ts");
exports.WarmGroup = function (pressure, rele1, rele2, // ????
setTemp, trend) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    var life = SettingsStore_1.getLocalState().life;
    if (state.stop) {
        return state;
    }
    var pressureG = parseInt(machine[pressure], 10) || 0;
    var needTemp = parseInt(settings[setTemp], 10) || 0;
    if (needTemp < 70 || pressureG < 500) {
        return state;
    }
    if (machine[Converter_1.StmMessages.Button1] === '1') {
        needTemp = 75;
    }
    var trendG = life[trend];
    var temperature = trendG[trendG.length - 1] && trendG[trendG.length - 1].value || 0;
    //const speed = life['speedG1']
    switch (state.step) {
        case '1':
            if (state.power > 0) {
                commands[rele1]++;
            }
            var current = Date.now();
            if (current - state.stepStart > state.waitWarmTimeout) {
                state.step = '2';
                state.stepStart = Date.now();
            }
            break;
        case '2':
            var current2 = Date.now();
            if (current2 - state.stepStart > 500) {
                state.step = '0';
            }
            break;
        default:
            if (!state.I) {
                state.I = 0;
            }
            if (!state.prevError) {
                state.prevError = 0;
            }
            var e = needTemp - temperature;
            var kProp = 0.5;
            var kInt = 0.002;
            var kDiff = 50;
            var P = kProp * e;
            var I = state.I + kInt * e;
            var D = (e - state.prevError) * kDiff;
            state.power = P + I + D;
            state.power *= 1000;
            if (state.power < 0) {
                state.waitWarmTimeout = 500;
            }
            else {
                if (e < -0.5) {
                    state.power = 0;
                    state.waitWarmTimeout = 1000;
                }
                else if (e < 0) {
                    state.power = state.power / 2;
                    if (state.power < 300) {
                        state.power = 0;
                        state.waitWarmTimeout = 500;
                    }
                    else {
                        state.waitWarmTimeout = state.power > 700 ? 700 : state.power;
                    }
                }
                else if (e < 1) {
                    state.power = state.power / 2;
                    if (state.power < 500) {
                        state.power = 500;
                    }
                    state.waitWarmTimeout = state.power > 1000 ? 1000 : state.power;
                }
                else {
                    if (state.power < 1000) {
                        state.power = 1000;
                    }
                    state.waitWarmTimeout = state.power > 5000 ? 5000 : state.power;
                }
            }
            state.prevError = e;
            state.step = '1';
            state.stepStart = Date.now();
            break;
    }
    return __assign({}, state);
}; };


/***/ }),

/***/ "./src/actions/life/WarmPredict.ts":
/*!*****************************************!*\
  !*** ./src/actions/life/WarmPredict.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var SettingsStore_1 = __importStar(__webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts"));
var Converter_1 = __webpack_require__(/*! ../../../server/stm/Converter */ "./server/stm/Converter.ts");
exports.WarmPredict = function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    var needTempG1 = parseInt(settings.Group1Temperature, 10) || 0;
    var needTempG2 = parseInt(settings.Group2Temperature, 10) || 0;
    var pressureG1 = parseInt(machine[Converter_1.StmMessages.Group1Pressure], 10) || 0;
    var pressureG2 = parseInt(machine[Converter_1.StmMessages.Group2Pressure], 10) || 0;
    if (needTempG1 < 70 && needTempG2 < 70 || pressureG1 < 500 || pressureG2 < 500) {
        return state;
    }
    var temperature = parseInt(machine[Converter_1.StmMessages.PredictGroupTemperature], 10);
    var needPr = parseInt(settings.PredictTemperature, 10) || 10;
    if (temperature < needPr - 3) {
        state.started = 1;
        changeStatus(types_1.ProcessStatus.wip);
        commands[Converter_1.StmCommands.SetRelay3]++;
    }
    else if (state.started) {
        commands[Converter_1.StmCommands.SetRelay3]++;
    }
    else if (temperature > needPr + 3) {
        state.started = 0;
        changeStatus(types_1.ProcessStatus.done);
    }
    return __assign({}, state);
};


/***/ }),

/***/ "./src/actions/life/WaterLevel.ts":
/*!****************************************!*\
  !*** ./src/actions/life/WaterLevel.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var SettingsStore_1 = __webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts");
var Converter_1 = __webpack_require__(/*! ../../../server/stm/Converter */ "./server/stm/Converter.ts");
exports.WaterLevel = function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    if (state.stop) {
        return state;
    }
    switch (machine[Converter_1.StmMessages.WaterLevel]) {
        case "1":
            if (state.wasWIP && state.doneTime < 5000) {
                changeStatus(types_1.ProcessStatus.done);
                commands[Converter_1.StmCommands.SetValve1] = 1;
                commands[Converter_1.StmCommands.SetRelay8]++;
            }
            else {
                state.wasWIP = 0;
            }
            break;
        case "2":
            if (state.wipTime > 3000) {
                changeStatus(types_1.ProcessStatus.wip);
                commands[Converter_1.StmCommands.SetValve1] = 1;
                commands[Converter_1.StmCommands.SetRelay8]++;
                state.wasWIP = 1;
            }
            break;
    }
    return __assign({}, state);
};


/***/ }),

/***/ "./src/actions/life/WaterLevelGroup.ts":
/*!*********************************************!*\
  !*** ./src/actions/life/WaterLevelGroup.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
var SettingsStore_1 = __importStar(__webpack_require__(/*! ../../SettingsStore */ "./src/SettingsStore/index.ts"));
var Converter_1 = __webpack_require__(/*! ../../../server/stm/Converter */ "./server/stm/Converter.ts");
exports.WaterLevelGroup = function (groupPressureFlag, commandValve, settingsKey) { return function (state, commands, changeStatus) {
    var machine = SettingsStore_1.getLocalState().machine;
    var settings = SettingsStore_1.default.getState().settings;
    if (state.stop) {
        return state;
    }
    var pressure = parseInt(machine[groupPressureFlag], 10) || 0;
    var needTemperature = parseInt(settings[settingsKey]) || 0;
    if (needTemperature < 70) {
        changeStatus(types_1.ProcessStatus.done);
        return __assign({}, state);
    }
    if (pressure < 100) {
        if (!state.started) {
            state.started = Date.now();
        }
        if (Date.now() - state.started > 1000) {
            state.wasStartedWarm = 1;
            changeStatus(types_1.ProcessStatus.wip);
            commands[Converter_1.StmCommands.SetRelay8]++;
            commands[commandValve]++;
        }
    }
    else if (state.wasStartedWarm && pressure < 400) {
        changeStatus(types_1.ProcessStatus.wip);
        commands[Converter_1.StmCommands.SetRelay8]++;
        commands[commandValve]++;
    }
    else {
        state.wasStartedWarm = 0;
        state.started = 0;
        changeStatus(types_1.ProcessStatus.done);
    }
    return __assign({}, state);
}; };


/***/ }),

/***/ "./src/actions/machineLife.ts":
/*!************************************!*\
  !*** ./src/actions/machineLife.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SettingsStore_1 = __webpack_require__(/*! ../SettingsStore */ "./src/SettingsStore/index.ts");
var Converter_1 = __webpack_require__(/*! ../../server/stm/Converter */ "./server/stm/Converter.ts");
var Process_1 = __webpack_require__(/*! ./Process */ "./src/actions/Process.ts");
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var WaterLevel_1 = __webpack_require__(/*! ./life/WaterLevel */ "./src/actions/life/WaterLevel.ts");
var WaterLevelGroup_1 = __webpack_require__(/*! ./life/WaterLevelGroup */ "./src/actions/life/WaterLevelGroup.ts");
var BoilProcessGroup_1 = __webpack_require__(/*! ./life/BoilProcessGroup */ "./src/actions/life/BoilProcessGroup.ts");
var WarmPredict_1 = __webpack_require__(/*! ./life/WarmPredict */ "./src/actions/life/WarmPredict.ts");
var WarmGroup_1 = __webpack_require__(/*! ./life/WarmGroup */ "./src/actions/life/WarmGroup.ts");
var SleepMode_1 = __webpack_require__(/*! ./life/SleepMode */ "./src/actions/life/SleepMode.ts");
var CleanMode_1 = __webpack_require__(/*! ./life/CleanMode */ "./src/actions/life/CleanMode.ts");
var Color_1 = __webpack_require__(/*! ./life/Color */ "./src/actions/life/Color.ts");
var MachineLife = /** @class */ (function () {
    function MachineLife() {
        this.processes = [];
        this.count = 0;
        this.needSend = false;
        var boilGroup1 = new Process_1.Process('boilGroup1', BoilProcessGroup_1.BoilProcessGroup(Converter_1.StmMessages.Button3, Converter_1.StmCommands.SetValve2, Converter_1.StmCommands.SetValve4, Converter_1.StmMessages.VolumetricGroup1, Converter_1.StmCommands.ResetVolumetricG1, Converter_1.StmCommands.SetSecGroup1, 'Group1AutoMode1', 'Group1Presoaking', 'Group1PostPresoaking'), 0);
        var boilGroup2 = new Process_1.Process('boilGroup1', BoilProcessGroup_1.BoilProcessGroup(Converter_1.StmMessages.Button6, Converter_1.StmCommands.SetValve3, Converter_1.StmCommands.SetValve5, Converter_1.StmMessages.VolumetricGroup2, Converter_1.StmCommands.ResetVolumetricG2, Converter_1.StmCommands.SetSecGroup2, 'Group2AutoMode1', 'Group2Presoaking', 'Group2PostPresoaking'), 0);
        var waterLevel = new Process_1.Process('waterLevel', WaterLevel_1.WaterLevel, 0);
        var predictWarm = new Process_1.Process('predictWarm', WarmPredict_1.WarmPredict, 0);
        var sleepMode = new Process_1.Process('SleepMode', SleepMode_1.SleepMode, 0);
        var colorG1 = new Process_1.Process('ColorG1', Color_1.Color("Group1Temperature", "middleTTrendG1", Converter_1.StmCommands.SetRedGroup1, Converter_1.StmCommands.SetGreenGroup1, Converter_1.StmCommands.SetBlueGroup1), 0);
        var colorG2 = new Process_1.Process('ColorG2', Color_1.Color("Group2Temperature", "middleTTrendG2", Converter_1.StmCommands.SetRedGroup2, Converter_1.StmCommands.SetGreenGroup2, Converter_1.StmCommands.SetBlueGroup2), 0);
        var cleanMode = new Process_1.Process('CleanMode', CleanMode_1.CleanMode(Converter_1.StmMessages.Button9), 0);
        var waterLevelG1 = new Process_1.Process('waterLevelG1', WaterLevelGroup_1.WaterLevelGroup(Converter_1.StmMessages.Group1Pressure, Converter_1.StmCommands.SetValve2, 'Group1Temperature'), 0);
        var waterLevelG2 = new Process_1.Process('waterLevelG2', WaterLevelGroup_1.WaterLevelGroup(Converter_1.StmMessages.Group2Pressure, Converter_1.StmCommands.SetValve3, 'Group2Temperature'), 0);
        var warmG1 = new Process_1.Process('warmG1', WarmGroup_1.WarmGroup(Converter_1.StmMessages.Group1Pressure, Converter_1.StmCommands.SetRelay4, Converter_1.StmCommands.SetRelay5, "Group1Temperature", "middleTTrendG1"), 0);
        var warmG2 = new Process_1.Process('warmG2', WarmGroup_1.WarmGroup(Converter_1.StmMessages.Group2Pressure, Converter_1.StmCommands.SetRelay6, Converter_1.StmCommands.SetRelay7, "Group2Temperature", "middleTTrendG2"), 0);
        this.addProcess({
            process: colorG1,
            children: []
        });
        this.addProcess({
            process: colorG2,
            children: []
        });
        this.addProcess({
            process: cleanMode,
            children: [boilGroup1, boilGroup2, predictWarm]
        });
        this.addProcess({
            process: sleepMode,
            children: []
        });
        this.addProcess({
            process: boilGroup1,
            children: [waterLevelG1]
        });
        this.addProcess({
            process: boilGroup2,
            children: [waterLevelG2]
        });
        colorG1.start();
        colorG2.start();
        boilGroup1.start();
        boilGroup2.start();
        waterLevel.start();
        predictWarm.start();
        waterLevelG1.start();
        waterLevelG2.start();
        warmG1.start();
        warmG2.start();
        cleanMode.start();
        sleepMode.start();
        this.addProcess({
            process: waterLevel,
            children: []
        });
        this.addProcess({
            process: waterLevelG1,
            children: []
        });
        this.addProcess({
            process: waterLevelG2,
            children: []
        });
        this.addProcess({
            process: predictWarm,
            children: []
        });
        this.addProcess({
            process: warmG1,
            children: []
        });
        this.addProcess({
            process: warmG2,
            children: []
        });
    }
    MachineLife.prototype.addProcess = function (p) {
        p.process.onStatusChange = function (newStatus, oldStatus) {
            p.children.forEach(function (process) {
                if (newStatus === types_1.ProcessStatus.done) {
                    process.start();
                }
                else {
                    process.stop();
                }
            });
        };
        this.processes.push(p);
    };
    MachineLife.prototype.checkAndSend = function (commands, command, status) {
        var machine = SettingsStore_1.getLocalState().machine;
        if (commands[command] > 0) {
            if (machine[status] === '2') {
                this.needSend = true;
                SettingsStore_1.emitStm({ id: command, content: '1' });
            }
        }
        else {
            if (machine[status] === '1') {
                this.needSend = true;
                SettingsStore_1.emitStm({ id: command, content: '0' });
            }
        }
    };
    MachineLife.prototype.step = function () {
        var _a;
        var machine = SettingsStore_1.getLocalState().machine;
        this.needSend = false;
        var commands = (_a = {},
            _a[Converter_1.StmCommands.SetValve1] = 0,
            _a[Converter_1.StmCommands.SetValve2] = 0,
            _a[Converter_1.StmCommands.SetValve3] = 0,
            _a[Converter_1.StmCommands.SetValve4] = 0,
            _a[Converter_1.StmCommands.SetValve5] = 0,
            _a[Converter_1.StmCommands.SetValve6] = 0,
            _a[Converter_1.StmCommands.SetRelay1] = 0,
            _a[Converter_1.StmCommands.SetRelay2] = 0,
            _a[Converter_1.StmCommands.SetRelay3] = 0,
            _a[Converter_1.StmCommands.SetRelay4] = 0,
            _a[Converter_1.StmCommands.SetRelay5] = 0,
            _a[Converter_1.StmCommands.SetRelay6] = 0,
            _a[Converter_1.StmCommands.SetRelay7] = 0,
            _a[Converter_1.StmCommands.SetRelay8] = 0,
            _a[Converter_1.StmCommands.SetRedGroup1] = 0,
            _a[Converter_1.StmCommands.SetGreenGroup1] = 0,
            _a[Converter_1.StmCommands.SetBlueGroup1] = 0,
            _a[Converter_1.StmCommands.SetRedGroup2] = 0,
            _a[Converter_1.StmCommands.SetGreenGroup2] = 0,
            _a[Converter_1.StmCommands.SetBlueGroup2] = 0,
            _a[Converter_1.StmCommands.SetRedMachine] = 0,
            _a[Converter_1.StmCommands.SetGreenMachine] = 0,
            _a[Converter_1.StmCommands.SetBlueMachine] = 0,
            _a[Converter_1.StmCommands.ResetVolumetricG1] = 0,
            _a[Converter_1.StmCommands.ResetVolumetricG2] = 0,
            _a[Converter_1.StmCommands.SetSecGroup1] = 100,
            _a[Converter_1.StmCommands.SetSecGroup2] = 100,
            _a);
        this.processes.forEach(function (one) {
            if (one.process.isActive) {
                one.process.step(commands);
            }
        });
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay1, Converter_1.StmMessages.Relay1);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay2, Converter_1.StmMessages.Relay2);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay3, Converter_1.StmMessages.Relay3);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay4, Converter_1.StmMessages.Relay4);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay5, Converter_1.StmMessages.Relay5);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay6, Converter_1.StmMessages.Relay6);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay7, Converter_1.StmMessages.Relay7);
        this.checkAndSend(commands, Converter_1.StmCommands.SetRelay8, Converter_1.StmMessages.Relay8);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve1, Converter_1.StmMessages.Valve1);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve2, Converter_1.StmMessages.Valve2);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve3, Converter_1.StmMessages.Valve3);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve4, Converter_1.StmMessages.Valve4);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve5, Converter_1.StmMessages.Valve5);
        this.checkAndSend(commands, Converter_1.StmCommands.SetValve6, Converter_1.StmMessages.Valve6);
        var vol1 = parseInt(machine[Converter_1.StmMessages.VolumetricGroup1]) || 1;
        if (vol1 > 1 && commands[Converter_1.StmCommands.ResetVolumetricG1] > 0) {
            this.needSend = true;
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.ResetVolumetricG1, content: '1' });
        }
        var vol2 = parseInt(machine[Converter_1.StmMessages.VolumetricGroup2]) || 1;
        if (vol2 > 1 && commands[Converter_1.StmCommands.ResetVolumetricG2] > 0) {
            this.needSend = true;
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.ResetVolumetricG2, content: '1' });
        }
        if (commands[Converter_1.StmCommands.SetSecGroup1] > 0) {
            this.needSend = true;
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetSecGroup1, content: "" + commands[Converter_1.StmCommands.SetSecGroup1] });
        }
        if (commands[Converter_1.StmCommands.SetSecGroup2] > 0) {
            this.needSend = true;
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetSecGroup2, content: "" + commands[Converter_1.StmCommands.SetSecGroup2] });
        }
        var procG1 = this.processes.find(function (pr) { return pr.process.name === 'ColorG1'; });
        if (procG1 && procG1.process && procG1.process.status === types_1.ProcessStatus.done) {
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetRedGroup1, content: "" + commands[Converter_1.StmCommands.SetRedGroup1] });
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetBlueGroup1, content: "" + commands[Converter_1.StmCommands.SetBlueGroup1] });
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetGreenGroup1, content: "" + commands[Converter_1.StmCommands.SetGreenGroup1] });
        }
        var procG2 = this.processes.find(function (pr) { return pr.process.name === 'ColorG2'; });
        if (procG2 && procG2.process && procG2.process.status === types_1.ProcessStatus.done) {
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetRedGroup2, content: "" + commands[Converter_1.StmCommands.SetRedGroup2] });
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetBlueGroup2, content: "" + commands[Converter_1.StmCommands.SetBlueGroup2] });
            SettingsStore_1.emitStm({ id: Converter_1.StmCommands.SetGreenGroup2, content: "" + commands[Converter_1.StmCommands.SetGreenGroup2] });
        }
    };
    return MachineLife;
}());
exports.Life = new MachineLife();


/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__(/*! ./index.less */ "./src/index.less");
var App_1 = __importDefault(__webpack_require__(/*! ./App */ "./src/App.tsx"));
var SettingsStore_1 = __importDefault(__webpack_require__(/*! ./SettingsStore */ "./src/SettingsStore/index.ts"));
// remove context menu
window.addEventListener('contextmenu', function (e) { return e.preventDefault(); });
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: SettingsStore_1.default },
    react_1.default.createElement(App_1.default, null)), document.getElementById('main'));


/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes_1 = __importDefault(__webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.ts"));
var types_1 = __webpack_require__(/*! ../types */ "./src/types.ts");
var Converter_1 = __importStar(__webpack_require__(/*! ../../server/stm/Converter */ "./server/stm/Converter.ts"));
var validate_1 = __webpack_require__(/*! ./validate */ "./src/reducers/validate.ts");
var initialStandartProfile = {
    title: "Стандарт",
    settings: {
        Group1Temperature: '0',
        Group1AutoMode1: '0',
        Group1AutoMode2: '0',
        Group1Presoaking: '0',
        Group1PostPresoaking: '0',
        Group2Temperature: '0',
        Group2AutoMode1: '0',
        Group2AutoMode2: '0',
        Group2Presoaking: '0',
        Group2PostPresoaking: '0',
        PredictTemperature: '0',
        SteamPressure: '0',
        RedCold: '0',
        GreenCold: '0',
        BlueCold: '16',
        AlphaCold: '16',
        RedHot: '16',
        GreenHot: '0',
        BlueHot: '0',
        AlphaHot: '16',
        EnergyMode: '0',
    }
};
var initialStandartProfileName = "Стандарт";
var initialState = {
    update: 0,
    life: {
        tTrendG1: [],
        tTrendG2: [],
        middleTTrendG1: [],
        middleTTrendG2: [],
        speedG1: 0,
        speedG2: 0,
        godMod: 0,
    },
    machine: (_a = {},
        _a[Converter_1.StmMessages.SteamPressure] = "",
        _a[Converter_1.StmMessages.Group1Pressure] = "",
        _a[Converter_1.StmMessages.Group1Temperature] = "",
        _a[Converter_1.StmMessages.Group2Pressure] = "",
        _a[Converter_1.StmMessages.Group2Temperature] = "",
        _a[Converter_1.StmMessages.PredictGroupTemperature] = "",
        _a[Converter_1.StmMessages.Error] = "",
        _a[Converter_1.StmMessages.Valve1] = "",
        _a[Converter_1.StmMessages.Valve2] = "",
        _a[Converter_1.StmMessages.Valve3] = "",
        _a[Converter_1.StmMessages.Valve4] = "",
        _a[Converter_1.StmMessages.Valve5] = "",
        _a[Converter_1.StmMessages.Valve6] = "",
        _a[Converter_1.StmMessages.Relay1] = "",
        _a[Converter_1.StmMessages.Relay2] = "",
        _a[Converter_1.StmMessages.Relay3] = "",
        _a[Converter_1.StmMessages.Relay4] = "",
        _a[Converter_1.StmMessages.Relay5] = "",
        _a[Converter_1.StmMessages.Relay6] = "",
        _a[Converter_1.StmMessages.Relay7] = "",
        _a[Converter_1.StmMessages.Relay8] = "",
        _a[Converter_1.StmMessages.Echo] = "",
        _a[Converter_1.StmMessages.WaterLevel] = "",
        _a[Converter_1.StmMessages.Button1] = "",
        _a[Converter_1.StmMessages.Button2] = "",
        _a[Converter_1.StmMessages.Button3] = "",
        _a[Converter_1.StmMessages.Button4] = "",
        _a[Converter_1.StmMessages.Button5] = "",
        _a[Converter_1.StmMessages.Button6] = "",
        _a[Converter_1.StmMessages.Button7] = "",
        _a[Converter_1.StmMessages.Button8] = "",
        _a[Converter_1.StmMessages.Button9] = "",
        _a[Converter_1.StmMessages.VolumetricGroup1] = "0",
        _a[Converter_1.StmMessages.VolumetricGroup2] = "0",
        _a),
    settings: initialStandartProfile.settings,
    choosenProfile: initialStandartProfileName,
    profiles: [initialStandartProfile],
    availableWifiNets: [],
    wifiStatus: {
        wifiStatus: types_1.WIFI_STATUS.NOT_CONNECTED
    }
};
function getChanges(source) {
    var changes = [];
    for (var i = 1; i < source.length; i++) {
        var current = source[i].value;
        var prev = source[i - 1].value;
        changes.push(current > prev ? current / prev : prev / current);
    }
    return changes;
}
function CreateMiddleTrend(source) {
    var result = [];
    var changes = getChanges(source);
    var middleOfChanges = 0;
    for (var i = 0; i < changes.length; i++) {
        middleOfChanges += changes[i];
    }
    middleOfChanges /= changes.length;
    var smooth = __spreadArrays(source);
    // find impuls
    for (var i = 1; i < smooth.length - 1; i++) {
        var current = smooth[i].value;
        var prev = smooth[i - 1].value;
        var next = smooth[i + 1].value;
        if (current < prev && current < next || current > next && current > prev) {
            if (changes[i] > middleOfChanges) {
                smooth[i] = { time: smooth[i].time, value: (prev + next) / 2 };
                changes = getChanges(smooth);
            }
        }
    }
    for (var i = 1; i < smooth.length - 1; i++) {
        var current = smooth[i];
        var prev = smooth[i - 1].value;
        var next = smooth[i + 1].value;
        result.push({ value: (current.value + prev + next) / 3, time: current.time });
    }
    return result;
}
var getSpeed = function (source) {
    var last = source[source.length - 1];
    var min = source[0];
    var max = source[0];
    source.forEach(function (el) {
        if (el.value < min.value) {
            min = el;
        }
        if (el.value > max.value) {
            max = el;
        }
    });
    var speed = 0;
    if (min.time > max.time) {
        speed = (last.value - min.value) / (last.time - min.time);
    }
    else {
        speed = (last.value - max.value) / (last.time - max.time);
    }
    return speed;
};
function getCurrentProfileIndex(state) {
    var currentSettings;
    for (var i = 0; i < state.profiles.length; i++) {
        if (state.profiles[i].title === state.choosenProfile) {
            return i;
        }
    }
}
function rootReducer(state, action) {
    if (state === void 0) { state = initialState; }
    try {
        var currentProfileIndex = getCurrentProfileIndex(state);
        switch (action.type) {
            case actionTypes_1.default.setSetting:
                var currentProfile = state.profiles[currentProfileIndex];
                currentProfile.settings[action.payload.id] = action.payload.content;
                return __assign(__assign({}, state), { settings: __assign({}, currentProfile.settings) });
            case actionTypes_1.default.setMachineState:
                // @ts-ignore
                return __assign(__assign({}, state), { machine: __assign({}, action.payload.machine), life: __assign({}, action.payload.life) });
            case actionTypes_1.default.currentInfoUpdate:
                if (!validate_1.Validate(action.payload.id, action.payload.content)) {
                    return state;
                }
                state.machine[action.payload.id] = action.payload.content;
                if (action.payload.id === Converter_1.StmMessages.PredictGroupTemperature) {
                    state.machine[action.payload.id] = "" + Math.round(Converter_1.default.voltToCelsium(action.payload.content) * 10) / 10;
                }
                if (action.payload.id === Converter_1.StmMessages.VolumetricGroup1 || action.payload.id === Converter_1.StmMessages.VolumetricGroup2) {
                    var volValue = parseInt(action.payload.content) || 1;
                    state.machine[action.payload.id] = "" + Converter_1.default.volumetric(volValue);
                }
                if (action.payload.id === Converter_1.StmMessages.SteamPressure ||
                    action.payload.id === Converter_1.StmMessages.Group1Pressure || action.payload.id === Converter_1.StmMessages.Group2Pressure) {
                    var prValue = parseInt(action.payload.content) || 0;
                    state.machine[action.payload.id] = "" + Converter_1.default.compressure(prValue);
                }
                if (action.payload.id === Converter_1.StmMessages.Group1Temperature) {
                    var temp = Converter_1.default.voltToCelsium(action.payload.content);
                    state.life.tTrendG1.push({
                        time: Date.now(),
                        value: temp
                    });
                    state.life.tTrendG1 = __spreadArrays(state.life.tTrendG1);
                    if (state.life.tTrendG1.length > 100) {
                        state.life.tTrendG1.splice(0, 1);
                        state.life.middleTTrendG1 = CreateMiddleTrend(state.life.tTrendG1);
                        state.life.speedG1 = getSpeed(state.life.middleTTrendG1);
                    }
                }
                if (action.payload.id === Converter_1.StmMessages.Group2Temperature) {
                    var temp = Converter_1.default.voltToCelsium(action.payload.content);
                    state.life.tTrendG2.push({
                        time: Date.now(),
                        value: temp
                    });
                    state.life.tTrendG2 = __spreadArrays(state.life.tTrendG2);
                    if (state.life.tTrendG2.length > 100) {
                        state.life.tTrendG2.splice(0, 1);
                        state.life.middleTTrendG2 = CreateMiddleTrend(state.life.tTrendG2);
                        state.life.speedG2 = getSpeed(state.life.middleTTrendG2);
                    }
                }
                return __assign(__assign({}, state), { machine: __assign({}, state.machine), life: __assign({}, state.life) });
            case actionTypes_1.default.settingsProfilesInitialize:
                state.choosenProfile = action.payload.settingsProfiles.choosenProfile;
                state.profiles = __spreadArrays(action.payload.settingsProfiles.profiles);
                currentProfileIndex = getCurrentProfileIndex(state);
                return __assign(__assign({}, state), { settings: __assign({}, state.profiles[currentProfileIndex].settings) });
            case actionTypes_1.default.setProfile:
                state.choosenProfile = action.payload;
                currentProfileIndex = getCurrentProfileIndex(state);
                return __assign(__assign({}, state), { settings: __assign({}, state.profiles[currentProfileIndex].settings) });
            case actionTypes_1.default.wifiStatusUpdate:
                return __assign(__assign({}, state), { wifiStatus: __assign({}, action.payload) });
            case actionTypes_1.default.wifiListUpdate:
                return __assign(__assign({}, state), { availableWifiNets: action.payload.list });
        }
    }
    catch (e) {
        console.log(e);
    }
    return state;
}
exports.default = rootReducer;


/***/ }),

/***/ "./src/reducers/validate.ts":
/*!**********************************!*\
  !*** ./src/reducers/validate.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = __webpack_require__(/*! ../../server/stm/Converter */ "./server/stm/Converter.ts");
exports.Validate = function (id, value) {
    switch (id) {
        case Converter_1.StmMessages.Button1:
        case Converter_1.StmMessages.Button2:
        case Converter_1.StmMessages.Button3:
        case Converter_1.StmMessages.Button4:
        case Converter_1.StmMessages.Button5:
        case Converter_1.StmMessages.Button6:
        case Converter_1.StmMessages.Button7:
        case Converter_1.StmMessages.Button8:
        case Converter_1.StmMessages.Button9:
            return (value === '1' || value === '2');
        default:
            return true;
    }
};


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = __webpack_require__(/*! ../server/stm/Converter */ "./server/stm/Converter.ts");
var ProcessStatus;
(function (ProcessStatus) {
    ProcessStatus["wip"] = "wip";
    ProcessStatus["done"] = "done";
    ProcessStatus["error"] = "error";
    ProcessStatus["stopped"] = "stopped";
})(ProcessStatus = exports.ProcessStatus || (exports.ProcessStatus = {}));
var WIFI_STATUS;
(function (WIFI_STATUS) {
    WIFI_STATUS[WIFI_STATUS["NOT_CONNECTED"] = 0] = "NOT_CONNECTED";
    WIFI_STATUS[WIFI_STATUS["CONNECTING"] = 1] = "CONNECTING";
    WIFI_STATUS[WIFI_STATUS["CONNECTED"] = 2] = "CONNECTED";
})(WIFI_STATUS = exports.WIFI_STATUS || (exports.WIFI_STATUS = {}));
function getBackLink() {
    return location.pathname
        .split("/")
        .slice(0, -1)
        .join("/");
}
exports.getBackLink = getBackLink;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map