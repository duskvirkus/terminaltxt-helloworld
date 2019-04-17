// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/terminaltxt/dist/terminaltxt.js":[function(require,module,exports) {
var define;
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.terminaltxt=e():t.terminaltxt=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i,r=function(){function t(e,n){if(void 0===e&&(e=t.getDefaultCharacterSet()),"string"==typeof e){for(var i=[],r=0;r<e.length;r++){var o=e.charCodeAt(r);-1===i.indexOf(o)&&i.push(o)}this.set=i}else this.set=e;this.unknown=n?"string"==typeof n?n.charCodeAt(0):n:"�".charCodeAt(0)}return t.getDefaultCharacterSet=function(){return[32,9608]},t.prototype.getIndex=function(t){return this.set.indexOf(t.charCodeAt(0))},t.prototype.getValue=function(t){return t>=0&&t<this.set.length?this.set[t]:this.unknown},t.prototype.size=function(){return this.set.length},t.prototype.toString=function(t){return String.fromCharCode(this.getValue(t))},t}(),o=function(){function t(t,e){this.domController=t,this.characterSet=e}return t.prototype.getCharacterSet=function(){return this.characterSet},t}(),h=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e}(o),c=function(){function t(t,e){this.changed=[],this.data=[],this.width=t,this.height=e,this.initData(),this.initChanged()}return t.prototype.doneChange=function(t){this.changed[t]=!1},t.prototype.getCell=function(t){return this.data[t]},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.hasBeenChanged=function(t){return this.changed[t]},t.prototype.index=function(t,e){return t+e*this.width},t.prototype.numberOfCells=function(){return this.width*this.height},t.prototype.setCell=function(t,e){this.data[e]=t,this.changed[e]=!0},t.prototype.initChanged=function(){this.changed=[];for(var t=0;t<this.width*this.height;t++)this.changed.push(!0)},t.prototype.initData=function(){this.data=[];for(var t=0;t<this.width*this.height;t++)this.data.push(0)},t}(),a=function(){function t(e){void 0===e&&(e=t.defaultContainer()),this.container=e,this.pre=document.createElement("pre"),this.code=document.createElement("code"),this.display=document.createElement("span"),this.idNumber=t.getID(),this.container.appendChild(this.pre),this.pre.appendChild(this.code),this.code.appendChild(this.display),this.setIDs(),this.setClasses()}return t.defaultContainer=function(){var t=document.createElement("div");return document.body.appendChild(t),t},t.getID=function(){var e=t.idCounter;return t.idCounter++,e},t.prototype.clear=function(){this.display.innerHTML=""},t.prototype.setClasses=function(){this.container.classList.add("termtxt-container"),this.pre.classList.add("termtxt-pre"),this.code.classList.add("termtxt-code"),this.display.classList.add("termtxt-display")},t.prototype.setIDs=function(){var t;t=0===this.idNumber?"":"-"+this.idNumber.toString(),this.container.id="termtxt-container"+t,this.pre.id="termtxt-pre"+t,this.code.id="termtxt-code"+t,this.display.id="termtxt-display"+t},t.idCounter=0,t}(),u=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),p=function(t){function e(e,n,i){var r=this;return(r=i?t.call(this,i)||this:t.call(this)||this).width=e,r.height=n,r.cells=[],r.initCells(),r}return u(e,t),e.prototype.index=function(t,e){return t+e*this.width},e.prototype.setCellValue=function(t,e,n){var i;i=n?this.index(e,n):e,this.cells[i].innerHTML=t},e.prototype.initCells=function(){for(var t=0;t<this.height;t++){for(var e=0;e<this.width;e++)this.cells.push(document.createElement("span")),this.display.appendChild(this.cells[this.cells.length-1]),this.cells[this.cells.length-1].id=t+"-"+e;this.display.appendChild(document.createTextNode("\n"))}},e}(a),d=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),l=function(t){function e(e,n){void 0===e&&(e={}),void 0===n&&(n=new r);var i=this;return e.graphics||(e.graphics={}),e.graphics.width||(e.graphics.width=80),e.graphics.height||(e.graphics.height=25),(i=e.container?t.call(this,new p(e.graphics.width,e.graphics.height,e.container),n)||this:t.call(this,new p(e.graphics.width,e.graphics.height),n)||this).width=e.graphics.width,i.height=e.graphics.height,i.cellData=new c(e.graphics.width,e.graphics.height),i}return d(e,t),e.prototype.getHeight=function(){return this.height},e.prototype.getWidth=function(){return this.width},e.prototype.setCell=function(t,e,n){var i;i="string"==typeof t?this.characterSet.getIndex(t):t>=0&&t<this.characterSet.set.length?t:-1,this.cellData.setCell(i,this.cellData.index(e,n))},e.prototype.update=function(){for(var t=0;t<this.cellData.numberOfCells();t++)this.cellData.hasBeenChanged(t)&&(this.domController.setCellValue(this.characterSet.toString(this.cellData.getCell(t)),t),this.cellData.doneChange(t))},e}(o);n.d(e,"CharacterSet",function(){return r}),n.d(e,"CommandTerminal",function(){return s}),n.d(e,"GraphicsTerminal",function(){return l})}])});
},{}],"index.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var terminaltxt_1 = require("terminaltxt");

if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init, false);
}

var term;

function init() {
  term = new terminaltxt_1.GraphicsTerminal({
    container: document.getElementById('container')
  }, new terminaltxt_1.CharacterSet('Hello World!'));
  update();
}

function update() {
  setTimeout(function () {
    term.update();

    for (var i = 0; i < 10; i++) {
      term.setCell(Math.floor(Math.random() * term.getCharacterSet().size()), Math.floor(Math.random() * term.getWidth()), Math.floor(Math.random() * term.getHeight()));
    }

    update();
  }, 30);
}
},{"terminaltxt":"../node_modules/terminaltxt/dist/terminaltxt.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59424" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/terminaltxt-helloworld/src.77de5100.js.map