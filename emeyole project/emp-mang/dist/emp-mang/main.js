"use strict";
(self["webpackChunkemp_mang"] = self["webpackChunkemp_mang"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 7195);
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/layout/layout.component */ 3593);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 5199);
/* harmony import */ var _pages_emp_list_emp_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/emp-list/emp-list.component */ 9247);
/* harmony import */ var _pages_employeform_employeform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/employeform/employeform.component */ 1703);
/* harmony import */ var _pages_project_ass_project_ass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project-ass/project-ass.component */ 799);
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/project/project.component */ 5431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);










const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'admin',
  component: _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  children: [{
    path: 'dashboard',
    component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
  }, {
    path: 'employe-list',
    component: _pages_emp_list_emp_list_component__WEBPACK_IMPORTED_MODULE_3__.EmpListComponent
  }, {
    path: 'emp-form/:id',
    component: _pages_employeform_employeform_component__WEBPACK_IMPORTED_MODULE_4__.EmployeformComponent
  }, {
    path: 'project',
    component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_6__.ProjectComponent
  }, {
    path: 'project-ass',
    component: _pages_project_ass_project_ass_component__WEBPACK_IMPORTED_MODULE_5__.ProjectAssComponent
  }]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'emp-mang';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 7195);
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/layout/layout.component */ 3593);
/* harmony import */ var _pages_master_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/master/master.component */ 6753);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 5199);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);










class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_master_master_component__WEBPACK_IMPORTED_MODULE_4__.MasterComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
  });
})();

/***/ }),

/***/ 2065:
/*!******************************************************!*\
  !*** ./src/app/core/model/classes/emp-form.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emplmodel: () => (/* binding */ emplmodel)
/* harmony export */ });
class emplmodel {
  constructor() {
    this.contactNo = '';
    this.createdDate = new Date();
    this.emailId = '';
    this.deptId = 0;
    this.employeeId = 0;
    this.employeeName = '';
    this.password = '';
    this.gender = '';
    this.role = '';
  }
}

/***/ }),

/***/ 4028:
/*!**************************************************!*\
  !*** ./src/app/core/services/empform.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpformService: () => (/* binding */ EmpformService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);




class EmpformService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
  }
  getAllempl() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "/GetAllEmployees");
  }
  getAllemplbyID(id) {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "/GetEmployee/" + id);
  }
  oncreateemp(obj) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "/CreateEmployee", obj);
  }
  static {
    this.ɵfac = function EmpformService_Factory(t) {
      return new (t || EmpformService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EmpformService,
      factory: EmpformService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1730:
/*!***************************************************!*\
  !*** ./src/app/core/services/master-s.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterSService: () => (/* binding */ MasterSService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);




class MasterSService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
  }
  getAllParent() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "/GetParentDepartment");
  }
  getAllchild(id) {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "/GetChildDepartmentByParentId?deptId=" + id);
  }
  static {
    this.ɵfac = function MasterSService_Factory(t) {
      return new (t || MasterSService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MasterSService,
      factory: MasterSService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3565:
/*!**************************************************!*\
  !*** ./src/app/core/services/projech.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjechService: () => (/* binding */ ProjechService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);




class ProjechService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
  }
  getAllproject() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + '/GetAllProjects');
  }
  createProject(obj) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + '/CreateProject', obj);
  }
  static {
    this.ɵfac = function ProjechService_Factory(t) {
      return new (t || ProjechService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProjechService,
      factory: ProjechService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5199:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class DashboardComponent {
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9247:
/*!******************************************************!*\
  !*** ./src/app/pages/emp-list/emp-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmpListComponent: () => (/* binding */ EmpListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var src_app_core_services_empform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/empform.service */ 4028);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);







function EmpListComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 20)(14, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.contactNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/emp-form/", item_r1.employeeId, "");
  }
}
class EmpListComponent {
  constructor() {
    this.empolylist$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
    this.empServ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_core_services_empform_service__WEBPACK_IMPORTED_MODULE_0__.EmpformService);
    this.empolylist$ = this.empServ.getAllempl();
  }
  static {
    this.ɵfac = function EmpListComponent_Factory(t) {
      return new (t || EmpListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmpListComponent,
      selectors: [["app-emp-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 56,
      vars: 3,
      consts: [["aria-labelledby", "employee-title", 1, "employee-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "employee-title"], [1, "page-description"], ["aria-live", "polite", 1, "employee-count"], [1, "count-value"], ["aria-labelledby", "add-employee-title", 1, "add-card"], [1, "card-heading"], ["aria-hidden", "true", 1, "heading-icon"], ["viewBox", "0 0 24 24"], ["d", "M12 5v14M5 12h14"], ["id", "add-employee-title"], ["href", "/admin/emp-form/0", 1, "add-button"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["aria-labelledby", "employee-list-title", 1, "list-card"], [1, "list-heading"], ["id", "employee-list-title"], [1, "table-wrap"], [1, "employee-table"], [1, "text-end"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn-action", "edit", 3, "routerLink"], ["type", "button", 1, "btn-action", "delete"]],
      template: function EmpListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "PEOPLE");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Employees");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Keep your employee directory up to date.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "employees");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section", 7)(15, "div", 8)(16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div")(20, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Add an employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Open the employee form to add someone to your list.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Add employee ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "section", 15)(29, "div", 16)(30, "div")(31, "h3", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Employee list");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "All employees in your workspace.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18)(36, "table", 19)(37, "thead")(38, "tr")(39, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Gender");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, EmpListComponent_tr_54_Template, 18, 7, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 1, ctx.empolylist$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  color: #17233b;\n}\n\n.employee-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n\n.page-heading[_ngcontent-%COMP%], .card-heading[_ngcontent-%COMP%], .list-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #5274ed;\n  font-size: 10px;\n  font-weight: 750;\n  letter-spacing: 1.2px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(23px, 2.5vw, 29px);\n  font-weight: 720;\n  letter-spacing: -0.8px;\n}\n\n.page-description[_ngcontent-%COMP%], .card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .list-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #78849a;\n  font-size: 12px;\n}\n\n.employee-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border: 1px solid #e8ecf3;\n  border-radius: 10px;\n  color: #78849a;\n  background: #fff;\n  font-size: 11px;\n}\n\n.count-value[_ngcontent-%COMP%] {\n  color: #17233b;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.add-card[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #e8ecf3;\n  border-radius: 14px;\n  background: #fff;\n}\n\n.add-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-heading[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  gap: 12px;\n  margin-bottom: 19px;\n}\n\n.heading-icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: #5274ed;\n  background: #eef2ff;\n}\n\n.heading-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n}\n\n.heading-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .add-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n}\n\n.card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .list-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .list-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 39px;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 0 14px;\n  border: 1px solid #5274ed;\n  border-radius: 8px;\n  color: #fff;\n  background: #5274ed;\n  font: inherit;\n  font-size: 11px;\n  font-weight: 650;\n  white-space: nowrap;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.add-button[_ngcontent-%COMP%]:hover {\n  border-color: #3f60d5;\n  background: #3f60d5;\n}\n\n.add-button[_ngcontent-%COMP%]:focus-visible, .btn-action[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgb(82 116 237 / 25%);\n  outline-offset: 2px;\n}\n\n.list-heading[_ngcontent-%COMP%] {\n  min-height: 68px;\n  padding: 14px 19px;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-top: 1px solid #edf0f5;\n}\n\n.employee-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 850px;\n  border-collapse: collapse;\n  text-align: left;\n}\n\n.employee-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8f9fc;\n}\n\n.employee-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 39px;\n  color: #8792a5;\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.55px;\n  text-transform: uppercase;\n}\n\n.employee-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .employee-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 18px;\n}\n\n.employee-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 61px;\n  border-top: 1px solid #edf0f5;\n  color: #58657a;\n  font-size: 11px;\n  white-space: nowrap;\n}\n\n.employee-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fbfcff;\n}\n\n.text-end[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 30px;\n  margin-left: 5px;\n  padding: 0 9px;\n  border: 1px solid #e1e6ef;\n  border-radius: 7px;\n  color: #46536a;\n  background: #fff;\n  font: inherit;\n  font-size: 10px;\n  font-weight: 650;\n  cursor: pointer;\n}\n\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5ff;\n  color: #405cc5;\n  background: #f5f7ff;\n}\n\n.btn-action.delete[_ngcontent-%COMP%] {\n  border-color: #f1dfe2;\n  color: #ba4e5a;\n}\n\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  border-color: #e9c2c7;\n  background: #fff6f7;\n}\n\n@media (max-width: 560px) {\n  .employee-page[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n\n  .add-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n  .add-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .employee-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .employee-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZW1wLWxpc3QvZW1wLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjMTcyMzNiO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtcGFnZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcsXHJcbi5jYXJkLWhlYWRpbmcsXHJcbi5saXN0LWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5leWVicm93IHtcclxuICBtYXJnaW46IDAgMCA3cHg7XHJcbiAgY29sb3I6ICM1Mjc0ZWQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkaW5nIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgyM3B4LCAyLjV2dywgMjlweCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcyMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xyXG59XHJcblxyXG4ucGFnZS1kZXNjcmlwdGlvbixcclxuLmNhcmQtaGVhZGluZyBwLFxyXG4ubGlzdC1oZWFkaW5nIHAge1xyXG4gIG1hcmdpbjogNnB4IDAgMDtcclxuICBjb2xvcjogIzc4ODQ5YTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZS1jb3VudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogN3B4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGVjZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogIzc4ODQ5YTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmNvdW50LXZhbHVlIHtcclxuICBjb2xvcjogIzE3MjMzYjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmFkZC1jYXJkLFxyXG4ubGlzdC1jYXJkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGVjZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uYWRkLWNhcmQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRpbmcge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcclxufVxyXG5cclxuLmhlYWRpbmctaWNvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjNTI3NGVkO1xyXG4gIGJhY2tncm91bmQ6ICNlZWYyZmY7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWljb24ge1xyXG4gIHdpZHRoOiAzOHB4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1pY29uIHN2ZyxcclxuLmFkZC1idXR0b24gc3ZnIHtcclxuICB3aWR0aDogMTdweDtcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgZmlsbDogbm9uZTtcclxuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuICBzdHJva2Utd2lkdGg6IDEuODtcclxufVxyXG5cclxuLmNhcmQtaGVhZGluZyBoMyxcclxuLmxpc3QtaGVhZGluZyBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkaW5nIHAsXHJcbi5saXN0LWhlYWRpbmcgcCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA3cHg7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1Mjc0ZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM1Mjc0ZWQ7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICMzZjYwZDU7XHJcbiAgYmFja2dyb3VuZDogIzNmNjBkNTtcclxufVxyXG5cclxuLmFkZC1idXR0b246Zm9jdXMtdmlzaWJsZSxcclxuLmJ0bi1hY3Rpb246Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogM3B4IHNvbGlkIHJnYig4MiAxMTYgMjM3IC8gMjUlKTtcclxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59XHJcblxyXG4ubGlzdC1oZWFkaW5nIHtcclxuICBtaW4taGVpZ2h0OiA2OHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMTlweDtcclxufVxyXG5cclxuLnRhYmxlLXdyYXAge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGYwZjU7XHJcbn1cclxuXHJcbi5lbXBsb3llZS10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiA4NTBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5lbXBsb3llZS10YWJsZSB0aGVhZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYztcclxufVxyXG5cclxuLmVtcGxveWVlLXRhYmxlIHRoIHtcclxuICBoZWlnaHQ6IDM5cHg7XHJcbiAgY29sb3I6ICM4NzkyYTU7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41NXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5lbXBsb3llZS10YWJsZSB0aCxcclxuLmVtcGxveWVlLXRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZS10YWJsZSB0ZCB7XHJcbiAgaGVpZ2h0OiA2MXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRmMGY1O1xyXG4gIGNvbG9yOiAjNTg2NTdhO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmYmZjZmY7XHJcbn1cclxuXHJcbi50ZXh0LWVuZCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nOiAwIDlweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNmVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBjb2xvcjogIzQ2NTM2YTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2NTA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi5lZGl0OmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZmY7XHJcbiAgY29sb3I6ICM0MDVjYzU7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjdmZjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24uZGVsZXRlIHtcclxuICBib3JkZXItY29sb3I6ICNmMWRmZTI7XHJcbiAgY29sb3I6ICNiYTRlNWE7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLmRlbGV0ZTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTljMmM3O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY2Zjc7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xyXG4gIC5lbXBsb3llZS1wYWdlIHtcclxuICAgIGdhcDogMTRweDtcclxuICB9XHJcblxyXG4gIC5hZGQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZW1wbG95ZWUtdGFibGUgdGgsXHJcbiAgLmVtcGxveWVlLXRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1703:
/*!************************************************************!*\
  !*** ./src/app/pages/employeform/employeform.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeformComponent: () => (/* binding */ EmployeformComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_core_model_classes_emp_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/classes/emp-form.model */ 2065);
/* harmony import */ var src_app_core_services_empform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/empform.service */ 4028);
/* harmony import */ var src_app_core_services_master_s_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/master-s.service */ 1730);









function EmployeformComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", item_r3.departmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.departmentName);
  }
}
function EmployeformComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", item_r4.childDeptId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.departmentName);
  }
}
class EmployeformComponent {
  constructor() {
    this.empobj = new src_app_core_model_classes_emp_form_model__WEBPACK_IMPORTED_MODULE_0__.emplmodel();
    this.empinje = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_core_services_empform_service__WEBPACK_IMPORTED_MODULE_1__.EmpformService);
    this.master = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_core_services_master_s_service__WEBPACK_IMPORTED_MODULE_2__.MasterSService);
    this.activeR = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.childdepList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.eidId = 0;
    this.parentdepList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
  }
  onChange(event) {
    const id = event;
    if (typeof id !== 'number') return;
    console.log('id received:', id, typeof id);
    this.master.getAllchild(id).subscribe({
      next: res3 => {
        this.childdepList.set(res3.data);
      }
    });
  }
  ngOnInit() {
    this.getparent();
    this.activeR.params.subscribe({
      next: res4 => {
        this.eidId = res4.id;
        if (this.eidId != 0) {
          this.gellempbyID();
        }
      }
    });
  }
  gellempbyID() {
    this.empinje.getAllemplbyID(this.eidId).subscribe({
      next: res5 => {
        this.empobj = res5;
      }
    });
  }
  getparent() {
    this.master.getAllParent().subscribe({
      next: res2 => {
        this.parentdepList.set(res2.data);
      }
    });
  }
  onsaveemp() {
    this.empinje.oncreateemp(this.empobj).subscribe({
      next: res1 => {
        alert("Emp created succesfukky");
      },
      error: err => {}
    });
  }
  static {
    this.ɵfac = function EmployeformComponent_Factory(t) {
      return new (t || EmployeformComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmployeformComponent,
      selectors: [["app-employeform"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 79,
      vars: 13,
      consts: [[1, "employee-form-page"], [1, "page-heading"], [1, "eyebrow"], [1, "page-description"], ["aria-labelledby", "employee-details-title", 1, "form-card"], [1, "card-heading"], ["id", "employee-details-title"], ["aria-hidden", "true"], [1, "employee-form", 3, "ngSubmit"], ["empForm", "ngForm"], [1, "field", "field-full"], ["type", "text", "name", "employeeName", "placeholder", "e.g. Alex Morgan", "autocomplete", "name", "required", "", 3, "ngModel", "ngModelChange"], [1, "field"], ["type", "text", "name", "contactNo", "placeholder", "e.g. +1 555 0100", "autocomplete", "tel", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "emailId", "placeholder", "e.g. alex@company.com", "autocomplete", "email", "required", "", "email", "", 3, "ngModel", "ngModelChange"], ["name", "deptId", "required", "", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["disabled", "", 3, "ngValue"], [1, "field", "gender-field"], [1, "radio-options"], ["type", "radio", "name", "gender", "value", "female", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "gender", "value", "male", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "gender", "value", "other", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter a password", "autocomplete", "new-password", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-actions", "field-full"], ["type", "submit", 1, "submit-button", 3, "disabled"], [3, "ngValue"]],
      template: function EmployeformComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "header", 1)(2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "PEOPLE");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Add employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Enter the employee details to add them to your workspace.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 4)(9, "div", 5)(10, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Employee details");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Fields marked with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " are required.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "form", 8, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EmployeformComponent_Template_form_ngSubmit_17_listener() {
            return ctx.onsaveemp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 10)(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Employee name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.empobj.employeeName = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 12)(26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Contact number ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.empobj.contactNo = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 12)(32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Email address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.empobj.emailId = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 12)(38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Department ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_select_ngModelChange_42_listener($event) {
            return ctx.empobj.deptId = $event;
          })("ngModelChange", function EmployeformComponent_Template_select_ngModelChange_42_listener($event) {
            return ctx.onChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Select a department");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, EmployeformComponent_option_45_Template, 2, 2, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 12)(47, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Role ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_select_ngModelChange_51_listener($event) {
            return ctx.empobj.deptId = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Select department");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, EmployeformComponent_option_54_Template, 2, 2, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "fieldset", 19)(56, "legend");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Gender ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 20)(61, "label")(62, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_input_ngModelChange_62_listener($event) {
            return ctx.empobj.gender = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Female");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label")(65, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_input_ngModelChange_65_listener($event) {
            return ctx.empobj.gender = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Male");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label")(68, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.empobj.gender = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Other");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 12)(71, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmployeformComponent_Template_input_ngModelChange_75_listener($event) {
            return ctx.empobj.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 25)(77, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " Add employee ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.employeeName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.contactNo);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.emailId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.deptId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.parentdepList());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.deptId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.childdepList());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.gender);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.gender);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.gender);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empobj.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  color: #17233b;\n}\n\n.employee-form-page[_ngcontent-%COMP%] {\n  width: min(100%, 820px);\n  margin: 0 auto;\n  padding: 8px 0 32px;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #5274ed;\n  font-size: 10px;\n  font-weight: 750;\n  letter-spacing: 1.2px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(23px, 2.5vw, 29px);\n  font-weight: 720;\n  letter-spacing: -0.8px;\n}\n\n.page-description[_ngcontent-%COMP%], .card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #78849a;\n  font-size: 12px;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #e8ecf3;\n  border-radius: 14px;\n  background: #fff;\n}\n\n.card-heading[_ngcontent-%COMP%] {\n  padding: 19px 21px;\n  border-bottom: 1px solid #edf0f5;\n}\n\n.card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.employee-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px 16px;\n  padding: 21px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 7px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  color: #46536a;\n  font-size: 11px;\n  font-weight: 650;\n}\n\n.field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .gender-field[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c34b59;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=\"radio\"]), .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  height: 40px;\n  padding: 0 11px;\n  border: 1px solid #e1e6ef;\n  border-radius: 8px;\n  outline: none;\n  color: #17233b;\n  background: #fff;\n  font: inherit;\n  font-weight: 400;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #a0a9b8;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #8095f2;\n  box-shadow: 0 0 0 3px rgb(82 116 237 / 12%);\n}\n\n.gender-field[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 0;\n  color: #46536a;\n  font-size: 11px;\n  font-weight: 650;\n}\n\n.radio-options[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 40px;\n  align-items: center;\n  gap: 18px;\n}\n\n.radio-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #58657a;\n  font-size: 11px;\n  font-weight: 400;\n  cursor: pointer;\n}\n\n.radio-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #5274ed;\n}\n\n.field-full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 2px;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 17px;\n  border: 1px solid #5274ed;\n  border-radius: 8px;\n  color: #fff;\n  background: #5274ed;\n  font: inherit;\n  font-size: 11px;\n  font-weight: 650;\n  cursor: pointer;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  border-color: #3f60d5;\n  background: #3f60d5;\n}\n\n.submit-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgb(82 116 237 / 25%);\n  outline-offset: 2px;\n}\n\n@media (max-width: 560px) {\n  .employee-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 17px;\n  }\n\n  .card-heading[_ngcontent-%COMP%] {\n    padding: 17px;\n  }\n\n  .field-full[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n\n  .submit-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZW1wbG95ZWZvcm0vZW1wbG95ZWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzE3MjMzYjtcclxufVxyXG5cclxuLmVtcGxveWVlLWZvcm0tcGFnZSB7XHJcbiAgd2lkdGg6IG1pbigxMDAlLCA4MjBweCk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogOHB4IDAgMzJweDtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxufVxyXG5cclxuLmV5ZWJyb3cge1xyXG4gIG1hcmdpbjogMCAwIDdweDtcclxuICBjb2xvcjogIzUyNzRlZDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDc1MDtcclxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcgaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IGNsYW1wKDIzcHgsIDIuNXZ3LCAyOXB4KTtcclxuICBmb250LXdlaWdodDogNzIwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XHJcbn1cclxuXHJcbi5wYWdlLWRlc2NyaXB0aW9uLFxyXG4uY2FyZC1oZWFkaW5nIHAge1xyXG4gIG1hcmdpbjogN3B4IDAgMDtcclxuICBjb2xvcjogIzc4ODQ5YTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtLWNhcmQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZWNmMztcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRpbmcge1xyXG4gIHBhZGRpbmc6IDE5cHggMjFweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZjBmNTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGluZyBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkaW5nIHAge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmVtcGxveWVlLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIGdhcDogMThweCAxNnB4O1xyXG4gIHBhZGRpbmc6IDIxcHg7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZ2FwOiA3cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAjNDY1MzZhO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNjUwO1xyXG59XHJcblxyXG4uZmllbGQgPiBzcGFuID4gc3BhbixcclxuLmdlbmRlci1maWVsZCBsZWdlbmQgc3BhbixcclxuLmNhcmQtaGVhZGluZyBwIHNwYW4ge1xyXG4gIGNvbG9yOiAjYzM0YjU5O1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pLFxyXG4uZmllbGQgc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDAgMTFweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNmVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjMTcyMzNiO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2EwYTliODtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OmZvY3VzLFxyXG4uZmllbGQgc2VsZWN0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM4MDk1ZjI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig4MiAxMTYgMjM3IC8gMTIlKTtcclxufVxyXG5cclxuLmdlbmRlci1maWVsZCBsZWdlbmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzQ2NTM2YTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMThweDtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbnMgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgY29sb3I6ICM1ODY1N2E7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmFkaW8tb3B0aW9ucyBpbnB1dCB7XHJcbiAgYWNjZW50LWNvbG9yOiAjNTI3NGVkO1xyXG59XHJcblxyXG4uZmllbGQtZnVsbCB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDAgMTdweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTI3NGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNTI3NGVkO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2NTA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y2MGQ1O1xyXG4gIGJhY2tncm91bmQ6ICMzZjYwZDU7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IDNweCBzb2xpZCByZ2IoODIgMTE2IDIzNyAvIDI1JSk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XHJcbiAgLmVtcGxveWVlLWZvcm0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmZpZWxkLWZ1bGwge1xyXG4gICAgZ3JpZC1jb2x1bW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3593:
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class LayoutComponent {
  constructor() {
    const Localdata = localStorage.getItem('emp_user');
    if (Localdata != null) {
      this.logindata = JSON.parse(Localdata);
    }
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 94,
      vars: 4,
      consts: [[1, "layout"], [1, "sidebar"], ["routerLink", "/admin/dashboard", "aria-label", "PeopleDesk home", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "brand-highlight"], [1, "navigation-label"], ["aria-label", "Main navigation", 1, "navigation"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "navigation-link"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["x", "3.5", "y", "3.5", "width", "7", "height", "7", "rx", "1.5"], ["x", "13.5", "y", "3.5", "width", "7", "height", "7", "rx", "1.5"], ["x", "3.5", "y", "13.5", "width", "7", "height", "7", "rx", "1.5"], ["x", "13.5", "y", "13.5", "width", "7", "height", "7", "rx", "1.5"], ["routerLink", "/admin/employe-list", "routerLinkActive", "active", 1, "navigation-link"], ["cx", "9", "cy", "8", "r", "3"], ["d", "M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 3.5 4.75"], ["routerLink", "/admin/emp-form/0", "routerLinkActive", "active", 1, "navigation-link"], ["d", "M3.5 19a5.5 5.5 0 0 1 11 0M19 8v6M16 11h6"], ["routerLink", "/admin/project", "routerLinkActive", "active", 1, "navigation-link"], ["d", "M4 20V8l8-4 8 4v12H4Z"], ["d", "M8 20v-6h8v6M8 9h.01M12 9h.01M16 9h.01"], ["routerLink", "/admin/project-ass", "routerLinkActive", "active", 1, "navigation-link"], ["d", "M4 6.5h16M4 12h16M4 17.5h16"], ["cx", "8", "cy", "6.5", "r", "1.5"], ["cx", "15", "cy", "12", "r", "1.5"], ["cx", "10", "cy", "17.5", "r", "1.5"], [1, "sidebar-footer"], [1, "workspace-card"], ["aria-hidden", "true", 1, "workspace-icon"], [1, "profile"], ["aria-hidden", "true", 1, "profile-avatar"], [1, "profile-copy"], [1, "main"], [1, "topbar"], [1, "eyebrow"], [1, "topbar-profile"], ["aria-hidden", "true", 1, "status-dot"], ["aria-hidden", "true", 1, "topbar-avatar"], ["routerLink", "/login", 1, "logout-button"], ["d", "M10 17l5-5-5-5M15 12H3M13 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5"], [1, "content"], [1, "welcome"], ["aria-label", "Workspace content", 1, "page"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "a", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "P");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "People");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Desk");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MANAGEMENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 6)(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 9)(15, "rect", 10)(16, "rect", 11)(17, "rect", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 14)(23, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Employees");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 14)(29, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 19)(35, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 22)(41, "circle", 23)(42, "circle", 24)(43, "circle", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Project assignments");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26)(47, "div", 27)(48, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div")(51, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Your workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "People and work, all in one place.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29)(56, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "AM");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 31)(59, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32)(64, "header", 33)(65, "div")(66, "p", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "PEOPLEDESK");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Management workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 31)(73, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "AM");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Log out");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "main", 40)(85, "section", 41)(86, "p", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "OVERVIEW");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Welcome to your workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Manage your people and work from one simple place.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "section", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logindata.employeeName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logindata.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logindata.employeeName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logindata.role);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  --ink: #17233b;\n  --muted: #78849a;\n  --accent: #5274ed;\n  --line: #e8ecf3;\n  display: block;\n  min-height: 100vh;\n  color: var(--ink);\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\n}\n\n.layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f6f8fc;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 auto 0 0;\n  z-index: 2;\n  display: flex;\n  width: 250px;\n  flex-direction: column;\n  padding: 26px 18px 18px;\n  border-right: 1px solid var(--line);\n  background: #fff;\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 0 8px;\n  color: var(--ink);\n  font-size: 19px;\n  font-weight: 750;\n  letter-spacing: -0.6px;\n  text-decoration: none;\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border-radius: 12px;\n  color: #fff;\n  background: var(--accent);\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.brand-highlight[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n\n.navigation-label[_ngcontent-%COMP%] {\n  margin: 43px 10px 12px;\n  color: #9aa4b6;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n}\n\n.navigation-link[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 46px;\n  align-items: center;\n  gap: 13px;\n  padding: 0 12px;\n  border-radius: 10px;\n  color: #66738a;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.navigation-link[_ngcontent-%COMP%]:hover, .navigation-link.active[_ngcontent-%COMP%] {\n  color: var(--accent);\n  background: #eef2ff;\n}\n\n.navigation-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  flex: 0 0 auto;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.workspace-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 13px 11px;\n  border-radius: 12px;\n  background: #f5f7fc;\n}\n\n.workspace-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 23px;\n  height: 23px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--accent);\n  background: #e5eaff;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.workspace-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .profile-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--ink);\n  font-size: 11px;\n}\n\n.workspace-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--muted);\n  font-size: 10px;\n  line-height: 1.45;\n}\n\n.profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 17px;\n  padding: 15px 4px 0;\n  border-top: 1px solid var(--line);\n}\n\n.profile-avatar[_ngcontent-%COMP%], .topbar-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 50%;\n  color: #405cc5;\n  background: #e8edff;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.profile-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 10px;\n}\n\n.main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin-left: 250px;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 76px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px clamp(20px, 4vw, 48px);\n  border-bottom: 1px solid var(--line);\n  background: #fff;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: var(--accent);\n  font-size: 9px;\n  font-weight: 750;\n  letter-spacing: 1.2px;\n}\n\n.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 650;\n}\n\n.topbar-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  color: #59667c;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 36px;\n  align-items: center;\n  gap: 7px;\n  margin-left: 8px;\n  padding: 0 12px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  color: #59667c;\n  background: #fff;\n  font-size: 11px;\n  font-weight: 650;\n  text-decoration: none;\n}\n\n.logout-button[_ngcontent-%COMP%]:hover {\n  border-color: #d8e0fa;\n  color: var(--accent);\n  background: #f7f8ff;\n}\n\n.logout-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.status-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #39b980;\n}\n\n.topbar-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-left: 3px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 36px clamp(20px, 4vw, 48px);\n}\n\n.welcome[_ngcontent-%COMP%] {\n  margin-bottom: 27px;\n}\n\n.welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  font-size: clamp(22px, 2.4vw, 28px);\n  font-weight: 700;\n  letter-spacing: -0.7px;\n}\n\n.welcome[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n\n.page[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n@media (max-width: 700px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n    width: 100%;\n    padding: 14px 16px 10px;\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n\n  .brand[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .navigation-label[_ngcontent-%COMP%], .sidebar-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 7px;\n    margin-top: 13px;\n  }\n\n  .navigation-link[_ngcontent-%COMP%] {\n    min-height: 38px;\n    gap: 8px;\n    padding: 0 10px;\n    font-size: 12px;\n  }\n\n  .navigation-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 17px;\n    height: 17px;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .topbar[_ngcontent-%COMP%] {\n    min-height: 65px;\n    padding: 10px 16px;\n  }\n\n  .topbar-profile[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n\n  .topbar-avatar[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .logout-button[_ngcontent-%COMP%] {\n    min-height: 33px;\n    margin-left: 3px;\n    padding: 0 8px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding: 27px 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1pbms6ICMxNzIzM2I7XHJcbiAgLS1tdXRlZDogIzc4ODQ5YTtcclxuICAtLWFjY2VudDogIzUyNzRlZDtcclxuICAtLWxpbmU6ICNlOGVjZjM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjZjZmOGZjO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiAwIGF1dG8gMCAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyNnB4IDE4cHggMThweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uYnJhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDExcHg7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5icmFuZC1tYXJrIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAzOHB4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmJyYW5kLWhpZ2hsaWdodCB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDQzcHggMTBweCAxMnB4O1xyXG4gIGNvbG9yOiAjOWFhNGI2O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWxpbmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogNDZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTNweDtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogIzY2NzM4YTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWxpbms6aG92ZXIsXHJcbi5uYXZpZ2F0aW9uLWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICBiYWNrZ3JvdW5kOiAjZWVmMmZmO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1saW5rIHN2ZyB7XHJcbiAgd2lkdGg6IDE5cHg7XHJcbiAgaGVpZ2h0OiAxOXB4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxLjc7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuLndvcmtzcGFjZS1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAxM3B4IDExcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmN2ZjO1xyXG59XHJcblxyXG4ud29ya3NwYWNlLWljb24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGJhY2tncm91bmQ6ICNlNWVhZmY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi53b3Jrc3BhY2UtY2FyZCBzdHJvbmcsXHJcbi5wcm9maWxlLWNvcHkgc3Ryb25nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi53b3Jrc3BhY2UtY2FyZCBwIHtcclxuICBtYXJnaW46IDRweCAwIDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgcGFkZGluZzogMTVweCA0cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGluZSk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWF2YXRhcixcclxuLnRvcGJhci1hdmF0YXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjNDA1Y2M1O1xyXG4gIGJhY2tncm91bmQ6ICNlOGVkZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvcHkgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG59XHJcblxyXG4udG9wYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDc2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTJweCBjbGFtcCgyMHB4LCA0dncsIDQ4cHgpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uZXllYnJvdyB7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG59XHJcblxyXG4udG9wYmFyIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2NTA7XHJcbn1cclxuXHJcbi50b3BiYXItcHJvZmlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOXB4O1xyXG4gIGNvbG9yOiAjNTk2NjdjO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubG9nb3V0LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWluLWhlaWdodDogMzZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZzogMCAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBjb2xvcjogIzU5NjY3YztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNjUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxvZ291dC1idXR0b246aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2Q4ZTBmYTtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICBiYWNrZ3JvdW5kOiAjZjdmOGZmO1xyXG59XHJcblxyXG4ubG9nb3V0LWJ1dHRvbiBzdmcge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBmaWxsOiBub25lO1xyXG4gIHN0cm9rZTogY3VycmVudENvbG9yO1xyXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gIHN0cm9rZS13aWR0aDogMS43O1xyXG59XHJcblxyXG4uc3RhdHVzLWRvdCB7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzM5Yjk4MDtcclxufVxyXG5cclxuLnRvcGJhci1hdmF0YXIge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMzZweCBjbGFtcCgyMHB4LCA0dncsIDQ4cHgpO1xyXG59XHJcblxyXG4ud2VsY29tZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxufVxyXG5cclxuLndlbGNvbWUgaDIge1xyXG4gIG1hcmdpbjogMCAwIDdweDtcclxuICBmb250LXNpemU6IGNsYW1wKDIycHgsIDIuNHZ3LCAyOHB4KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC43cHg7XHJcbn1cclxuXHJcbi53ZWxjb21lID4gcDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1sYWJlbCxcclxuICAuc2lkZWJhci1mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uYXZpZ2F0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1saW5rIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5uYXZpZ2F0aW9uLWxpbmsgc3ZnIHtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAudG9wYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgfVxyXG5cclxuICAudG9wYmFyLXByb2ZpbGUge1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgfVxyXG5cclxuICAudG9wYmFyLWF2YXRhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dC1idXR0b24ge1xyXG4gICAgbWluLWhlaWdodDogMzNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI3cHggMTZweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7195:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);







class LoginComponent {
  constructor() {
    this.loginobj = {
      userName: '',
      password: ''
    };
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  }
  onLogin() {
    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + '/login', this.loginobj).subscribe({
      next: resp => {
        if (resp.result) {
          localStorage.setItem('emp_user', JSON.stringify(resp.data));
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          alert('User not found');
        }
      },
      error: err => {
        alert('Server error, please try again');
        console.error(err);
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 58,
      vars: 2,
      consts: [[1, "login-page", "container-fluid", "min-vh-100", "d-flex", "align-items-center", "justify-content-center", "py-4"], ["aria-labelledby", "login-title", 1, "login-card", "card", "border-0", "shadow-lg", "overflow-hidden", "w-100"], [1, "row", "g-0"], [1, "welcome-panel", "col-lg-5", "d-none", "d-lg-flex", "flex-column", "justify-content-between", "p-5", "text-white"], [1, "d-flex", "align-items-center", "gap-2", "fw-semibold", "fs-5"], ["aria-hidden", "true", 1, "brand-icon", "d-inline-flex", "align-items-center", "justify-content-center", "rounded-3"], ["viewBox", "0 0 32 32", "fill", "none"], ["d", "M16 4.5 27 10.75v10.5L16 27.5 5 21.25v-10.5L16 4.5Z", "stroke", "currentColor", "stroke-width", "2"], ["d", "m11.5 16.25 3 2.75 6-6", "stroke", "currentColor", "stroke-width", "2.25", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "brand-accent"], [1, "welcome-copy"], [1, "small", "fw-semibold", "text-uppercase", "mb-3"], [1, "display-6", "fw-semibold", "mb-3"], [1, "mb-0", "opacity-75"], [1, "small", "mb-0", "opacity-75"], [1, "col-12", "col-lg-7"], [1, "login-content", "p-4", "p-sm-5"], [1, "mobile-brand", "d-flex", "d-lg-none", "align-items-center", "gap-2", "fw-semibold", "fs-5", "mb-5"], [1, "mb-4"], [1, "section-kicker", "small", "fw-semibold", "text-uppercase", "mb-2"], ["id", "login-title", 1, "h3", "fw-semibold", "mb-2"], [1, "text-secondary", "mb-0"], [3, "ngSubmit"], [1, "mb-3"], ["for", "userName", 1, "form-label", "fw-medium"], ["id", "userName", "name", "userName", "type", "text", "placeholder", "Enter your username", "autocomplete", "username", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "form-label", "fw-medium"], [1, "input-group", "input-group-lg"], ["id", "password", "name", "password", "type", "password", "placeholder", "Enter your password", "autocomplete", "current-password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-100", "login-button"], ["aria-hidden", "true", 1, "ms-1"], [1, "security-note", "small", "text-secondary", "text-center", "mt-4", "mb-0"], ["aria-hidden", "true", 1, "text-success", "me-1"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "aside", 3)(4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7)(8, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "People");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Desk");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Your team, in sync");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h1", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Good work starts with great people.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "One simple place to bring your people and projects together.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "A little more human, every workday.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "path", 7)(28, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "People");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Desk");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "header", 18)(34, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Welcome back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h2", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Sign in to your account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Enter your details below to continue.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "form", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_40_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 23)(42, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.loginobj.userName = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18)(46, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 27)(49, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.loginobj.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Sign in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 31)(55, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u2713");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Your information is protected and secure. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginobj.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginobj.password);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["[_nghost-%COMP%] {\n  --login-primary: #4967e8;\n  --login-ink: #202b43;\n  --login-muted: #778198;\n  display: block;\n  color: var(--login-ink);\n}\n\n.login-page[_ngcontent-%COMP%] {\n  background: #f4f6fb;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  max-width: 920px;\n  border-radius: 1.25rem;\n  animation: _ngcontent-%COMP%_login-arrive 400ms ease-out both;\n}\n\n.welcome-panel[_ngcontent-%COMP%] {\n  min-height: 570px;\n  background: linear-gradient(145deg, #263c91, #344fae 55%, #4264d5);\n}\n\n.brand-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  color: inherit;\n  background: rgb(255 255 255 / 14%);\n}\n\n.brand-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.brand-accent[_ngcontent-%COMP%] {\n  color: #a9bcff;\n}\n\n.welcome-copy[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%], .section-kicker[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  letter-spacing: 0.12em;\n}\n\n.welcome-copy[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #c4d0ff;\n}\n\n.welcome-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 330px;\n  line-height: 1.15;\n}\n\n.welcome-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  max-width: 300px;\n  line-height: 1.7;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  max-width: 540px;\n  margin: 0 auto;\n}\n\n.mobile-brand[_ngcontent-%COMP%] {\n  color: var(--login-ink);\n}\n\n.mobile-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n  background: rgb(73 103 232 / 9%);\n}\n\n.mobile-brand[_ngcontent-%COMP%]   .brand-accent[_ngcontent-%COMP%] {\n  color: var(--login-primary);\n}\n\n.login-content[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  color: var(--login-muted) !important;\n}\n\n.login-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #e1e6ef;\n  font-size: 0.95rem;\n}\n\n.login-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--login-primary);\n  box-shadow: 0 0 0 0.2rem rgb(73 103 232 / 15%);\n}\n\n.login-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #a0a8b8;\n  font-size: 0.875rem;\n}\n\n.password-toggle[_ngcontent-%COMP%] {\n  min-width: 68px;\n  font-size: 0.8rem;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  border-color: var(--login-primary);\n  background-color: var(--login-primary);\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: #3c58d4;\n  background-color: #3c58d4;\n}\n\n.security-note[_ngcontent-%COMP%] {\n  color: var(--login-muted) !important;\n}\n\n@keyframes _ngcontent-%COMP%_login-arrive {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .login-card[_ngcontent-%COMP%], .login-button[_ngcontent-%COMP%] {\n    animation: none;\n    transition: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1sb2dpbi1wcmltYXJ5OiAjNDk2N2U4O1xyXG4gIC0tbG9naW4taW5rOiAjMjAyYjQzO1xyXG4gIC0tbG9naW4tbXV0ZWQ6ICM3NzgxOTg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHZhcigtLWxvZ2luLWluayk7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNmZiO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA5MjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gIGFuaW1hdGlvbjogbG9naW4tYXJyaXZlIDQwMG1zIGVhc2Utb3V0IGJvdGg7XHJcbn1cclxuXHJcbi53ZWxjb21lLXBhbmVsIHtcclxuICBtaW4taGVpZ2h0OiA1NzBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMjYzYzkxLCAjMzQ0ZmFlIDU1JSwgIzQyNjRkNSk7XHJcbn1cclxuXHJcbi5icmFuZC1pY29uIHtcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSAyNTUgMjU1IC8gMTQlKTtcclxufVxyXG5cclxuLmJyYW5kLWljb24gc3ZnIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5icmFuZC1hY2NlbnQge1xyXG4gIGNvbG9yOiAjYTliY2ZmO1xyXG59XHJcblxyXG4ud2VsY29tZS1jb3B5IC5zbWFsbCxcclxuLnNlY3Rpb24ta2lja2VyIHtcclxuICBjb2xvcjogdmFyKC0tbG9naW4tcHJpbWFyeSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxufVxyXG5cclxuLndlbGNvbWUtY29weSAuc21hbGwge1xyXG4gIGNvbG9yOiAjYzRkMGZmO1xyXG59XHJcblxyXG4ud2VsY29tZS1jb3B5IGgxIHtcclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG59XHJcblxyXG4ud2VsY29tZS1jb3B5IHA6bGFzdC1jaGlsZCB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4ubG9naW4tY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiA1NDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm1vYmlsZS1icmFuZCB7XHJcbiAgY29sb3I6IHZhcigtLWxvZ2luLWluayk7XHJcbn1cclxuXHJcbi5tb2JpbGUtYnJhbmQgLmJyYW5kLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1sb2dpbi1wcmltYXJ5KTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNzMgMTAzIDIzMiAvIDklKTtcclxufVxyXG5cclxuLm1vYmlsZS1icmFuZCAuYnJhbmQtYWNjZW50IHtcclxuICBjb2xvcjogdmFyKC0tbG9naW4tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IGhlYWRlciA+IHA6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6IHZhcigtLWxvZ2luLW11dGVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW4tY29udGVudCAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6ICNlMWU2ZWY7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG4ubG9naW4tY29udGVudCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWxvZ2luLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2IoNzMgMTAzIDIzMiAvIDE1JSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2EwYThiODtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtdG9nZ2xlIHtcclxuICBtaW4td2lkdGg6IDY4cHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbG9naW4tcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9naW4tcHJpbWFyeSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNjBtcyBlYXNlLCB0cmFuc2Zvcm0gMTYwbXMgZWFzZTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJvcmRlci1jb2xvcjogIzNjNThkNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M1OGQ0O1xyXG59XHJcblxyXG4uc2VjdXJpdHktbm90ZSB7XHJcbiAgY29sb3I6IHZhcigtLWxvZ2luLW11dGVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvZ2luLWFycml2ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgLmxvZ2luLWNhcmQsXHJcbiAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6753:
/*!**************************************************!*\
  !*** ./src/app/pages/master/master.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterComponent: () => (/* binding */ MasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class MasterComponent {
  static {
    this.ɵfac = function MasterComponent_Factory(t) {
      return new (t || MasterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MasterComponent,
      selectors: [["app-master"]],
      decls: 2,
      vars: 0,
      template: function MasterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "master works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 799:
/*!************************************************************!*\
  !*** ./src/app/pages/project-ass/project-ass.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectAssComponent: () => (/* binding */ ProjectAssComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ProjectAssComponent {
  static {
    this.ɵfac = function ProjectAssComponent_Factory(t) {
      return new (t || ProjectAssComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectAssComponent,
      selectors: [["app-project-ass"]],
      decls: 2,
      vars: 0,
      template: function ProjectAssComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "project-ass works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5431:
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_core_services_projech_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/projech.service */ 3565);







function ProjectComponent_article_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 30)(1, "div", 31)(2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "In progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 35)(11, "div")(12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "START DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "LEAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 37)(23, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 39)(26, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("PRJ-", item_r2.projectId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 7, item_r2.startDate, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.employeeName || "Employee #" + item_r2.leadByEmpId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + item_r2.emailId, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.emailId);
  }
}
function ProjectComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No projects found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ProjectComponent {
  constructor() {
    this.porjectSrv = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_core_services_projech_service__WEBPACK_IMPORTED_MODULE_0__.ProjechService);
    this.projectList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    this.isboolen = false;
    this.intlizforms();
  }
  ngOnInit() {
    this.loadproject();
  }
  loadproject() {
    this.porjectSrv.getAllproject().subscribe({
      next: res6 => {
        this.projectList.set(res6);
      },
      error: () => {
        alert('Unable to load projects. Please try again.');
      }
    });
  }
  intlizforms() {
    this.projectform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      projectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0),
      projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      clientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      leadByEmpId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]),
      contactPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
  }
  showpannel() {
    this.isboolen = true;
  }
  hidepannel() {
    this.isboolen = false;
  }
  saveproject() {
    if (this.projectform.invalid) {
      this.projectform.markAllAsTouched();
      return;
    }
    const formvalue = this.projectform.value;
    this.porjectSrv.createProject(formvalue).subscribe({
      next: () => {
        alert('Project created successfully.');
        this.loadproject();
        this.projectform.reset({
          projectId: 0,
          projectName: '',
          clientName: '',
          startDate: '',
          leadByEmpId: 0,
          contactPerson: '',
          contactNo: '',
          emailId: '',
          employeeName: ''
        });
        this.hidepannel();
      },
      error: () => {
        alert('Unable to create the project. Please try again.');
      }
    });
  }
  static {
    this.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["app-project"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 61,
      vars: 6,
      consts: [[1, "project-workspace"], [1, "workspace-header"], [1, "eyebrow"], [1, "header-description"], ["type", "button", 1, "add-project-button", 3, "click"], [1, "workspace-content"], ["aria-labelledby", "portfolio-title", 1, "portfolio"], [1, "section-heading"], ["id", "portfolio-title"], [1, "project-count"], [1, "project-list"], ["class", "project-card", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "project-form", "aria-labelledby", "form-title", 1, "project-form-panel", 3, "hidden"], [1, "form-heading"], ["id", "form-title"], [1, "form-step"], [1, "project-form", 3, "formGroup", "ngSubmit"], [1, "form-grid"], ["type", "text", "formControlName", "projectName", "placeholder", "e.g. Website redesign", "required", ""], ["type", "text", "formControlName", "clientName", "placeholder", "e.g. Northstar Labs", "required", ""], ["type", "date", "formControlName", "startDate", "required", ""], ["type", "number", "formControlName", "leadByEmpId", "placeholder", "e.g. 12", "min", "1", "required", ""], ["type", "text", "formControlName", "contactPerson", "placeholder", "e.g. Maya Chen", "required", ""], ["type", "tel", "formControlName", "contactNo", "placeholder", "e.g. +1 555 0100", "required", ""], [1, "full-width"], ["type", "email", "formControlName", "emailId", "placeholder", "client@example.com", "required", "", "email", ""], [1, "form-actions"], ["type", "button", 1, "cancel-button", 3, "click"], ["type", "submit", 1, "save-button", 3, "disabled"], [1, "project-card"], [1, "card-heading"], [1, "project-id"], [1, "project-status", "status-progress"], [1, "client-name"], [1, "project-facts"], [1, "fact-label"], [1, "card-footer"], [1, "client-email", 3, "href"], [1, "card-actions"], ["type", "button", 1, "edit-button"], ["type", "button", 1, "delete-button"]],
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "PROJECT WORKSPACE");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Manage projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Keep delivery details, ownership, and client contacts in one place.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_9_listener() {
            return ctx.showpannel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add project");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "section", 6)(13, "div", 7)(14, "div")(15, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "ACTIVE PORTFOLIO");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Your projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProjectComponent_article_22_Template, 30, 10, "article", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProjectComponent_p_23_Template, 2, 0, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "aside", 13)(25, "div", 14)(26, "div")(27, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "PROJECT DETAILS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Add a project");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "01 / 01");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProjectComponent_Template_form_ngSubmit_33_listener() {
            return ctx.saveproject();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18)(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Project name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Client name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Start date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Lead employee ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Contact person ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Contact number ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Email address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27)(57, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_57_listener() {
            return ctx.hidepannel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Save project");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.projectList().length, " projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectList());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projectList().length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isboolen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.projectform);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.projectform.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: #292521;\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\n}\n\n.project-workspace[_ngcontent-%COMP%] {\n  --project-ink: #292521;\n  --project-muted: #817a75;\n  --project-accent: #b94a28;\n  --project-border: #f0e9e4;\n  min-height: calc(100vh - 150px);\n  padding: clamp(16px, 2.4vw, 30px);\n  background: #f7f0eb;\n  border-radius: 16px;\n}\n\n.workspace-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 22px 24px;\n  border: 1px solid rgb(255 255 255 / 80%);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgb(75 45 27 / 4%);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #8c756a;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\n\n.workspace-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--project-ink);\n  font-size: clamp(23px, 3vw, 29px);\n  font-weight: 700;\n  letter-spacing: -0.7px;\n}\n\n.header-description[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: var(--project-muted);\n  font-size: 13px;\n}\n\n.add-project-button[_ngcontent-%COMP%], .edit-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%], .cancel-button[_ngcontent-%COMP%], .save-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 39px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 15px;\n  border: 0;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 650;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: background-color 150ms ease, transform 150ms ease;\n}\n\n.add-project-button[_ngcontent-%COMP%], .save-button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--project-accent);\n}\n\n.add-project-button[_ngcontent-%COMP%]:hover, .save-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  color: #fff;\n  background: #a63e20;\n}\n\n.workspace-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.8fr) minmax(310px, 0.9fr);\n  align-items: start;\n  gap: 20px;\n  margin-top: 20px;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.section-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--project-ink);\n  font-size: 19px;\n  font-weight: 700;\n  letter-spacing: -0.3px;\n}\n\n.project-count[_ngcontent-%COMP%] {\n  padding-bottom: 2px;\n  color: #665d57;\n  font-size: 11px;\n  font-weight: 650;\n  white-space: nowrap;\n}\n\n.project-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.project-card[_ngcontent-%COMP%], .project-form-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 1px solid rgb(255 255 255 / 85%);\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 7px 22px rgb(75 45 27 / 4%);\n}\n\n.project-card[_ngcontent-%COMP%] {\n  padding: 18px;\n  transition: transform 160ms ease, box-shadow 160ms ease;\n}\n\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 26px rgb(75 45 27 / 9%);\n}\n\n.card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.project-id[_ngcontent-%COMP%] {\n  color: #934329;\n  font-size: 11px;\n  font-weight: 750;\n  letter-spacing: 0.7px;\n}\n\n.project-status[_ngcontent-%COMP%] {\n  padding: 6px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 650;\n}\n\n.status-progress[_ngcontent-%COMP%] {\n  color: #9c492c;\n  background: #fbeee8;\n}\n\n.status-planned[_ngcontent-%COMP%] {\n  color: #94612c;\n  background: #fff4e3;\n}\n\n.status-review[_ngcontent-%COMP%] {\n  color: #625e59;\n  background: #f1f0ee;\n}\n\n.project-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 14px 0 4px;\n  color: var(--project-ink);\n  font-size: 17px;\n  font-weight: 650;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.client-name[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--project-muted);\n  font-size: 13px;\n}\n\n.project-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.2fr) minmax(90px, 0.8fr);\n  gap: 10px;\n  margin-top: 17px;\n  padding: 12px 0;\n  border-top: 1px solid var(--project-border);\n  border-bottom: 1px solid var(--project-border);\n}\n\n.fact-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #938b85;\n  font-size: 9px;\n  letter-spacing: 0.5px;\n}\n\n.project-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: #403a35;\n  font-size: 10px;\n  font-weight: 650;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding-top: 12px;\n}\n\n.client-email[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #9b5539;\n  font-size: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  gap: 6px;\n}\n\n.edit-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%] {\n  min-height: 32px;\n  padding: 0 11px;\n  border-radius: 9px;\n  color: #fff;\n  background: #a74629;\n  font-size: 10px;\n}\n\n.edit-button[_ngcontent-%COMP%]:hover {\n  background: #88381f;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  background: #c95335;\n}\n\n.delete-button[_ngcontent-%COMP%]:hover {\n  background: #ae4026;\n}\n\n.project-form-panel[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n  padding: 21px;\n}\n\n.form-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.form-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n\n.form-step[_ngcontent-%COMP%] {\n  color: #766d67;\n  font-size: 10px;\n  font-weight: 650;\n  white-space: nowrap;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px 13px;\n}\n\n.form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 7px;\n  color: #39332f;\n  font-size: 11px;\n  font-weight: 650;\n}\n\n.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  height: 40px;\n  padding: 0 10px;\n  border: 1px solid #e8e1dc;\n  border-radius: 9px;\n  outline: 0;\n  color: #403a35;\n  background: #fff;\n  font: inherit;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa29c;\n}\n\n.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #bd6548;\n  box-shadow: 0 0 0 3px rgb(185 74 40 / 11%);\n}\n\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--project-border);\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  border: 1px solid #eadfd9;\n  color: #695e58;\n  background: #fff;\n}\n\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background: #faf6f3;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  min-width: 116px;\n}\n\n@media (max-width: 980px) {\n  .workspace-content[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.25fr) minmax(290px, 0.85fr);\n    gap: 15px;\n  }\n\n  .project-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 720px) {\n  .project-workspace[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .workspace-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .project-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .project-form-panel[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n\n@media (max-width: 520px) {\n  .workspace-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: 17px;\n  }\n\n  .workspace-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .header-description[_ngcontent-%COMP%] {\n    max-width: 250px;\n    font-size: 11px;\n    line-height: 1.5;\n  }\n\n  .add-project-button[_ngcontent-%COMP%] {\n    min-height: 35px;\n    padding: 0 10px;\n    font-size: 10px;\n  }\n\n  .project-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .project-form-panel[_ngcontent-%COMP%] {\n    padding: 17px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkRBQTZEO0FBQy9EOztBQUVBOztFQUVFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsUUFBUTtBQUNWOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFFBQVE7RUFDUixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSw4REFBOEQ7SUFDOUQsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBjb2xvcjogIzI5MjUyMTtcclxuICBmb250LWZhbWlseTogSW50ZXIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXdvcmtzcGFjZSB7XHJcbiAgLS1wcm9qZWN0LWluazogIzI5MjUyMTtcclxuICAtLXByb2plY3QtbXV0ZWQ6ICM4MTdhNzU7XHJcbiAgLS1wcm9qZWN0LWFjY2VudDogI2I5NGEyODtcclxuICAtLXByb2plY3QtYm9yZGVyOiAjZjBlOWU0O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgcGFkZGluZzogY2xhbXAoMTZweCwgMi40dncsIDMwcHgpO1xyXG4gIGJhY2tncm91bmQ6ICNmN2YwZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLndvcmtzcGFjZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIycHggMjRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1IDI1NSAyNTUgLyA4MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYig3NSA0NSAyNyAvIDQlKTtcclxufVxyXG5cclxuLmV5ZWJyb3cge1xyXG4gIG1hcmdpbjogMCAwIDdweDtcclxuICBjb2xvcjogIzhjNzU2YTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMS4xcHg7XHJcbn1cclxuXHJcbi53b3Jrc3BhY2UtaGVhZGVyIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLXByb2plY3QtaW5rKTtcclxuICBmb250LXNpemU6IGNsYW1wKDIzcHgsIDN2dywgMjlweCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xyXG59XHJcblxyXG4uaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDdweCAwIDA7XHJcbiAgY29sb3I6IHZhcigtLXByb2plY3QtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LWJ1dHRvbixcclxuLmVkaXQtYnV0dG9uLFxyXG4uZGVsZXRlLWJ1dHRvbixcclxuLmNhbmNlbC1idXR0b24sXHJcbi5zYXZlLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWluLWhlaWdodDogMzlweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2UsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uYWRkLXByb2plY3QtYnV0dG9uLFxyXG4uc2F2ZS1idXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByb2plY3QtYWNjZW50KTtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcclxuLnNhdmUtYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2E2M2UyMDtcclxufVxyXG5cclxuLndvcmtzcGFjZS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuOGZyKSBtaW5tYXgoMzEwcHgsIDAuOWZyKTtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8ge1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZyAuZXllYnJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIGgyLFxyXG4uZm9ybS1oZWFkaW5nIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLXByb2plY3QtaW5rKTtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xyXG59XHJcblxyXG4ucHJvamVjdC1jb3VudCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBjb2xvcjogIzY2NWQ1NztcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQsXHJcbi5wcm9qZWN0LWZvcm0tcGFuZWwge1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1IDI1NSAyNTUgLyA4NSUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDdweCAyMnB4IHJnYig3NSA0NSAyNyAvIDQlKTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgcGFkZGluZzogMThweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTYwbXMgZWFzZSwgYm94LXNoYWRvdyAxNjBtcyBlYXNlO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI2cHggcmdiKDc1IDQ1IDI3IC8gOSUpO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1pZCB7XHJcbiAgY29sb3I6ICM5MzQzMjk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG59XHJcblxyXG4ucHJvamVjdC1zdGF0dXMge1xyXG4gIHBhZGRpbmc6IDZweCA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxufVxyXG5cclxuLnN0YXR1cy1wcm9ncmVzcyB7XHJcbiAgY29sb3I6ICM5YzQ5MmM7XHJcbiAgYmFja2dyb3VuZDogI2ZiZWVlODtcclxufVxyXG5cclxuLnN0YXR1cy1wbGFubmVkIHtcclxuICBjb2xvcjogIzk0NjEyYztcclxuICBiYWNrZ3JvdW5kOiAjZmZmNGUzO1xyXG59XHJcblxyXG4uc3RhdHVzLXJldmlldyB7XHJcbiAgY29sb3I6ICM2MjVlNTk7XHJcbiAgYmFja2dyb3VuZDogI2YxZjBlZTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZCBoMyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDE0cHggMCA0cHg7XHJcbiAgY29sb3I6IHZhcigtLXByb2plY3QtaW5rKTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY2xpZW50LW5hbWUge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogdmFyKC0tcHJvamVjdC1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucHJvamVjdC1mYWN0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxLjJmcikgbWlubWF4KDkwcHgsIDAuOGZyKTtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXByb2plY3QtYm9yZGVyKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJvamVjdC1ib3JkZXIpO1xyXG59XHJcblxyXG4uZmFjdC1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGNvbG9yOiAjOTM4Yjg1O1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLnByb2plY3QtZmFjdHMgc3Ryb25nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiAjNDAzYTM1O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjUwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuLmNsaWVudC1lbWFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogIzliNTUzOTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNhcmQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLmVkaXQtYnV0dG9uLFxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgbWluLWhlaWdodDogMzJweDtcclxuICBwYWRkaW5nOiAwIDExcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNhNzQ2Mjk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZWRpdC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODM4MWY7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjYzk1MzM1O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2FlNDAyNjtcclxufVxyXG5cclxuLnByb2plY3QtZm9ybS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMjFweDtcclxufVxyXG5cclxuLmZvcm0taGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0taGVhZGluZyAuZXllYnJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZm9ybS1oZWFkaW5nIGgyIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbi5mb3JtLXN0ZXAge1xyXG4gIGNvbG9yOiAjNzY2ZDY3O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjUwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5mb3JtLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIGdhcDogMTVweCAxM3B4O1xyXG59XHJcblxyXG4uZm9ybS1ncmlkIGxhYmVsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBnYXA6IDdweDtcclxuICBjb2xvcjogIzM5MzMyZjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxufVxyXG5cclxuLmZvcm0tZ3JpZCBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZTFkYztcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgb3V0bGluZTogMDtcclxuICBjb2xvcjogIzQwM2EzNTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5mb3JtLWdyaWQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FhYTI5YztcclxufVxyXG5cclxuLmZvcm0tZ3JpZCBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmQ2NTQ4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoMTg1IDc0IDQwIC8gMTElKTtcclxufVxyXG5cclxuLmZvcm0tZ3JpZCAuZnVsbC13aWR0aCB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXByb2plY3QtYm9yZGVyKTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWRmZDk7XHJcbiAgY29sb3I6ICM2OTVlNTg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmYWY2ZjM7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbiB7XHJcbiAgbWluLXdpZHRoOiAxMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLndvcmtzcGFjZS1jb250ZW50IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuMjVmcikgbWlubWF4KDI5MHB4LCAwLjg1ZnIpO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtbGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5wcm9qZWN0LXdvcmtzcGFjZSB7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLndvcmtzcGFjZS1jb250ZW50IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtbGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1mb3JtLXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAud29ya3NwYWNlLWhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDE3cHg7XHJcbiAgfVxyXG5cclxuICAud29ya3NwYWNlLWhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuXHJcbiAgLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtbGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWZvcm0tcGFuZWwge1xyXG4gICAgcGFkZGluZzogMTdweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  API_URL: 'https://projectapi.gerasim.in/api/EmployeeManagement'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map