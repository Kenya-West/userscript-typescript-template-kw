// ==UserScript==
// @name userscript-typescript-template-kw
// @version 1.1.0
// @namespace http://tampermonkey.net/
// @description Template repo using Webpack and TypeScript to build your userscript for Tampermonkey and more extensions.
// @homepage https://github.com/pboymt/userscript-typescript-template#readme
// @match https://github.com*
// @require https://cdn.jsdelivr.net/npm/axios@0.27.2
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const route_guard_1 = __webpack_require__(2);
const element_existence_guard_1 = __webpack_require__(3);
const routes_1 = __webpack_require__(6);
const element_find_1 = __webpack_require__(7);
const element_collection_1 = __webpack_require__(8);
const app_facade_1 = __webpack_require__(9);
class App {
    constructor() {
        console.log("Скрипт инициализирован!");
    }
    addButtons() {
        console.log("addButtons запущен!");
        (0, app_facade_1.AddButtons)();
    }
}
__decorate([
    (0, route_guard_1.routeGuardIncludes)(routes_1.Routes.root),
    (0, element_existence_guard_1.elementShouldNotExistGuard)("#sd-add-all-public"),
    (0, element_existence_guard_1.elementShouldExistGuard)((_a = element_find_1.GetElementCollection.get(element_collection_1.ElementCollection.Root)) === null || _a === void 0 ? void 0 : _a.selector)
], App.prototype, "addButtons", null);
exports.App = App;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routeGuardIncludes = exports.routeGuardExact = void 0;
const routeGuardExact = (route) => (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const url = new URL(location.href);
        if (url.pathname + url.hash === route || url.href === route) {
            originalMethod.apply(this, args);
        }
        else {
            return;
        }
    };
    return descriptor;
};
exports.routeGuardExact = routeGuardExact;
const routeGuardIncludes = (route) => (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const url = new URL(location.href);
        if (url.toString().includes(route)) {
            originalMethod.apply(this, args);
        }
        else {
            return;
        }
    };
    return descriptor;
};
exports.routeGuardIncludes = routeGuardIncludes;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementShouldExistGuard = exports.elementShouldNotExistGuard = void 0;
const logger_1 = __webpack_require__(4);
const elementShouldNotExistGuard = (selector) => (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (selector) {
            const url = new URL(location.href);
            if (document.querySelector(selector) === null) {
                logger_1.Logger.log("Проверка отсутствия элемента... Элемента нет... ОК");
                originalMethod.apply(this, args);
            }
            else {
                logger_1.Logger.log("Проверка отсутствия элемента... Элемент есть... Плохо");
                return;
            }
        }
        ;
        return;
    };
    return descriptor;
};
exports.elementShouldNotExistGuard = elementShouldNotExistGuard;
const elementShouldExistGuard = (selector) => (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (selector) {
            if (document.querySelector(selector) !== null) {
                logger_1.Logger.log("Проверка наличия элемента... Элемент есть... ОК");
                originalMethod.apply(this, args);
            }
            else {
                logger_1.Logger.log("Проверка наличия элемента... Элемента нет. Плохо");
                return;
            }
        }
        return;
    };
    return descriptor;
};
exports.elementShouldExistGuard = elementShouldExistGuard;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const only_env_guard_1 = __webpack_require__(5);
class Logger {
    static log(message, level = "log") {
        switch (level) {
            case "log":
                console.log(message);
                break;
            case "info":
                console.info(message);
                break;
            case "warn":
                console.warn(message);
                break;
            default:
                console.log(message);
                break;
        }
    }
    static error(message) {
        console.error(message);
    }
}
__decorate([
    (0, only_env_guard_1.EnvGuard)("development")
], Logger, "log", null);
exports.Logger = Logger;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvGuard = void 0;
const EnvGuard = (env) => (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const url = new URL(location.href);
        if (env === undefined.ENV) {
            originalMethod.apply(this, args);
        }
        else {
            return;
        }
    };
    return descriptor;
};
exports.EnvGuard = EnvGuard;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Routes = void 0;
var Routes;
(function (Routes) {
    Routes["root"] = "/";
})(Routes = exports.Routes || (exports.Routes = {}));


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetElementCollection = exports.ElementFind = void 0;
const element_collection_1 = __webpack_require__(8);
class ElementFind {
    constructor(contextElement = document) {
        this.contextElement = contextElement;
    }
    getElementByQuerySingle(query) {
        return this._queryGet(query);
    }
    getElementByQueryMultiple(query) {
        return this._queryGetMultiple(query);
    }
    getElementByElementIdSingle(query) {
        return this._getByElementCollection(GetElementCollection.get(query));
    }
    _queryGetMultiple(query) {
        return Array.from(this.contextElement.querySelectorAll(query));
    }
    _queryGet(query) {
        return this.contextElement.querySelector(query);
    }
    _getByElementCollection(query) {
        var _a, _b, _c;
        if (query.id !== element_collection_1.ElementCollection.Root) {
            const elem = (_c = (_b = (_a = this.contextElement.querySelector(".viewport__content-section .modal-body .panel-group")) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.querySelector(".control-label");
            if (elem) {
                return elem;
            }
        }
        return this.contextElement.querySelector(query.selector);
    }
    _getElementMultiple(query) {
        return Array.from(this.contextElement.querySelectorAll(query.selector));
    }
}
exports.ElementFind = ElementFind;
class GetElementCollection {
    static get(id) {
        return element_collection_1.elementCollectionList.find((element) => element.id === id);
    }
}
exports.GetElementCollection = GetElementCollection;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.elementCollectionList = exports.ElementCollection = void 0;
var ElementCollection;
(function (ElementCollection) {
    ElementCollection[ElementCollection["Root"] = 0] = "Root";
})(ElementCollection = exports.ElementCollection || (exports.ElementCollection = {}));
exports.elementCollectionList = [
    {
        id: ElementCollection.Root,
        selector: "body",
        preferredMode: "selectSingle"
    }
];


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddButtons = void 0;
const console_log_action_1 = __webpack_require__(10);
const button_control_1 = __webpack_require__(11);
const button_model_1 = __webpack_require__(14);
const element_find_1 = __webpack_require__(7);
const render_fabric_1 = __webpack_require__(15);
const element_collection_1 = __webpack_require__(8);
function AddButtons() {
    const addButtonAddAll = new button_control_1.ButtonControl({
        id: "sd-add-all",
        tag: "button",
        classes: ["btn", "btn-default"],
        icon: button_model_1.ButtonIcons.glyphiconPicture,
        text: "Lorem ipsum"
    }, console_log_action_1.ConsoleLogAction.prototype.log, {}).element;
    const element = new element_find_1.ElementFind().getElementByElementIdSingle(element_collection_1.ElementCollection.Root);
    new render_fabric_1.RenderAt().render(addButtonAddAll, element);
}
exports.AddButtons = AddButtons;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsoleLogAction = void 0;
class ConsoleLogAction {
    log() {
        console.log("ConsoleLogAction!");
    }
}
exports.ConsoleLogAction = ConsoleLogAction;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ButtonControl = void 0;
const button_base_control_1 = __webpack_require__(12);
class ButtonControl extends button_base_control_1.ButtonBaseControl {
    constructor(params, callback, args) {
        super(params, callback, args);
    }
}
exports.ButtonControl = ButtonControl;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ButtonBaseControl = void 0;
const control_base_control_1 = __webpack_require__(13);
class ButtonBaseControl extends control_base_control_1.ControlBase {
    constructor(params, callback, args) {
        super(params);
        this.addEventListener(this.element, callback, args);
    }
    addEventListener(button, callback, args) {
        button.addEventListener("click", callback.bind(this, args), false);
    }
    ;
}
exports.ButtonBaseControl = ButtonBaseControl;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlBase = void 0;
class ControlBase {
    constructor(params) {
        var _a;
        this.element = this.createElement((_a = params.tag) !== null && _a !== void 0 ? _a : "button");
        if (params.classes)
            this.setClasses(params.classes);
        if (params.text && !params.html)
            this.setInnerText(params.text);
        if (params.html && !params.text)
            this.setInnerHtml(params.html);
        if (params.attributes)
            this.setAttributes(params.attributes);
        if (params.styles)
            this.setStyles(params.styles);
        if (params.id)
            this.setId(params.id);
    }
    createElement(element) {
        return document.createElement(element);
    }
    ;
    setInnerText(text = "Ошибка: текст не был назначен") {
        this.element.innerText = text;
    }
    ;
    setInnerHtml(html = "Ошибка: HTML-разметка не была назначена") {
        this.element.innerHTML = html;
    }
    ;
    setId(id) {
        if (id) {
            this.element.id = id;
        }
    }
    ;
    setClasses(classes) {
        classes.forEach(element => {
            this.element.classList.add(element);
        });
    }
    ;
    setAttributes(attributes) {
        Object.entries(attributes).forEach(([key, value]) => { this.element.setAttribute(key, value); });
    }
    ;
    setStyles(styles) {
        styles === null || styles === void 0 ? void 0 : styles.forEach((style) => {
            if (style.selector) {
                this.element.querySelector(style.selector).style.setProperty(style.key, style.value);
            }
            else {
                this.element.style.setProperty(style.key, style.value);
            }
        });
    }
}
exports.ControlBase = ControlBase;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ButtonIcons = void 0;
var ButtonIcons;
(function (ButtonIcons) {
    ButtonIcons["none"] = "none";
    ButtonIcons["glyphiconPicture"] = "glyphicon-picture";
})(ButtonIcons = exports.ButtonIcons || (exports.ButtonIcons = {}));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderAt = void 0;
const logger_1 = __webpack_require__(4);
const render_model_1 = __webpack_require__(16);
class RenderAt {
    render(element, place, renderBefore) {
        if (place && element) {
            if (renderBefore) {
                place.insertBefore(element, renderBefore);
            }
            else {
                place.appendChild(element);
            }
            logger_1.Logger.log(`Зарендерил "${(element === null || element === void 0 ? void 0 : element.innerText) || `элемент с тегом "${element === null || element === void 0 ? void 0 : element.tagName}"`}"!`);
            return element;
        }
        else {
            logger_1.Logger.log("Хуёво, нихуя не зарендерил");
            return render_model_1.RenderResult.NOELEMENT;
        }
    }
    remove(elem) {
        var _a;
        if (elem) {
            (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(elem);
            return render_model_1.DeleteResult.SUCCESS;
        }
        else {
            return render_model_1.DeleteResult.NOELEMENT;
        }
    }
}
exports.RenderAt = RenderAt;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteResult = exports.RenderResult = void 0;
var RenderResult;
(function (RenderResult) {
    RenderResult[RenderResult["SUCCESS"] = 0] = "SUCCESS";
    RenderResult[RenderResult["FAIL"] = 1] = "FAIL";
    RenderResult[RenderResult["NOELEMENT"] = 2] = "NOELEMENT";
})(RenderResult = exports.RenderResult || (exports.RenderResult = {}));
var DeleteResult;
(function (DeleteResult) {
    DeleteResult[DeleteResult["SUCCESS"] = 0] = "SUCCESS";
    DeleteResult[DeleteResult["FAIL"] = 1] = "FAIL";
    DeleteResult[DeleteResult["NOELEMENT"] = 2] = "NOELEMENT";
})(DeleteResult = exports.DeleteResult || (exports.DeleteResult = {}));


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stopScheduling = exports.startScheduling = void 0;
let interval = null;
const startScheduling = (app) => {
    interval = setInterval(function () {
        app.addButtons();
    }, 5000);
};
exports.startScheduling = startScheduling;
const stopScheduling = () => {
    clearInterval(interval);
};
exports.stopScheduling = stopScheduling;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(1);
const scheduler_1 = __webpack_require__(17);
const app = new app_1.App();
(0, scheduler_1.startScheduling)(app);

})();

/******/ })()
;