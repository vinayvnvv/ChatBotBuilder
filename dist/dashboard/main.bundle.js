webpackJsonp([1,5],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_scope__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Utility; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Loader = (function () {
    function Loader(rootScope) {
        this.rootScope = rootScope;
    }
    Loader.prototype.showRoot = function (title) {
        console.log("title", title);
        this.rootScope.rootLoader.show = true;
        if (title) {
            this.rootScope.rootLoader.title = title;
        }
        else {
            this.rootScope.rootLoader.title = "";
        }
    };
    Loader.prototype.hideRoot = function () {
        this.rootScope.rootLoader.show = false;
        this.rootScope.rootLoader.title = "";
    };
    return Loader;
}());
Loader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__root_scope__["a" /* RootScope */]) === "function" && _a || Object])
], Loader);

var Toast = (function () {
    function Toast(rootScope) {
        this.rootScope = rootScope;
    }
    Toast.prototype.show = function (text, duration, type) {
        var _this = this;
        console.log("Toast:", text);
        if (!text)
            return;
        this.rootScope.toast.text = text;
        this.rootScope.toast.show = true;
        if (duration)
            this.rootScope.toast.duration = duration;
        if (type)
            this.rootScope.toast.type = type;
        setTimeout(function () {
            _this.rootScope.toast.text = "";
            _this.rootScope.toast.show = false;
            _this.rootScope.toast.type = "";
            _this.rootScope.toast.duration = 1500;
        }, duration);
    };
    return Toast;
}());
Toast = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__root_scope__["a" /* RootScope */]) === "function" && _b || Object])
], Toast);

var Utility = (function () {
    function Utility() {
    }
    Utility.prototype.addModuleAt = function (index, data, item, type) {
        var mode;
        if (data == undefined)
            data = [];
        if (type == 'insert')
            mode = 0;
        else
            mode = 1;
        console.log(data, index, item);
        data.splice(index, mode, item);
        return data;
    };
    Utility.prototype.removeModuleAt = function (array, at) {
        array.splice(at, 1);
        return array;
    };
    Utility.prototype.getBotId = function (rootScope) {
        var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64;
                }
                else if (isNaN(i)) {
                    a = 64;
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
            } return t; }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r);
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i);
                }
            } t = Base64._utf8_decode(t); return t; }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                }
                else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128);
                }
                else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128);
                }
            } return t; }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = 0; var c1 = 0; var c2 = 0; while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++;
                }
                else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2;
                }
                else {
                    c2 = e.charCodeAt(n + 1);
                    var c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3;
                }
            } return t; } };
        return Base64.encode(rootScope._auth_user.id);
    };
    return Utility;
}());

var _a, _b;
//# sourceMappingURL=common.services.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringsService; });

var StringsService = (function () {
    function StringsService() {
        this.port = 3000;
        this.port = 3000;
        this.origin = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].origin;
        console.log("Api Origin==", this.origin);
        this.authInstance = {
            storageName: "chat_bot_manager",
            storageIdKey: "chat_bot_manager_id_",
            storageNameKey: "chat_bot_manager_name_",
            storageEmailKey: "chat_bot_manager_email_",
            storageAvtarKey: "chat_bot_manager_avtar_"
        };
        this.apis = {
            getModules: this.origin + "api/manager/modules/",
            getFlowItem: this.origin + "api/manager/modules/",
            updateModules: this.origin + "api/manager/modules/update/",
            deleteModules: this.origin + "api/manager/modules/delete/",
            createModules: this.origin + "api/manager/modules/create/",
            updateInitBot: this.origin + "api/manager/modules/init/",
            getInitBot: this.origin + "api/manager/modules/init_bot/",
            initBotDB: this.origin + "api/manager/modules/init_db/"
        };
        this.validationTypeArray = [
            { title: "None", value: "none" },
            { title: "Number", value: "number" },
            { title: "Email", value: "email" }
        ];
        this.suggestionTypeArray = [
            { title: "None", value: "none" },
            { title: "List", value: "list" },
            { title: "Option", value: "option" }
        ];
        this.menuTypes = [
            { title: "List", value: "list" },
            { title: "Option", value: "option" }
        ];
    }
    return StringsService;
}());

//# sourceMappingURL=strings.service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_strings_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_root_scope__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = (function () {
    function ApiService(_http, String, rootScope) {
        this._http = _http;
        this.String = String;
        this.rootScope = rootScope;
        console.log(this.String.apis.initBotDB);
    }
    ApiService.prototype.initBotDB = function () {
        return this._http.post(this.String.apis.initBotDB + this.rootScope._auth_user.id, {})
            .map(this.extractData);
    };
    ApiService.prototype.getModules = function () {
        return this._http.get(this.String.apis.getModules + this.rootScope._auth_user.id)
            .map(this.extractData);
    };
    ApiService.prototype.getFlowItem = function (flow_id) {
        return this._http.get(this.String.apis.getFlowItem + this.rootScope._auth_user.id + "/" + flow_id)
            .map(this.extractData);
    };
    ApiService.prototype.createModule = function (type, data) {
        data.type = type;
        return this._http.post(this.String.apis.createModules + this.rootScope._auth_user.id, data)
            .map(this.extractData);
    };
    ApiService.prototype.updateModule = function (id, data) {
        return this._http.post(this.String.apis.updateModules + this.rootScope._auth_user.id + "/" + id, data)
            .map(this.extractData);
    };
    ApiService.prototype.deleteModule = function (id) {
        return this._http.delete(this.String.apis.deleteModules + this.rootScope._auth_user.id + "/" + id)
            .map(this.extractData);
    };
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_strings_service__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_strings_service__["a" /* StringsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_root_scope__["a" /* RootScope */]) === "function" && _c || Object])
], ApiService);

var _a, _b, _c;
//# sourceMappingURL=api.services.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 246;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(35);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_root_scope__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(rootScope) {
        this.rootScope = rootScope;
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(347),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_chips__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_loader_directive__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_toast_directive__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_sub_loader_directive__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_strings_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_root_scope__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes_app_routes__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_add_flow_add_flow_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_header_header_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_list_list_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_add_flow_item_add_flow_item_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_add_flow_item_childs_services_view_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_add_menu_add_menu_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_view_menu_view_menu_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_auto_tag__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__get_bot_get_bot_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_modules_loader_modules_loader_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_home_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














//global services



//routes










//directives




var AppModule = (function () {
    function AppModule(Auth) {
        this.Auth = Auth;
        console.log("init");
        Auth.initAuth();
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__routes_app_routes__["a" /* routingComponents */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__directives_loader_directive__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__directives_sub_loader_directive__["a" /* SubLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_toast_directive__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dashboard_add_flow_add_flow_component__["a" /* AddFlowComponent */],
            __WEBPACK_IMPORTED_MODULE_20__dashboard_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__dashboard_add_flow_item_add_flow_item_component__["a" /* AddFlowItemComponent */],
            __WEBPACK_IMPORTED_MODULE_23__dashboard_add_flow_item_childs_services_view_component__["a" /* ServicesViewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__dashboard_add_menu_add_menu_component__["a" /* AddMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dashboard_view_menu_view_menu_component__["a" /* ViewMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_26__directives_auto_tag__["a" /* AutoTag */],
            __WEBPACK_IMPORTED_MODULE_27__get_bot_get_bot_component__["a" /* GetBotComponent */],
            __WEBPACK_IMPORTED_MODULE_28__directives_modules_loader_modules_loader_component__["a" /* ModulesLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_29__home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__routes_app_routes__["b" /* RouteModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__["ColorPickerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_strings_service__["a" /* StringsService */], __WEBPACK_IMPORTED_MODULE_15__services_root_scope__["a" /* RootScope */], __WEBPACK_IMPORTED_MODULE_18__services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_root_scope__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(rootScope, authService, router) {
        this.rootScope = rootScope;
        this.authService = authService;
        this.router = router;
        this.isMenu = false;
        this.isGetBotModal = false;
        this.atTop = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.listenOnBodyScroll();
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    HeaderComponent.prototype.listenOnBodyScroll = function () {
        var _this = this;
        window.addEventListener("scroll", function (e) {
            var el = e.target['scrollingElement'];
            if (el.scrollTop == 0)
                _this.atTop = true;
            else
                _this.atTop = false;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-header',
        template: __webpack_require__(353),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoTag; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoTag = (function () {
    function AutoTag(el) {
        //    window["appendText"] = function(e, value, index) {
        //         var a = e.path[3].children["0"].value;
        //         a = a.slice(0, index-1) +  a.slice(index);
        //         var output = [a.slice(0, index), value, a.slice(index)].join('');
        //         //  output = output.slice(0, index) + output.slice(index + 1);
        //         e.path[3].children["0"].value = output;
        this.el = el;
        //    }
        //    el.nativeElement.onkeyup = function(e: any) {
        //        console.log(this.selectionStart)
        //        if(e.keyCode == 50) {
        //            console.log("triggerd @s");
        //            let a = ["vinay", "bv"];
        //            let t = `<div auto-list>
        //                        <div onclick="appendText(event, 'vinay' , '`+ this.selectionStart + `')">Vinay</div>
        //                        <div>yadav</div>
        //                     </div> `;
        //         var node = document.createElement("div");        
        //         node.setAttribute("auto-tag-content", "")         // Create a <li> node
        //         node.setAttribute("onclick", "this.remove()");
        //         node.innerHTML = t; 
        //           el.nativeElement.parentElement.appendChild(node)  ;        
        //        } else {
        //            if(e.keyCode == 16) return;
        //            var els = document.querySelectorAll("[auto-tag-content]");
        //            for ( var i=0;i<els.length; i++) {
        //                els[i].remove();
        //            }
        //        }
        //    }
    }
    AutoTag.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.tagValue);
        this.tagValue = [
            { "name": "Ask for name", "value": "{{$flow[0]}}" },
            { "name": "Ask for Phone", "value": "{{$flow[1]}}" }
        ];
        window["appendText"] = function (e, value, index) {
            var a = e.path[3].children["0"].value;
            a = a.slice(0, index - 1) + a.slice(index);
            var output = [a.slice(0, index), value, a.slice(index)].join('');
            //  output = output.slice(0, index) + output.slice(index + 1);
            e.path[3].children["0"].value = output;
        };
        this.el.nativeElement.onkeyup = function (e) {
            console.log(e.target.selectionStart);
            if (e.keyCode == 50) {
                var loop_list = "";
                for (var i_1 = 0; i_1 < _this.tagValue.length; i_1++) {
                    loop_list += "<div class=\"auto-list-item\" onclick=\"appendText(event, '" + _this.tagValue[i_1].value + "' , '" + e.target.selectionStart + "')\">" + _this.tagValue[i_1].name + "</div>";
                }
                if (_this.tagValue.length == 0) {
                    loop_list = "<div class='no-res'>No Variables Injection, Since it is a first flow</div>";
                }
                console.log("triggerd @s", loop_list);
                var a = ["vinay", "bv"];
                var t = "<div auto-list class=\"auto-list anim-2 sliceInUp\">\n                        <div class=\"title\">Variables Injection</div>\n                           " + loop_list + "\n                        </div> ";
                var node = document.createElement("div");
                node.setAttribute("auto-tag-content", ""); // Create a <li> node
                node.setAttribute("onclick", "this.remove()");
                node.innerHTML = t;
                _this.el.nativeElement.parentElement.appendChild(node);
            }
            else {
                if (e.keyCode == 16)
                    return;
                var els = document.querySelectorAll("[auto-tag-content]");
                for (var i = 0; i < els.length; i++) {
                    els[i].remove();
                }
            }
        };
    };
    return AutoTag;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("autoTagValue"),
    __metadata("design:type", Object)
], AutoTag.prototype, "tagValue", void 0);
AutoTag = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[auto-tag]"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], AutoTag);

var _a;
//# sourceMappingURL=auto-tag.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_root_scope__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(rootScope, elRef) {
        this.rootScope = rootScope;
        this.elRef = elRef;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        console.log(this.elRef);
        if (this.elRef.nativeElement.attributes.getNamedItem("static") != null)
            this.always = false;
        else
            this.always = true;
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "loader",
        template: "\n       <div class=\"loading\" *ngIf=\"rootScope.rootLoader.show && always\">\n         <div class=\"dim\"></div>\n         <div class=\"front\"> \n           <div class=\"info\">\n\t            <div class=\"spinner\"></div>\n\t            <div class=\"title\">{{rootScope.rootLoader.title}}</div>\n           </div> \n          </div>  \n\n       </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], LoaderComponent);

var _a, _b;
//# sourceMappingURL=loader.directive.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModulesLoaderComponent = (function () {
    function ModulesLoaderComponent() {
    }
    ModulesLoaderComponent.prototype.ngOnInit = function () {
    };
    return ModulesLoaderComponent;
}());
ModulesLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modules-loader',
        template: __webpack_require__(356),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [])
], ModulesLoaderComponent);

//# sourceMappingURL=modules-loader.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubLoaderComponent = (function () {
    function SubLoaderComponent(elRef) {
        this.elRef = elRef;
    }
    SubLoaderComponent.prototype.ngOnInit = function () {
        var t = this.elRef.nativeElement.attributes.getNamedItem("loader-title");
        if (t)
            this.title = t.value;
        else
            this.title = "Loading";
    };
    return SubLoaderComponent;
}());
SubLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "sub-loader",
        template: "\n  <div class=\"sub-loader\" style=\"margin-top:31px;\">\n      <div class=\"spin spinner-2 border-top-primary border-right-primary border-bottom-primary\"></div>\n      <div class=\"title\">{{title}}</div>\n  </div>\n      \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SubLoaderComponent);

var _a;
//# sourceMappingURL=sub-loader.directive.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_root_scope__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastComponent = (function () {
    function ToastComponent(rootScope) {
        this.rootScope = rootScope;
    }
    ToastComponent.prototype.closeToast = function () {
        this.rootScope.toast.show = false;
        this.rootScope.toast.text = "";
        this.rootScope.toast.type = "";
        this.rootScope.toast.duration = 1500;
    };
    return ToastComponent;
}());
ToastComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "toast",
        template: "<div class=\"notification {{rootScope.toast.type}} anim-2 fadeIn\" *ngIf=\"rootScope.toast.show\">\n\t\t\t\t  <button class=\"delete\" (click)=\"closeToast()\"></button>\n\t\t\t\t  {{rootScope.toast.text}}\n\t\t\t   </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_root_scope__["a" /* RootScope */]) === "function" && _a || Object])
], ToastComponent);

var _a;
//# sourceMappingURL=toast.directive.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_root_scope__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_strings_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_models__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_common_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GetBotComponent = (function () {
    function GetBotComponent(rootScope, http, Strings, Models, Toast, dashboard) {
        this.rootScope = rootScope;
        this.http = http;
        this.Strings = Strings;
        this.Models = Models;
        this.Toast = Toast;
        this.dashboard = dashboard;
        this.openChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host;
        this.origin = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].origin;
        this.view = 'code';
        this.s_msg_sub_err = false;
        this.isLoadingInitData = true;
        this.isUpdatingInitData = false;
        this.formVars = {
            bot_name: null,
            msg: [],
            shortcut: null,
            shortcutData: [],
            style: {
                bgcolor: "#d9d9d9",
                color: "#d9d9d9",
                height: null,
                positionX: null,
                positionY: null,
                width: null
            }
        };
        this.formErrors = {
            'bot_name': '',
            'msg': '',
            'shortcut': '',
            'shortcutData': '',
            'bgcolor': '',
            'color': '',
            'width': '',
            'height': '',
            'positionX': '',
            'positionY': ''
        };
        this.validationMessages = {
            'bot_name': {
                'required': "Specify the name of the bot"
            },
            'msg': {
                'required': 'Specify atleast on messsage!'
            },
            'shortcut': {
                'required': 'Specify atleast one match.'
            },
            'shortcutData': {
                'required': 'Specify atleast one suggestion!.'
            },
            'bgcolor': {
                'required': 'Specify Bot Theme Color.'
            },
            'color': {
                'required': 'Specify Bot theme text color.'
            },
            'width': {
                'required': 'Specify width of the Bot.'
            },
            'height': {
                'required': 'Specify height of the bot.'
            },
            'positionX': {
                'required': 'Specify bot horizantal position.'
            },
            'positionY': {
                'required': 'Specify bot vertical position.'
            },
            'menus': {
                'required': 'Specify atleast one menu item!'
            }
        };
    }
    GetBotComponent.prototype.closeModal = function () {
        this.open = false;
        this.view = 'code';
        this.openChange.emit(this.open);
    };
    GetBotComponent.prototype.ngOnInit = function () {
        this.initVars();
        this.getBotId();
        this.buildForm();
    };
    GetBotComponent.prototype.initVars = function () {
        this.suggestionTypeArray = this.Strings.suggestionTypeArray;
        this.formVars.shortcut = this.suggestionTypeArray[0].value;
    };
    GetBotComponent.prototype.goView = function (view) {
        this.view = view;
        if (view == 'setup')
            this.getBotSetupData();
    };
    GetBotComponent.prototype.getBotSetupData = function () {
        var _this = this;
        this.isLoadingInitData = true;
        this.http.post(this.Strings.apis.getInitBot + this.rootScope._auth_user.id, {}).subscribe(function (res) {
            var data = res.json()[0];
            _this.formVars = data;
            if (!data.shortcut)
                _this.formVars.shortcut = _this.suggestionTypeArray[0].value;
            _this.isLoadingInitData = false;
        }, function (err) {
        });
    };
    GetBotComponent.prototype.updateBotSetupData = function () {
        var _this = this;
        if (this.botSetUpForm.valid) {
            this.isUpdatingInitData = true;
            var data = this.Models.initBot(this.formVars);
            this.http.post(this.Strings.apis.updateInitBot + this.rootScope._auth_user.id, data).subscribe(function (res) {
                _this.isUpdatingInitData = false;
                _this.Toast.show("Bot Setup is updated!", 4000, "is-success");
                _this.dashboard.loadTestBot();
            }, function (err) {
                _this.isUpdatingInitData = false;
                _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
            });
        }
    };
    GetBotComponent.prototype.getBotId = function () {
        var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64;
                }
                else if (isNaN(i)) {
                    a = 64;
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
            } return t; }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r);
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i);
                }
            } t = Base64._utf8_decode(t); return t; }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                }
                else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128);
                }
                else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128);
                }
            } return t; }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = 0; var c1 = 0; var c2 = 0; while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++;
                }
                else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2;
                }
                else {
                    c2 = e.charCodeAt(n + 1);
                    var c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3;
                }
            } return t; } };
        this.chat_bot_id = Base64.encode(this.rootScope._auth_user.id);
    };
    //form
    GetBotComponent.prototype.buildForm = function () {
        var _this = this;
        this.botSetUpForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            bot_name: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]),
            msg: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]),
            shortcut: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](this.suggestionTypeArray[0].value),
            shortcutData: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([]),
            bgcolor: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([''], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]),
            color: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([''], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]),
            height: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([''], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]),
            positionX: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([''], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]),
            positionY: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([''], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]),
            width: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]([''], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])
        });
        this.botSetUpForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages
    };
    GetBotComponent.prototype.onValueChanged = function (data) {
        if (!this.botSetUpForm) {
            return;
        }
        var form = this.botSetUpForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && (control.dirty || control.touched || !control.pristine) && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return GetBotComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], GetBotComponent.prototype, "open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GetBotComponent.prototype, "openChange", void 0);
GetBotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-get-bot',
        template: __webpack_require__(357),
        styles: [__webpack_require__(328)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_models__["a" /* Models */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_root_scope__["a" /* RootScope */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_strings_service__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_strings_service__["a" /* StringsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_models__["a" /* Models */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_models__["a" /* Models */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_common_services__["a" /* Toast */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */]) === "function" && _g || Object])
], GetBotComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=get-bot.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "._md_ldr ._itm ._ldr {\n  min-height: 190px;\n  margin: 0 11px;\n  padding: 21px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  border-radius: 3px; }\n  ._md_ldr ._itm ._ldr ._ttl {\n    min-height: 21px;\n    background-color: #e3e3e3; }\n  ._md_ldr ._itm ._ldr ._mtc {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 11px 0;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    ._md_ldr ._itm ._ldr ._mtc div {\n      min-height: 9px;\n      width: 20%;\n      min-width: 20%;\n      max-width: 20%;\n      margin: 0 2.5%;\n      background-color: #e3e3e3; }\n      ._md_ldr ._itm ._ldr ._mtc div:first-child {\n        margin-left: 0; }\n  ._md_ldr ._itm ._ldr ._othr {\n    margin-top: 31px; }\n    ._md_ldr ._itm ._ldr ._othr div {\n      background-color: #e3e3e3;\n      width: 80%;\n      max-width: 80%;\n      min-width: 80%;\n      min-height: 9px;\n      margin: 11px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "._section {\n  border: 1px solid #d9d9d9; }\n\n._clrpkrshw {\n  width: 32px;\n  height: 32px;\n  padding: 1px;\n  margin-left: 11px;\n  position: absolute;\n  border-radius: 50em;\n  border: 1px solid #d9d9d9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".container {\n  max-width: 921px; }\n\n.home {\n  overflow-x: hidden; }\n  .home .palx-bg {\n    position: fixed;\n    height: 30%;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background-color: #4dd6c2; }\n  .home .nav {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    z-index: 3; }\n    .home .nav.is-primary {\n      background-color: #4dd6c2; }\n  .home .main-ad {\n    max-height: 100vh;\n    overflow: hidden;\n    background-color: #4dd6c2;\n    padding-top: 52px; }\n    .home .main-ad .title-sec {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding-left: 23px;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      position: relative;\n      top: -52px;\n      min-height: 400px; }\n      .home .main-ad .title-sec ._ttl {\n        font-weight: 500; }\n    .home .main-ad .img-sec {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      overflow: hidden; }\n      .home .main-ad .img-sec img {\n        position: relative;\n        top: 92px;\n        opacity: 0.7677; }\n  .home .features._pd {\n    padding: 32px 0 0 0; }\n  .home .features ._ftrs {\n    position: relative;\n    background-color: #fff;\n    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.035);\n    padding-bottom: 51px; }\n    .home .features ._ftrs._ovlpd {\n      margin-top: -110px; }\n    .home .features ._ftrs ._t_bar {\n      padding-top: 21px;\n      position: relative; }\n      .home .features ._ftrs ._t_bar ._ttl {\n        font-weight: 400; }\n      .home .features ._ftrs ._t_bar ._dvdr {\n        height: 7px;\n        position: absolute;\n        bottom: -21px;\n        width: 50%;\n        left: 25%;\n        background-color: rgba(0, 209, 178, 0.25);\n        border-radius: 4px; }\n    .home .features ._ftrs ._bd {\n      margin-top: 51px; }\n      .home .features ._ftrs ._bd ._itm {\n        margin: 17px 39px; }\n        .home .features ._ftrs ._bd ._itm ._ic {\n          margin-bottom: 11px; }\n          .home .features ._ftrs ._bd ._itm ._ic i {\n            color: #00d1b2;\n            font-size: 42px; }\n        .home .features ._ftrs ._bd ._itm ._tt h2 {\n          font-weight: 400; }\n        .home .features ._ftrs ._bd ._itm ._desc {\n          margin-top: 9px; }\n  .home ._nocode ._ic {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .home ._nocode ._ic i {\n      font-size: 48px; }\n  .home ._sections {\n    margin: 21px auto; }\n  .home ._shadow {\n    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.035); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_strings_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_root_scope__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(String, rootScope, Loader, Toast, utility) {
        this.String = String;
        this.rootScope = rootScope;
        this.Loader = Loader;
        this.Toast = Toast;
        this.utility = utility;
        this.d_a = "vinay";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.Loader.hideRoot();
        this.loadTestBot();
        ///this.Toast.show("Welcome to dash board", 5000, "is-info")
    };
    DashboardComponent.prototype.loadTestBot = function () {
        var e = document.createElement("script");
        e.src = ((__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host == 'localhost') ? __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].origin : __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].host) + "bot/build/script_prod-min.js";
        e.type = 'text/javascript';
        e.setAttribute('chat-bot-id', this.utility.getBotId(this.rootScope));
        e.setAttribute('test-bot', 'true');
        document.body.appendChild(e);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(352),
        styles: [__webpack_require__(334)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_common_services__["c" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_strings_service__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_strings_service__["a" /* StringsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_root_scope__["a" /* RootScope */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["c" /* Loader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["c" /* Loader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */]) === "function" && _e || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".flow {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding: 11px 9% 11px 3px;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n.flow .flow-card-content {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n} \n\n.flow .flow-card-content .flow-bar {\n   -webkit-box-flex: 30;\n       -ms-flex-positive: 30;\n           flex-grow: 30;\n   min-width: 30%;\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n   -webkit-box-orient: vertical;\n   -webkit-box-direction: normal;\n       -ms-flex-direction: column;\n           flex-direction: column;\n   -ms-flex-line-pack: center;\n       align-content: center;\n}\n.bars {\n   -webkit-box-flex: 1;\n       -ms-flex-positive: 1;\n           flex-grow: 1;\n   width: 7px;\n   background: #d9d9d9;\n   margin: 0 auto;\n}\n.bar-m {\n   -ms-flex-preferred-size: 7px;\n       flex-basis: 7px;\n   background: #d9d9d9;\n   width: calc(50% + 3.5px);\n   margin-left: calc(50% - 3.5px);\n}\n\n\n.flow .flow-card-content .flow-card {\n\theight: auto;\n\t-webkit-box-flex: 70;\n\t    -ms-flex-positive: 70;\n\t        flex-grow: 70;\n  max-width: 400px;\n}\n\n.flow .flow-card-content .flow-card.is-loading {\n  opacity: 0.4;\n  background: #e0e0e0;\n}\n\n.flow .flow-card-content .flow-card .loader-bar {\n    top: -1.25rem;\n    left: -1.25rem;\n    width: calc(100% + 1.25rem + 1.25rem);\n    z-index: 30;\n}\n\n.flow-card figure {\n\tbackground: #d9d9d9;\n\tborder-radius: 20px;\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tmargin: 0 auto;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n\n.flow-card-divider {\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n   -webkit-box-orient: horizontal;\n   -webkit-box-direction: normal;\n       -ms-flex-direction: row;\n           flex-direction: row;\n   height: 50px;\n}\n.flow-card-divider .left {\n  width: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.flow-card-divider .right {\n  width: 70%;\n  padding: 11px;\n  max-width: 400px;\n}\n.bar-add-icon {\n  -ms-flex-preferred-size: 30px;\n      flex-basis: 30px;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 auto;\n}\n.bar-add-icon i {\n\tborder: 7px solid #d9d9d9;\n\tcolor: #999;\n\tborder-radius: 50em;\n\tbackground: #f0f0f0;\n\tcursor: pointer;\n\tz-index: 20;\n  transition: 0.1s all;\n  width: 42px;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 17px;\n}\n\n.bar-add-icon i:hover {\n\tborder-color:  #999;\n\tcolor: #555;\n}\n\n.end-card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 45%;\n  min-width: 300px;\n}\n.end-card-content .flow-card {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);\n  border-radius: 0px;\n}\n\n.flow-card-actions {\n  border-top: 1px solid #e9e9e9;\n  padding-top: 9px;\n}\n\n\n\n.add-flow-indicater-container {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n\n.tabs.sticked {\n    background-color: #fff;\n }\n.tabs.sticked.hide-mobile {\n  display: block!important;\n}\n\n\n.f-card {\n  min-width: 100px;\n  /*border: 1px solid #d9d9d9;*/\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);\n  background-color: #fdfdfd;  \n  -webkit-box-flex: 70;  \n      -ms-flex-positive: 70;  \n          flex-grow: 70;\n  max-width: 400px;\n}\n\n.f-card .title {\n  padding: 11px 15px;\n  margin: 0px; \n  display: -webkit-box; \n  display: -ms-flexbox; \n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.f-card .title .index {\n  border: 1px solid #e7e7e7;\n  background-color: #f0f0f0;\n  padding: 4px;\n  font-size: 17px;\n  -ms-flex-preferred-size: 30px;\n      flex-basis: 30px;\n  width:30px; \n  text-align: center;\n  border-radius: 11px;\n}\n.f-card .title .text { \n  margin-left: 15px;\n  font-size: 19px;\n  font-weight: 400;\n  border-bottom: 2px solid #e9e9e9;\n  cursor: pointer; \n  outline: none;\n}\n.f-card .title span:hover {\n   border-bottom:2px solid #555;\n} \n.f-card .content {\n  padding: 5px 15px;\n  padding-bottom: 0px;\n  margin-bottom: 7px;\n}\n.f-card .content .msgs {\n  background-color: #f4f4f4;\n  padding: 5px 7px;\n  font-size: 13px;\n  font-weight: 300;\n  display: inline-block;\n  border-left:2px solid #d9d9d9;\n}\n.f-card .content .others {\n   font-size: 13px;\n   color:#888;\n   font-weight: 300;\n   padding: 5px 0px;\n}\n.f-card .content .others:last-child {\n  padding-bottom: 0px;\n}\n.f-card .content .others span {\n  color: #777;\n  font-weight: 400;\n}\n.f-card .footer {\n  background-color: transparent;\n  padding: 0px;\n  padding: 5px 0px;\n  margin: 0px 15px;\n  border-top: 1px solid #f0f0f0;\n  text-align: right;\n}\n.f-card .footer a {\n  border: 0px;\n  opacity: 0.87;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".force-padding {\n    padding: 11px 0px;\n    background-color: transparent;\n}\n.dashboard {\n\tmargin-top: 56px;\n\tmin-height: calc( 100vh - 264px );\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".nav {\n\tz-index: 30;\n\theight: 56px;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tbox-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.08), 0 6px 10px 0 rgba(0, 0, 0, 0.06), 0 1px 18px 0 rgba(0, 0, 0, 0.03);\n\ttransition: 0.3s all;\n}\n.nav.at-top {\n\tbackground-color: #fafbfc;\n\tbox-shadow: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".list-card {\n\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);\n\tbackground-color: #fff;\n\tborder-radius: 0px;\n\t/*border:1px solid #e0e0e0;*/\n\tcursor: pointer;\n\ttransition: .2899s all;\n\ttransition-timing-function: ease-in;\n\toutline: none;\n}\n\n.list-card:hover {\n\tbox-shadow: 0 1px 11px 4px rgba(0, 0, 0, 0.14);\n}\n\n.list-card .header {\n\tpadding: 11px 21px;\n\tpadding-bottom: 0px;\t\n\tbackground-color: #fdfdfd;\n\n}\n.list-card .header .title {\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tfont-weight: 500!important;\n\tpadding-bottom: 7px;\n\tborder-bottom: 2px solid transparent;\n\toutline: none;\n}\n\n.list-card .header .title:hover {\n     border-bottom: 2px solid #a9a9a9;\n}\n.list-card .content {\n\tpadding: 11px 21px;\n\tpadding-bottom: 0px;\n}\n\n.list-card .content .matches .item {\n  background-color: #f4f4f4;\n  padding: 5px 9px;\n  font-size: 13px;\n  margin: 0 2px;\n  color: #333;\n  border-top:2px solid #d9d9d9;\n}\n\n.list-card .content .matches .item:first-child {\n  margin-left: 0px;\n}\n\n.list-card .content .details {\n\tmargin-top:7px;\n}\n\n.list-card .content .details .row {\n\tpadding: 3px 0px;\n\tcolor: #666;\n\tfont-size: 12px;\n}\n.list-card .footer {\n\tmargin: 0 21px; \n\ttext-align: right;\n\tbackground-color: #fff;\n\tborder-top:1px solid #e9e9e9;\n\tpadding: 11px 0px;\n\tmargin-top: -11px;\n}\n\n.list-card .footer .button {\n\topacity: 0.8;\n\tborder-width: 0px;\n}\n.list-card .footer .button:hover {\t\n\topacity: 1;\n}\n\n.no-items-indi {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\tmin-height: 250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".menu {\n\tmax-width: 400px;\n}\n.menu ul {\n\tmargin-left: 7px;\n\tborder-left: 1px solid #d9d9d9;\n}\n.menu ul li {\n\tborder-left: 2px solid transparent;\n}\n.menu ul li:hover {\n   border-left:2px solid #666;\n   transition: .2s all;\n}\n\n.menu ul li a span {\n\tfloat: right;\n\tpadding: 11px;\n\ttransition: .2s all;\n}\n\n.menu ul li a span:hover {\n\tborder-radius: 50px;\n    background-color: #000;\n    color: #fff;\n}\n\n.menu input[type=text] {\n  outline: none;\n  border:none;\n  border-bottom: 2px solid #999;\n  background-color: transparent;\n  transition: .2s all;\n}\n\n.menu input[type='text']:hover {\n\tborder-color: #444;\n\ttransition: .2s all;\n}\n.menu input[type='text']:focus {\n\tborder-color: #222;\n\twidth: 60%;\n\ttransition: .2s all;\n}\n\n.err {\n\tpadding: 0 11px;\n}\n\n\n.ad-action-del {\n\tfloat: right;\n    position: relative;\n    top: -4px;\n    line-height: 1.1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".login {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\theight: 100%;\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 10;\n}\n.login .body {\n\t-webkit-box-flex: 1;\n\t    -ms-flex-positive: 1;\n\t        flex-grow: 1;\n\toverflow-y: auto;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-ms-flex-line-pack: center;\n\t    align-content: center;\n\ttext-align: center;\n\tvertical-align: center;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n.login .body .caption {\n   margin: 50px auto;\n   font-weight: 300!important;\n}\n.login .body .card-l {\n\twidth: 30%;\n\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n    color: #4a4a4a;\n    margin: 0 auto;\n    min-width: 250px;\n    border-radius: 0!important;\n}\n\n.login .body .card-l div {\n  margin: 11px 7px;\n}\n\n.overlay {\n\tbottom: 0;\n    direction: ltr;\n    left: 0;\n    overflow: hidden;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 112,
	"./af.js": 112,
	"./ar": 119,
	"./ar-dz": 113,
	"./ar-dz.js": 113,
	"./ar-kw": 114,
	"./ar-kw.js": 114,
	"./ar-ly": 115,
	"./ar-ly.js": 115,
	"./ar-ma": 116,
	"./ar-ma.js": 116,
	"./ar-sa": 117,
	"./ar-sa.js": 117,
	"./ar-tn": 118,
	"./ar-tn.js": 118,
	"./ar.js": 119,
	"./az": 120,
	"./az.js": 120,
	"./be": 121,
	"./be.js": 121,
	"./bg": 122,
	"./bg.js": 122,
	"./bm": 123,
	"./bm.js": 123,
	"./bn": 124,
	"./bn.js": 124,
	"./bo": 125,
	"./bo.js": 125,
	"./br": 126,
	"./br.js": 126,
	"./bs": 127,
	"./bs.js": 127,
	"./ca": 128,
	"./ca.js": 128,
	"./cs": 129,
	"./cs.js": 129,
	"./cv": 130,
	"./cv.js": 130,
	"./cy": 131,
	"./cy.js": 131,
	"./da": 132,
	"./da.js": 132,
	"./de": 135,
	"./de-at": 133,
	"./de-at.js": 133,
	"./de-ch": 134,
	"./de-ch.js": 134,
	"./de.js": 135,
	"./dv": 136,
	"./dv.js": 136,
	"./el": 137,
	"./el.js": 137,
	"./en-au": 138,
	"./en-au.js": 138,
	"./en-ca": 139,
	"./en-ca.js": 139,
	"./en-gb": 140,
	"./en-gb.js": 140,
	"./en-ie": 141,
	"./en-ie.js": 141,
	"./en-nz": 142,
	"./en-nz.js": 142,
	"./eo": 143,
	"./eo.js": 143,
	"./es": 146,
	"./es-do": 144,
	"./es-do.js": 144,
	"./es-us": 145,
	"./es-us.js": 145,
	"./es.js": 146,
	"./et": 147,
	"./et.js": 147,
	"./eu": 148,
	"./eu.js": 148,
	"./fa": 149,
	"./fa.js": 149,
	"./fi": 150,
	"./fi.js": 150,
	"./fo": 151,
	"./fo.js": 151,
	"./fr": 154,
	"./fr-ca": 152,
	"./fr-ca.js": 152,
	"./fr-ch": 153,
	"./fr-ch.js": 153,
	"./fr.js": 154,
	"./fy": 155,
	"./fy.js": 155,
	"./gd": 156,
	"./gd.js": 156,
	"./gl": 157,
	"./gl.js": 157,
	"./gom-latn": 158,
	"./gom-latn.js": 158,
	"./gu": 159,
	"./gu.js": 159,
	"./he": 160,
	"./he.js": 160,
	"./hi": 161,
	"./hi.js": 161,
	"./hr": 162,
	"./hr.js": 162,
	"./hu": 163,
	"./hu.js": 163,
	"./hy-am": 164,
	"./hy-am.js": 164,
	"./id": 165,
	"./id.js": 165,
	"./is": 166,
	"./is.js": 166,
	"./it": 167,
	"./it.js": 167,
	"./ja": 168,
	"./ja.js": 168,
	"./jv": 169,
	"./jv.js": 169,
	"./ka": 170,
	"./ka.js": 170,
	"./kk": 171,
	"./kk.js": 171,
	"./km": 172,
	"./km.js": 172,
	"./kn": 173,
	"./kn.js": 173,
	"./ko": 174,
	"./ko.js": 174,
	"./ky": 175,
	"./ky.js": 175,
	"./lb": 176,
	"./lb.js": 176,
	"./lo": 177,
	"./lo.js": 177,
	"./lt": 178,
	"./lt.js": 178,
	"./lv": 179,
	"./lv.js": 179,
	"./me": 180,
	"./me.js": 180,
	"./mi": 181,
	"./mi.js": 181,
	"./mk": 182,
	"./mk.js": 182,
	"./ml": 183,
	"./ml.js": 183,
	"./mr": 184,
	"./mr.js": 184,
	"./ms": 186,
	"./ms-my": 185,
	"./ms-my.js": 185,
	"./ms.js": 186,
	"./my": 187,
	"./my.js": 187,
	"./nb": 188,
	"./nb.js": 188,
	"./ne": 189,
	"./ne.js": 189,
	"./nl": 191,
	"./nl-be": 190,
	"./nl-be.js": 190,
	"./nl.js": 191,
	"./nn": 192,
	"./nn.js": 192,
	"./pa-in": 193,
	"./pa-in.js": 193,
	"./pl": 194,
	"./pl.js": 194,
	"./pt": 196,
	"./pt-br": 195,
	"./pt-br.js": 195,
	"./pt.js": 196,
	"./ro": 197,
	"./ro.js": 197,
	"./ru": 198,
	"./ru.js": 198,
	"./sd": 199,
	"./sd.js": 199,
	"./se": 200,
	"./se.js": 200,
	"./si": 201,
	"./si.js": 201,
	"./sk": 202,
	"./sk.js": 202,
	"./sl": 203,
	"./sl.js": 203,
	"./sq": 204,
	"./sq.js": 204,
	"./sr": 206,
	"./sr-cyrl": 205,
	"./sr-cyrl.js": 205,
	"./sr.js": 206,
	"./ss": 207,
	"./ss.js": 207,
	"./sv": 208,
	"./sv.js": 208,
	"./sw": 209,
	"./sw.js": 209,
	"./ta": 210,
	"./ta.js": 210,
	"./te": 211,
	"./te.js": 211,
	"./tet": 212,
	"./tet.js": 212,
	"./th": 213,
	"./th.js": 213,
	"./tl-ph": 214,
	"./tl-ph.js": 214,
	"./tlh": 215,
	"./tlh.js": 215,
	"./tr": 216,
	"./tr.js": 216,
	"./tzl": 217,
	"./tzl.js": 217,
	"./tzm": 219,
	"./tzm-latn": 218,
	"./tzm-latn.js": 218,
	"./tzm.js": 219,
	"./uk": 220,
	"./uk.js": 220,
	"./ur": 221,
	"./ur.js": 221,
	"./uz": 223,
	"./uz-latn": 222,
	"./uz-latn.js": 222,
	"./uz.js": 223,
	"./vi": 224,
	"./vi.js": 224,
	"./x-pseudo": 225,
	"./x-pseudo.js": 225,
	"./yo": 226,
	"./yo.js": 226,
	"./zh-cn": 227,
	"./zh-cn.js": 227,
	"./zh-hk": 228,
	"./zh-hk.js": 228,
	"./zh-tw": 229,
	"./zh-tw.js": 229
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 339;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__strings_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_scope__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(str, rootScope) {
        this.Strings = str;
        this.rootScope = rootScope;
    }
    AuthService.prototype.isAuth = function () {
        if ((localStorage.getItem(this.Strings.authInstance.storageName) == "null") || (localStorage.getItem(this.Strings.authInstance.storageName) == null) || (localStorage.getItem(this.Strings.authInstance.storageName) == undefined))
            return false;
        return true;
    };
    AuthService.prototype.getAuth = function () {
        return JSON.parse(localStorage.getItem(this.Strings.authInstance.storageName));
    };
    AuthService.prototype.initAuth = function () {
        var data = JSON.parse(localStorage.getItem(this.Strings.authInstance.storageName));
        if (data == null)
            return;
        this.rootScope._auth_user.id = data[this.Strings.authInstance.storageIdKey];
        this.rootScope._auth_user.name = data[this.Strings.authInstance.storageNameKey];
        this.rootScope._auth_user.email = data[this.Strings.authInstance.storageEmailKey];
        this.rootScope._auth_user.pic = data[this.Strings.authInstance.storageAvtarKey];
    };
    AuthService.prototype.setAuth = function (data) {
        console.log("setting auth", this.Strings.authInstance.storageName);
        localStorage.setItem(this.Strings.authInstance.storageName, JSON.stringify(data));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.Strings.authInstance.storageName);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__strings_service__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__strings_service__["a" /* StringsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__root_scope__["a" /* RootScope */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<loader></loader>\n<router-outlet></router-outlet>\n<toast class=\"anim sliceInUp\"></toast>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\n\t<div class=\"columns\">\n\t  <div class=\"column is-3 r-border\">\n\t    <div stick-from-top=\"0\">\n         <nav class=\"panel\">\n\t\t\t  <p class=\"panel-heading\">\n\t\t\t    {{flowData.name || 'Loading...'}}\n\t\t\t  </p>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"isLoadingFlow\">\n\t\t\t  \t<div class=\"loader-bar\"></div>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block is-active flex-wrap\" *ngIf=\"!isLoadingFlow\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-share\"></i>\n\t\t\t    </span>\n\t\t\t    <span class=\"tag\" *ngFor=\"let mt of flowData.matches\">{{mt}}</span>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingFlow\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-clock-o\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Created at: {{flowData.timestamp_created.at | amTimeAgo}}</small>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingFlow\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-clock-o\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Modified at: {{flowData.timestamp_updated.at | amTimeAgo}}</small>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingFlow && flowData.statastics\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-check-square\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Triggerd: {{flowData.statastics.triggered || '0'}} times</small>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingFlow && flowData.statastics && flowData.statastics.triggered>0\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-clock-o\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Last Triggerd: {{flowData.statastics.triggeredAt | amTimeAgo}}</small>\n\t\t\t  </span>\n\t</nav>\n\t\t</div> \n\t  </div>\n\t  <div class=\"column is-9\">\n\n\t    <!-- tabs -->\n\t    <div class=\"tabs\" stick-from-top=\"0\">\n\t\t  <ul>\n\t\t    <li [class.is-active]=\"selectedTab == 'flow'\" (click)=\"selectedTab = 'flow'\"><a>Flow</a></li>\n\t\t    <li [class.is-active]=\"selectedTab == 'service'\" (click)=\"selectedTab = 'service'\"><a>Services</a></li>\n\t\t  </ul>\n\t\t</div>\n\n\n  \n\n\n\n\n\t\t<sub-loader *ngIf=\"isLoadingFlow\" loader-title=\"Loading Flow..\"></sub-loader>\n\n\t\t<div *ngIf=\"!isLoadingFlow && selectedTab != 'flow'\" class=\"anim sliceInUp\"> <!-- start of service tab -->\n        \t<services-view [ServicesData]=\"flowData\"></services-view>\n        </div>  <!-- end of service tab -->\n\n      <div *ngIf=\"!isLoadingFlow && selectedTab == 'flow'\"> <!-- start of flow tab -->\n\t    <div class=\"flow anim sliceInUp\" >\n\n        <!-- welcome card -->\n          <div class=\"flow-card-divider\" *ngIf=\"!flowData.welcome.msg\" style=\"margin-bottom: -5px;\">\n\t    \t  <div class=\"left\">\n\t    \t\t<a class=\"button is-primary is-medium\" (click)=\"openWelcomeEditModal()\">\n\t\t\t    <span class=\"icon\">\n\t\t\t      <i class=\"fa fa-plus\"></i>\n\t\t\t    </span>\n\t\t\t    <span>Wecome Message</span>\n\t\t\t  </a>\n\t    \t  </div>\n\t    \t  <div class=\"right\"></div>\n\t    \t</div>\n\n\n          <div class=\"end-card-content\" *ngIf=\"flowData.welcome.msg\">\n              <div class=\"box flow-card\" [class.is-loading]=\"i==4\">\n\t    \t\t    <div class=\"loader-bar\" *ngIf=\"i==4\"></div>\n\t\t\t\t\t  <article class=\"media\">\n\t\t\t\t\t    <div class=\"media-content\">\n\t\t\t\t\t      <div class=\"content\">\n\t\t\t\t\t        <p>\n\t\t\t\t\t          <strong><a class=\"button is-outlined\">Welcome Message</a></strong>\n\t\t\t\t\t          <br>\n\t\t\t\t\t          <span class=\"l-tag is-light\" *ngFor=\"let m of flowData.welcome.msg\">{{m}}</span>\n\t\t\t\t\t        </p>\n\t\t\t\t\t      </div>\n\t\t\t\t\t      <nav class=\"level is-mobile flow-card-actions\">\n\t\t\t\t\t        <div class=\"level-left\">\n\t\t\t\t\t          <a class=\"button is-small is-primary is-outlined\" (click)=\"openWelcomeEditModal()\">\n\t\t\t\t\t            <span class=\"icon is-small\"><i class=\"fa fa-pencil\"></i></span>\n\t\t\t\t\t            <span>Edit</span>\n\t\t\t\t\t          </a> \n\t\t\t\t\t        </div>\n\t\t\t\t\t      </nav>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </article>\n\t    \t\t\t</div>\n          \t\n          </div>\n\n          <div class=\"flow-card-divider\">\n\t    \t  <div class=\"left\">\n\t    \t\t<div class=\"bars\" style=\"flex-basis: 61px\"></div>\n\t    \t\t<div class=\"bar-add-icon add-flow-indicater-container {{indi}}\"><i (click)=\"openEditFlowItem(0, 'insert')\" class=\"fa fa-plus\" aria-hidden=\"true\"></i></div>\n\t    \t\t<div class=\"bars\"></div>\n\t    \t  </div>\n\t    \t  <div class=\"right\">\n\t    \t  \t\t<article class=\"message is-primary\" *ngIf=\"!flowData.modules || flowData.modules.length == 0\">\n\t\t\t\t\t  <div class=\"message-body\">\n\t\t\t\t\t     No Flows Items are added! click on <span class=\"tag is-info add-flow-indicater\" (mouseleave)=\"indi = ''\" (mouseenter)=\"indi = 'wobble'\">Add</span> icon to add Items.\n\t\t\t\t\t  </div>\n\t\t\t\t\t</article>\n\t    \t  </div>\n\t    \t</div>\n        <!-- welcome card end -->\n\n\n        <!-- loop cards -->\n\t      <div *ngFor=\"let item of flowData.modules; let i = index;\">\n\t    \t<div class=\"flow-card-content\">\n\t    \t    <div class=\"flow-bar\">\n\t    \t    \t<div class=\"bars\"></div>\n\t    \t    \t<div class=\"bar-m\"></div>\n\t    \t    \t<div class=\"bars\"></div>\n\t    \t    </div>\n\t    \t\t\n\n\n                    <div class=\"f-card\" [class.is-loading]=\"i==editFlowItemIndex && isLoadingeditFlowItem\" [ngClass]=\"{'anim': (i==editFlowItemIndex && isLoadingeditFlowItem), 'fadeInRight': (updateFlowType != 'edit'), 'pulse': (updateFlowType == 'edit')}\">\n\t\t\t         <div class=\"loader-bar\" *ngIf=\"i==editFlowItemIndex && isLoadingeditFlowItem\"></div>\n\t\t\t\t\t <div class=\"title\"><span class=\"index\">{{i+1}}</span><span class=\"text\" (click)=\"openEditFlowItem(i, 'edit')\">{{item.name}}</span></div>\n\t\t\t\t\t <div class=\"content\">\n\t\t\t\t\t\t <div class=\"msgs border-left-primary\">\n\t\t\t\t\t\t\t <div class=\"item\" *ngFor=\"let m of item.msg\">{{m}}</div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <div class=\"others\">Validation : <span>{{item.validate ? item.validate : 'No validations added'}}</span></div>\n\t\t\t\t\t\t <div class=\"others\">Suggestions : <span>{{item.shortcut ? item.shortcut : 'No suggestions added'}}</span></div>\n\t\t\t\t\t </div>\n\t\t\t\t\t <div class=\"footer\">\n\t\t\t\t\t\t <a class=\"button is-small is-primary is-outlined\" (click)=\"openEditFlowItem(i, 'edit')\">\n\t\t\t\t            <span class=\"icon is-small\"><i class=\"fa fa-pencil\"></i></span>\n\t\t\t\t            <span>Edit</span>\n\t\t\t\t          </a>  &nbsp;\n\t\t\t\t          <a class=\"button is-small is-info is-outlined\">\n\t\t\t\t            <span class=\"icon is-small\"><i class=\"fa fa-clone\"></i></span>\n\t\t\t\t            <span>Copy</span>\n\t\t\t\t          </a> &nbsp;\n\t\t\t\t          <a class=\"button is-small is-danger is-outlined\" (click)=\"openFlowItemDeleteModal(i)\">\n\t\t\t\t            <span class=\"icon is-small\"><i class=\"fa fa-trash\"></i></span>\n\t\t\t\t            <span>Delete</span>\n\t\t\t\t          </a>\n\t\t\t\t\t </div>\n\t\t\t\t </div>\n\n\n\n\n\n\n\n\t    \t</div>\n\n\n\n\n\t    \t<div class=\"flow-card-divider\">\n\t    \t  <div class=\"left\">\n\t    \t\t<div class=\"bars\"></div>\n\t    \t\t<div class=\"bar-add-icon\"><i (click)=\"openEditFlowItem(i+1, 'insert')\" class=\"fa fa-plus\" aria-hidden=\"true\"></i></div>\n\t    \t\t<div class=\"bars\"></div>\n\t    \t  </div>\n\t    \t  <div class=\"right\"></div>\n\t    \t</div>\n\n        </div>\n\n        <!-- loop cards end  -->\n\n        <!-- final card -->\n\n          <div class=\"flow-card-divider\">\n\t    \t  <div class=\"left\">\n\t    \t\t<div class=\"bars\" style=\"flex-basis: 11px\"></div>\n\t    \t  </div>\n\t    \t  <div class=\"right\"></div>\n\t    \t</div>\n\n\n\t    \t<div class=\"flow-card-divider\" *ngIf=\"!flowData.final.msg\">\n\t    \t  <div class=\"left\">\n\t    \t\t<a class=\"button is-primary is-medium\" (click)=\"openFinalEditModal()\">\n\t\t\t    <span class=\"icon\">\n\t\t\t      <i class=\"fa fa-plus\"></i>\n\t\t\t    </span>\n\t\t\t    <span>Add Final Action</span>\n\t\t\t  </a>\n\t    \t  </div>\n\t    \t  <div class=\"right\"></div>\n\t    \t</div>\n\n          \n\n          <div class=\"end-card-content\" *ngIf=\"flowData.final.msg\">\n              <div class=\"box flow-card\" [class.is-loading]=\"false\">\n\t    \t\t    <div class=\"loader-bar\" *ngIf=\"i==4\"></div>\n\t\t\t\t\t  <article class=\"media\">\n\t\t\t\t\t    <div class=\"media-content\">\n\t\t\t\t\t      <div class=\"content\">\n\t\t\t\t\t        <p>\n\t\t\t\t\t          <strong><a class=\"button is-outlined\">End Flow </a></strong>\n\t\t\t\t\t          <br>\n\t\t\t\t\t          <span class=\"l-tag is-light\" *ngFor=\"let m of flowData.final.msg\">{{m}}</span>\n\t\t\t\t\t        </p>\n\t\t\t\t\t      </div>\n\t\t\t\t\t      <nav class=\"level is-mobile flow-card-actions\">\n\t\t\t\t\t        <div class=\"level-left\">\n\t\t\t\t\t          <a class=\"button is-small is-primary is-outlined\" (click)=\"openFinalEditModal()\">\n\t\t\t\t\t            <span class=\"icon is-small\"><i class=\"fa fa-pencil\"></i></span>\n\t\t\t\t\t            <span>Edit</span>\n\t\t\t\t\t          </a>  \n\t\t\t\t\t        </div>\n\t\t\t\t\t      </nav>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </article>\n\t    \t\t\t</div>\n          \t\n          </div>\n\n          \n\t        <!-- final card end -->\n\t    </div> <!-- end of flow tab -->\n\n\n        \n\n\n\t    </div>\n\n      \n\t\t\t\n\t  \t\n\t  </div>\n\t </div>\n</div>\t  \n\n\n\n\n<!-- modals -->\n<div class=\"modal is-active\" *ngIf=\"isActiveModal\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card anim zoomIn\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">{{updateFlowType | uppercase}} FLOW</p>\n      <button class=\"delete\" (click)=\"isActiveModal = false\"></button>\n    </header>\n    <section class=\"modal-card-body\">\n\n      <form [formGroup]=\"createFlowItemForm\" >\n         <div class=\"input-container\">\n         \t<div class=\"label\">Name Of the Module *</div>\n         \t<div class=\"field\">\n         \t\t<input type=\"text\" formControlName=\"name\" auto-tag [autoTagValue]=\"constructAutoList()\"/>\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"formErrors.name\">{{formErrors.name}}</div>\n         </div>\n\n          <div class=\"input-container no-style\">\n         \t<div class=\"label\">Module Message *\t</div>\n         \t<div class=\"field\">\n         \t\t<tag-input (onFocus)=\"msg_sub_err = true\" class='tooltip' formControlName=\"msg\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Msgs'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n         \t{{focused_msg}}\n         \t<div class=\"err\" *ngIf=\"formErrors.msg\">{{formErrors.msg}}</div>\n         \t<div class=\"err\" *ngIf=\"!formErrors.msg && msg_sub_err && createFlowItemForm.value.msg.length==0\">{{validationMessages.msg.required}}</div>\n         </div>\t\n\n         <div class=\"input-container no-style\">\n         \t<div class=\"label\">Before Message</div>\n         \t<div class=\"field\">\n         \t\t<tag-input class='tooltip' formControlName=\"beforeMsg\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Msgs'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n         </div>\n\n\n         <div class=\"input-container no-style\">\n         \t<div class=\"label\">After Message</div>\n         \t<div class=\"field\">\n         \t\t<tag-input class='tooltip' formControlName=\"afterMsg\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Msgs'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n         </div>\n\n\n          <br/>\n          <div class=\"columns\">\n\t\t\t  <div class=\"column is-3\">\n\t\t\t    Validation Type:\n\t\t\t  </div>\n\t\t\t  <div class=\"column\">\n               <div class=\"input-container\">\n\t\t\t    <span class=\"select\">\n\t\t\t\t\t\t\t<select formControlName=\"validate\">\n\t\t\t        <option *ngFor=\"let v of validationTypeArray\" value=\"{{v.value}}\">{{v.title}}</option>\n\t\t\t      </select>\n\t\t\t    </span>\n\n\t\t\t    <div *ngIf=\"createFlowItemForm.value.validate != 'none'\">\n                      <tag-input (onFocus)=\"v_msg_sub_err = true\" class='tooltip' formControlName=\"validateErrMsg\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Validate Msgs *'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n\t\t                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n\t\t              </tag-input>\n\t\t              <div class=\"err\" *ngIf=\"formErrors.validateErrMsg\"><br/>{{formErrors.validateErrMsg}}</div>\n\t\t              <div class=\"err\" *ngIf=\"v_msg_sub_err && createFlowItemForm.value.validateErrMsg.length==0\"><br/>{{validationMessages.validateErrMsg.required}}</div>\n\t\t\t    </div>\n\n\n\n              </div>\n\t\t\t</div>\n\t\t  </div>\n\n\n          <div class=\"columns\">\n\t\t\t  <div class=\"column is-3\">\n\t\t\t    Suggestion Type:\n\t\t\t  </div>\n\t\t\t  <div class=\"column\">\n\t\t\t   <div class=\"input-container\">\n\t\t\t    <span class=\"select\">\n\t\t\t      <select formControlName=\"shortcut\">\n\t\t\t        <option *ngFor=\"let s of suggestionTypeArray\" value=\"{{s.value}}\">{{s.title}}</option>\n\t\t\t      </select>\n\t\t\t    </span>\n\n\n\t\t\t    <div *ngIf=\"createFlowItemForm.value.shortcut != 'none'\">\n                      <tag-input (onFocus)=\"s_msg_sub_err = true\"  class='tooltip' formControlName=\"shortcutData\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Suggestion Items *'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n\t\t                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n\t\t              </tag-input>\n\t\t              <div class=\"err\" *ngIf=\"formErrors.shortcutData\"><br/>{{formErrors.shortcutData}}</div>\n\t\t              <div class=\"err\" *ngIf=\"s_msg_sub_err && createFlowItemForm.value.shortcutData.length==0\"><br/>{{validationMessages.shortcutData.required}}</div>\n\t\t\t    </div>\n\n\n               </div>\n\t\t\t </div>\n\t\t  </div>\t  \n     </form>\n    </section>\n    <footer class=\"modal-card-foot\">\n      <span class=\"button is-success tooltip\" [class.is-disabled]=\"(createFlowItemForm.invalid) || (createFlowItemForm.value.validate != 'none' && createFlowItemForm.value.validateErrMsg.length==0) || (createFlowItemForm.value.shortcut != 'none' && createFlowItemForm.value.shortcutData.length==0)\" (click)=\"updateFlowItem()\">{{updateFlowType | uppercase}}\n      <span class=\"tooltiptext\" *ngIf=\"((createFlowItemForm.invalid) || (createFlowItemForm.value.validate != 'none' && createFlowItemForm.value.validateErrMsg.length==0) || (createFlowItemForm.value.shortcut != 'none' && createFlowItemForm.value.shortcutData.length==0))\">Fill are required fields(*)</span> \n      </span>\n      <a class=\"button\" (click)=\"isActiveModal = false\">Cancel</a>\n    </footer>\n  </div>\n</div>\n\n\n\n<!-- welcome add modal -->\n\n<div class=\"modal is-active\" *ngIf=\"isMelcomeModal\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card anim zoomIn\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Welcome Message</p>\n      <button class=\"delete\" (click)=\"isMelcomeModal = false\" *ngIf=\"!isWelcomeModalUpdating\"></button>\n    </header>\n    <section class=\"modal-card-body\">\n      <form [formGroup]=\"createWelcomeFlowItem\">\n\n       <div class=\"input-container no-style\">\n         \t<div class=\"label\">Module Message *\t</div>\n         \t<div class=\"field\">\n         \t\t<tag-input (onFocus)=\"msg_welcome_err = true\" class='tooltip' formControlName=\"msg\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Msgs'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"msg_welcome_err && createWelcomeFlowItem.value.msg.length==0\">Specify atleast one message! </div>\n       </div>\n    </form>\n\n\n    </section>\n    <footer class=\"modal-card-foot\">\n      <a class=\"button is-success\" (click)=\"editWelcomeFlowItem() && msg_welcome_err = true\" [class.is-loading]=\"isWelcomeModalUpdating\">Save changes</a>\n      <a class=\"button\" (click)=\"isMelcomeModal = false\" *ngIf=\"!isWelcomeModalUpdating\">Cancel</a>\n    </footer>\n  </div>\n</div>\n\n\n\n<!-- final add modal -->\n\n<div class=\"modal is-active\" *ngIf=\"isFinalModal\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card anim zoomIn\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Final Action</p>\n      <button class=\"delete\" (click)=\"isFinalModal = false\" *ngIf=\"!isFinalModalUpdating\"></button>\n    </header>\n    <section class=\"modal-card-body\">\n      <form [formGroup]=\"createFinalFlowItem\">\n\n       <div class=\"input-container no-style\">\n         \t<div class=\"label\">Module Message *\t</div>\n         \t<div class=\"field\">\n         \t\t<tag-input (onFocus)=\"msg_final_err = true\" class='tooltip' formControlName=\"msg\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Msgs'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"msg_final_err && createFinalFlowItem.value.msg.length==0\">Specify atleast one message! </div>\n       </div>\n    </form>\n\n\n    </section>\n    <footer class=\"modal-card-foot\">\n      <a class=\"button is-success\" (click)=\"editFinalFlowItem() && msg_final_err = true\" [class.is-loading]=\"isFinalModalUpdating\">Save changes</a>\n      <a class=\"button\" (click)=\"isFinalModal = false\" *ngIf=\"!isFinalModalUpdating\">Cancel</a>\n    </footer>\n  </div>\n</div>\n\n\n\n\n<!-- flow item confirm delete modal -->\n\n\n<div class=\"modal is-active\" *ngIf=\"flowItemDeleteStatus.isModal\">\n  <div class=\"modal-background\" (click)=\"flowItemDeleteStatus.isModal = false\"></div>\n  <div class=\"modal-content\">\n     <div class=\"card anim zoomIn\">\n\t\t  <div class=\"card-content\">\n\t\t    <div class=\"media\">\n\t\t      <div class=\"media-content\">\n\t\t        <p class=\"title is-4\">Confirm to Delete? </p>\n\t\t        <p class=\"subtitle is-6\">No longer available for recover!</p>\n\t\t      </div>\n\t\t    </div>\n\n\t\t    <div class=\"content\">\n\t\t      <a class=\"button is-primary\" [class.is-loading]=\"flowItemDeleteStatus.updating\" (click)=\"deleteFlowItem()\">Delete</a>\n\t\t      <a class=\"button is-danger is-outlined\" (click)=\"flowItemDeleteStatus.isModal = false\" [class.is-disabled]=\"flowItemDeleteStatus.updating\">Cancel</a>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n  </div>\n  <button class=\"modal-close\" (click)=\"flowItemDeleteStatus.isModal = false\"></button>\n</div>\n\n\n\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "\n\t<div class=\"columns\">\n\n\t  <div class=\"column is-3 \">\n         <aside class=\"menu\">\n\t\t  <p class=\"menu-label\">\n\t\t    Services\n\t\t  </p>\n\t\t  <ul class=\"menu-list\">\n\t\t    <li><a [class.is-active]=\"tab == 'email'\" (click)=\"changeTab('email')\">Email</a></li>\n\t\t    <li><a [class.is-active]=\"tab == 'api'\" (click)=\"changeTab('api')\">Api</a></li>\n\t\t  </ul>\n\t\t  \n\t\t</aside>\n\t  </div>\n\n\t  <div class=\"column is-9\">\n\n\t    \n        <div *ngIf=\"tab == 'email'\"> <!-- email tab start -->\n        <div class=\"align-right\">\n\t    \t<a class=\"button is-primary is-outlined anim-9 {{email_service_indi}}\" (click)=\"openEmailServiceModal('insert', -1)\">\n\t\t    \t<span class=\"icon\">\n\t\t\t\t\t   <i class=\"fa fa-plus\"></i>\n\t\t\t    </span>\n\t\t        <span> New Email Service</span>\n\t       </a>\n\t    </div>\n\t    <br/>\n\n\t    <article class=\"message is-primary\" *ngIf=\"!ServicesData.services.email || ServicesData.services.email == 0\">\n\t\t\t\t\t  <div class=\"message-body\">\n\t\t\t\t\t     No Email Services found!,  click on <span class=\"tag is-info add-email-service-indicater\"  (mouseleave)=\"email_service_indi = ''\" (mouseenter)=\"email_service_indi = 'wobble'\">New Email Service</span> to add services.\n\t\t\t\t\t  </div>\n\t   </article>\n\n\n\n\t    <div class=\"columns is-multiline anim sliceInUp\">  \n\t\t  <div class=\"column is-6\" *ngFor=\"let item of ServicesData.services.email; let $i = index;\">\n           \n           <div class=\"card\">\n\t\t\t  <div class=\"card-content\">\n\t\t\t    <div class=\"media\">\n\t\t\t      <div class=\"media-left\">\n\t\t\t        <figure class=\"image is-24x24\">\n\t\t\t          <span class=\"icon\">\n\t\t\t\t\t\t  <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n\t\t\t\t\t </span>\n\t\t\t        </figure>\n\t\t\t      </div>\n\t\t\t      <div class=\"media-content\">\n\t\t\t        <p class=\"title is-6\">{{item.name}}</p>\n\t\t\t      </div>\n\t\t\t    </div>\n                <hr class=\"hr\" />\n\t\t\t    <div class=\"content\">\n\t\t\t      <div class=\"ellipsis\">To : <span *ngFor=\"let to of item.to\"><span class=\"tag is-light\">{{to}}</span> &nbsp;</span></div>\n\t\t\t      <hr class=\"hr\" />\n\t\t\t      <div class=\"ellipsis\">Subject : <small>{{item.subject}}</small></div>\n\t\t\t       <hr class=\"hr\" />\n\t\t\t      <div class=\"ellipsis\">Body : <small>{{item.body}}</small></div>\n\t\t\t      <hr class=\"hr\"/>\n\t\t\t      <div>\n\t\t\t      \t<a class=\"button is-success is-small is-outlined\" (click)=\"openEmailServiceModal('edit', $i)\">Edit</a>\n\t\t\t\t\t<a class=\"button is-danger is-small is-outlined\" (click)=\"openDeleteEmailServiceModal($i)\">Delete</a>\n\t\t\t\t </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t </div>\n\t\t</div> \n\t\t</div>  <!-- email tab end -->\n\n\n\t\t<div class=\"columns is-multiline anim sliceInUp align-center flex-center\" *ngIf=\"tab == 'api'\"> \n\t\t   \n            <article class=\"message is-warning\">\n\t\t\t  <div class=\"message-header\">\n\t\t\t    <p>Sorry, Api services are not supported in this version!</p>\n\t\t\t    <button class=\"delete\"></button>\n\t\t\t  </div>\n\t\t\t  <div class=\"message-body\">\n\t\t\t    Api Service's are available from very next release..\n\t\t\t  </div>\n\t\t\t</article>\n\n\t\t</div>\n\n\t  </div>\n\t</div>    \n\n\n\n\n\n\n\n\n\n\n\t<!-- email servive edit modal -->\n\n<div class=\"modal is-active\" *ngIf=\"isEditEmailServiceModal\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card anim zoomIn\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">{{emailServiceEditStatus.mode | uppercase}} Email Service</p>\n      <button class=\"delete\" (click)=\"isEditEmailServiceModal = false\" *ngIf=\"!isWelcomeModalUpdating\"></button>\n    </header>\n    <section class=\"modal-card-body\">\n      <form [formGroup]=\"emailServiceForm\">\n\n      <div class=\"input-container\">\n         \t<div class=\"label\">Name of the email Service *\t</div>\n         \t<div class=\"field\">\n         \t\t<input formControlName=\"name\" type='text' />\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"emailServiceFormErr || emailServiceFormErrors.name\">{{emailServiceFormErrors.name}}</div>\n       </div>\n\n\n\n       <div class=\"input-container no-style\">\n         \t<div class=\"label\">Recipients *\t</div>\n         \t<div class=\"field\">\n         \t\t<tag-input (onFocus)=\"msg_welcome_err = true\" class='tooltip' formControlName=\"to\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Recipients'\" [editable]=\"true\" [modelAsStrings]=\"true\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"emailServiceFormErr || emailServiceFormErrors.to\">{{emailServiceFormErrors.to}} </div>\n       </div>\n\n\n       <div class=\"input-container\">\n         \t<div class=\"label\">Email Subject *\t</div>\n         \t<div class=\"field\">\n         \t\t<input formControlName=\"subject\" type='text' />\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"emailServiceFormErr || emailServiceFormErrors.subject\">{{emailServiceFormErrors.subject}}</div>\n       </div>\n\n\n       <div class=\"input-container\">\n         \t<div class=\"label\">Email Body *\t</div>\n         \t<div class=\"field\">\n         \t\t<textarea formControlName=\"body\" rows=\"5\" class=\"mail-body-textarea\"></textarea>\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"emailServiceFormErr || emailServiceFormErrors.body\">{{emailServiceFormErrors.body}}</div>\n       </div>\n\n\n    </form>\n\n\n\n    </section>\n    <footer class=\"modal-card-foot\">\n      <a class=\"button is-success tooltip\"  [class.is-disabled]=\"(emailServiceForm.invalid)\" (click)=\"updateEmailService()\" [class.is-loading]=\"emailServiceEditStatus.updating\">{{emailServiceEditStatus.mode | uppercase}}\n       <span class=\"tooltiptext\" *ngIf=\"(emailServiceForm.invalid)\">Fill are required fields(*)</span> \n      </a>\n      <a class=\"button\" (click)=\"isEditEmailServiceModal = false\" [class.is-disabled]=\"emailServiceEditStatus.updating\" >Cancel</a>\n    </footer>\n  </div>\n</div>\n\n<!-- email service  delete modal -->\n\n\n<div class=\"modal is-active\" *ngIf=\"emailServiceDeleteStatus.isModal\">\n  <div class=\"modal-background\" (click)=\"emailServiceDeleteStatus.isModal = false\"></div>\n  <div class=\"modal-content\">\n     <div class=\"card anim zoomIn\">\n\t\t  <div class=\"card-content\">\n\t\t    <div class=\"media\">\n\t\t      <div class=\"media-content\">\n\t\t        <p class=\"title is-4\">Confirm to Delete? </p>\n\t\t        <p class=\"subtitle is-6\">No longer available for recover!</p>\n\t\t      </div>\n\t\t    </div>\n\n\t\t    <div class=\"content\">\n\t\t      <a class=\"button is-primary\" [class.is-loading]=\"emailServiceDeleteStatus.updating\" (click)=\"deleteEmailService()\">Delete</a>\n\t\t      <a class=\"button is-danger is-outlined\" (click)=\"emailServiceDeleteStatus.isModal = false\" [class.is-disabled]=\"emailServiceDeleteStatus.updating\">Cancel</a>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n  </div>\n  <button class=\"modal-close\" (click)=\"emailServiceDeleteStatus.isModal = false\"></button>\n</div>"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    origin: '/',
    host: "https://botflow.herokuapp.com/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div class=\"section container anim sliceInUp\">\n\t<div class=\"columns\">\n\t  <div class=\"column is-3 r-border\">\n         <h1 class=\"title\">New Flow</h1>\n\t\t <h2 class=\"subtitle\">Add flow to your bot</h2>\n\t  </div>\n\t  <div class=\"column\">\n\n      <form [formGroup]=\"createForm\" >\n\n         <div class=\"input-container\">\n         \t<div class=\"label\">Flow Name</div>\n         \t<div class=\"field\">\n         \t\t<input type=\"text\" name=\"\" formControlName=\"name\"/>\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"formErrors.name\">{{formErrors.name}}</div>\n         </div>\n\n\n         <div class=\"input-container no-style\">\n         \t<div class=\"label\">Flow Mathes</div>\n         \t<div class=\"field\">\n\n         \t\t<tag-input class='tooltip' formControlName=\"matches\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Items'\" (onAdd)=\"onItemAdded($event)\" [editable]=\"true\" [modelAsStrings]=\"true\" [(ngModel)]='matches'>  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n            \n         \t<div class=\"err\" *ngIf=\"formErrors.matches\">{{formErrors.matches}}</div>\n         </div>\n\n\n         <a class=\"button is-success is-loading\" [class.is-disabled]=\"!createForm.valid\" (click)=\"createFlow()\" [class.is-loading]=\"isCreating\">Create</a> \n         <a class=\"button\" [routerLink]=\"['/dashboard']\">Cancel</a>\n\n\t  </form>\t\t\n\n\t\t\t\n\t  \t\n\t  </div>\n\t </div>\n</div>\t  "

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<div class=\"section container anim sliceInUp\">\n\t<div class=\"columns\">\n\t  <div class=\"column is-3 r-border\">\n         <h1 class=\"title\">New Menu</h1>\n\t\t <h2 class=\"subtitle\">Add Menu's to your bot</h2>\n\t  </div>\n\t  <div class=\"column\">\n\n      <form [formGroup]=\"addMenuForm\" >\n\n         <div class=\"input-container\">\n         \t<div class=\"label\">Menu Name</div>\n         \t<div class=\"field\">\n         \t\t<input type=\"text\" name=\"\" formControlName=\"name\" [(ngModel)]=\"formVars.name\" autofocus=\"true\" />\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"formErrors.name\">{{formErrors.name}}</div>\n         </div>\n\n\n         <div class=\"input-container no-style\">\n         \t<div class=\"label\">Menu Matches</div>\n         \t<div class=\"field\">\n\n         \t\t<tag-input class='tooltip' formControlName=\"matches\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Items'\" (onAdd)=\"onItemAdded($event)\" [editable]=\"true\" [modelAsStrings]=\"true\" [(ngModel)]=\"formVars.matches\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n            \n         \t<div class=\"err\" *ngIf=\"formErrors.matches\">{{formErrors.matches}}</div>\n         </div>\n\n\n\n         <div class=\"input-container\">\n         \t<div class=\"label\">Menu Type</div>\n         \t<div class=\"field\">\n         \t\t<span class=\"select\">\n\t\t\t      <select formControlName=\"type\">\n\t\t\t        <option *ngFor=\"let t of Strings.menuTypes\" value=\"{{t.value}}\">{{t.title}}</option>\n\t\t\t      </select>\n\t\t\t    </span>\n         \t</div>\n         \t<div class=\"err\" *ngIf=\"formErrors.type\">{{formErrors.type}}</div>\n         </div>\n\n\n         <div class=\"input-container no-style\">\n         \t<div class=\"label\">Menu Items</div>\n         \t<div class=\"field\">\n\n         \t\t<tag-input class='tooltip' formControlName=\"menus\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Items'\" (onAdd)=\"onItemAdded($event)\" [editable]=\"true\" [modelAsStrings]=\"true\" [(ngModel)]=\"formVars.menus\">  \n                 <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n               </tag-input>\n         \t</div>\n            \n         \t<div class=\"err\" *ngIf=\"formErrors.menus\">{{formErrors.menus}}</div>\n         </div>\n\n\n\n\n\n         <a class=\"button is-success is-loading\" [class.is-disabled]=\"!addMenuForm.valid\" (click)=\"updateMenu()\" [class.is-loading]=\"formStatus.updating\">Create</a> \n         <a class=\"button\" [routerLink]=\"['/dashboard']\" [class.is-disabled]=\"formStatus.updating\">Cancel</a>\n\n\t  </form>\t\t\n\n\t\t\t\n\t  \t\n\t  </div>\n\t </div>\n</div>\t  \n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n\n<dashboard-header></dashboard-header>\n\n<!-- sub nav -->\n<nav class=\"force-padding nav\">\n <div class=\"container\">\n\t\t  <div class=\"nav-left\">\n\t\t  </div>\n\n\t\t  <div class=\"nav-center\">\n\t\t  </div>\n\n\t\t  <div class=\"nav-right\">\n\t\t\t\t    <div class=\"nav-item\">\n\t\t\t\t      <div class=\"field is-grouped\">\n\t\t\t\t        <p class=\"control\">\n\t\t\t\t          <a [routerLink]=\"['add-flow']\" class=\"button is-primary is-outlined\" id=\"add_flow\">\n\t\t\t\t            <span class=\"icon\">\n\t\t\t\t              <i class=\"fa fa-plus\"></i>\n\t\t\t\t            </span>\n\t\t\t\t            <span>Add Flow</span>\n\t\t\t\t          </a>\n\t\t\t\t        </p>\n\t\t\t\t        <p class=\"control\">\n\t\t\t\t          <a [routerLink]=\"['add-menu']\" class=\"button is-primary is-outlined\" id=\"add_menu\">\n\t\t\t\t            <span class=\"icon\">\n\t\t\t\t              <i class=\"fa fa-plus\"></i>\n\t\t\t\t            </span>\n\t\t\t\t            <span>Add Menu</span>\n\t\t\t\t          </a>\n\t\t\t\t        </p>\n\t\t\t\t      </div>\n\t\t\t\t   </div>\n\t\t  </div>\n\t</div>\t  \n</nav>\n<!-- sub nav end --> \n\n\n\n<router-outlet></router-outlet>\n\n</div>\n\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n        <strong>botflow</strong> | The website content\n        is licensed <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">CC ANS 4.0</a>.\n      </p>\n\n      <span hresf=\"http://localhost:3000/ui-manager\">botflow @ 2017-2018</span> | <a href=\"ui-manager\">Material Dashboard</a>\n    </div>\n  </div>\n</footer>\n\n\n\n"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav hero iss-primary\" [class.at-top]=\"atTop\">\n <div class=\"container\">\n\t\t  <div class=\"nav-left\">\n\t\t    <a class=\"nav-item\" [routerLink]=\"['/']\">\n\t\t      <h2 class=\"subtitle _title\">botflow</h2>\n\t\t    </a>\n\t\t  </div>\n\n\t\t  <div class=\"nav-center\">\n\t\t    <!-- <a class=\"nav-item\">\n\t\t      <span class=\"icon\">\n\t\t        <i class=\"fa fa-github\"></i>\n\t\t      </span>\n\t\t    </a> -->\n\t\t    <a class=\"nav-item\" href=\"https://twitter.com/Vinayvnvv\" target=\"_blank\">\n\t\t      <span class=\"icon\" >\n\t\t        <i class=\"fa fa-twitter\"></i>\n\t\t      </span>\n\t\t    </a>\n\t\t  </div>\n\n\t\t  <!-- This \"nav-toggle\" hamburger menu is only visible on mobile -->\n\t\t  <!-- You need JavaScript to toggle the \"is-active\" class on \"nav-menu\" -->\n\t\t  <span class=\"nav-toggle\" (click)=\"isMenu = !isMenu\" [class.is-active] = \"isMenu\">\n\t\t    <span></span>\n\t\t    <span></span>\n\t\t    <span></span>\n\t\t  </span>\n\n\t\t  <!-- This \"nav-menu\" is hidden on mobile -->\n\t\t  <!-- Add the modifier \"is-active\" to display it on mobile -->\n\t\t  <div class=\"nav-right nav-menu\" [class.is-active] = \"isMenu\">\n\t\t    <a class=\"nav-item\" [routerLink]=\"['/dashboard']\">\n\t\t      Home\n\t\t    </a>\n\t\t    <!-- <a class=\"nav-item button is-light\">\n\t\t      Documentation\n\t\t    </a> -->\n\t\t    <a class=\"nav-item\">\n\t\t      <span class=\"icon is-small\">\n\t\t              <i class=\"fa fa-google\"></i>\n\t\t      </span>&nbsp;\n\t\t      {{rootScope._auth_user.name}}\n\t\t      <span class=\"icon\">\n\t\t              <i class=\"fa fa-angle-down\"></i>\n\t\t      </span>\n\t\t    </a>\n\n\t\t    <div class=\"nav-item\">\n\t\t      <div class=\"field is-grouped\">\n\t\t        <p class=\"control\">\n\t\t          <a class=\"button is-primary\" (click)=\"isGetBotModal = true\">\n\t\t            <span class=\"icon is-small\">\n\t\t              <i class=\"fa fa-code\"></i>\n\t\t            </span>\n\t\t            <span>Get Bot</span>\n\t\t          </a> &nbsp;\n\t\t          <a class=\"button iss-primary iss-inverted iss-outlined\" (click)=\"logout()\" >\n\t\t            <span class=\"icon is-small\">\n\t\t              <i class=\"fa fa-power-off\"></i>\n\t\t            </span>\n\t\t            <span>Logout</span>\n\t\t          </a>\n\t\t        </p>\n\t\t        <!-- <p class=\"control\">\n\t\t          <a class=\"button is-primary\">\n\t\t            <span class=\"icon\">\n\t\t              <i class=\"fa fa-download\"></i>\n\t\t            </span>\n\t\t            <span>Download</span>\n\t\t          </a>\n\t\t        </p> -->\n\t\t      </div>\n\t\t    </div>\n\t\t  </div>\n\t</div>\t  \n</nav>\n\n<app-get-bot [(open)]=\"isGetBotModal\"></app-get-bot>"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\n\n\n\n\n\t<div class=\"columns\">\n\t  <div class=\"column is-3 r-border\">\n\t    \n\t    <div stick-from-top=\"0\">\n\t     \t<aside class=\"menu\">\n\t\t\t\t  <p class=\"menu-label\">\n\t\t\t\t    SELECT TYPE\n\t\t\t\t  </p>\n\t\t\t\t  <ul class=\"menu-list\">\n\t\t\t\t    <li><a class=\"{{isFlowTab}}\" (click)=\"filterModules('flow')\">Flows</a></li>\n\t\t\t\t    <li><a class=\"{{isMenuTab}}\" (click)=\"filterModules('menu')\">Menu's</a></li>\n\t\t\t\t  </ul>\n\t\t\t\t  <!-- <p class=\"menu-label\">\n\t\t\t\t    Administration\n\t\t\t\t  </p>\n\t\t\t\t  <ul class=\"menu-list\">\n\t\t\t\t    <li><a>Team Settings</a></li>\n\t\t\t\t    <li>\n\t\t\t\t      <a class=\"is-active\">Manage Your Team</a>\n\t\t\t\t      <ul>\n\t\t\t\t        <li><a>Members</a></li>\n\t\t\t\t        <li><a>Plugins</a></li>\n\t\t\t\t        <li><a>Add a member</a></li>\n\t\t\t\t      </ul>\n\t\t\t\t    </li>\n\t\t\t\t    <li><a>Invitations</a></li>\n\t\t\t\t    <li><a>Cloud Storage Environment Settings</a></li>\n\t\t\t\t    <li><a>Authentication</a></li>\n\t\t\t\t  </ul>\n\t\t\t\t  <p class=\"menu-label\">\n\t\t\t\t    Transactions\n\t\t\t\t  </p>\n\t\t\t\t  <ul class=\"menu-list\">\n\t\t\t\t    <li><a>Payments</a></li>\n\t\t\t\t    <li><a>Transfers</a></li>\n\t\t\t\t    <li><a>Balance</a></li>\n\t\t\t\t  </ul> -->\n\t\t\t</aside>\n\t\t</div>\t\n\n\t  </div>\n\t  <div class=\"column\">\n\n\t  <!-- <sub-loader *ngIf=\"!Modules\" loader-title=\"Loading Modules..\"></sub-loader> -->\n\t  <app-modules-loader *ngIf=\"!Modules\"></app-modules-loader>\n\n\t  <div *ngIf=\"Modules && filteredModulesData.length == 0 \" class=\"no-items-indi\">\n\t  \t\t<article class=\"message is-primary\">\n\t\t\t  <div class=\"message-body\">\n\t\t\t     <span *ngIf=\"isFlowTab == 'is-active'\">No Flows are added!,  click on <span class=\"tag is-info add-flow-indicater\" (mouseleave)=\"indicateUser('leave', 'flow')\" (mouseenter)=\"indicateUser('enter', 'flow')\">Add Flow</span> button to add Flows.</span>\n\n\t\t\t     <span *ngIf=\"isMenuTab == 'is-active'\">No Menu's are added!,  click on <span class=\"tag is-info add-flow-indicater\" (mouseleave)=\"indicateUser('leave', 'menu')\" (mouseenter)=\"indicateUser('enter', 'menu')\">Add Menu</span> button to add Menu's.</span>\n\n\t\t\t  </div>\n\t\t\t</article>\n\t  </div>\n\t    \n           \n\n           <div class=\"columns is-multiline\">\n\t\t\t  <div class=\"column is-6 anim-4 sliceInUp\" *ngFor=\"let item of filteredModulesData\" >\n\t\t   <div class=\"list-card\" >\n\t\t   \t\t<div class=\"header\">\n                 \t<h5 class=\"title is-5\" [routerLink]=\"item.type == 'flow' ? ['flow-item', item._id] : ['menu', item._id]\">{{item.name}}</h5>\n\t\t   \t\t</div>\n\t\t   \t\t<div class=\"content\">\n\t\t   \t\t\t<div class=\"matches\">\n\t\t   \t\t\t\t<span class=\"item border-top-primary\" *ngFor=\"let m of item.matches\">{{m}}</span>\n\t\t   \t\t\t</div>\n\t\t   \t\t\t<div class=\"details\">\t\n\t\t   \t\t\t\t<div class=\"row\"><span class=\"icon is-small\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></span> Created at: <b>{{item.timestamp_created.at | amTimeAgo}}</b></div>\n\t\t   \t\t\t\t<div class=\"row\"><span class=\"icon is-small\"><i class=\"fa fa-check-square\" aria-hidden=\"true\"></i></span> Triggerd <b>{{item.statastics.triggered}}</b> times</div>\n\t\t   \t\t\t\t<div class=\"row\" *ngIf=\"item.statastics.triggered>0\"><span class=\"icon is-small\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></span> Last triggered <b>{{item.statastics.triggeredAt | amTimeAgo}}</b></div>\n\t\t   \t\t\t</div>\n\t\t   \t\t</div>\n\t\t   \t\t<div class=\"footer\">\n\t\t   \t\t\t   <a class=\"button is-small is-info is-outlined\" [routerLink]=\"item.type == 'flow' ? ['flow-item', item._id] : ['menu', item._id]\">\n\t\t\t\t\t    <span class=\"icon is-small \">\n\t\t\t\t\t      <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t    </span>\n\t\t\t\t\t    <span>Edit</span>\n\t\t\t\t\t  </a>\n\t\t\t\t\t  <a class=\"button is-small is-primary is-outlined\">\n\t\t\t\t\t    <span class=\"icon is-small \">\n\t\t\t\t\t      <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\n\t\t\t\t\t    </span>\n\t\t\t\t\t    <span>Copy</span>\n\t\t\t\t\t  </a>\n\n\t\t\t\t\t  <a class=\"button is-small is-danger is-outlined\" (click)=\"openDeleteModuleModal(item._id)\">\n\t\t\t\t\t    <span class=\"icon is-small\">\n\t\t\t\t\t     <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t    </span>\n\t\t\t\t\t    <span>Delete</span>\n\t\t\t\t\t  </a>\n\t\t   \t\t</div>\n\t\t   </div>\n\n\t\t </div>\n\t\t   </div>\n\n\n         \n\n\n\n\t  </div>\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n<!-- email service  delete modal -->\n\n\n<div class=\"modal is-active\" *ngIf=\"moduleDeleteStatus.isModal\">\n  <div class=\"modal-background\" (click)=\"moduleDeleteStatus.isModal = false\"></div>\n  <div class=\"modal-content\">\n     <div class=\"card anim zoomIn\">\n\t\t  <div class=\"card-content\">\n\t\t    <div class=\"media\">\n\t\t      <div class=\"media-content\">\n\t\t        <p class=\"title is-4\">Confirm to Delete? </p>\n\t\t        <p class=\"subtitle is-6\">No longer available for recover!</p>\n\t\t      </div>\n\t\t    </div>\n\n\t\t    <div class=\"content\">\n\t\t      <a class=\"button is-primary\" [class.is-loading]=\"moduleDeleteStatus.updating\" (click)=\"deleteModule()\">Delete</a>\n\t\t      <a class=\"button is-danger is-outlined\" (click)=\"moduleDeleteStatus.isModal = false\" [class.is-disabled]=\"moduleDeleteStatus.updating\">Cancel</a>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n  </div>\n  <button class=\"modal-close\" (click)=\"moduleDeleteStatus.isModal = false\"></button>\n</div>"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\n\t<div class=\"columns\">\n\t  <div class=\"column is-3 r-border\">\n\t    <div stick-from-top=\"0\">\n         <nav class=\"panel\">\n\t\t\t  <p class=\"panel-heading\">\n\t\t\t    {{menuData.name || 'Loading...'}}\n\t\t\t  </p>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"isLoadingMenu\">\n\t\t\t  \t<div class=\"loader-bar\"></div>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block is-active flex-wrap\" *ngIf=\"!isLoadingMenu\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-share\"></i>\n\t\t\t    </span>\n\t\t\t    <span class=\"tag\" *ngFor=\"let mt of menuData.matches\">{{mt}}&nbsp;</span>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingMenu\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-clock-o\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Created at: {{menuData.timestamp_created.at | amTimeAgo}}</small>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingMenu\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-clock-o\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Modified at: {{menuData.timestamp_updated.at | amTimeAgo}}</small>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingMenu && menuData.statastics\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-check-square\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Triggerd: {{menuData.statastics.triggered || '0'}} times</small>\n\t\t\t  </span>\n\t\t\t  <span class=\"panel-block\" *ngIf=\"!isLoadingMenu && menuData.statastics && menuData.statastics.triggered>0\">\n\t\t\t    <span class=\"panel-icon\">\n\t\t\t      <i class=\"fa fa-clock-o\"></i>\n\t\t\t    </span>\n\t\t\t    <small>Last Triggerd: {{menuData.statastics.triggeredAt | amTimeAgo}} ago</small>\n\t\t\t  </span>\n\t</nav>\n\t\t</div> \n\t  </div>\n\t  <div class=\"column\">\n\n\t  \n\n\t  \t<div class=\"tabs\">\n\t\t  <ul>\n\t\t    <li class=\"is-active\"><a>Menu</a></li>\n\t\t  </ul>\n\t\t</div>\n\n\t\t<div>\n\t\t     <sub-loader *ngIf=\"isLoadingMenu\" loader-title=\"Loading Flow..\"></sub-loader>\n          <div *ngIf=\"!isLoadingMenu\">\n\t\t     <aside class=\"menu anim-4 sliceInUp\" >\n\t\t\t\t  <p class=\"menu-label\">\n\t\t\t\t    Menu Items\n\t\t\t\t  </p>\n\t\t\t\t  <ul class=\"menu-list\">\n\t\t\t\t    <li *ngFor=\"let m of menuData.menus; let $i = index;\">\n\t\t\t\t      <div class=\"loader-bar\" *ngIf=\"editable[$i] && editMenuStatus.updating\"></div>\n\t\t\t\t    \t<a *ngIf=\"!editable[$i] && !deletable[$i]\" class=\"anim-3 slideInDown\" >{{m}} \n\t\t\t\t\t    \t<span class=\"icon is-small\" (click)=\"showDeleteForm($i)\">\n\t\t\t\t\t\t      <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t    </span>\n\t\t\t\t\t\t    <span class=\"icon is-small\" (click)=\"showEditableForm($i)\">\n\t\t\t\t\t\t      <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t    </span>\n\n\t\t\t\t\t    </a>\n\t\t\t\t\t    <a *ngIf=\"deletable[$i]\" class=\"anim-3 slideInUp\" [class.is-disabled]=\"editMenuStatus.updating\">\n                          {{m}}\n                          <a class=\"button is-danger is-outlined is-small ad-action-del anim-4 slideInLeft\" (click)=\"deleteItem($i)\" [class.is-loading]=\"editMenuStatus.updating\">Confirm Delete</a>\n\n\t\t\t\t\t    </a>\n\t\t\t\t\t    <a *ngIf=\"editable[$i]\" class=\"anim-3 slideInUp\" [class.is-disabled]=\"editMenuStatus.updating\">\n\t\t\t\t\t    \t<input type=\"text\" [(ngModel)]=\"editMenu[$i]\" value=\"{{menuData.menus[$i]}}\"/>\n\t\t\t\t\t    \t\n\t\t\t\t\t\t    <span class=\"icon is-small\" (click)=\"cancelEditableForm()\"  >\n\t\t\t\t\t\t      <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t    </span>\n\n\t\t\t\t\t\t    <span class=\"icon is-small\" (click)=\"updateMenuItem($i)\" [class.is-disabled]=\"editMenu[$i].length == 0\">\n\t\t\t\t\t\t      <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t    </span>\n\t\t\t\t\t    </a>\n\t\t\t\t\t    <div class=\"err\" *ngIf=\"editable[$i] && editMenu[$i].length == 0\">\n\t\t\t\t\t      <span class=\"tag is-danger anim-2 slideInDown\">Cannot be blank!</span>\n\t\t\t\t\t    </div>\n  \t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t     </aside>\n             <br/>\n\t\t     <a class=\"button is-info is-outlined is-small\" (click)=\"addMenuItem()\">\n\t\t     \t<span class=\"icon is-small\">\n\t\t\t      <i class=\"fa fa-plus\"></i>\n\t\t\t    </span>\n\t\t\t    <span>Add items</span>\n\t\t\t </a>\n\n         </div>\n\n\t\t</div>\n\n\t    \n\n      \n\t\t\t\n\t  \t\n\t  </div>\n\t </div>\n</div>\t  \n\n\n\n\n\n\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline _md_ldr\">\n\t<div class=\"column is-6 _itm\" *ngFor=\"let item of [0]\">\n\t\t<div class=\"_ldr\">\n\t\t\t<div class=\"_ttl reading-loader\"></div>\n\t\t\t<div class=\"_mtc\">\n\t\t\t\t<div *ngFor=\"let item of [0,1,2,3]\" class=\"reading-loader\"></div>\n\t\t\t</div>\n\t\t\t<div class='_othr'>\n\t\t\t\t<div *ngFor=\"let item of [0,1,2]\" class=\"reading-loader\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal is-active\" *ngIf=\"open\">\n  <div class=\"modal-background\" (click)=\"closeModal()\"></div>\n  <div class=\"modal-content\">\n\n    <div *ngIf=\"view == 'code'\">\n       <header class=\"modal-card-head\">\n        <p class=\"modal-card-title\">Get Your Bot</p>\n        <button class=\"delete\" (click)=\"closeModal()\"></button>\n      </header>\n      <section class=\"modal-card-body\">\n        <h6 class=\"subtitle is-6\">Copy below snippet and paste in to your application to run the bot!</h6>\n        <code class=\"\" style=\"background-color: #f5f5f5;color:#777\"> \n          &#60;<span style=\"color: green\">script</span> <span style=\"color: #08c\">chat-bot-id</span>=\"<span style=\"color: #800\">{{chat_bot_id}}</span>\" <span style=\"color: #08c\">type</span>=\"<span style=\"color: #800\">text/javascript</span>\" <span style=\"color: #08c\">src</span>=\"<span style=\"color: #800\">{{(host == 'localhost') ? origin : host }}bot/build/script_prod-min.js</span>\"&#62;&#60;/<span style=\"color: green\">script</span>&#62;\n         </code>\n\n         <br/><br/>\n          <a class=\"button is-info\" (click)=\"goView('setup')\">Setup Bot</a>\n\n\n      </section>\n      <footer class=\"modal-card-foot\">\n        <a class=\"button is-success\" *ngIf=\"false\">Save changes</a>\n        <a class=\"button\" (click)=\"closeModal()\" >Cancel</a>\n      </footer>\n  </div>\n\n  <div *ngIf=\"view == 'setup'\">\n      <header class=\"modal-card-head\">\n        <p class=\"modal-card-title\">SetUp Bot</p>\n        <button class=\"delete\" (click)=\"closeModal()\"></button>\n      </header>\n      <section class=\"modal-card-body\">\n\n\n          <sub-loader *ngIf=\"isLoadingInitData\" loader-title=\"Getting Bot Configuration..\"></sub-loader>\n        \n          <div *ngIf=\"!isLoadingInitData\">\n            <form [formGroup]=\"botSetUpForm\" >\n            <section class=\"section _section\">\n              <h3 class=\"title is-4\">Intializers</h3>\n\n              <div class=\"input-container\">\n                  <div class=\"label\">Bot name in ToolBar</div>\n                  <div class=\"field\">\n                    <input type=\"text\" name=\"\" formControlName=\"bot_name\" [(ngModel)]=\"formVars.bot_name\"/>\n                  </div>\n                  <div class=\"err\" *ngIf=\"formErrors.bot_name\">{{formErrors.bot_name}}</div>\n              </div>\n\n\n              <div class=\"input-container no-style\">\n                  <div class=\"label\">Welcome messages</div>\n                  <div class=\"field\">\n\n                    <tag-input class='tooltip' formControlName=\"msg\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add msg'\"  [editable]=\"true\" [modelAsStrings]=\"true\" [(ngModel)]=\"formVars.msg\">  \n                         <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n                       </tag-input>\n                  </div>\n                    \n                  <div class=\"err\" *ngIf=\"formErrors.msg\">{{formErrors.msg}}</div>\n                 \n             </div>\n\n             <div class=\"input-container no-style\">\n                  <div class=\"label\">Suggestion Type</div>\n                  <div class=\"field\">\n                      <div class=\"input-container\">\n                        <span class=\"select\">\n                          <select formControlName=\"shortcut\" [(ngModel)]=\"formVars.shortcut\">\n                            <option *ngFor=\"let s of suggestionTypeArray\" value=\"{{s.value}}\">{{s.title}}</option>\n                         </select>\n                        </span>\n                      </div>\n               \n                  </div>\n                    \n                  <div class=\"err\" *ngIf=\"formErrors.shortcut\">{{formErrors.shortcut}}</div>\n\n                   <ul *ngIf=\"formVars.shortcut != suggestionTypeArray[0].value\">\n                      <tag-input (onFocus)=\"s_msg_sub_err = true\"  class='tooltip' formControlName=\"shortcutData\" [placeholder]=\"'+ Add'\" [secondaryPlaceholder]=\"'Add Suggestion Items *'\" [editable]=\"true\" [modelAsStrings]=\"true\" [(ngModel)]=\"formVars.shortcutData\">  \n                         <span class=\"tooltiptext\">Type and Press Enter to add items</span> \n                      </tag-input>                      \n                      <div class=\"err\" *ngIf=\"s_msg_sub_err && botSetUpForm.value.shortcutData.length == 0\" >\n                        <br/>{{validationMessages.shortcutData.required}}</div>\n                  </ul>\n             </div>\n\n\n\n            </section>\n\n            <section class=\"section _section\">\n              <h3 class=\"title is-4\">Theme Setting</h3>\n\n              <div class=\"input-container\">\n                  <div class=\"label\">Theme background color <span class=\"_clrpkrshw\" [style.background]=\"formVars.style.bgcolor\"></span></div>\n                  <div class=\"field\">\n                    <input type=\"text\" name=\"\" formControlName=\"bgcolor\" [(colorPicker)]=\"formVars.style.bgcolor\"  [value]=\"formVars.style.bgcolor\"/>\n                  </div>\n                  <div class=\"err\" *ngIf=\"formErrors.bgcolor\">{{formErrors.bgcolor}}</div>\n              </div>\n\n              <div class=\"input-container\">\n                  <div class=\"label\">Theme Text color <span class=\"_clrpkrshw\" [style.background]=\"formVars.style.color\"></span></div>\n                  <div class=\"field\">\n                    <input type=\"text\" name=\"\" formControlName=\"color\" [(colorPicker)]=\"formVars.style.color\"  [value]=\"formVars.style.color\"/>\n                  </div>\n                  <div class=\"err\" *ngIf=\"formErrors.color\">{{formErrors.color}}</div>\n              </div>\n\n              <div class=\"input-container\">\n                  <div class=\"label\">Bot Height (in %)</div>\n                  <div class=\"field\">\n                    <input type=\"text\" name=\"\" formControlName=\"height\" [(ngModel)]=\"formVars.style.height\"  />\n                  </div>\n                  <div class=\"err\" *ngIf=\"formErrors.height\">{{formErrors.height}}</div>\n              </div>\n\n              <div class=\"input-container\">\n                  <div class=\"label\">Bot Width</div>\n                  <div class=\"field\">\n                    <input type=\"text\" name=\"\" formControlName=\"width\" [(ngModel)]=\"formVars.style.width\"  />\n                  </div>\n                  <div class=\"err\" *ngIf=\"formErrors.width\">{{formErrors.width}}</div>\n              </div>\n\n\n            </section>\n          </form>\n        </div>\n\n\n\n      </section>\n      <footer class=\"modal-card-foot\">\n        <a class=\"button is-success\" [class.is-disabled]=\"!botSetUpForm.valid || isLoadingInitData || isUpdatingInitData\" (click)=\"updateBotSetupData()\" [class.is-loading]=\"isUpdatingInitData\">Save changes</a>\n        <a class=\"button\" (click)=\"goView('code')\">Cancel</a>\n      </footer>\n  </div>\n\n\n  </div>\n  <button class=\"modal-close\" (click)=\"closeModal()\"></button>\n</div>"

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n\t<div class='palx-bg is-hidden-mobile'></div>\n\t<nav class=\"nav hero is-primary\">\n\t <div class=\"container\">\n\t\t\t  <div class=\"nav-left\">\n\t\t\t    <a class=\"nav-item\">\n\t\t\t      <h2 class=\"subtitle _title\">botflow</h2>\n\t\t\t    </a>\n\t\t\t  </div>\n\n\t\t\t  <div class=\"nav-center\">\n\t\t\t  </div>\n\n\t\t\t  <!-- This \"nav-toggle\" hamburger menu is only visible on mobile -->\n\t\t\t  <span class=\"nav-toggle\" (click)=\"isMenu = !isMenu\" [class.is-active] = \"isMenu\">\n\t\t\t    <span></span>\n\t\t\t    <span></span>\n\t\t\t    <span></span>\n\t\t\t  </span>\n\t\t\t  <!-- Add the modifier \"is-active\" to display it on mobile -->\n\t\t\t  <div class=\"nav-right nav-menu\" [class.is-active] = \"isMenu\">\n\t\t\t    <a class=\"nav-item\" href=\"#features\">\n\t\t\t      <!-- <span class=\"icon\" >\n\t\t\t        <i class=\"fa fa-twitter\"></i>\n\t\t\t      </span> -->\n\t\t\t      Features\n\t\t\t    </a>\n\t\t\t    <a class=\"nav-item\" [routerLink]=\"['/dashboard']\">\n\t\t\t      <span class=\"icon is-small\">\n\t\t\t        <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i>\n\t\t\t      </span>&nbsp;\n\t\t\t      Manage\n\t\t\t    </a>\n\t\t\t  \t<a class=\"nav-item\" href=\"https://twitter.com/Vinayvnvv\" target=\"_blank\">\n\t\t\t      <span class=\"icon\" >\n\t\t\t        <i class=\"fa fa-twitter\"></i>\n\t\t\t      </span>\n\t\t\t    </a>\n\t\t\t    <div class=\"nav-item\">\n\t\t\t      <div class=\"field is-grouped\">\n\t\t\t        <p class=\"control\">\n\t\t\t          <a class=\"button is-primary is-inverted\" [routerLink]=\"['/dashboard']\" >\n\t\t\t            <span class=\"icon is-small\">\n\t\t\t              <i class=\"fa fa-power-off\"></i>\n\t\t\t            </span>\n\t\t\t            <span>Login</span>\n\t\t\t          </a>\n\t\t\t        </p>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t</div>\t  \n\t</nav>\n\t<section class=\"hero is-primary main-ad\">\n\t  <div class=\"hero-body\">\n\t    <div class=\"container\">\n\t      <div class=\"columns\">\n\t      \t<div class=\"column is-6 title-sec\">\n\t\t      <h1 class=\"title _ttl\">\n\t\t        Create Flows, Automate Queries & Help People!\n\t\t      </h1>\n\t\t      <h2 class=\"subtitle\">\n\t\t       An automated <b>chat-bots</b> based on the flows.\n\t\t      </h2>\n\t\t      <div>\n\t\t      \t<a class=\"button is-black iss-outlined\" [routerLink]=\"['/dashboard']\">Create for Free</a>&nbsp;&nbsp;\n\t\t      \t<a class=\"button is-primary is-inverted\" [routerLink]=\"['/dashboard']\">Register</a>\n\t\t      </div>\n\t\t    </div>\n\t\t    <div class=\"column is-6 img-sec is-hidden-mobile\">\n\t\t    \t<img src=\"assets/img/launch-bg.svg\"/>\n\t\t    </div>\n\t\t  </div>\n\t    </div>\n\t  </div>\n\t</section>\n\n\t<section class=\"features _pd\" id=\"features\">\n\t\t<div class=\"container\">\n\t\t   <div class=\"_ftrs _ovlpd\">\t\n\t\t\t\t<div class=\"_t_bar has-text-centered\">\n\t\t\t\t\t<h1 class=\"title _ttl has-text-weight-bold\">\n\t\t\t\t       Features\n\t\t\t\t    </h1>\n\t\t\t\t    <div class=\"_dvdr\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"columns is-multiline _bd\">\n\t\t\t\t\t<div class='column is-4 has-text-centered' *ngFor=\"let item of featuresData\">\n\t\t\t\t\t\t<div class=\"_itm\">\n\t\t\t\t\t\t\t<div class=\"_ic\">\n\t\t\t\t\t\t\t\t<i class=\"{{item.icon}}\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"_tt\">\n\t\t\t\t\t\t\t\t<h2 class=\"subtitle is-4\">{{item.name}}</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='_desc'>\n\t\t\t\t\t\t\t\t{{item.desc}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\n\t<div class=\"container _sections\">\n\t\t<section class=\"hero is-dark is-bold _shadow _nocode\">\n\t\t  <div class=\"hero-body\">\n\t\t  \t<div class=\"columns\">\n\t\t\t  \t<div class=\"column is-2 _ic\">\n\t\t\t  \t\t<b><i class=\"fa fa-code\" aria-hidden=\"true\"></i></b>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"column is-10\">\n\t\t\t  \t\t<h1 class=\"title\">\n\t\t\t\t       <b> One JS Snippet all that works!</b>\n\t\t\t\t    </h1>\n\t\t\t      <h2 class=\"subtitle\">\n\t\t\t        Just insert the snippet which will convert into your bot and auto will start.\n\t\t\t      </h2>\n\t\t\t  \t</div>\n\t\t\t  </div>\n\t\t      \n\t\t    </div>\n\t\t</section>\n\t</div>\n\n\t<section class=\"features\">\n\t\t<div class=\"container\">\n\t\t   <div class=\"_ftrs\">\t\n\t\t\t\t<div class=\"_t_bar has-text-centered\">\n\t\t\t\t\t<h1 class=\"title _ttl has-text-weight-bold\">\n\t\t\t\t       What's Special?\n\t\t\t\t    </h1>\n\t\t\t\t    <div class=\"_dvdr\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"columns is-multiline _bd\">\n\t\t\t\t\t<div class='column is-4 has-text-centered' *ngFor=\"let item of specialData\">\n\t\t\t\t\t\t<div class=\"_itm\">\n\t\t\t\t\t\t\t<div class=\"_ic\">\n\t\t\t\t\t\t\t\t<i class=\"{{item.icon}}\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"_tt\">\n\t\t\t\t\t\t\t\t<h2 class=\"subtitle is-4\">{{item.name}}</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='_desc'>\n\t\t\t\t\t\t\t\t{{item.desc}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<div class=\"container\">\n\t\t<section class=\"hero\" style=\"background-color: transparent;\">\n\t\t  <div class=\"hero-body\">\n\t\t    <div class=\" has-text-centered\">\n\t\t    \t<a class='button is-primary is-large _shadow' [routerLink]=\"['/dashboard']\">Create For Free</a>\n\t\t    </div>\n\t\t  </div>\n\t\t</section>\n\t</div>\n\n\t<footer class=\"footer\">\n\t  <div class=\"container\">\n\t    <div class=\"content has-text-centered\">\n\t      <p>\n\t        <strong>botflow</strong> | The website content\n\t        is licensed <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">CC ANS 4.0</a>.\n\t      </p>\n\n\t      <span hresf=\"http://localhost:3000/ui-manager\">botflow @ 2017-2018</span> | <a href=\"ui-manager\">Material Dashboard</a>\n\t    </div>\n\t  </div>\n\t</footer>\n\n\n</div>\n"

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\n  <nav class=\"nav\" style=\"background-color: transparent;\">\n\t\t  <div class=\"nav-center\">\n\t\t    <a class=\"nav-item\">\n\t\t      <h2 class=\"subtitle _title\">botflow</h2>\n\t\t    </a>\n\t\t    <a class=\"nav-item\" href=\"https://twitter.com/Vinayvnvv\" target=\"_blank\">\n\t\t      <span class=\"icon\">\n\t\t        <i class=\"fa fa-twitter\"></i>\n\t\t      </span>\n\t\t    </a>\n\t\t  </div>\n  </nav>\n\n  <div class=\"body\">\n    <div class=\"caption subtitle is-4\">Create Your Own Bot!</div>\n  \t<div class=\"card-l box anim sliceInUp\">\n\n  \t    <div><h3 class=\"title is-3\">Login</h3></div>\n  \t\t \n  \t\t <div>\n  \t\t    <i class=\"fa fa-user-circle\" aria-hidden=\"true\" style=\"font-size: 52px;color:#777\"></i>\n\t\t</div>\n\t\t<div ><h2 class=\"subtitle\">Login with google</h2></div>\n\t\t<div> \n\t\t  <a class=\"button is-primary\" (click)=\"googleSignIn()\">\n\t\t    <span class=\"icon\">\n\t\t      <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n\t\t    </span>\n\t\t    <span>Sign In</span>\n\t\t  </a>\n  \t\t</div>\n\n\n  \t</div>\n  </div>\n\n\n</div> \n<div class='overlay'>\n\t<svg jsname=\"BUfzDd\" xmlns=\"http://www.w3.org/2000/svg\" vviewBox=\"100% 100% 1440 810\" style=\"width: 100%; height: 100%\" ppreserveAspectRatio=\"xMinYMin slice\" aria-hidden=\"true\"><path fill=\"#efefee\" d=\"M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z\"></path><path fill=\"#f6f6f6\" d=\"M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z\"></path><path fill=\"#f7f7f7\" d=\"M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z\"></path><path fill=\"#fbfbfc\" d=\"M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z\"></path><path fill=\"#ebebec\" d=\"M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z\"></path><path fill=\"#e1e1e1\" d=\"M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z\"></path><path fill=\"#e7e7e7\" d=\"M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z\"></path></svg>\n</div>"

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_strings_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_models__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__childs_services_view_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFlowItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddFlowItemComponent = (function () {
    function AddFlowItemComponent(activeRouter, Loader, Toast, Api, zone, String, Models, Utility) {
        this.activeRouter = activeRouter;
        this.Loader = Loader;
        this.Toast = Toast;
        this.Api = Api;
        this.zone = zone;
        this.String = String;
        this.Models = Models;
        this.Utility = Utility;
        this.flowData = [];
        this.isLoadingFlow = true;
        this.msg = [];
        this.s_e_msg = [];
        this.v_e_msg = [];
        this.isActiveModal = false;
        this.editFlowItemIndex = null;
        this.msg_sub_err = false;
        this.isLoadingeditFlowItem = false;
        this.isMelcomeModal = false;
        this.isWelcomeModalUpdating = false;
        this.isFinalModal = false;
        this.isFinalModalUpdating = false;
        this.selectedTab = "flow";
        this.flowItemDeleteStatus = {
            isModal: false,
            index: -1,
            updating: false
        };
        this.formErrors = {
            'name': '',
            'msg': '',
            'validateErrMsg': '',
            'shortcutData': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'This Field is Required!',
                'minlength': "Name Should have minimum 3 characters"
            },
            'msg': {
                'required': 'Specify atleast one message.'
            },
            'validateErrMsg': {
                'required': 'Specify atleast one Validation error message.'
            },
            'shortcutData': {
                'required': 'Specify atleast one Suggestion item.'
            }
        };
    }
    AddFlowItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.routerParams = params;
        });
        console.log("selected ID", this.routerParams);
        this.validationTypeArray = this.String.validationTypeArray;
        this.suggestionTypeArray = this.String.suggestionTypeArray;
        this.getFlowItem();
        this.buildForm();
    };
    AddFlowItemComponent.prototype.getFlowItem = function () {
        var _this = this;
        this.Api.getFlowItem(this.routerParams.id)
            .subscribe(function (res) {
            _this.zone.run(function () {
                console.log(res);
                _this.flowData = res;
                _this.isLoadingFlow = false;
                window["initClassAction"]();
            });
        }, function (error) {
            _this.zone.run(function () {
                _this.Toast.show("Error in Auth init, Pls Try Again", 8000, "is-danger");
                _this.isLoadingFlow = false;
            });
        });
    };
    AddFlowItemComponent.prototype.buildForm = function () {
        var _this = this;
        this.createFlowItemForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)]),
            msg: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]([], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
            beforeMsg: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]([], []),
            afterMsg: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]([], []),
            validate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.validationTypeArray[0].value, []),
            validateErrMsg: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]([], []),
            shortcut: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.suggestionTypeArray[0].value, []),
            shortcutData: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]([], []),
        });
        this.createFlowItemForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages
    };
    AddFlowItemComponent.prototype.onValueChanged = function (data) {
        if (!this.createFlowItemForm) {
            return;
        }
        var form = this.createFlowItemForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    AddFlowItemComponent.prototype.openEditFlowItem = function (index, type) {
        this.buildForm();
        this.msg_sub_err = false;
        this.isActiveModal = true;
        this.editFlowItemIndex = index;
        this.updateFlowType = type;
        if (type == 'edit') {
            this.createFlowItemForm.setValue(this.flowData.modules[index]);
            if (this.createFlowItemForm.value.validate == null)
                this.createFlowItemForm.patchValue({ validate: this.String.validationTypeArray[0].value });
            if (this.createFlowItemForm.value.shortcut == null)
                this.createFlowItemForm.patchValue({ shortcut: this.String.suggestionTypeArray[0].value });
        }
    };
    AddFlowItemComponent.prototype.updateFlowItem = function () {
        var _this = this;
        if (this.isInValidFlowItemForm())
            return;
        if (this.updateFlowType == 'edit') {
            this.flowData.modules = this.Utility.addModuleAt(this.editFlowItemIndex, this.flowData.modules, this.Models.moduleItems(this.createFlowItemForm.value), "edit");
            this.updateMsg = "Flow Updated Succesfully!";
        }
        else {
            this.flowData.modules = this.Utility.addModuleAt(this.editFlowItemIndex, this.flowData.modules, this.Models.moduleItems(this.createFlowItemForm.value), "insert");
            this.updateMsg = "Flow inserted Succesfully!";
        }
        this.isLoadingeditFlowItem = true;
        this.isActiveModal = false;
        var data = { modules: this.flowData.modules };
        this.Api.updateModule(this.flowData._id, data)
            .subscribe(function (res) {
            console.log(res);
            _this.isLoadingeditFlowItem = false;
            _this.Toast.show(_this.updateMsg, 4000, "is-success");
        }, function (err) {
            console.log(err);
            _this.isLoadingeditFlowItem = false;
            _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
        });
    };
    AddFlowItemComponent.prototype.isInValidFlowItemForm = function () {
        return ((this.createFlowItemForm.invalid) ||
            (this.createFlowItemForm.value.validate != 'none' && this.createFlowItemForm.value.validateErrMsg.length == 0) ||
            (this.createFlowItemForm.value.shortcut != 'none' && this.createFlowItemForm.value.shortcutData.length == 0));
    };
    AddFlowItemComponent.prototype.buildWelcomeForm = function () {
        this.createWelcomeFlowItem = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            msg: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]((this.flowData.welcome.msg ? this.flowData.welcome.msg : []), [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])
        });
    };
    AddFlowItemComponent.prototype.openWelcomeEditModal = function () {
        console.log("opening welcome");
        this.buildWelcomeForm();
        this.isMelcomeModal = true;
    };
    AddFlowItemComponent.prototype.editWelcomeFlowItem = function () {
        var _this = this;
        if (this.createWelcomeFlowItem.invalid) {
        }
        else {
            this.flowData.welcome = { msg: this.createWelcomeFlowItem.value.msg };
            this.isWelcomeModalUpdating = true;
            var data = { welcome: this.flowData.welcome };
            this.Api.updateModule(this.flowData._id, data)
                .subscribe(function (res) {
                console.log(res);
                _this.isWelcomeModalUpdating = false;
                _this.Toast.show("Welcome Message was set!", 4000, "is-success");
                _this.isMelcomeModal = false;
            }, function (err) {
                console.log(err);
                _this.isWelcomeModalUpdating = false;
                _this.Toast.show("Error in Server,  Please try again!", 4000, "is-danger");
            });
        }
    };
    AddFlowItemComponent.prototype.buildFinalForm = function () {
        this.createFinalFlowItem = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            msg: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]((this.flowData.final.msg ? this.flowData.final.msg : []), [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])
        });
    };
    AddFlowItemComponent.prototype.openFinalEditModal = function () {
        console.log("opening final");
        this.buildFinalForm();
        this.isFinalModal = true;
    };
    AddFlowItemComponent.prototype.editFinalFlowItem = function () {
        var _this = this;
        if (this.createFinalFlowItem.invalid) {
        }
        else {
            this.flowData.final = { msg: this.createFinalFlowItem.value.msg };
            this.isFinalModalUpdating = true;
            var data = { final: this.flowData.final };
            this.Api.updateModule(this.flowData._id, data)
                .subscribe(function (res) {
                console.log(res);
                _this.isFinalModalUpdating = false;
                _this.Toast.show("Final Action was set!", 4000, "is-success");
                _this.isFinalModal = false;
            }, function (err) {
                console.log(err);
                _this.isFinalModalUpdating = false;
                _this.Toast.show("Error in Server,  Please try again!", 4000, "is-danger");
            });
        }
    };
    AddFlowItemComponent.prototype.openFlowItemDeleteModal = function (index) {
        this.flowItemDeleteStatus.index = index;
        this.flowItemDeleteStatus.isModal = true;
    };
    AddFlowItemComponent.prototype.deleteFlowItem = function () {
        var _this = this;
        this.flowItemDeleteStatus.updating = true;
        var ser_temp = JSON.parse(JSON.stringify(this.flowData.modules));
        var tempData = this.Utility.removeModuleAt(ser_temp, this.flowItemDeleteStatus.index);
        var data = {
            "modules": tempData
        };
        this.Api.updateModule(this.flowData._id, data)
            .subscribe(function (res) {
            console.log(res);
            _this.flowItemDeleteStatus.updating = false;
            _this.Toast.show("Flow Item is Deleted!", 4000, "is-success");
            _this.flowData.modules = tempData;
            _this.flowItemDeleteStatus.isModal = false;
        }, function (err) {
            console.log(err);
            _this.flowItemDeleteStatus.updating = false;
            _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
        });
    };
    AddFlowItemComponent.prototype.constructAutoList = function () {
        var data = [];
        var fw = this.flowData.modules;
        for (var i = 0; i < this.editFlowItemIndex; i++) {
            var d = {
                name: fw[i].name,
                value: "{{$flow[" + i + "]}}"
            };
            data.push(d);
        }
        return data;
    };
    return AddFlowItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ServicesViewComponent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__childs_services_view_component__["a" /* ServicesViewComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__childs_services_view_component__["a" /* ServicesViewComponent */]) === "function" && _a || Object)
], AddFlowItemComponent.prototype, "ServicesViewComponent", void 0);
AddFlowItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-flow-item',
        template: __webpack_require__(348),
        styles: [__webpack_require__(331)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_common_services__["c" /* Loader */], __WEBPACK_IMPORTED_MODULE_2__services_common_services__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_6__services_models__["a" /* Models */], __WEBPACK_IMPORTED_MODULE_2__services_common_services__["b" /* Utility */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_services__["c" /* Loader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_services__["c" /* Loader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_services__["a" /* Toast */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_strings_service__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_strings_service__["a" /* StringsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_models__["a" /* Models */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_models__["a" /* Models */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_services__["b" /* Utility */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_services__["b" /* Utility */]) === "function" && _j || Object])
], AddFlowItemComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=add-flow-item.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_services__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesViewComponent = (function () {
    function ServicesViewComponent(Utility, Api, Toast) {
        this.Utility = Utility;
        this.Api = Api;
        this.Toast = Toast;
        this.tab = "email";
        this.isEditEmailServiceModal = false;
        this.emailServiceFormErr = false;
        this.emailServiceEditStatus = {
            mode: "",
            index: -1,
            updating: false
        };
        this.emailServiceDeleteStatus = {
            isModal: false,
            index: -1,
            updating: false
        };
        this.emailServiceFormErrors = {
            'name': '',
            'to': '',
            'subject': '',
            'body': ''
        };
        this.emailServiceFormValidationMessages = {
            'name': {
                'required': 'This Field is Required!',
                'minlength': "Name Should have minimum 3 characters"
            },
            'to': {
                'required': 'Specify atleast one recipient.'
            },
            'subject': {
                'required': 'Specify Subject of the email.'
            },
            'body': {
                'required': 'Specify Body of the email.'
            }
        };
        console.log("called servives view componrnt");
    }
    ServicesViewComponent.prototype.ngOnInit = function () {
        this.buildEmailServiceForm();
        console.log(this.ServicesData);
    };
    ServicesViewComponent.prototype.changeTab = function (tab) {
        this.tab = tab;
    };
    ServicesViewComponent.prototype.buildEmailServiceForm = function () {
        var _this = this;
        this.emailServiceForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]),
            to: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]([], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            subject: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            body: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
        });
        this.emailServiceForm.valueChanges
            .subscribe(function (data) { return _this.onEmailServiceFormValueChanged(data); });
        this.onEmailServiceFormValueChanged(); // (re)set validation messages
    };
    ServicesViewComponent.prototype.onEmailServiceFormValueChanged = function (data) {
        if (!this.emailServiceForm) {
            return;
        }
        var form = this.emailServiceForm;
        for (var field in this.emailServiceFormErrors) {
            // clear previous error message (if any)
            this.emailServiceFormErrors[field] = '';
            var control = form.get(field);
            if (control && (control.dirty || control.touched) && !control.valid) {
                var messages = this.emailServiceFormValidationMessages[field];
                for (var key in control.errors) {
                    this.emailServiceFormErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ServicesViewComponent.prototype.openEmailServiceModal = function (mode, index) {
        console.log("index", index);
        this.emailServiceForm.reset();
        if (mode == 'edit')
            this.emailServiceForm.setValue(this.ServicesData.services.email[index]);
        this.isEditEmailServiceModal = true;
        this.emailServiceEditStatus.mode = mode;
        this.emailServiceEditStatus.index = index;
    };
    ServicesViewComponent.prototype.updateEmailService = function () {
        var _this = this;
        this.emailServiceFormErr = true;
        var emailData;
        if (this.emailServiceForm.valid) {
            this.emailServiceEditStatus.updating = true;
            if (this.emailServiceEditStatus.mode == 'insert') {
                emailData = this.Utility.addModuleAt(0, this.ServicesData.services.email, this.emailServiceForm.value, "insert");
            }
            else {
                emailData = this.Utility.addModuleAt(this.emailServiceEditStatus.index, this.ServicesData.services.email, this.emailServiceForm.value, "edit");
            }
            this.ServicesData.services.email = emailData;
            var data = {
                "services.email": emailData
            };
            this.Api.updateModule(this.ServicesData._id, data)
                .subscribe(function (res) {
                console.log(res);
                _this.emailServiceEditStatus.updating = false;
                _this.Toast.show("Email Service is updated!", 4000, "is-success");
                _this.isEditEmailServiceModal = false;
            }, function (err) {
                console.log(err);
                _this.emailServiceEditStatus.updating = false;
                _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
            });
        }
    };
    ServicesViewComponent.prototype.openDeleteEmailServiceModal = function (index) {
        console.log("delete call");
        this.emailServiceDeleteStatus.index = index;
        this.emailServiceDeleteStatus.isModal = true;
    };
    ServicesViewComponent.prototype.deleteEmailService = function () {
        var _this = this;
        this.emailServiceDeleteStatus.updating = true;
        var emailData;
        var ser_temp = JSON.parse(JSON.stringify(this.ServicesData.services.email));
        emailData = this.Utility.removeModuleAt(ser_temp, this.emailServiceDeleteStatus.index);
        var data = {
            "services.email": emailData
        };
        this.Api.updateModule(this.ServicesData._id, data)
            .subscribe(function (res) {
            console.log(res);
            _this.emailServiceDeleteStatus.updating = false;
            _this.Toast.show("Email Service is Deleted!", 4000, "is-success");
            _this.ServicesData.services.email = emailData;
            _this.emailServiceDeleteStatus.isModal = false;
        }, function (err) {
            console.log(err);
            _this.emailServiceDeleteStatus.updating = false;
            _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
        });
    };
    return ServicesViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ServicesViewComponent.prototype, "ServicesData", void 0);
ServicesViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "services-view",
        template: __webpack_require__(349),
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */], __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */]) === "function" && _c || Object])
], ServicesViewComponent);

var _a, _b, _c;
//# sourceMappingURL=services-view.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFlowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddFlowComponent = (function () {
    function AddFlowComponent(parent, Api, Toast, Loader, zone, router) {
        this.parent = parent;
        this.Api = Api;
        this.Toast = Toast;
        this.Loader = Loader;
        this.zone = zone;
        this.router = router;
        this.matches = [];
        this.isCreating = false;
        this.formErrors = {
            'name': '',
            'matches': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'This Field is Required!',
                'minlength': "Name Should have minimum 3 characters"
            },
            'matches': {
                'required': 'Specify atleast one match.'
            }
        };
    }
    AddFlowComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddFlowComponent.prototype.buildForm = function () {
        var _this = this;
        this.createForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]),
            matches: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]([], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
        });
        this.createForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages
    };
    AddFlowComponent.prototype.onValueChanged = function (data) {
        if (!this.createForm) {
            return;
        }
        var form = this.createForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    AddFlowComponent.prototype.onItemAdded = function (e) {
        console.log(e, this.matches);
    };
    AddFlowComponent.prototype.createFlow = function () {
        var _this = this;
        if (!this.errorCheckFlow()) {
            return;
        }
        this.isCreating = true;
        var data = {
            "name": this.createForm.value.name,
            "matches": this.createForm.value.matches
        };
        this.Api.createModule("flow", data).subscribe(function (res) {
            _this.zone.run(function () {
                _this.isCreating = false;
                _this.router.navigate(["dashboard"]);
                _this.Toast.show("Module is Created!", 6000, "is-success");
            });
        }, function (error) {
            _this.zone.run(function () {
                _this.isCreating = false;
                _this.Toast.show("Error in creating a new Flow!, Try again!", 8000, "is-danger");
            });
        });
    };
    AddFlowComponent.prototype.errorCheckFlow = function () {
        if (this.createForm.invalid)
            return false;
        return true;
    };
    return AddFlowComponent;
}());
AddFlowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-flow',
        template: __webpack_require__(350),
        styles: [__webpack_require__(332)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_common_services__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_4__services_common_services__["c" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_common_services__["a" /* Toast */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_common_services__["c" /* Loader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_common_services__["c" /* Loader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _f || Object])
], AddFlowComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-flow.component.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootScope; });
var RootScope = (function () {
    function RootScope() {
        this._auth_user = {
            id: null,
            name: null,
            email: null,
            pic: null
        };
        this.rootLoader = {
            show: false,
            title: "Loading.."
        };
        this.toast = {
            text: null,
            duration: 1500,
            show: false,
            type: ""
        };
    }
    return RootScope;
}());

//# sourceMappingURL=root.scope.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_strings_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddMenuComponent = (function () {
    function AddMenuComponent(Api, Toast, Loader, zone, router, Strings) {
        this.Api = Api;
        this.Toast = Toast;
        this.Loader = Loader;
        this.zone = zone;
        this.router = router;
        this.Strings = Strings;
        this.matches = [];
        this.formVars = {
            name: null,
            matches: [],
            menus: []
        };
        this.formStatus = {
            mode: "",
            updating: false
        };
        this.formErrors = {
            'name': '',
            'matches': '',
            'type': '',
            'menus': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'This Field is Required!',
                'minlength': "Name Should have minimum 3 characters"
            },
            'matches': {
                'required': 'Specify atleast one match.'
            },
            'type': {
                'required': 'Menu type is required'
            },
            'menus': {
                'required': 'Specify atleast one menu item!'
            }
        };
    }
    AddMenuComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddMenuComponent.prototype.buildForm = function () {
        var _this = this;
        this.addMenuForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)]),
            matches: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]([], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.Strings.menuTypes[0].value, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            menus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]([], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])
        });
        this.addMenuForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages
    };
    AddMenuComponent.prototype.onValueChanged = function (data) {
        if (!this.addMenuForm) {
            return;
        }
        var form = this.addMenuForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && (control.dirty || control.touched || !control.pristine) && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    AddMenuComponent.prototype.onItemAdded = function (e) {
        console.log(e, this.matches);
    };
    AddMenuComponent.prototype.updateMenu = function () {
        var _this = this;
        if (!this.errorCheckFlow()) {
            return;
        }
        this.formStatus.updating = true;
        var data = this.addMenuForm.value;
        this.Api.createModule("menu", data).subscribe(function (res) {
            _this.zone.run(function () {
                _this.formStatus.updating = false;
                _this.router.navigate(["dashboard"], { queryParams: { activeTab: "menu" } });
                _this.Toast.show("Menu is Created!", 6000, "is-success");
            });
        }, function (error) {
            _this.zone.run(function () {
                _this.formStatus.updating = false;
                _this.Toast.show("Error in creating a new Menu!, Try again!", 8000, "is-danger");
            });
        });
    };
    AddMenuComponent.prototype.errorCheckFlow = function () {
        if (this.addMenuForm.invalid)
            return false;
        return true;
    };
    return AddMenuComponent;
}());
AddMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-menu',
        template: __webpack_require__(351),
        styles: [__webpack_require__(333)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__services_common_services__["c" /* Loader */], __WEBPACK_IMPORTED_MODULE_2__services_api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__services_strings_service__["a" /* StringsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["c" /* Loader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["c" /* Loader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_strings_service__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_strings_service__["a" /* StringsService */]) === "function" && _f || Object])
], AddMenuComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-menu.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(Api, zone, Loader, Toast, route, Utility) {
        this.Api = Api;
        this.zone = zone;
        this.Loader = Loader;
        this.Toast = Toast;
        this.route = route;
        this.Utility = Utility;
        this.moduleDeleteStatus = {
            mode: "",
            index: -1,
            updating: false,
            isModal: false
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getModules();
        this.setActiveTab();
    };
    ListComponent.prototype.setActiveTab = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            if (params.activeTab == 'menu')
                _this.filterModules("menu");
            else
                _this.filterModules("flow");
        });
    };
    ListComponent.prototype.getModules = function () {
        var _this = this;
        this.Api.getModules()
            .subscribe(function (res) {
            _this.zone.run(function () {
                _this.Loader.hideRoot();
                console.log(res);
                _this.Modules = res;
                _this.setActiveTab();
            });
        }, function (error) {
            _this.zone.run(function () {
                _this.Loader.hideRoot();
                _this.Toast.show("Error in Auth init, Pls Try Again", 8000, "is-danger");
            });
        });
    };
    ListComponent.prototype.filterModules = function (value) {
        this.filteredModulesData = Object.assign([], this.Modules).filter(function (item) { return item.type.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        //switch tab in ui
        if (value == 'menu') {
            this.isMenuTab = 'is-active';
            this.isFlowTab = '';
        }
        else {
            this.isMenuTab = '';
            this.isFlowTab = 'is-active';
        }
    };
    ListComponent.prototype.openDeleteModuleModal = function (id) {
        console.log("delete call");
        this.moduleDeleteStatus.index = id;
        this.moduleDeleteStatus.isModal = true;
    };
    ListComponent.prototype.deleteModule = function () {
        var _this = this;
        this.moduleDeleteStatus.updating = true;
        this.Api.deleteModule(this.moduleDeleteStatus.index)
            .subscribe(function (res) {
            console.log(res);
            _this.moduleDeleteStatus.updating = false;
            _this.Toast.show("Module is Deleted!", 4000, "is-success");
            _this.moduleDeleteStatus.isModal = false;
            _this.getModules();
        }, function (err) {
            console.log(err);
            _this.moduleDeleteStatus.updating = false;
            _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
        });
    };
    ListComponent.prototype.indicateUser = function (ev, to) {
        var className = "wobble";
        if (to == 'flow') {
            var el = document.getElementById("add_flow");
            if (!el)
                return;
            if (ev == 'enter')
                el.classList.add(className);
            else
                el.classList.remove(className);
        }
        if (to == 'menu') {
            var el = document.getElementById("add_menu");
            if (!el)
                return;
            if (ev == 'enter')
                el.classList.add(className);
            else
                el.classList.remove(className);
        }
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(354),
        styles: [__webpack_require__(336)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_common_services__["c" /* Loader */], __WEBPACK_IMPORTED_MODULE_2__services_common_services__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_2__services_common_services__["b" /* Utility */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_services__["c" /* Loader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_services__["c" /* Loader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_services__["a" /* Toast */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_services__["b" /* Utility */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_services__["b" /* Utility */]) === "function" && _f || Object])
], ListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_services__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewMenuComponent = (function () {
    function ViewMenuComponent(Api, activeRouter, Toast, Utility) {
        this.Api = Api;
        this.activeRouter = activeRouter;
        this.Toast = Toast;
        this.Utility = Utility;
        this.menuData = [];
        this.isLoadingMenu = true;
        this.editable = [];
        this.editMenu = [];
        this.deletable = [];
        this.editMenuStatus = {
            updating: false
        };
    }
    ViewMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.routerParams = params;
        });
        this.getMenu();
    };
    ViewMenuComponent.prototype.getMenu = function () {
        var _this = this;
        this.Api.getFlowItem(this.routerParams.id)
            .subscribe(function (res) {
            console.log(res);
            _this.menuData = res;
            _this.isLoadingMenu = false;
        }, function (error) {
            _this.Toast.show("Error in Auth init, Pls Try Again", 8000, "is-danger");
            _this.isLoadingMenu = false;
        });
    };
    ViewMenuComponent.prototype.showEditableForm = function (index, force) {
        if (!force) {
            this.menuData.menus = this.menuData.menus.filter(function checkAdult(item) {
                return item != "";
            });
        }
        this.editMenu = JSON.parse(JSON.stringify(this.menuData.menus));
        this.deletable = [];
        this.editable = [];
        this.editable[index] = true;
    };
    ViewMenuComponent.prototype.cancelEditableForm = function () {
        this.menuData.menus = this.menuData.menus.filter(function checkAdult(item) {
            return item != "";
        });
        this.editMenu = this.editMenu.filter(function checkAdult(item) {
            return item != "";
        });
        this.editable = [];
    };
    ViewMenuComponent.prototype.updateMenuItem = function (index) {
        var _this = this;
        if (this.editMenu[index].length != 0) {
            this.editMenuStatus.updating = true;
            var data = {
                menus: this.editMenu
            };
            this.Api.updateModule(this.menuData._id, data)
                .subscribe(function (res) {
                console.log(res);
                _this.menuData.menus[index] = _this.editMenu[index];
                _this.editable[index] = false;
                _this.Toast.show("Item Updated", 4000, "is-success");
                _this.editMenuStatus.updating = false;
            }, function (err) {
                console.log(err);
                _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
                _this.editMenuStatus.updating = false;
            });
        }
    };
    ViewMenuComponent.prototype.addMenuItem = function () {
        if (this.editMenu[this.editMenu.length - 1] == '')
            return;
        this.menuData.menus.push("");
        this.showEditableForm(this.menuData.menus.length - 1, true);
    };
    ViewMenuComponent.prototype.showDeleteForm = function (index) {
        this.editable = [];
        this.deletable = [];
        this.deletable[index] = true;
    };
    ViewMenuComponent.prototype.deleteItem = function (index) {
        var _this = this;
        this.editMenuStatus.updating = true;
        var temp_d_ = JSON.parse(JSON.stringify(this.menuData.menus));
        var data = {
            menus: this.Utility.removeModuleAt(temp_d_, index)
        };
        this.Api.updateModule(this.menuData._id, data)
            .subscribe(function (res) {
            console.log(res);
            _this.menuData.menus = data.menus;
            _this.deletable[index] = false;
            _this.Toast.show("Item Deleted!", 4000, "is-success");
            _this.editMenuStatus.updating = false;
        }, function (err) {
            console.log(err);
            _this.Toast.show("Error in Server,  Please try again!", 4000, "is-error");
            _this.editMenuStatus.updating = false;
        });
    };
    return ViewMenuComponent;
}());
ViewMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-menu',
        template: __webpack_require__(355),
        styles: [__webpack_require__(337)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["a" /* Toast */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_common_services__["b" /* Utility */]) === "function" && _d || Object])
], ViewMenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-menu.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.featuresData = [];
        this.specialData = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initFeaturesData();
        this.initSpecialData();
    };
    HomeComponent.prototype.initFeaturesData = function () {
        this.featuresData.push({ icon: "fa fa-cogs", name: "Automated", desc: "Create Flows by your requirements and it will ask questions and store the answers automatically." });
        this.featuresData.push({ icon: "fa fa-braille", name: "Real Time", desc: "Responses of the bot are realtime and fast with the latest sockets technology" });
        this.featuresData.push({ icon: "fa fa-times", name: "No Programming Language", desc: "It's Just works with the GUI, We will do all the things!" });
    };
    HomeComponent.prototype.initSpecialData = function () {
        this.specialData.push({ icon: "fa fa-cogs", name: "Services", desc: "Add Api, Email and other services to flows and it makes easier to reach the people." });
        this.specialData.push({ icon: "fa fa-themeisle", name: "Custom Theme", desc: "Customize Your Bot by adding custom colors, icons." });
        this.specialData.push({ icon: "fa fa-check-circle", name: "Validators", desc: "Add predifined/custom validators to your messages in a flow." });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(358),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_strings_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_root_scope__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_common_services__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(Strings, Auth, router, Api, rootScope, Loader, zone, Toast) {
        this.router = router;
        this.Api = Api;
        this.rootScope = rootScope;
        this.Loader = Loader;
        this.zone = zone;
        this.Toast = Toast;
        this.Strings = Strings;
        this.Auth = Auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.gapi = window["gapi"];
        window["authInstance"] = this.Strings;
    };
    LoginComponent.prototype.googleSignIn = function () {
        var _this = this;
        this.Loader.showRoot("Authendicating..");
        var params = {
            'client_id': '617965711227-ak9h08uuhefcbn6v5ccq8io3bdh401ml.apps.googleusercontent.com',
            'cookie_policy': 'single_host_origin',
            'ux_mode': 'popup',
            'callback': function (data) {
                console.log(data);
            }
        };
        this.gapi.auth2.init().signIn(params).then(function (res) {
            console.log(window["authInstance"]);
            // Service.loader.hideRoot();
            // Service.loader.showRoot('Initializing!'); 
            var profile = res.getBasicProfile();
            var data = {};
            data[_this.Strings.authInstance.storageIdKey] = profile.getId();
            data[_this.Strings.authInstance.storageNameKey] = profile.getName();
            data[_this.Strings.authInstance.storageAvtarKey] = profile.getImageUrl();
            data[_this.Strings.authInstance.storageEmailKey] = profile.getEmail();
            console.log('logged Id: ' + profile.getId());
            _this.Auth.setAuth(data);
            _this.Auth.initAuth();
            console.log("getAuth", _this.Auth.getAuth());
            _this.Api.initBotDB()
                .subscribe(function (res) {
                _this.zone.run(function () {
                    _this.Loader.hideRoot();
                    _this.router.navigate(["dashboard"]);
                });
            }, function (error) {
                _this.zone.run(function () {
                    _this.Loader.hideRoot();
                    _this.Toast.show("Error in Auth init, Pls Try Again", 8000, "is-danger");
                });
            });
            // Api.initBotDb().then(function(res){
            //   console.log("initDb response", res);
            //   Service.loader.hideRoot();
            //   $state.go("dashboard");
            // },function(err) {
            //   Service.loader.hideRoot();
            //   Service.Toast("There was error in initializing! Please refresh the page and login again!");
            // })
            //$state.go("dashboard");	 
        }, function (err) {
            _this.Loader.hideRoot();
            _this.Toast.show(err.error, 8000, "is-danger");
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(359),
        styles: [__webpack_require__(338)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_api_services__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_6__services_common_services__["c" /* Loader */], __WEBPACK_IMPORTED_MODULE_6__services_common_services__["a" /* Toast */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_strings_service__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_strings_service__["a" /* StringsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_services__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_root_scope__["a" /* RootScope */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_root_scope__["a" /* RootScope */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_common_services__["c" /* Loader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_common_services__["c" /* Loader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_common_services__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_common_services__["a" /* Toast */]) === "function" && _h || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_add_flow_add_flow_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_list_list_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_add_flow_item_add_flow_item_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_add_menu_add_menu_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_view_menu_view_menu_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'add-flow',
                component: __WEBPACK_IMPORTED_MODULE_6__dashboard_add_flow_add_flow_component__["a" /* AddFlowComponent */]
            },
            {
                path: 'add-menu',
                component: __WEBPACK_IMPORTED_MODULE_9__dashboard_add_menu_add_menu_component__["a" /* AddMenuComponent */]
            },
            {
                path: 'flow-item/:id',
                component: __WEBPACK_IMPORTED_MODULE_8__dashboard_add_flow_item_add_flow_item_component__["a" /* AddFlowItemComponent */]
            },
            {
                path: 'menu/:id',
                component: __WEBPACK_IMPORTED_MODULE_10__dashboard_view_menu_view_menu_component__["a" /* ViewMenuComponent */]
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_7__dashboard_list_list_component__["a" /* ListComponent */]
            }
        ]
    },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], RouteModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__dashboard_add_flow_add_flow_component__["a" /* AddFlowComponent */], __WEBPACK_IMPORTED_MODULE_7__dashboard_list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_9__dashboard_add_menu_add_menu_component__["a" /* AddMenuComponent */], __WEBPACK_IMPORTED_MODULE_10__dashboard_view_menu_view_menu_component__["a" /* ViewMenuComponent */]];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, Auth) {
        this.router = router;
        this.Auth = Auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log("auth-guard", next);
        if (this.Auth.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Models; });
var ModuleFlow = (function () {
    function ModuleFlow() {
    }
    return ModuleFlow;
}());
var InitBot = (function () {
    function InitBot() {
        this.style = {
            bgcolor: null,
            color: null,
            width: null,
            height: null,
            positionX: null,
            positionY: null
        };
    }
    return InitBot;
}());
var Models = (function () {
    function Models() {
        this.initBot = function (m) {
            var model = new InitBot();
            if (!m.bot_name || m.bot_name == '')
                model.bot_name = null;
            else
                model.bot_name = m.bot_name;
            if (m.msg == undefined || m.msg == null || m.msg == '')
                model.msg = "Welcome!";
            else
                model.msg = m.msg;
            if (m.shortcut == undefined || m.shortcut == '' || m.shortcut == null || m.shortcut == 'none') {
                model.shortcut = null;
                model.shortcutData = [];
            }
            else {
                model.shortcut = m.shortcut;
                if (m.shortcutData == undefined || m.shortcutData == '' || m.shortcutData == null || m.shortcutData.length == 0) {
                    model.shortcut = null;
                    model.shortcutData = [];
                }
                else {
                    model.shortcutData = m.shortcutData;
                }
            }
            model.style = m.style;
            return model;
        };
    }
    Models.prototype.moduleItems = function (m) {
        var model = new ModuleFlow();
        if (m.name == undefined || m.name == '' || m.name == null)
            model.name = "Name Not Specified!";
        else
            model.name = m.name;
        if (m.msg == undefined || m.msg == '' || m.msg == null || m.msg.length == 0)
            model.msg = ["Msg Not Specified!"];
        else
            model.msg = m.msg;
        if (m.beforeMsg == undefined || m.beforeMsg == '' || m.beforeMsg == null)
            model.beforeMsg = [];
        else
            model.beforeMsg = m.beforeMsg;
        if (m.afterMsg == undefined || m.afterMsg == '' || m.afterMsg == null)
            model.afterMsg = [];
        else
            model.afterMsg = m.afterMsg;
        if (m.afterMsg == undefined || m.afterMsg == '' || m.afterMsg == null)
            model.afterMsg = [];
        else
            model.afterMsg = m.afterMsg;
        if (m.validate == undefined || m.validate == '' || m.validate == null || m.validate == 'none') {
            model.validate = null;
            model.validateErrMsg = [];
        }
        else {
            model.validate = m.validate;
            if (m.validateErrMsg == undefined || m.validateErrMsg == '' || m.validateErrMsg == null || m.validateErrMsg.length == 0)
                model.validateErrMsg = [];
            else
                model.validateErrMsg = m.validateErrMsg;
        }
        if (m.shortcut == undefined || m.shortcut == '' || m.shortcut == null || m.shortcut == 'none') {
            model.shortcut = null;
            model.shortcutData = [];
        }
        else {
            model.shortcut = m.shortcut;
            if (m.shortcutData == undefined || m.shortcutData == '' || m.shortcutData == null || m.shortcutData.length == 0)
                model.shortcutData = [];
            else
                model.shortcutData = m.shortcutData;
        }
        return model;
    };
    return Models;
}());

//# sourceMappingURL=models.js.map

/***/ })

},[409]);
//# sourceMappingURL=main.bundle.js.map