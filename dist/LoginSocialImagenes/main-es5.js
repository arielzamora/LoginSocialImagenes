(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/admin/list-books/list-books.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/admin/list-books/list-books.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>list-books works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/details-book/details-book.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/details-book/details-book.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>details-book works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/hero/hero.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/hero/hero.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Hello, world!</h1>\n      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and\n        three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n      <p>\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a>\n      </p>\n    </div>\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"books\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n          <div class=\"card_book\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <p>\n                  <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n                </p>\n                <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n                <p class=\"card-text\">\n                  {{book.descripcion}}\n                </p>\n                <div class=\"container-precio-idioma\">\n                  <p class=\"badge badge-info\">\n                    {{book.precio}}€\n                  </p>\n                  <p class=\"badge badge-info\">\n                    {{book.idioma}}\n                  </p>\n                </div>\n                <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/modal/modal.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/modal/modal.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>modal works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/\">{{app_name}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/offers\">Offers\n          </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\n          <a class=\"nav-link\" routerLink=\"/users/register\">Register\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" routerLink=\"/users/profile\">Profile</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" routerLink=\"/admin/list-books\">List Books</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\n          <a class=\"nav-link\" routerLink=\"/users/login\">Login\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">Logout\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/offers/offers.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/offers/offers.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"books\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n          <div class=\"card_book\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <p>\n                  <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n                </p>\n                <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n                <p class=\"card-text\">\n                  {{book.descripcion}}\n                </p>\n                <div class=\"container-precio-idioma\">\n                  <p class=\"badge badge-info\">\n                    {{book.precio}}€\n                  </p>\n                  <p class=\"badge badge-info\">\n                    {{book.idioma}}\n                  </p>\n                </div>\n                <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/page404/page404.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/page404/page404.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>page404 works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/login/login.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/login/login.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n          <div class=\"card_login\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <form #formLogin=\"ngForm\" (ngSubmit)=\"onLogin(formLogin)\">\n                  <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Login</h1>\n                  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                    Something is wrong!\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"user.email\" required>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\n                      required>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n                  <div class=\"form-group\">\n                    <a routerLink=\"/user/register\" class=\"form-control login-user\">Are you new ?</a>\n                  </div>\n                  <div class=\"form-group\">\n                    <a href=\"#\" class=\"btn btn-block btn-social btn-google\">\n                      <span class=\"fa fa-google\" ></span>\n                      Google\n                    </a>\n                    <a href=\"#\" class=\"btn btn-block btn-social btn-facebook\">\n                      <span class=\"fa fa-facebook\"></span>\n                      Facebook\n                    </a>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/profile/profile.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/profile/profile.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"profile\" class=\"container\">\n    <div class=\"row mt-5\">\n      <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\n        </div>\n        <div class=\"row user-details\">\n          <div class=\"col-12\">\n            <img src=\"../../../../assets/check-user.png\" class=\"rounded-circle img-thumbnail\" alt=\"profile\">\n            <h5>{{user.name}}</h5>\n            <p>\n              {{user.email}}\n            </p>\n  \n            <hr>\n            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores suscipit itaque minima quae.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/register/register.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/register/register.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n  \n        <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n          <div class=\"card_register\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <form #formRegister=\"ngForm\" (ngSubmit)=\"onRegister(formRegister)\">\n                  <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n                  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                    {{msgError}}\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"text\" #name=\"ngModel\" name=\"name\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"user.name\" required minlength=\"4\"\n                      maxlength=\"15\">\n                  </div>\n  \n                  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"name.touched && !name.valid\">\n                    <div *ngIf=\"name.errors.required\">Name is required</div>\n                    <div *ngIf=\"name.errors.minlength\">Name must be at least 4 characters</div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"email\" #email=\"ngModel\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"user.email\" required\n                      minlength=\"8\">\n                  </div>\n                  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                    <div *ngIf=\"email.errors.minlength\">Email must be at least 8 characters</div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" #password=\"ngModel\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\n                      required minlength=\"5\" maxlength=\"10\">\n                  </div>\n                  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">Password must be at least 5 characters</div>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\n                  <div class=\"form-group\">\n                    <a routerLink=\"/user/login\" class=\"form-control login-user\">Do you have account?</a>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
            /* harmony import */ var _componentes_offers_offers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/offers/offers.component */ "./src/app/componentes/offers/offers.component.ts");
            /* harmony import */ var _componentes_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/details-book/details-book.component */ "./src/app/componentes/details-book/details-book.component.ts");
            /* harmony import */ var _componentes_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/admin/list-books/list-books.component */ "./src/app/componentes/admin/list-books/list-books.component.ts");
            /* harmony import */ var _componentes_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/users/login/login.component */ "./src/app/componentes/users/login/login.component.ts");
            /* harmony import */ var _componentes_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/users/register/register.component */ "./src/app/componentes/users/register/register.component.ts");
            /* harmony import */ var _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/users/profile/profile.component */ "./src/app/componentes/users/profile/profile.component.ts");
            /* harmony import */ var _componentes_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/page404/page404.component */ "./src/app/componentes/page404/page404.component.ts");
            var routes = [
                { path: '', component: _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'offers', component: _componentes_offers_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"] },
                { path: 'book:/id', component: _componentes_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBookComponent"] },
                { path: 'admin/list-books', component: _componentes_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__["ListBooksComponent"] },
                { path: 'users/login', component: _componentes_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                { path: 'users/register', component: _componentes_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
                { path: 'users/profile', component: _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
                { path: '**', component: _componentes_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'LoginSocialImagenes';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _componentes_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/admin/list-books/list-books.component */ "./src/app/componentes/admin/list-books/list-books.component.ts");
            /* harmony import */ var _componentes_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/details-book/details-book.component */ "./src/app/componentes/details-book/details-book.component.ts");
            /* harmony import */ var _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/hero/hero.component */ "./src/app/componentes/hero/hero.component.ts");
            /* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
            /* harmony import */ var _componentes_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/modal/modal.component */ "./src/app/componentes/modal/modal.component.ts");
            /* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ "./src/app/componentes/navbar/navbar.component.ts");
            /* harmony import */ var _componentes_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/offers/offers.component */ "./src/app/componentes/offers/offers.component.ts");
            /* harmony import */ var _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/users/profile/profile.component */ "./src/app/componentes/users/profile/profile.component.ts");
            /* harmony import */ var _componentes_users_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/users/login/login.component */ "./src/app/componentes/users/login/login.component.ts");
            /* harmony import */ var _componentes_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/users/register/register.component */ "./src/app/componentes/users/register/register.component.ts");
            /* harmony import */ var _componentes_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/page404/page404.component */ "./src/app/componentes/page404/page404.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _componentes_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__["ListBooksComponent"],
                        _componentes_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailsBookComponent"],
                        _componentes_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                        _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                        _componentes_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                        _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                        _componentes_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__["OffersComponent"],
                        _componentes_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                        _componentes_users_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                        _componentes_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                        _componentes_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__["Page404Component"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/componentes/admin/list-books/list-books.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/componentes/admin/list-books/list-books.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkbWluL2xpc3QtYm9va3MvbGlzdC1ib29rcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/componentes/admin/list-books/list-books.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/componentes/admin/list-books/list-books.component.ts ***!
          \**********************************************************************/
        /*! exports provided: ListBooksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBooksComponent", function () { return ListBooksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ListBooksComponent = /** @class */ (function () {
                function ListBooksComponent() {
                }
                ListBooksComponent.prototype.ngOnInit = function () {
                };
                return ListBooksComponent;
            }());
            ListBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-list-books',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/admin/list-books/list-books.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-books.component.css */ "./src/app/componentes/admin/list-books/list-books.component.css")).default]
                })
            ], ListBooksComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/details-book/details-book.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/componentes/details-book/details-book.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RldGFpbHMtYm9vay9kZXRhaWxzLWJvb2suY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/componentes/details-book/details-book.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/componentes/details-book/details-book.component.ts ***!
          \********************************************************************/
        /*! exports provided: DetailsBookComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBookComponent", function () { return DetailsBookComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DetailsBookComponent = /** @class */ (function () {
                function DetailsBookComponent() {
                }
                DetailsBookComponent.prototype.ngOnInit = function () {
                };
                return DetailsBookComponent;
            }());
            DetailsBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-details-book',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/details-book/details-book.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-book.component.css */ "./src/app/componentes/details-book/details-book.component.css")).default]
                })
            ], DetailsBookComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/hero/hero.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/componentes/hero/hero.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/componentes/hero/hero.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/componentes/hero/hero.component.ts ***!
          \****************************************************/
        /*! exports provided: HeroComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function () { return HeroComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeroComponent = /** @class */ (function () {
                function HeroComponent() {
                }
                HeroComponent.prototype.ngOnInit = function () {
                };
                return HeroComponent;
            }());
            HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hero',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/hero/hero.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hero.component.css */ "./src/app/componentes/hero/hero.component.css")).default]
                })
            ], HeroComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/home/home.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/componentes/home/home.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#books {\n    border-radius: 0.25rem;\n    background: #f9f9f9 !important;\n  }\n  section {\n    padding: 20px 0;\n  }\n  #books .card {\n    border: none;\n    background: #fff;\n  }\n  .card_book {\n    position: relative;\n  /*   -webkit-transform: rotateY(0deg); */\n    z-index: 2;\n    margin-bottom: 30px;\n  }\n  .card_book .card {\n    min-height: 312px;\n  }\n  p.card-text,\n  h4.card-title {\n    min-height: 96px !important;\n  }\n  .card-title {\n    color: #007bff;\n    cursor: pointer;\n  }\n  .card_book .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  div.container-precio-idioma{\n    display: flex;\n    justify-content: space-between;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEIsd0NBQXdDO0lBQ3RDLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUVBOztJQUVFLDJCQUEyQjtFQUM3QjtFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9va3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOSAhaW1wb3J0YW50O1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuICAjYm9va3MgLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIC5jYXJkX2Jvb2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgKi9cbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIC5jYXJkX2Jvb2sgLmNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDMxMnB4O1xuICB9XG4gIFxuICBwLmNhcmQtdGV4dCxcbiAgaDQuY2FyZC10aXRsZSB7XG4gICAgbWluLWhlaWdodDogOTZweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY2FyZF9ib29rIC5jYXJkIC5jYXJkLWJvZHkgaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIGRpdi5jb250YWluZXItcHJlY2lvLWlkaW9tYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/componentes/home/home.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/componentes/home/home.component.ts ***!
          \****************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/componentes/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/modal/modal.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/componentes/modal/modal.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/componentes/modal/modal.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/componentes/modal/modal.component.ts ***!
          \******************************************************/
        /*! exports provided: ModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function () { return ModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModalComponent = /** @class */ (function () {
                function ModalComponent() {
                }
                ModalComponent.prototype.ngOnInit = function () {
                };
                return ModalComponent;
            }());
            ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/modal/modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/componentes/modal/modal.component.css")).default]
                })
            ], ModalComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/navbar/navbar.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/componentes/navbar/navbar.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/componentes/navbar/navbar.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/componentes/navbar/navbar.component.ts ***!
          \********************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                    this.app_name = "LoginSocialImagenes";
                    this.isLogged = false;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/componentes/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/offers/offers.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/componentes/offers/offers.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#books {\n    border-radius: 0.25rem;\n    background: #f9f9f9 !important;\n  }\n  section {\n    padding: 20px 0;\n  }\n  #books .card {\n    border: none;\n    background: #fff;\n  }\n  .card_book {\n    position: relative;\n    -webkit-transform: rotateY(0deg);\n    z-index: 2;\n    margin-bottom: 30px;\n  }\n  .card_book .card {\n    min-height: 312px;\n  }\n  p.card-text,\n  h4.card-title {\n    min-height: 96px !important;\n  }\n  .card-title {\n    color: #007bff;\n    cursor: pointer;\n  }\n  .card_book .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  div.container-precio-idioma{\n    display: flex;\n    justify-content: space-between;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTs7SUFFRSwyQkFBMkI7RUFDN0I7RUFHQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL29mZmVycy9vZmZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib29rcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG4gICNib29rcyAuY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLmNhcmRfYm9vayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmNhcmRfYm9vayAuY2FyZCB7XG4gICAgbWluLWhlaWdodDogMzEycHg7XG4gIH1cbiAgXG4gIHAuY2FyZC10ZXh0LFxuICBoNC5jYXJkLXRpdGxlIHtcbiAgICBtaW4taGVpZ2h0OiA5NnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIFxuICAuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY2FyZF9ib29rIC5jYXJkIC5jYXJkLWJvZHkgaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIGRpdi5jb250YWluZXItcHJlY2lvLWlkaW9tYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/componentes/offers/offers.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/componentes/offers/offers.component.ts ***!
          \********************************************************/
        /*! exports provided: OffersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function () { return OffersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OffersComponent = /** @class */ (function () {
                function OffersComponent() {
                }
                OffersComponent.prototype.ngOnInit = function () {
                };
                return OffersComponent;
            }());
            OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-offers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/offers/offers.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers.component.css */ "./src/app/componentes/offers/offers.component.css")).default]
                })
            ], OffersComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/page404/page404.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/componentes/page404/page404.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/componentes/page404/page404.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/componentes/page404/page404.component.ts ***!
          \**********************************************************/
        /*! exports provided: Page404Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function () { return Page404Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Page404Component = /** @class */ (function () {
                function Page404Component() {
                }
                Page404Component.prototype.ngOnInit = function () {
                };
                return Page404Component;
            }());
            Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page404',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/page404/page404.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page404.component.css */ "./src/app/componentes/page404/page404.component.css")).default]
                })
            ], Page404Component);
            /***/ 
        }),
        /***/ "./src/app/componentes/users/login/login.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/componentes/users/login/login.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (" .form-control.login-user {\n    border: 0 solid #fff !important;\n  }\n\n  .btn-social{\n   position: relative;\n   text-align:center;\n   white-space:nowrap;\n   overflow:hidden;\n   text-overflow:ellipsis; \n   color:#fff;\n   border-color: rgba(0,0,0,0.2);\n  }\n\n  .btn-facebook{\n     background: #3b5998;\n  }\n\n  .btn-google{\n    background: #dd4b39;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLCtCQUErQjtFQUNqQzs7RUFFQTtHQUNDLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixzQkFBc0I7R0FDdEIsVUFBVTtHQUNWLDZCQUE2QjtFQUM5Qjs7RUFDQTtLQUNHLG1CQUFtQjtFQUN0Qjs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcbiAgICBib3JkZXI6IDAgc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bi1zb2NpYWx7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgIG92ZXJmbG93OmhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IFxuICAgY29sb3I6I2ZmZjtcbiAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gIC5idG4tZmFjZWJvb2t7XG4gICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XG4gIH1cbiAgLmJ0bi1nb29nbGV7XG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/componentes/users/login/login.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/componentes/users/login/login.component.ts ***!
          \************************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent() {
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                return LoginComponent;
            }());
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/users/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/users/profile/profile.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/componentes/users/profile/profile.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main-section {\n    border: 1px solid #007bff;\n    background: #fff;\n  }\n  .profile-header {\n    background: #007bff;\n    height: 150px;\n  }\n  .user-detail {\n    margin: -50px 0 30px 0;\n  }\n  img {\n    height: 100px;\n    width: 100px;\n  }\n  .user-details h5 {\n    margin: 15px 0 5px 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VjdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIC5wcm9maWxlLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIC51c2VyLWRldGFpbCB7XG4gICAgbWFyZ2luOiAtNTBweCAwIDMwcHggMDtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAudXNlci1kZXRhaWxzIGg1IHtcbiAgICBtYXJnaW46IDE1cHggMCA1cHggMDtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/componentes/users/profile/profile.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/componentes/users/profile/profile.component.ts ***!
          \****************************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent() {
                }
                ProfileComponent.prototype.ngOnInit = function () {
                };
                return ProfileComponent;
            }());
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/componentes/users/profile/profile.component.css")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/componentes/users/register/register.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/componentes/users/register/register.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\n    border: 0px solid #fff !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXNlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztFQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/componentes/users/register/register.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/componentes/users/register/register.component.ts ***!
          \******************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent() {
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                return RegisterComponent;
            }());
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/users/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/componentes/users/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebaseConfig: {
                    apiKey: "AIzaSyBgt38NtlWdj9m269S1W1b6prR9kepM1tU",
                    authDomain: "bookstore-b21be.firebaseapp.com",
                    databaseURL: "https://bookstore-b21be.firebaseio.com",
                    projectId: "bookstore-b21be",
                    storageBucket: "bookstore-b21be.appspot.com",
                    messagingSenderId: "943558539340",
                    appId: "1:943558539340:web:714f7a0fc65cfbc4e85ce9"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/ariel/Laboratorio 4/LoginSocialImagenes/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map