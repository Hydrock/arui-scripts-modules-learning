"use strict";
// ignore attempts to require any types of assets
(() => {
    // simply ignore css files, it wont cause any damage
    const ignoreExtensions = ['.css'];
    // warn about other requires, because it may lead to unexpected behaviour in production
    const warnExtensions = [
        '.gif',
        '.jpeg',
        '.jpg',
        '.ico',
        '.png',
        '.xml',
        '.svg',
        '.mp4',
        '.webm',
        '.ogv',
        '.aac',
        '.mp3',
        '.wav',
        '.ogg',
    ];
    const noop = () => { };
    const warn = (_, path) => console.warn(`\u001B[0;31mWARNING!
    Trying to require ${path} in node.js.
    Non-js files is ignored when required in node_modules\u001B[0m`);
    ignoreExtensions.forEach((e) => {
        require.extensions[e] = noop;
    });
    warnExtensions.forEach((e) => {
        require.extensions[e] = warn;
    });
})();

(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"@hapi/hapi": (function (module) {
module.exports = require("@hapi/hapi");

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.1.5";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.5";

})();
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _hapi_hapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/hapi */ "@hapi/hapi");
/* ESM import */var _hapi_hapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_hapi__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

var init = /*#__PURE__*/ _async_to_generator(function() {
    var server;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                server = _hapi_hapi__WEBPACK_IMPORTED_MODULE_0___default().server({
                    port: 3000,
                    host: '0.0.0.0'
                });
                server.route({
                    method: 'GET',
                    path: '/',
                    handler: function(request, h) {
                        return '\n        <!DOCTYPE html>\n        <html lang="ru">\n          <head>\n            <meta charset="UTF-8">\n            <title>Hapi Сервер</title>\n            <script src="assets/main.js"></script>\n          </head>\n          <body>\n            <div id="root"></div>\n            <h1>Добро пожаловать на простой Hapi сервер!</h1>\n          </body>\n        </html>\n      ';
                    }
                });
                return [
                    4,
                    server.start()
                ];
            case 1:
                _state.sent();
                console.log('Сервер запущен на %s', server.info.uri);
                return [
                    2
                ];
        }
    });
});
process.on('unhandledRejection', function(err) {
    console.error(err);
    process.exit(1);
});
init();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJzZXJ2ZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY190b19nZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX3RzX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIGYsIHksIHQsIGcsIF8gPSB7XG4gICAgICAgIGxhYmVsOiAwLFxuICAgICAgICBzZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTtcbiAgICAgICAgICAgIHJldHVybiB0WzFdO1xuICAgICAgICB9LFxuICAgICAgICB0cnlzOiBbXSxcbiAgICAgICAgb3BzOiBbXVxuICAgIH07XG4gICAgcmV0dXJuIGcgPSB7XG4gICAgICAgIG5leHQ6IHZlcmIoMCksXG4gICAgICAgIFwidGhyb3dcIjogdmVyYigxKSxcbiAgICAgICAgXCJyZXR1cm5cIjogdmVyYigyKVxuICAgIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAoW1xuICAgICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICAgdlxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZShfKXRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW1xuICAgICAgICAgICAgICAgIG9wWzBdICYgMixcbiAgICAgICAgICAgICAgICB0LnZhbHVlXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgc3dpdGNoKG9wWzBdKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0ID0gb3A7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIF8ubGFiZWwrKztcbiAgICAgICAgICAgICAgICAgICAgeSA9IG9wWzFdO1xuICAgICAgICAgICAgICAgICAgICBvcCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBvcCA9IF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgb3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSBvcFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IHRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IHRbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wcy5wdXNoKG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvcCA9IFtcbiAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgZiA9IHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxufVxuaW1wb3J0IEhhcGkgZnJvbSAnQGhhcGkvaGFwaSc7XG52YXIgaW5pdCA9IC8qI19fUFVSRV9fKi8gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VydmVyO1xuICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBzZXJ2ZXIgPSBIYXBpLnNlcnZlcih7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6ICcwLjAuMC4wJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlcnZlci5yb3V0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24ocmVxdWVzdCwgaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdcXG4gICAgICAgIDwhRE9DVFlQRSBodG1sPlxcbiAgICAgICAgPGh0bWwgbGFuZz1cInJ1XCI+XFxuICAgICAgICAgIDxoZWFkPlxcbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxcbiAgICAgICAgICAgIDx0aXRsZT5IYXBpINCh0LXRgNCy0LXRgDwvdGl0bGU+XFxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvbWFpbi5qc1wiPjwvc2NyaXB0PlxcbiAgICAgICAgICA8L2hlYWQ+XFxuICAgICAgICAgIDxib2R5PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+XFxuICAgICAgICAgICAgPGgxPtCU0L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0Ywg0L3QsCDQv9GA0L7RgdGC0L7QuSBIYXBpINGB0LXRgNCy0LXRgCE8L2gxPlxcbiAgICAgICAgICA8L2JvZHk+XFxuICAgICAgICA8L2h0bWw+XFxuICAgICAgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5zdGFydCgpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQodC10YDQstC10YAg0LfQsNC/0YPRidC10L0g0L3QsCAlcycsIHNlcnZlci5pbmZvLnVyaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZnVuY3Rpb24oZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=