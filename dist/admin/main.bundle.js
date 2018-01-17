webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_services__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTemplateComponent = (function () {
    function AddTemplateComponent(apiService) {
        this.apiService = apiService;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.formVars = {
            name: "",
            module: ""
        };
        this.showFormErrs = false;
        this.isprogress = false;
    }
    Object.defineProperty(AddTemplateComponent.prototype, "editData", {
        set: function (value) {
            if (!value)
                return;
            this._editData = value;
            this.setFormVars(1);
        },
        enumerable: true,
        configurable: true
    });
    ;
    AddTemplateComponent.prototype.ngOnInit = function () {
        console.log(this.editData);
        this.initForm();
    };
    AddTemplateComponent.prototype.closeModal = function () {
        this.visible = false;
        this.setFormVars(0);
        this.visibleChange.emit(this.visible);
    };
    AddTemplateComponent.prototype.initForm = function () {
        this.addForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            module: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        console.log(this.addForm);
    };
    AddTemplateComponent.prototype.setFormVars = function (action) {
        if (action == 0) {
            this.formVars = {
                name: "",
                module: ""
            };
        }
        else {
            this.formVars = {
                name: this._editData.name,
                module: JSON.stringify(this._editData.module)
            };
        }
    };
    AddTemplateComponent.prototype.submitForm = function (form) {
        var _this = this;
        if (form.invalid) {
            this.showFormErrs = true;
            return;
        }
        else {
            this.isprogress = true;
            try {
                this.formVars.module = JSON.parse(this.formVars.module);
                if (this.action == 'insert') {
                    this.apiService.insertTemplate(this.formVars).subscribe(function (res) {
                        _this.isprogress = false;
                        _this.onClose.emit(true);
                        _this.setFormVars(0);
                        _this.closeModal();
                    }, function (err) {
                        _this.isprogress = false;
                    });
                }
                else {
                    this.apiService.updateTemplate(this._editData._id, this.formVars).subscribe(function (res) {
                        _this.isprogress = false;
                        _this.onClose.emit(true);
                        _this.setFormVars(0);
                        _this.closeModal();
                    }, function (err) {
                        _this.isprogress = false;
                    });
                }
            }
            catch (e) {
                alert(e); // error in the above string (in this case, yes)!
                this.isprogress = false;
            }
        }
    };
    return AddTemplateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], AddTemplateComponent.prototype, "action", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])('editData'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AddTemplateComponent.prototype, "editData", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], AddTemplateComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], AddTemplateComponent.prototype, "visibleChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], AddTemplateComponent.prototype, "onClose", void 0);
AddTemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-add-template',
        template: __webpack_require__(162),
        styles: [__webpack_require__(159)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_api_services__["a" /* ApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_services__["a" /* ApiService */]) === "function" && _c || Object])
], AddTemplateComponent);

var _a, _b, _c;
//# sourceMappingURL=add-template.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(163),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_template_add_template_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_strings_services__ = __webpack_require__(64);
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








//services

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routingComponents */],
            __WEBPACK_IMPORTED_MODULE_7__add_template_add_template_component__["a" /* AddTemplateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_router__["b" /* RouteModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_strings_services__["a" /* StringsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(105);
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
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], RouteModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]];
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__(63);
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
    function DashboardComponent(apiService) {
        this.apiService = apiService;
        this.templates = [];
        this.templateModal = {
            open: false,
            action: "",
            data: {}
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTemplates();
    };
    DashboardComponent.prototype.getTemplates = function () {
        var _this = this;
        this.apiService.getTemplates()
            .subscribe(function (res) {
            _this.templates = res;
        }, function (err) {
        });
    };
    DashboardComponent.prototype.insertTemplateModal = function () {
        this.templateModal.action = 'insert';
        this.templateModal.data = null;
        this.templateModal.open = true;
    };
    DashboardComponent.prototype.editTemplateModal = function (data) {
        data = JSON.parse(JSON.stringify(data));
        this.templateModal.action = 'edit';
        this.templateModal.data = data;
        this.templateModal.open = true;
    };
    DashboardComponent.prototype.deleteTemplateModal = function (data) {
        var _this = this;
        this.apiService.deleteTemplate(data._id).subscribe(function (res) {
            _this.getTemplates();
        }, function (err) {
        });
    };
    DashboardComponent.prototype.onInsertTemplateModalClose = function (modified) {
        if (modified) {
            this.getTemplates();
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(164),
        styles: [__webpack_require__(160)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-modal\" *ngIf=\"visible\">\n\t<div class=\"back-drop\"></div>\n\t<div class=\"modal\">\n\t\t<div class=\"modal-header\">{{action | uppercase}} Templae</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<form [formGroup]=\"addForm\">\n\t\t\t\t<div>\n\t\t\t\t\t<div>Name:</div>\n\t\t\t\t\t<div><input type=\"text\" formControlName=\"name\" [(ngModel)]=\"formVars.name\"/></div>\n\t\t\t\t\t<div class=\"err\" *ngIf=\"(addForm.controls.name.invalid && addForm.controls.name.touched) || (showFormErrs && addForm.controls.name.invalid)\">\n\t\t\t\t\t\tRequired field!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<div>Module:</div>\n\t\t\t\t\t<div><textarea rows=\"5\" formControlName=\"module\" [(ngModel)]=\"formVars.module\"></textarea></div>\n\t\t\t\t\t<div class=\"err\" *ngIf=\"(addForm.controls.module.invalid && addForm.controls.module.touched) || (showFormErrs && addForm.controls.module.invalid)\">\n\t\t\t\t\t\tRequired field!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button (click)=\"submitForm(addForm)\" *ngIf=\"!isprogress\">{{action}}</button>&nbsp;\n\t\t\t<button (click)=\"closeModal()\" *ngIf=\"!isprogress\">Close</button>\n\t\t\t<span *ngIf=\"isprogress\">Inserting...</span>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\n\tAdmin Dashboard\n</div>\n<div class=\"app-content\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div class='templates'>\n\t<br/><br/>\n\t<h2>Templates</h2>\n\t<button (click)=\"insertTemplateModal()\">Add Templates</button>\n\t<table class=\"data-tbl\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Module</th>\n\t\t\t\t<th>Used</th>\n\t\t\t\t<th>Created</th>\n\t\t\t\t<th>Updated</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let item of templates\">\n\t\t\t\t<td>{{item.name}}</td>\n\t\t\t\t<td>{{item.module}}</td>\n\t\t\t\t<td class=\"text-right\">{{item.statastics.used}}</td>\n\t\t\t\t<td>{{item.timestamp.created | date}}</td>\n\t\t\t\t<td>{{item.timestamp.updated | date}}</td>\n\t\t\t\t<td><button (click)=\"editTemplateModal(item)\">Edit</button>&nbsp;<button (click)=\"deleteTemplateModal(item)\">Delete</button></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n\n\n<app-add-template [(visible)]=\"templateModal.open\" [action]=\"templateModal.action\" [editData]=\"templateModal.data\" (onClose)=\"onInsertTemplateModalClose($event)\"></app-add-template>\n\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__strings_services__ = __webpack_require__(64);
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
    function ApiService(_http, String) {
        this._http = _http;
        this.String = String;
    }
    ApiService.prototype.getTemplates = function () {
        return this._http.get(this.String.apis.getTemplates)
            .map(this.extractData);
    };
    ApiService.prototype.insertTemplate = function (data) {
        return this._http.post(this.String.apis.getTemplates, data)
            .map(this.extractData);
    };
    ApiService.prototype.updateTemplate = function (id, data) {
        return this._http.post(this.String.apis.getTemplates + "/" + id, data)
            .map(this.extractData);
    };
    ApiService.prototype.deleteTemplate = function (id) {
        return this._http.delete(this.String.apis.getTemplates + "/" + id, {})
            .map(this.extractData);
    };
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__strings_services__["a" /* StringsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__strings_services__["a" /* StringsService */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.services.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringsService; });

var StringsService = (function () {
    function StringsService() {
        this.port = 3000;
        this.port = 3000;
        this.origin = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].origin;
        console.log("Api Origin==", this.origin);
        this.apis = {
            getTemplates: this.origin + "api/admin/templates",
        };
    }
    return StringsService;
}());

//# sourceMappingURL=strings.services.js.map

/***/ }),

/***/ 65:
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

/***/ 92:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(65);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.bundle.js.map