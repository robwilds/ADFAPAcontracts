(self["webpackChunkdist"] = self["webpackChunkdist"] || []).push([["main"],{

/***/ 40210:
/*!****************************************************!*\
  !*** ./src/app/app-layout/app-layout.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLayoutComponent": () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6517);








function AppLayoutComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adf-layout-header", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3)(3, "adf-notification-history", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Contract Management ADF Application")("redirectUrl", "/dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuPositionX", "before")("menuPositionY", "above");
} }
function AppLayoutComponent_ng_template_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contracts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cloud Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppLayoutComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 5)(1, "a", 6)(2, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "vpn_key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppLayoutComponent_ng_template_4_div_4_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9)(6, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "view_day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppLayoutComponent_ng_template_4_div_8_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11)(10, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "folder_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppLayoutComponent_ng_template_4_div_12_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12)(14, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppLayoutComponent_ng_template_4_div_16_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13)(18, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppLayoutComponent_ng_template_4_div_20_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const isMenuMinimized_r4 = ctx.isMenuMinimized;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isMenuMinimized_r4());
} }
function AppLayoutComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class AppLayoutComponent {
    constructor(authService) {
        this.authService = authService;
        this.userName = null;
        this.userFullName = null;
    }
    ngOnInit() {
        this.userName = this.authService.getEcmUsername();
        // this.userImage = this.authService.peopleApi.getAvatarImage('-me-');
        this.userImage = "";
        console.log("profile pic url ", this.userImage);
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
AppLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLayoutComponent, selectors: [["app-root"]], decls: 7, vars: 5, consts: [[3, "sidenavMin", "sidenavMax", "stepOver", "hideSidenav", "expandedSidenav"], ["id", "adf-header", "color", "primary", "logo", "/assets/hylandlogo.png", 3, "title", "redirectUrl"], ["id", "rightHeader", "fxLayout", "row"], [3, "src", "alt"], ["fxFlex-Basis:10", "", 3, "menuPositionX", "menuPositionY"], [1, "adf-sidenav-linklist"], ["mat-list-item", "", "routerLink", "/login", 1, "adf-sidenav-link"], ["matListIcon", "", 1, "sidenav-menu-icon"], ["class", "sidenav-menu-label", 4, "ngIf"], ["mat-list-item", "", 1, "adf-sidenav-link"], ["matListIcon", "", "routerLink", "/dashboard", 1, "sidenav-menu-icon"], ["mat-list-item", "", "routerLink", "/documents", 1, "adf-sidenav-link"], ["mat-list-item", "", "routerLink", "/apps", 1, "adf-sidenav-link"], ["mat-list-item", "", "adf-logout", "", 1, "adf-sidenav-link"], [1, "sidenav-menu-label"]], template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adf-sidenav-layout", 0)(1, "adf-sidenav-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppLayoutComponent_ng_template_2_Template, 4, 6, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "adf-sidenav-layout-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppLayoutComponent_ng_template_4_Template, 21, 5, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "adf-sidenav-layout-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppLayoutComponent_ng_template_6_Template, 1, 0, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sidenavMin", 70)("sidenavMax", 100)("stepOver", 780)("hideSidenav", false)("expandedSidenav", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.SidenavLayoutHeaderDirective, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.SidenavLayoutContentDirective, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.SidenavLayoutNavigationDirective, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.SidenavLayoutComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.HeaderLayoutComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.LogoutDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListIconCssMatStyler, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.NotificationHistoryComponent], styles: ["adf-sidenav-layout[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#rightHeader[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: auto;\n  width: auto;\n}\n\n#userName[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: auto;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoiYXBwLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFkZi1zaWRlbmF2LWxheW91dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuI3JpZ2h0SGVhZGVye1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOmF1dG87XG59XG5cbiN1c2VyTmFtZXtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xuICAgIHdpZHRoOmF1dG87XG59Il19 */"] });


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class AppComponent {
    constructor(datepipe, translationService, authService, router) {
        this.datepipe = datepipe;
        this.authService = authService;
        this.router = router;
        translationService.use('en');
    }
    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/login']);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["name", "overlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "router-outlet", 0);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["router-outlet[name=overlay] + * {\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyb3V0ZXItb3V0bGV0W25hbWU9XCJvdmVybGF5XCJdICsgKiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _documents_metadata_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents/metadata-dialog-adapter.component */ 25989);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! apollo-angular */ 60026);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ 62681);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 9656);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);
/* harmony import */ var _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @alfresco/adf-process-services-cloud */ 16365);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _stencils_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stencils.module */ 55833);
/* harmony import */ var _dashboard_version_manager_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/version-manager-dialog-adapter.component */ 21828);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _apps_apps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apps/apps.component */ 38229);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks.component */ 69544);
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-details/task-details.component */ 89505);
/* harmony import */ var _start_process_start_process_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start-process/start-process.component */ 84613);
/* harmony import */ var _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-view/file-view.component */ 60236);
/* harmony import */ var _file_view_blob_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file-view/blob-view.component */ 15210);
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/preview.service */ 19578);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ 48693);
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-layout/app-layout.component */ 40210);
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./documents/documents.component */ 55017);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _associations_associations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./associations/associations.component */ 98554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);










// ADF modules



// Custom stencils

// App components


























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        _services_preview_service__WEBPACK_IMPORTED_MODULE_11__.PreviewService, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe,
        {
            provide: _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_19__.TRANSLATION_PROVIDER,
            multi: true,
            useValue: {
                name: 'app',
                source: 'resources'
            }
        }
    ], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexLayoutModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_12__.appRoutes // ,
        // { enableTracing: true } // <-- debugging purposes only
        , { relativeLinkResolution: 'legacy' }),
        // ADF modules
        _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_19__.CoreModule.forRoot(),
        _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_30__.ContentModule.forRoot(),
        _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_31__.ProcessServicesCloudModule.forRoot(),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule.forRoot({
            loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateLoader, useClass: _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoaderService }
        }),
        _stencils_module__WEBPACK_IMPORTED_MODULE_1__.StencilsModule,
        apollo_angular__WEBPACK_IMPORTED_MODULE_33__.ApolloModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _apps_apps_component__WEBPACK_IMPORTED_MODULE_5__.AppsComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__.TasksComponent,
        _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_7__.TaskDetailsComponent,
        _start_process_start_process_component__WEBPACK_IMPORTED_MODULE_8__.StartProcessComponent,
        _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_13__.AppLayoutComponent,
        _file_view_blob_view_component__WEBPACK_IMPORTED_MODULE_10__.BlobViewComponent,
        _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_9__.FileViewComponent,
        _documents_documents_component__WEBPACK_IMPORTED_MODULE_14__.DocumentsComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.DashboardComponent,
        _associations_associations_component__WEBPACK_IMPORTED_MODULE_16__.AssociationsComponent,
        _documents_metadata_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_0__.MetadataDialogAdapterComponent,
        _dashboard_version_manager_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_2__.VersionManagerDialogAdapterComponent], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexLayoutModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_19__.CoreModule, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_30__.ContentModule, _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_31__.ProcessServicesCloudModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule, _stencils_module__WEBPACK_IMPORTED_MODULE_1__.StencilsModule,
        apollo_angular__WEBPACK_IMPORTED_MODULE_33__.ApolloModule] }); })();


/***/ }),

/***/ 48693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _apps_apps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/apps.component */ 38229);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/tasks.component */ 69544);
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-details/task-details.component */ 89505);
/* harmony import */ var _start_process_start_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start-process/start-process.component */ 84613);
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-layout/app-layout.component */ 40210);
/* harmony import */ var _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-view/file-view.component */ 60236);
/* harmony import */ var _file_view_blob_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-view/blob-view.component */ 15210);
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documents/documents.component */ 55017);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */











const appRoutes = [
    { path: 'files/:nodeId/view', component: _file_view_file_view_component__WEBPACK_IMPORTED_MODULE_6__.FileViewComponent, canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_10__.AuthGuardEcm], outlet: 'overlay' },
    { path: 'preview/blob', component: _file_view_blob_view_component__WEBPACK_IMPORTED_MODULE_7__.BlobViewComponent, outlet: 'overlay', pathMatch: 'full' },
    {
        path: '',
        component: _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_5__.AppLayoutComponent,
        children: [
            {
                path: '',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent
            },
            {
                path: 'apps',
                component: _apps_apps_component__WEBPACK_IMPORTED_MODULE_1__.AppsComponent,
                canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_10__.AuthGuardBpm]
            },
            {
                path: 'apps/:appName/tasks',
                component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__.TasksComponent,
                canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_10__.AuthGuardBpm]
            },
            {
                path: 'apps/:appName/tasks/:taskId',
                component: _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_3__.TaskDetailsComponent,
                canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_10__.AuthGuardBpm]
            },
            {
                path: 'apps/:appName/start-process',
                component: _start_process_start_process_component__WEBPACK_IMPORTED_MODULE_4__.StartProcessComponent,
                canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_10__.AuthGuardBpm]
            },
            {
                path: 'documents',
                component: _documents_documents_component__WEBPACK_IMPORTED_MODULE_8__.DocumentsComponent,
                canActivate: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_10__.AuthGuardEcm]
            },
            {
                path: 'dashboard/:fid',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent
                //,canActivate: [ AuthGuardEcm ]
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent
                //,canActivate: [ AuthGuardEcm ]
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];


/***/ }),

/***/ 38229:
/*!****************************************!*\
  !*** ./src/app/apps/apps.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsComponent": () => (/* binding */ AppsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alfresco/adf-process-services-cloud */ 16365);



class AppsComponent {
    constructor(router) {
        this.router = router;
    }
    onAppClicked(app) {
        this.router.navigate(['/apps', app.name, 'start-process']);
    }
}
AppsComponent.ɵfac = function AppsComponent_Factory(t) { return new (t || AppsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppsComponent, selectors: [["app-apps"]], decls: 1, vars: 1, consts: [[3, "layoutType", "appClick"]], template: function AppsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adf-cloud-app-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appClick", function AppsComponent_Template_adf_cloud_app_list_appClick_0_listener($event) { return ctx.onAppClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layoutType", "GRID");
    } }, dependencies: [_alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_2__.AppListCloudComponent], encapsulation: 2 });


/***/ }),

/***/ 98554:
/*!********************************************************!*\
  !*** ./src/app/associations/associations.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociationsComponent": () => (/* binding */ AssociationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 9656);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);



















const _c0 = ["table"];
const _c1 = ["documentList"];
function AssociationsComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("input node is ", ctx_r0.node.name, " -- ", ctx_r0.node.id, " - association info is ", ctx_r0.node.properties["ContractManagement:associations"], " - selected node is ", ctx_r0.selectedNode, " - newnodearray is {{newAss");
} }
function AssociationsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssociationsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.id);
} }
function AssociationsComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssociationsComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r18.name);
} }
function AssociationsComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nodeid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssociationsComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.nodeid);
} }
function AssociationsComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 36);
} }
function AssociationsComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssociationsComponent_td_22_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.RemoveElementFromObjectArray(element_r20.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
function AssociationsComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
} }
function AssociationsComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssociationsComponent_tr_24_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const row_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.rowClicked(row_r23.nodeid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssociationsComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 40)(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Associations!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r12.displayedColumns.length);
} }
function AssociationsComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "adf-alfresco-viewer", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showViewerChange", function AssociationsComponent_ng_container_41_Template_adf_alfresco_viewer_showViewerChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.selectedNode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showViewer", ctx_r15.selectedNode)("overlayMode", false)("nodeId", ctx_r15.selectedNode);
} }
function AssociationsComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssociationsComponent_div_42_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.saveAssociations()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.isSaveButtonDisabled);
} }
const _c2 = function () { return [5, 10]; };
class AssociationsComponent {
    constructor(nodeapi, dialog) {
        this.nodeapi = nodeapi;
        this.isTroubleshooting = false;
        this.showAssociations = false;
        this.assocInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.close = true;
        this.displayedColumns = ['id', 'name', 'nodeid', 'action'];
        this.newAssociationArray = [];
        this.showSaveCancelButtons = false;
        this.isSaveButtonDisabled = false;
        this.currentFolderId = "-my-";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.newAssociationArray);
    }
    set _node(value) { console.log("association node change in setter", value); this.node = value; this.updateNodeID(this.node); }
    ngOnInit() {
        this.close = true;
        this.dataSource.paginator = this.paginator;
        this.sort.sort(({ id: 'id', start: 'asc' }));
        this.dataSource.sort = this.sort;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
    }
    ngOnDestroy() {
    }
    updateNodeID(nodeVal) {
        //this.newAssociationArray = []; //clear the array now!
        this.nodeAssociations = nodeVal.properties['ContractManagement:associations']; //this should contain array of associations even if 1
        this.getExtendedAssociationInfo();
        //console.log("node updated from associations",this.nodeinfo,"selected node ",this.selectedNode);
    }
    rowClicked(rownode) {
        this.selectedNode = rownode;
    }
    getExtendedAssociationInfo() {
        let tempSorted = [];
        //get name of each associated node
        for (let i = 0; i < this.nodeAssociations.length; i++) {
            this.nodeapi.getNode(this.nodeAssociations[i]).subscribe(val => {
                //console.log("namefromnode current val: ",val.name);
                let data = {
                    id: i + 1,
                    name: val.name,
                    nodeid: this.nodeAssociations[i]
                };
                this.newAssociationArray.push(data);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.newAssociationArray);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            });
        }
        //console.log("association table data is: ",this.dataSource);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.newAssociationArray);
        //this.dataSource.sort = this.sort;
        //this.dataSource.paginator = this.paginator;
        //this.table.dataSource = this.dataSource;
        this.table.renderRows();
        //console.log("associations for loop done: ",this.dataSource);
    }
    customAssociationAction(event) {
        //console.log("custom association action id is: ",event.value.entry.id)
        //push to the newAssociationArray which will eventually update properties
        //get next available index
        let nextIndex = this.newAssociationArray.length + 1;
        let data = {
            id: nextIndex,
            name: event.value.entry.name,
            nodeid: event.value.entry.id
        };
        this.newAssociationArray.push(data);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.newAssociationArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        //this.table.renderRows();
        //now set the tab back to zero (the initial tab)
        this.selectedAssociationTab = 0;
        this.showSaveCancelButtons = true;
    }
    saveAssociations() {
        //now loop through the array and create a new array with just the nodeIds
        let tempArray = [];
        for (let entry of this.newAssociationArray) {
            tempArray.push(`"${entry.nodeid}"`);
        }
        //take new array and push to update properties on node
        let updateStr = `{
      "properties":
      {
        "ContractManagement:associations":[${tempArray}]
      }
     }`;
        console.log("associations update string: ", updateStr);
        this.nodeapi.updateNode(this.node.id, updateStr).subscribe(val => { console.log("updated node: ", val); this.isSaveButtonDisabled = true; });
    }
    closeit() {
        this.close = false;
    }
    onSeachItemClicked(event) {
        //this.doclist.currentFolderId = event.entry.parentId;
        this.currentFolderId = event.entry.parentId;
        //console.log("doc list data: ",this.doclist.data);
        //console.log("parent id of search item clicked: ",event.entry.parentId);
    }
    RemoveElementFromObjectArray(key) {
        this.newAssociationArray.forEach((value, index) => {
            if (value.id == key)
                this.newAssociationArray.splice(index, 1);
        });
        //once all done, push the new array to the datasource so it can be seen
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.newAssociationArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.showSaveCancelButtons = true;
    }
}
AssociationsComponent.ɵfac = function AssociationsComponent_Factory(t) { return new (t || AssociationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__.NodesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
AssociationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssociationsComponent, selectors: [["associations"]], viewQuery: function AssociationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.doclist = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { _node: "_node", showAssociations: "showAssociations" }, outputs: { assocInfo: "assocInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 43, vars: 26, consts: [["background-color", "primary"], [3, "toggleChange"], ["id", "associationWrapper"], [4, "ngIf"], ["fxLayout", "row", "id", "container", 2, "width", "auto", "height", "auto"], ["id", "associnfo", "fxFlex", "100%"], [3, "selectedIndex"], ["label", "Current Associations"], ["mat-table", "", "matSortActive", "id", "matSortStart", "asc", "matSortEnableClear", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["table", ""], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "nodeid"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["label", "Add Association"], [3, "highlight", "liveSearchEnabled", "expandable", "optionClicked"], [3, "target"], [3, "currentFolderId", "contextMenuActions", "contentActions", "showHeader", "allowDropFiles", "contentActionsPosition", "thumbnails"], ["documentList", ""], ["key", "$thumbnail", "type", "image"], ["title", "Name", "key", "name", "sortable", "true", 1, "full-width", "ellipsis-cell"], ["title", "Created By", "key", "createdByUser.displayName", "sortable", "true", 1, "desktop-only"], ["title", "Created On", "key", "createdAt", "type", "date", "format", "medium", "sortable", "true", 1, "desktop-only"], ["permission", "update", "disableWithNoPermission", "true", 3, "title", "execute"], ["style", "width:100px !important;height:100px !important;", 4, "ngIf"], ["id", "buttons", "style", "width:100%;margin-left:auto;margin-right:auto;", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-mini-fab", "", "color", "warn", "aria-label", "Edit Row", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "mat-row"], [1, "mat-cell"], [2, "width", "100px !important", "height", "100px !important"], ["fxFlex", "20%", 3, "showViewer", "overlayMode", "nodeId", "showViewerChange"], ["id", "buttons", 2, "width", "100%", "margin-left", "auto", "margin-right", "auto"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function AssociationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-slide-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleChange", function AssociationsComponent_Template_mat_slide_toggle_toggleChange_1_listener() { return ctx.isTroubleshooting = !ctx.isTroubleshooting; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "troubleshoot? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AssociationsComponent_p_4_Template, 2, 4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "mat-tab-group", 6)(8, "mat-tab", 7)(9, "table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AssociationsComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AssociationsComponent_td_13_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AssociationsComponent_th_15_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AssociationsComponent_td_16_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AssociationsComponent_th_18_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AssociationsComponent_td_19_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AssociationsComponent_th_21_Template, 1, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AssociationsComponent_td_22_Template, 4, 0, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AssociationsComponent_tr_23_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AssociationsComponent_tr_24_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AssociationsComponent_tr_25_Template, 3, 1, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-tab", 22)(29, "adf-search-control", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionClicked", function AssociationsComponent_Template_adf_search_control_optionClicked_29_listener($event) { return ctx.onSeachItemClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "adf-breadcrumb", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "adf-document-list", 25, 26)(33, "data-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "data-column", 27)(35, "data-column", 28)(36, "data-column", 29)(37, "data-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "content-actions")(39, "content-action", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function AssociationsComponent_Template_content_action_execute_39_listener($event) { return ctx.customAssociationAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "adf-pagination", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AssociationsComponent_ng_container_41_Template, 2, 3, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AssociationsComponent_div_42_Template, 3, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTroubleshooting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedAssociationTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 1)("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", true)("liveSearchEnabled", true)("expandable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentFolderId", ctx.currentFolderId)("contextMenuActions", true)("contentActions", true)("showHeader", true)("allowDropFiles", true)("contentActionsPosition", "right")("thumbnails", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Associate with ", ctx.node.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSaveCancelButtons);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatNoDataRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.DataColumnComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.DataColumnListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__.DocumentListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__.ContentActionComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__.ContentActionListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__.SearchControlComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_2__.AlfrescoViewerComponent], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  text-align: center !important;\n  vertical-align: middle !important;\n  word-wrap: break-word;\n    max-width: 200px\n}\n\n#associationWrapper[_ngcontent-%COMP%]{\n\n  height:auto;\n  width:auto;\n}\n\n.fillBackground[_ngcontent-%COMP%]{\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n\n  padding:20px;\n\n  \n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center; \n  align-items: center; \n\n  \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc29jaWF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMscUJBQXFCO0lBQ25CO0FBQ0o7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVzs7RUFFWCxZQUFZOztFQUVaLDBEQUEwRDtFQUMxRCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHVCQUF1QixFQUFFLGtDQUFrQztFQUMzRCxtQkFBbUIsRUFBRSxvQ0FBb0M7O0VBRXpEOzs7Ozs7b0JBTWtCOztBQUVwQiIsImZpbGUiOiJhc3NvY2lhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG1heC13aWR0aDogMjAwcHhcbn1cblxuI2Fzc29jaWF0aW9uV3JhcHBlcntcblxuICBoZWlnaHQ6YXV0bztcbiAgd2lkdGg6YXV0bztcbn1cblxuLmZpbGxCYWNrZ3JvdW5ke1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHBhZGRpbmc6MjBweDtcblxuICAvKiB0aGlzIGlzIHdoYXQgY2VudGVycyB5b3VyIGVsZW1lbnQgaW4gdGhlIGZpeGVkIHdyYXBwZXIqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBhbGlnbnMgb24gdmVydGljYWwgZm9yIGNvbHVtbiAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBhbGlnbnMgb24gaG9yaXpvbnRhbCBmb3IgY29sdW1uICovXG5cbiAgLyoganVzdCBmb3Igc3R5bGluZyB0byBzZWUgdGhlIGxpbWl0c1xuICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OjIwMDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCA3NywgMzYsIDAuOTM1KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtcHJpbWFyeS1jb2xvcik7XG4gIG92ZXJmbG93OiBzY3JvbGw7Ki9cblxufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.trigger)('fade', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)(1000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({ opacity: 1 }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.transition)('* => void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.animate)(1000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_14__.style)({ opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 60670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 9656);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _version_manager_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version-manager-dialog-adapter.component */ 21828);
/* harmony import */ var _documents_metadata_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../documents/metadata-dialog-adapter.component */ 25989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @alfresco/adf-process-services-cloud */ 16365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alfresco_adf_core_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @alfresco/adf-core/api */ 71491);
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/preview.service */ 19578);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ 63704);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 15892);




































const _c0 = ["documentList"];
const _c1 = ["canvas"];
const _c2 = ["detailTable"];
const _c3 = ["assignedTaskCloud"];
const _c4 = ["cval"];
const _c5 = ["paginator"];
function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.sevenDayMessage);
} }
function DashboardComponent_div_18_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_18_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r24.id, " ");
} }
function DashboardComponent_div_18_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_18_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r25.name, " ");
} }
function DashboardComponent_div_18_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Node ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_18_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r26.node, " ");
} }
function DashboardComponent_div_18_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Expiration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_18_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.nodeEx, " ");
} }
function DashboardComponent_div_18_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 64);
} }
function DashboardComponent_div_18_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_div_18_tr_18_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const row_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.clickedDetailRow(row_r28)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c6 = function () { return ["id", "name", "node"]; };
const _c7 = function () { return [10]; };
function DashboardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "mat-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DashboardComponent_div_18_th_6_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DashboardComponent_div_18_td_7_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DashboardComponent_div_18_th_9_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DashboardComponent_div_18_td_10_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DashboardComponent_div_18_th_12_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, DashboardComponent_div_18_td_13_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DashboardComponent_div_18_th_15_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DashboardComponent_div_18_td_16_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, DashboardComponent_div_18_tr_17_Template, 1, 0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DashboardComponent_div_18_tr_18_Template, 1, 0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "mat-paginator", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@animImageSlider", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.chartClickedLegend);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r2.chartDataArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c6))("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c7));
} }
function DashboardComponent_mat_card_25_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_mat_card_25_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.thirty6090Clicked(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "30 DAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.thirtyDayCount, " ");
} }
function DashboardComponent_mat_card_26_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_mat_card_26_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.thirty6090Clicked(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "60 DAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.sixtyDayCount, " ");
} }
function DashboardComponent_mat_card_27_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_mat_card_27_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.thirty6090Clicked(3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "90 DAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.ninetyDayCount, " ");
} }
function DashboardComponent_div_28_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_28_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r49.id, " ");
} }
function DashboardComponent_div_28_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_28_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r50.name, " ");
} }
function DashboardComponent_div_28_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Node ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_28_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r51.node, " ");
} }
function DashboardComponent_div_28_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Expiration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_28_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r52.nodeEx, "longDate"), "");
} }
function DashboardComponent_div_28_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 64);
} }
const _c8 = function (a0) { return { "make-red": a0 }; };
function DashboardComponent_div_28_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_div_28_tr_17_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55); const row_r53 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.clickedDetailRow(row_r53)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c8, row_r53.nodeEx < ctx_r47.currentDayPlus7 && row_r53.nodeEx >= ctx_r47.currentDay));
} }
const _c9 = function () { return [5, 10]; };
function DashboardComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "table", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DashboardComponent_div_28_th_5_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DashboardComponent_div_28_td_6_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DashboardComponent_div_28_th_8_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DashboardComponent_div_28_td_9_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DashboardComponent_div_28_th_11_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DashboardComponent_div_28_td_12_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DashboardComponent_div_28_th_14_Template, 2, 0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DashboardComponent_div_28_td_15_Template, 3, 4, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DashboardComponent_div_28_tr_16_Template, 1, 0, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, DashboardComponent_div_28_tr_17_Template, 1, 3, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-paginator", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@inOutAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r6.mainDataArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c9));
} }
function DashboardComponent_div_35_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, entry_r58.row.obj.createdDate, "MMM d, yyyy h:mm:ss a"), " ");
} }
const _c10 = function (a0) { return [a0]; };
function DashboardComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "adf-cloud-task-list", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("rowClick", function DashboardComponent_div_35_Template_adf_cloud_task_list_rowClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r59.onTaskRowClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "data-columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "data-column", 80)(5, "data-column", 81)(6, "data-column", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "data-column", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DashboardComponent_div_35_ng_template_8_Template, 3, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "data-column", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "adf-pagination", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appName", ctx_r7.appName)("showMainDatatableActions", "true")("showContextMenu", true)("status", ctx_r7.assignedTaskFilter)("sorting", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c10, ctx_r7.sorting))("isResizingEnabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("target", _r56);
} }
function DashboardComponent_div_37_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, entry_r63.row.obj.createdDate, "MMM d, yyyy h:mm:ss a"), " ");
} }
const _c11 = function () { return [5]; };
function DashboardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "adf-cloud-task-list", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("rowClick", function DashboardComponent_div_37_Template_adf_cloud_task_list_rowClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r64.onTaskRowClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "data-columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "data-column", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "data-column", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DashboardComponent_div_37_ng_template_6_Template, 3, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "data-column", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "adf-pagination", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appName", ctx_r8.appName)("showMainDatatableActions", true)("showContextMenu", true)("actionsPosition", "left")("status", "COMPLETED")("sorting", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c10, ctx_r8.sorting));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("target", _r61)("supportedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c11));
} }
function DashboardComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "adf-breadcrumb", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "adf-document-list", 89, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nodeClick", function DashboardComponent_div_48_Template_adf_document_list_nodeClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r67.showBoxPreview($event)); })("preview", function DashboardComponent_div_48_Template_adf_document_list_preview_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r69.showBoxPreview($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "content-actions")(5, "content-action", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function DashboardComponent_div_48_Template_content_action_execute_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r70.onManageMetadata($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "content-action", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "content-action", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("success", function DashboardComponent_div_48_Template_content_action_success_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r71.refreshMyFiles("Item Deleted")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "content-action", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function DashboardComponent_div_48_Template_content_action_execute_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r72.onAspectUpdate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "adf-pagination", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("target", _r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentFolderId", "-my-")("headerFilters", true)("contextMenuActions", true)("contentActions", true)("thumbnails", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disableWithNoPermission", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("target", _r66)("supportedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c11))("pagination", 5);
} }
function DashboardComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 93)(1, "adf-alfresco-viewer", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("showViewerChange", function DashboardComponent_div_72_Template_adf_alfresco_viewer_showViewerChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r73.showViewer = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showViewer", ctx_r12.showViewer)("overlayMode", false)("nodeId", ctx_r12.nodeId);
} }
function DashboardComponent_div_74_adf_cloud_start_process_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "adf-cloud-start-process", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("success", function DashboardComponent_div_74_adf_cloud_start_process_1_Template_adf_cloud_start_process_success_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r77.processSuccess($event)); })("cancel", function DashboardComponent_div_74_adf_cloud_start_process_1_Template_adf_cloud_start_process_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r79.processCancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appName", ctx_r75.appName)("name", ctx_r75.processName)("processDefinitionName", "NDA Request Form");
} }
function DashboardComponent_div_74_adf_cloud_task_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "adf-cloud-task-form", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("formSaved", function DashboardComponent_div_74_adf_cloud_task_form_2_Template_adf_cloud_task_form_formSaved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r80.clickedTaskSave($event)); })("executeOutcome", function DashboardComponent_div_74_adf_cloud_task_form_2_Template_adf_cloud_task_form_executeOutcome_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r82.executeOutcome()); })("cancelClick", function DashboardComponent_div_74_adf_cloud_task_form_2_Template_adf_cloud_task_form_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r83.taskFormCanceled()); })("taskCompleted", function DashboardComponent_div_74_adf_cloud_task_form_2_Template_adf_cloud_task_form_taskCompleted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r84.taskCompleted()); })("formCompleted", function DashboardComponent_div_74_adf_cloud_task_form_2_Template_adf_cloud_task_form_formCompleted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r85.FormCompleted()); })("error", function DashboardComponent_div_74_adf_cloud_task_form_2_Template_adf_cloud_task_form_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r86.taskFormError($event)); })("onTaskLoaded", function DashboardComponent_div_74_adf_cloud_task_form_2_Template_adf_cloud_task_form_onTaskLoaded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r87.onTaskLoaded($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appName", ctx_r76.appName)("taskId", ctx_r76.taskId)("showRefreshButton", "true");
} }
function DashboardComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DashboardComponent_div_74_adf_cloud_start_process_1_Template, 1, 3, "adf-cloud-start-process", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DashboardComponent_div_74_adf_cloud_task_form_2_Template, 1, 3, "adf-cloud-task-form", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.showNDAForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.showTaskForm);
} }
const left = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ position: 'fixed', width: '200px' }), { optional: true }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.group)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(-200px)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(0%)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(200px)' }))], {
            optional: true,
        }),
    ]),
];
const right = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ position: 'fixed', width: '200px' }), { optional: true }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.group)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(200px)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(0%)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ transform: 'translateX(-200px)' }))], {
            optional: true,
        }),
    ]),
];
class DashboardComponent {
    constructor(notificationService, dialogAspectListService, uploadService, contentService, dialog, _snackBar, authService, processService, router, route, http, alfrescoJsApi, nodeApiService, preview, nodeService, apiService) {
        this.notificationService = notificationService;
        this.dialogAspectListService = dialogAspectListService;
        this.uploadService = uploadService;
        this.contentService = contentService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.authService = authService;
        this.processService = processService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.alfrescoJsApi = alfrescoJsApi;
        this.nodeApiService = nodeApiService;
        this.preview = preview;
        this.nodeService = nodeService;
        this.apiService = apiService;
        this.newQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:new) AND TYPE:'cm:folder'" \
    } \
  }`;
        this.inProgressQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:'In Progress') AND TYPE:'cm:folder'" \
    } \
  }`;
        this.legalReviewQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:'Legal Review') AND TYPE:'cm:folder'" \
    } \
  }`;
        this.externalPartyQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:'External Party Review') AND TYPE:'cm:folder'" \
    } \
  }`;
        this.negotiationQuery = `{
    "query": { \
      "query": "(ContractManagement:Status:Negotiation) AND TYPE:'cm:folder'" \
    } \
  }`;
        this.sevenDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY TO NOW/DAY+7DAY] AND TYPE:'cm:folder'" \
    } \
  }`;
        this.thirtyDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY TO NOW/DAY+30DAY] AND TYPE:'cm:folder'" \
    } \
  }`;
        this.sixtyDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY+31DAY TO NOW/DAY+90DAY] AND TYPE:'cm:folder'" \
    } \
  }`;
        this.ninetyDayQuery = `{
    "query": { \
      "query": "ContractManagement:Expiration:[NOW/DAY+91DAY TO NOW/DAY+120DAY] AND TYPE:'cm:folder'" \
    } \
  }`;
        this.displayEmptyMetadata = true;
        this.showVersions = false;
        this.allowDropFiles = true;
        this.allowVersionDownload = true;
        this.showVersionComments = true;
        this.warnOnMultipleUploads = false;
        this.acceptedFilesTypeShow = false;
        this.acceptedFilesType = '.jpg,.pdf,.js';
        this.disableDragArea = false;
        this.sorting = { orderBy: 'createdDate', direction: 'desc' };
        this.dateFormat = 'MM/dd/yyyy';
        this.locale = 'en-US';
        this.snackBarDuration = 3000;
        this.chartclickval = "CHART CLICKED";
        this.currentDateTime = new Date();
        this.appName = "clm-mvp-v1-alpha-1";
        this.taskId = "";
        this.showFiller = false;
        this.showViewer = false;
        this.thumbnails = true;
        this.nodeId = null;
        this.showNDAForm = false;
        this.displayDefaultProperties = true;
        this.currentFolderId = "5be4a4cc-f413-4f28-8329-dce29671b224";
        this.searchTerm = null;
        this.globalSearchUrl = "https://sse.dev.alfrescocloud.com/alfresco/api/-default-/public/search/versions/1/search";
        //globalSearchUrl = "http://3.90.226.222/alfresco/api/-default-/public/search/versions/1/search";
        this.isAutoRefreshChart = false;
        this.chartAnimationDuration = 2000;
        this.chartRefreshInterval = 7000;
        this.chartRunState = true;
        this.newCount = 0;
        this.inProgressCount = 0;
        this.legalReviewCount = 0;
        this.externalPartyReviewCount = 0;
        this.negotiationCount = 0;
        this.sevenDayCount = 0;
        this.thirtyDayCount = 0;
        this.sixtyDayCount = 0;
        this.ninetyDayCount = 0;
        this.sevenDayMessage = "";
        this.sevenDayShowMessage = false;
        this.showSummaryPanel = false;
        this.showChartPanel = false;
        this.showTaskForm = false;
        this.thirtyDayArray = [];
        this.sixtyDayArray = [];
        this.ninetyDayArray = [];
        this.viewThirty = true;
        this.viewSixty = true;
        this.viewNinety = true;
        this.newChartDataArray = [];
        this.LegalReviewChartDataArray = [];
        this.inProgressChartDataArray = [];
        this.externalChartDataArray = [];
        this.negotiationChartDataArray = [];
        this.chartDataArray = [];
        this.displayedColumns = ['id', 'name', 'nodeEx', 'node'];
        this.chartClickedLegend = "";
        this.topPosToStartShowing = 2;
        this.showForm = false;
        this.showModalDiv = false;
        this.assignedTaskFilter = "ASSIGNED";
        this.showTaskViews = true;
        this.showMyFiles = true;
        this.currentDay = new Date();
        this.currentDayPlus7 = new Date();
        this.currentDayPlus7.setDate(this.currentDayPlus7.getDate() + 7);
        this.currentDayPlus7 = new Date((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(this.currentDayPlus7, this.dateFormat, this.locale));
        //console.log("days plus 7",this.currentDayPlus7);
        this.currentUser = authService.getEcmUsername();
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(700, this.chartRefreshInterval).subscribe(n => {
            //console.log("timer status",n);
            if (this.chartRunState) {
                this.runChartProcess();
                this.chartRunState = false;
                this.chartAnimationDuration = 0;
            }
            else {
                this.runChartProcess();
                //this.refreshCloudTasks(); //refresh the task list every so often too
            }
        });
    }
    ngOnInit() {
        this.getCounts(); //get all counts when initialized
        this.mainDataArray.paginator = this.paginator;
    }
    checkScroll() {
        // window의 scroll top
        // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log('[scroll]', scrollPosition);
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    }
    runChartProcess() {
        //alert("inside runchartprocess");
        this.getCounts().subscribe(val => {
            this.initializeChartData().subscribe(val => { this.processChart(val); });
        });
    }
    thirty6090Clicked(id) {
        switch (id) {
            case 1: {
                //this.mainDataArray = this.thirtyDayArray;
                this.mainDataArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.thirtyDayArray);
                //get 60 and 90 to disappear
                this.viewSixty = !this.viewSixty;
                this.viewNinety = !this.viewNinety;
                //console.log("detail 1 clicked ", this.mainDataArray)
                break;
            }
            case 2: {
                //this.mainDataArray = this.sixtyDayArray;
                this.mainDataArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.sixtyDayArray);
                //get 30 and 90 to disappear
                this.viewThirty = !this.viewThirty;
                this.viewNinety = !this.viewNinety;
                //console.log("detail 2 clicked ", this.mainDataArray)
                break;
            }
            case 3: {
                //this.mainDataArray = this.ninetyDayArray;
                this.mainDataArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.ninetyDayArray);
                //get 30 and 60 to disappear
                this.viewThirty = !this.viewThirty;
                this.viewSixty = !this.viewSixty;
                //console.log("detail 3 clicked ", this.mainDataArray)
                break;
            }
            default: {
                break;
            }
        }
        this.showSummaryPanel = !this.showSummaryPanel;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: this.snackBarDuration
        });
    }
    getDetailValues(query, which) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders()
            .set("Content-Type", "application/json")
            .set("Authorization", "Basic cndpbGRzOmRlbW8=");
        let iter = 1;
        let array = [];
        this.http.post(this.globalSearchUrl, query, { headers }).subscribe(val => {
            //console.log("getDetails call successful value returned in body ", val);
            //first for loop to get data into the array
            for (var ent in val['list']['entries']) {
                this.nodeApiService.getNode(val['list']['entries'][ent]['entry']['id']).subscribe((node) => {
                    //let tempSevenDayDiff =  this.currentDayPlus7 - Date(formatDate(node.properties['ContractManagement:Expiration'],this.dateFormat,this.locale))
                    array.push({
                        id: iter,
                        name: node.name,
                        node: node.id,
                        nodeEx: new Date((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(node.properties['ContractManagement:Expiration'], this.dateFormat, this.locale)) //node.properties.ContractManagement.Expiration//"placeholder"//this.getDateFromNodeID(val['list']['entries'][ent]['entry']['id'])
                    });
                    iter = iter + 1;
                }, error => { console.log("Ouch, an error happened!"); });
            }
            switch (which) {
                case 30: {
                    //statements;
                    this.thirtyDayArray = array;
                    break;
                }
                case 60: {
                    this.sixtyDayArray = array;
                    break;
                }
                case 90: {
                    this.ninetyDayArray = array;
                    break;
                }
                default: {
                    //statements;
                    break;
                }
            }
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(array);
    }
    getSum(query, which) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders()
            .set("Content-Type", "application/json")
            .set("Authorization", "Basic cndpbGRzOmRlbW8=");
        this.http.post(this.globalSearchUrl, query, { headers }).subscribe(val => {
            //console.log("getSum PUT call successful value returned in body", val);
            //this.countTemp = Number(val['list']['pagination']['count']);
            //console.log("getSum count is: ",this.countTemp)
            switch (which) {
                case 30: {
                    //statements;
                    this.thirtyDayCount = Number(val['list']['pagination']['count']);
                    break;
                }
                case 60: {
                    this.sixtyDayCount = Number(val['list']['pagination']['count']);
                    break;
                }
                case 90: {
                    this.ninetyDayCount = Number(val['list']['pagination']['count']);
                    break;
                }
                default: {
                    //statements;
                    break;
                }
            }
        }
        // ,
        // response => {
        //   //console.log("PUT call in error", response);
        // },
        // () => {
        //   //console.log("The PUT observable is now completed.");
        // }
        );
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.countTemp);
    }
    getCounts() {
        //console.log("inside getcounts");
        //get the 306090 details and sum info
        this.getDetailValues(this.thirtyDayQuery, 30).subscribe(() => this.getSum(this.thirtyDayQuery, 30).subscribe(() => this.getDetailValues(this.sixtyDayQuery, 60).subscribe(() => this.getSum(this.sixtyDayQuery, 60).subscribe(() => this.getDetailValues(this.ninetyDayQuery, 90).subscribe(() => this.getSum(this.ninetyDayQuery, 90))))));
        //refresh the detail table now
        //this.detailTable.renderRows();
        //****** GET CHART INFO BELOW ******
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders()
            .set("Content-Type", "application/json")
            .set("Authorization", "Basic cndpbGRzOmRlbW8=");
        //Run New
        this.http.post(this.globalSearchUrl, this.newQuery, { headers }).subscribe(val => {
            //console.log("PUT call successful value returned in body", val);
            this.newCount = Number(val['list']['pagination']['count']);
            //console.log("new count: ", this.newCount)
            //Now process the rows for the mat table.  make sure array is empty first
            this.newChartDataArray = [];
            for (var ent in val['list']['entries']) {
                this.newChartDataArray.push({
                    id: String(Number(ent) + 1),
                    name: val['list']['entries'][ent]['entry']['name'],
                    node: val['list']['entries'][ent]['entry']['id'],
                });
            }
        }, response => {
            //console.log("PUT call in error", response);
        }, () => {
            //console.log("The PUT observable is now completed.");
        });
        //Run In Progress
        this.http.post(this.globalSearchUrl, this.inProgressQuery, { headers }).subscribe(val => {
            //console.log("PUT call successful value returned in body", val);
            this.inProgressCount = Number(val['list']['pagination']['count']);
            //console.log("in progress count: ", this.inProgressCount)
            //Now process the rows for the mat table.  make sure array is empty first
            this.inProgressChartDataArray = [];
            for (var ent in val['list']['entries']) {
                this.inProgressChartDataArray.push({
                    id: String(Number(ent) + 1),
                    name: val['list']['entries'][ent]['entry']['name'],
                    node: val['list']['entries'][ent]['entry']['id'],
                });
            }
        }, response => {
            //console.log("PUT call in error", response);
        }, () => {
            //console.log("The PUT observable is now completed.");
        });
        //Run legal review
        this.http.post(this.globalSearchUrl, this.legalReviewQuery, { headers }).subscribe(val => {
            //console.log("PUT call successful value returned in body", val);
            this.legalReviewCount = Number(val['list']['pagination']['count']);
            //console.log("in progress count: ", this.legalReviewCount)
            //Now process the rows for the mat table.  make sure array is empty first
            this.LegalReviewChartDataArray = [];
            for (var ent in val['list']['entries']) {
                this.LegalReviewChartDataArray.push({
                    id: String(Number(ent) + 1),
                    name: val['list']['entries'][ent]['entry']['name'],
                    node: val['list']['entries'][ent]['entry']['id'],
                });
            }
        }, response => {
            //console.log("PUT call in error", response);
        }, () => {
            //console.log("The PUT observable is now completed.");
        });
        //Run external party review
        this.http.post(this.globalSearchUrl, this.externalPartyQuery, { headers }).subscribe(val => {
            // console.log("PUT call successful value returned in body", val);
            this.externalPartyReviewCount = Number(val['list']['pagination']['count']);
            //console.log("in progress count: ", this.externalPartyReviewCount)
            //Now process the rows for the mat table.  make sure array is empty first
            this.externalChartDataArray = [];
            for (var ent in val['list']['entries']) {
                this.externalChartDataArray.push({
                    id: String(Number(ent) + 1),
                    name: val['list']['entries'][ent]['entry']['name'],
                    node: val['list']['entries'][ent]['entry']['id'],
                });
            }
        }, response => {
            //console.log("PUT call in error", response);
        }, () => {
            //console.log("The PUT observable is now completed.");
        });
        //Run negotiation
        this.http.post(this.globalSearchUrl, this.negotiationQuery, { headers }).subscribe(val => {
            //console.log("PUT call successful value returned in body", val);
            this.negotiationCount = Number(val['list']['pagination']['count']);
            //console.log("in progress count: ", this.negotiationCount)
            //Now process the rows for the mat table.  make sure array is empty first
            this.negotiationChartDataArray = [];
            for (var ent in val['list']['entries']) {
                this.negotiationChartDataArray.push({
                    id: String(Number(ent) + 1),
                    name: val['list']['entries'][ent]['entry']['name'],
                    node: val['list']['entries'][ent]['entry']['id'],
                });
            }
        }, response => {
            //console.log("PUT call in error", response);
        }, () => {
            //console.log("The PUT observable is now completed.");
        });
        //Run 7 day count
        this.http.post(this.globalSearchUrl, this.sevenDayQuery, { headers }).subscribe(val => {
            //console.log("PUT call successful value returned in body", val);
            this.sevenDayCount = Number(val['list']['pagination']['count']);
            //console.log("7 day count: ", this.sevenDayCount)
            if (this.sevenDayCount > 1) {
                this.sevenDayMessage = "There are " + this.sevenDayCount + " Contracts expiring this week!!";
                this.sevenDayShowMessage = true;
            }
            else if (this.sevenDayCount == 1) {
                this.sevenDayMessage = "There's " + this.sevenDayCount + " Contract expiring this week!!";
                this.sevenDayShowMessage = true;
            }
            else if (this.sevenDayCount == 0) {
                this.sevenDayShowMessage = false;
            }
        }, response => {
            //console.log("PUT call in error", response);
        }, () => {
            //console.log("The PUT observable is now completed.");
        });
        //alert("get counts done...negotiation:"+this.negotiationCount+ " in progress:"+this.inProgressCount + " external part:"+this.externalPartyReviewCount);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)('done');
    }
    initializeChartData() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        console.log("now setting data array for chart");
        this.data = {
            labels: [
                'New',
                'In Progress',
                'Legal Review',
                'External Party Review',
                'Negotiation'
            ],
            datasets: [{
                    label: 'Contract Status',
                    data: [this.newCount, this.inProgressCount, this.legalReviewCount, this.externalPartyReviewCount, this.negotiationCount],
                    backgroundColor: ['green', 'grey', 'red', 'purple', 'orange'],
                    hoverBorderColor: ['black', 'black', 'black', 'black', 'black'],
                    hoverBorderWidth: 2,
                    borderWidth: 15
                }],
            options: [{
                    responsive: true,
                    events: ['click']
                }]
        };
        //done, return observable
        //alert("chart data ready " + this.externalPartyReviewCount);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)('done');
    }
    processChart(dummy) {
        //console.log("data set is: ", this.data)
        console.log("now instantiating chart object");
        if (this.chart) {
            console.log("chart exists");
            //this.chart.clear();
            this.chart.destroy();
            //this.chart.update();
        }
        else {
            console.log("chart doesn't exist");
        }
        chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart.defaults.font.size = 18;
        this.chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart(this.ctx, {
            type: 'doughnut',
            data: this.data,
            options: {
                animation: {
                    duration: this.chartAnimationDuration
                },
                maintainAspectRatio: true,
                onClick: (event, elements, chart) => {
                    this.chartDataArray = [];
                    const i = elements[0].index;
                    //const name = elements[0].element.getProps(["labels"])
                    switch (i) {
                        case 0: {
                            this.chartDataArray = this.newChartDataArray;
                            this.chartClickedLegend = "New";
                            break;
                        }
                        case 1: {
                            this.chartDataArray = this.inProgressChartDataArray;
                            this.chartClickedLegend = "In Progress";
                            break;
                        }
                        case 2: {
                            this.chartDataArray = this.LegalReviewChartDataArray;
                            this.chartClickedLegend = "Legal Review";
                            break;
                        }
                        case 3: {
                            this.chartDataArray = this.externalChartDataArray;
                            this.chartClickedLegend = "External Party Review";
                            break;
                        }
                        case 4: {
                            this.chartDataArray = this.negotiationChartDataArray;
                            this.chartClickedLegend = "Negotiation";
                            break;
                        }
                        default: {
                            this.chartClickedLegend = "";
                            break;
                        }
                    }
                    if (this.showChartPanel) {
                        this.showChartPanel = !this.showChartPanel;
                        this.showChartPanel = !this.showChartPanel;
                    }
                    else {
                        this.showChartPanel = !this.showChartPanel;
                    }
                }
            },
            plugins: [{
                    id: 'doughnutLabel',
                    beforeDatasetsDraw(chart, args, pluginOptions) {
                        const { ctx, data } = chart;
                        ctx.save;
                        const xCoor = chart.getDatasetMeta(0).data[0].x;
                        const yCoor = chart.getDatasetMeta(0).data[0].y;
                        ctx.font = 'bold 60px sans-serif';
                        ctx.fillStyle = 'rgba(135,135,135,1)';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        //console.log('array sum',data.datasets[0].data.reduce((acc:number,curr:number)=>acc+curr,0));
                        let numString = String(data.datasets[0].data.reduce((acc, curr) => acc + curr, 0));
                        ctx.fillText(numString, xCoor, yCoor);
                    }
                }]
        });
    }
    updatechartclickVal(c) {
        this.pval.nativeElement.value = this.chartclickval;
    }
    getChartDetail(query, which) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders()
            .set("Content-Type", "application/json")
            .set("Authorization", "Basic cndpbGRzOmRlbW8=");
        this.http.post(this.globalSearchUrl, query, { headers }).subscribe(val => {
            //console.log("PUT call successful value returned in body", val);
            this.negotiationCount = Number(val['list']['pagination']['count']);
            //console.log("in progress count: ", this.negotiationCount)
            //Now process the rows for the mat table.  make sure array is empty first
            this.negotiationChartDataArray = [];
            for (var ent in val['list']['entries']) {
                this.negotiationChartDataArray.push({
                    id: ent,
                    name: val['list']['entries'][ent]['entry']['name'],
                    node: val['list']['entries'][ent]['entry']['id'],
                });
            }
        }, response => {
            //console.log("PUT call in error", response);
        }, () => {
            //console.log("The PUT observable is now completed.");
        });
    }
    onSearchSubmit($event) {
        //console.log("on search submit: ", event)
    }
    onSearchItemClicked(event) {
        console.log("option clicked object: ", this.documentList.selection[0]);
        if (this.documentList.selection[0].entry.isFile === true) {
            //this.contentEntry = event;
            console.log("clicked searched node id:", this.documentList.selection[0].entry);
            this.preview.showResource(event.entry.id);
        }
        else {
        }
        return "instantiate chart done";
    }
    nodeClicked(event) {
        if (this.documentList.selection[0].entry.isFile === true) {
            this.nodeId = this.documentList.selection[0].entry.id;
            this.node = this.documentList.selection[0].entry;
            console.log("clicked node id:", this.nodeId);
            console.log("document list object for clicked node is: ", this.node);
            this.showViewer = false;
            this.showViewer = true;
        }
        else {
            this.nodeId = this.documentList.selection[0].entry.id;
            this.node = this.documentList.selection[0].entry;
            console.log("clicked foldernode id:", this.nodeId);
            console.log("document list object for clicked foldernode is: ", this.node);
            this.showViewer = false;
        }
    }
    showBoxPreview(node) {
        console.log("recent object is :", node.value.entry.id);
        if (node.value.entry.isFile === true) {
            //this.contentEntry = event;
            this.nodeId = node.value.entry.id;
            console.log("double clicked recents item:", this.nodeId);
            //this.preview.showResource(event.entry.id);
            this.showViewer = true;
        }
        else {
        }
    }
    createProcessClick() {
        //this.gotoTop();
        this.processName = "New NDA request - " + this.currentUser + " - " + this.currentDateTime;
        this.showNDAForm = !this.showNDAForm;
        this.showModalDiv = !this.showModalDiv;
    }
    processCancel() {
        this.showNDAForm = false;
        this.showModalDiv = false;
        this.openSnackBar("NDA request canceled!", "");
    }
    processSuccess(event) {
        this.showNDAForm = false;
        this.showModalDiv = false;
        this.openSnackBar("NDA request submitted!", "");
        this.refreshCloudTasks();
        console.log("process instance cloud", event);
    }
    clickedDetailRow(row) {
        //console.log("row object clicked: ", row['node']);
        this.router.navigate(['/documents', { fid: row['node'] }]);
    }
    onTaskRowClick(taskId) {
        if (taskId) {
            this.taskId = taskId;
            //this.tcc = this.TCS.isTaskEditable() // getTaskById(this.appName,this.taskId);
            console.log("task info: ", taskId);
            //this.router.navigate(['/apps', this.appName || 0, 'tasks', taskId]);
            this.showTaskForm = !this.showTaskForm;
            this.showModalDiv = !this.showModalDiv;
        }
    }
    clickedTaskSave(event) {
        console.log("task saved", event);
        this.showTaskForm = false;
        this.showModalDiv = false;
        this.openSnackBar("Task Form Saved", this.snackBarValue);
    }
    taskCompleted() {
        this.showTaskForm = false;
        this.showModalDiv = false;
        this.refreshCloudTasks();
        this.openSnackBar("Task Completed", this.snackBarValue);
        console.log("task completed");
    }
    executeOutcome() { }
    formCompleted() {
        console.log("form completed");
    }
    taskFormExecuted() {
        console.log("task form event: ");
        //event.preventDefault();
    }
    onTaskLoaded(event) {
        console.log("task loaded ", event);
    }
    taskFormExecutedOutcome() {
        console.log("outcome executed");
        this.showModalDiv = !this.showModalDiv; //close the div
        this.showTaskForm = !this.showTaskForm; //close the form
        this.openSnackBar("Action executed", "");
    }
    closeTaskForm() {
        this.showModalDiv = !this.showModalDiv; //close the div
        this.showTaskForm = !this.showTaskForm; //close the form
        this.openSnackBar("Form closed", "");
    }
    taskFormCanceled() {
        this.showModalDiv = !this.showModalDiv; //close the div
        this.showTaskForm = !this.showTaskForm; //close the form
        this.openSnackBar("Form cancelled", "");
    }
    taskFormError(event) {
        console.log("form error: ", event);
    }
    onBeginUpload(event) {
        if (this.warnOnMultipleUploads && event) {
            const files = event.files || [];
            if (files.length > 1) {
                event.pauseUpload();
                const dialogRef = this.dialog.open(_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogComponent, {
                    data: {
                        title: 'Upload',
                        message: `Are you sure you want to upload ${files.length} file(s)?`
                    },
                    minWidth: '250px'
                });
                dialogRef.afterClosed().subscribe((result) => {
                    if (result === true) {
                        event.resumeUpload();
                    }
                });
            }
        }
    }
    openSnackMessageError(error) {
        this.notificationService.showError(error.value || error);
    }
    openSnackMessageInfo(message) {
        this.notificationService.showInfo(message);
    }
    onUploadNewVersion(ev) {
        const contentEntry = ev.detail.data.node.entry;
        const showComments = this.showVersionComments;
        const allowDownload = this.allowVersionDownload;
        const newFileVersion = ev.detail.files[0].file;
        if (this.contentService.hasAllowableOperations(contentEntry, 'update')) {
            this.dialog.open(_version_manager_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_1__.VersionManagerDialogAdapterComponent, {
                data: {
                    contentEntry,
                    showComments,
                    allowDownload,
                    newFileVersion,
                    showComparison: true
                },
                panelClass: 'adf-version-manager-dialog',
                width: '630px'
            });
        }
        else {
            this.openSnackMessageError('OPERATION.ERROR.PERMISSION');
        }
    }
    getFileFiltering() {
        return this.acceptedFilesTypeShow ? this.acceptedFilesType : '*';
    }
    getCurrentDocumentListNode() {
        if (this.documentList.folderNode) {
            return [{ entry: this.documentList.folderNode }];
        }
        else {
            return [];
        }
    }
    onDeleteActionSuccess(message) {
        this.uploadService.fileDeleted.next(message);
        //this.deleteElementSuccess.emit();
        this.documentList.reload();
        this.openSnackMessageInfo(message);
    }
    onMyFilesDragDropSuccess(event) {
        console.log('File uploaded');
        this.refreshMyFiles();
    }
    onManageMetadata(event) {
        const contentEntry = event.value.entry;
        const displayEmptyMetadata = this.displayEmptyMetadata;
        if (this.contentService.hasAllowableOperations(contentEntry, 'update')) {
            this.dialog.open(_documents_metadata_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_2__.MetadataDialogAdapterComponent, {
                data: {
                    contentEntry,
                    displayEmptyMetadata
                },
                panelClass: 'adf-metadata-manager-dialog',
                width: '630px'
            });
        }
        else {
            this.openSnackMessageError('OPERATION.ERROR.PERMISSION');
        }
    }
    onAspectUpdate(event) {
        this.dialogAspectListService.openAspectListDialog(event.value.entry.id).subscribe((aspectList) => {
            this.nodeService.updateNode(event.value.entry.id, { aspectNames: [...aspectList] }).subscribe(() => {
                this.openSnackMessageInfo('Node Aspects Updated');
            });
        });
    }
    refreshCloudTasks() {
        this.showTaskViews = false;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.interval)(100).subscribe(val => { this.showTaskViews = true; });
    }
    refreshMyFiles(message) {
        this.showMyFiles = false;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.interval)(10).subscribe(val => { this.showMyFiles = true; });
        if (message) {
            this.openSnackBar(message, "");
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.DialogAspectListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.UploadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_16__.ProcessCloudService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_core_api__WEBPACK_IMPORTED_MODULE_18__.AlfrescoApiHttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.NodesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_preview_service__WEBPACK_IMPORTED_MODULE_3__.PreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.NodesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.AlfrescoApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.documentList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.detailTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.assignedTaskCloudTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.pval = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { showViewer: "showViewer" }, decls: 75, vars: 31, consts: [["id", "container"], ["fxLayoutAlign", "space-around center", "fxfill", "", "fxLayoutAlign", "center", "fxLayout", "row", 2, "width", "100%", "margin", "10px", "position", "sticky", "position", "-webkit-sticky", "top", "0", "z-index", "20"], ["fxFlex", "auto"], ["id", "sevendayalertdiv", 4, "ngIf"], ["id", "processButton"], ["mat-raised-button", "", "color", "primary", "id", "refreshButton", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "width", "100%", "margin", "10px"], ["id", "topSection", "fxLayout", "", "fxLayoutAlign", "center", "fxLayout", "row"], ["id", "chart", "fxFlex", "50%"], ["id", "canvas", 2, "min-height", "400px", "max-height", "400px"], ["canvas", ""], ["id", "details", "fxFlex", "50", "style", "margin:10px;", 4, "ngIf"], ["id", "lowerSection", "fxLayout", "column", "fxLayoutAlign", "space-evenly stretch", "fxfill", "", 2, "width", "100%"], ["fxFlex", "100", 2, "margin-right", "auto"], ["id", "thirty6090", "fxFlex", "100"], ["id", "thirtyCard", "class", "dayalert", "color", "primary", 3, "click", 4, "ngIf"], ["id", "sixtyCard", "class", "dayalert", "color", "primary", 3, "click", 4, "ngIf"], ["id", "ninetyCard", "class", "dayalert", "color", "primary", 3, "click", 4, "ngIf"], ["id", "details", "fxFlex", "100", "style", "margin: 10px;", 4, "ngIf"], ["id", "tasks"], ["animationDuration", "700ms", "mat-align-tabs", "center"], ["label", "Assigned"], [4, "ngIf"], ["label", "Completed", 1, "mat-elevation-z8"], ["label", "Task Details", 1, "mat-elevation-z8"], ["id", "recents"], [2, "min-height", "900px"], ["label", "My Files"], [2, "width", "100%", "height", "100%", 3, "rootFolderId", "versioning", "success"], ["style", "min-height:900px", 4, "ngIf"], ["label", "Favorites"], [1, "mat-elevation-z8", 3, "currentFolderId", "headerFilters", "contextMenuActions", "contentActions", "nodeClick", "preview"], ["favoriteList", ""], ["key", "$thumbnail", "type", "image"], ["title", "Name", "key", "name", 1, "full-width", "ellipsis-cell"], ["title", "Created By", "key", "createdByUser.displayName"], ["key", "createdOn", "title", "Created"], ["icon", "info", "title", "Info", 3, "execute"], ["icon", "copy", "title", "Copy", "permission", "update", "handler", "copy", 3, "disableWithNoPermission"], ["icon", "delete", "title", "Delete", "permission", "delete", "disableWithNoPermission", "true", "handler", "delete"], ["icon", "beach_access", "target", "folder", "title", "Update Aspects", 3, "execute"], [3, "target", "supportedPageSizes", "pagination"], ["label", "Recents"], [3, "currentFolderId", "headerFilters", "contextMenuActions", "contentActions", "nodeClick", "preview"], ["recentList", ""], ["class", "adf-alfresco-viewer", "cdkDrag", "", "class", "mat-elevation-z8", 4, "ngIf"], ["id", "formView", 4, "ngIf"], ["id", "sevendayalertdiv"], ["id", "details", "fxFlex", "50", 2, "margin", "10px"], [1, "mat-elevation-z8", 2, "max-height", "350px", "overflow", "scroll"], [2, "text-align", "center"], ["mat-table", "", "tabindex", "0", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "node"], ["matColumnDef", "nodeEx"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["id", "thirtyCard", "color", "primary", 1, "dayalert", 3, "click"], ["id", "sixtyCard", "color", "primary", 1, "dayalert", 3, "click"], ["id", "ninetyCard", "color", "primary", 1, "dayalert", 3, "click"], ["id", "details", "fxFlex", "100", 2, "margin", "10px"], [1, "mat-elevation-z8", 2, "max-height", "400px", "overflow", "scroll"], ["mat-table", "", "tabindex", "0", "matSort", "", 3, "dataSource"], ["detailTable", ""], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-row", "", 3, "ngClass", "click"], [1, "mat-elevation-z8", 3, "appName", "showMainDatatableActions", "showContextMenu", "status", "sorting", "isResizingEnabled", "rowClick"], ["assignedTaskCloud", ""], ["key", "name", "title", "Name", 1, "full-width", "name-column"], ["key", "status", "title", "Status"], ["key", "priority", "title", "Priority"], ["key", "createdDate", "title", "Created"], ["key", "description", "title", "Description"], [3, "target"], [3, "appName", "showMainDatatableActions", "showContextMenu", "actionsPosition", "status", "sorting", "rowClick"], ["taskCloud", ""], [3, "target", "supportedPageSizes"], [3, "currentFolderId", "headerFilters", "contextMenuActions", "contentActions", "thumbnails", "nodeClick", "preview"], ["documentList", ""], ["icon", "delete", "title", "Delete", "permission", "delete", "disableWithNoPermission", "true", "handler", "delete", 3, "success"], ["icon", "beach_access", "title", "Update Aspects", 3, "execute"], ["cdkDrag", "", 1, "mat-elevation-z8"], ["id", "adfViewer", "cdkDrag", "", 3, "showViewer", "overlayMode", "nodeId", "showViewerChange"], ["id", "formView"], [3, "appName", "name", "processDefinitionName", "success", "cancel", 4, "ngIf"], ["style", "min-width: 900px;", 3, "appName", "taskId", "showRefreshButton", "formSaved", "executeOutcome", "cancelClick", "taskCompleted", "formCompleted", "error", "onTaskLoaded", 4, "ngIf"], [3, "appName", "name", "processDefinitionName", "success", "cancel"], [2, "min-width", "900px", 3, "appName", "taskId", "showRefreshButton", "formSaved", "executeOutcome", "cancelClick", "taskCompleted", "formCompleted", "error", "onTaskLoaded"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_5_listener() { return ctx.runChartProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_8_listener() { return ctx.createProcessClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Create NDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-card", 7)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Contract Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "canvas", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DashboardComponent_div_18_Template, 20, 10, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-card", 7)(20, "div", 13)(21, "div", 14)(22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Existing Contract Expiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DashboardComponent_mat_card_25_Template, 5, 1, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DashboardComponent_mat_card_26_Template, 5, 1, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, DashboardComponent_mat_card_27_Template, 5, 1, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, DashboardComponent_div_28_Template, 20, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20)(30, "mat-card")(31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "My Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-tab-group", 21)(34, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, DashboardComponent_div_35_Template, 11, 9, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, DashboardComponent_div_37_Template, 9, 11, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " task details here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 26)(41, "mat-card")(42, "mat-card-content")(43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "My Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-tab-group", 27)(46, "mat-tab", 28)(47, "adf-upload-drag-area", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("success", function DashboardComponent_Template_adf_upload_drag_area_success_47_listener($event) { return ctx.onMyFilesDragDropSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, DashboardComponent_div_48_Template, 10, 11, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-tab", 31)(50, "adf-document-list", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nodeClick", function DashboardComponent_Template_adf_document_list_nodeClick_50_listener($event) { return ctx.showBoxPreview($event); })("preview", function DashboardComponent_Template_adf_document_list_preview_50_listener($event) { return ctx.showBoxPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "data-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "data-column", 34)(54, "data-column", 35)(55, "data-column", 36)(56, "data-column", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "content-actions")(58, "content-action", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function DashboardComponent_Template_content_action_execute_58_listener($event) { return ctx.onManageMetadata($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "content-action", 39)(60, "content-action", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "content-action", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("execute", function DashboardComponent_Template_content_action_execute_61_listener($event) { return ctx.onAspectUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "adf-pagination", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-tab", 43)(64, "adf-document-list", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nodeClick", function DashboardComponent_Template_adf_document_list_nodeClick_64_listener($event) { return ctx.showBoxPreview($event); })("preview", function DashboardComponent_Template_adf_document_list_preview_64_listener($event) { return ctx.showBoxPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "data-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "data-column", 34)(68, "data-column", 35)(69, "data-column", 36)(70, "data-column", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "adf-pagination", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, DashboardComponent_div_72_Template, 2, 3, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "adf-file-uploading-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, DashboardComponent_div_74_Template, 3, 2, "div", 47);
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sevenDayShowMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.chart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showChartPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewThirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewSixty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewNinety);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSummaryPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showTaskViews);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showTaskViews);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rootFolderId", "-my-")("versioning", "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMyFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentFolderId", "-favorites-")("headerFilters", true)("contextMenuActions", true)("contentActions", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disableWithNoPermission", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("target", _r10)("supportedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c11))("pagination", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentFolderId", "-recent-")("headerFilters", true)("contextMenuActions", true)("contentActions", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("target", _r11)("supportedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c11))("pagination", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showViewer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showModalDiv);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__.DefaultClassDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTab, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.DataColumnComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_13__.DataColumnListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.DocumentListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.ContentActionComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.ContentActionListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.UploadDragAreaComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.FileUploadingDialogComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_11__.AlfrescoViewerComponent, _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_16__.StartProcessCloudComponent, _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_16__.TaskListCloudComponent, _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_16__.TaskFormCloudComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["#container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 100%;\n  margin: 15px;\n  justify-content: center;\n}\n\n#refreshButton[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\n#topSection[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 10px;\n  display: flex;\n  height: auto;\n}\n\n#chart[_ngcontent-%COMP%] {\n  width: 700px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#tasks[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px;\n}\n\n#days[_ngcontent-%COMP%] {\n  max-width: 25%;\n  margin: 10px;\n  justify-content: right;\n}\n\n#recents[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: block;\n  background-color: white;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  width: 800px;\n  height: auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.adf-alfresco-viewer[_ngcontent-%COMP%] {\n  padding: 10px;\n  position: absolute;\n  z-index: 1000;\n  width: 600px;\n  height: 600px;\n  top: 60px;\n  right: 50px;\n  background-color: var(--theme-primary-color);\n}\n\n#adfViewer[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n}\n\n#processButton[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.dayalert[_ngcontent-%COMP%] {\n  background: var(--theme-primary-color);\n  color: antiquewhite;\n  font-size: 40px;\n  text-align: center;\n  height: 50px;\n  margin: 10px;\n}\n\n.backgroundRed[_ngcontent-%COMP%] {\n  background-color: var(--theme-warn-color);\n}\n\n#sevendayalertdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  background-color: rgb(225, 63, 3);\n  color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.scroll-to-top[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\ntr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(211, 210, 210);\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  color: var(--theme-primary-color);\n}\n\n.make-red[_ngcontent-%COMP%] {\n  background-color: var(--theme-warn-color); \n  color: white;\n}\n\n#sevendayalertdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  background-color: var(--theme-warn-color);\n}\n\n#formView[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  \n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center; \n  align-items: center; \n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  \n  box-sizing: border-box;\n  z-index: 200;\n  overflow: scroll;\n}\n\nadf-cloud-task-form[_ngcontent-%COMP%] {\n  min-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#adf-form-approve_request_\\(generate_contract\\)[_ngcontent-%COMP%] {\n  background-color: yellow !important;\n  color: white;\n}\n\n#adf-cloud-form-save[_ngcontent-%COMP%] {\n  background-color: green !important;\n  color: white;\n}\n\n.app-document-list-container[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n\n.app-document-list-container[_ngcontent-%COMP%]   .app-datatable-list[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n\n.app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%]   adf-toolbar-title[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%]   .app-document-action-buttons[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n@media screen and (max-width: 600px) {\n  .app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%]   adf-breadcrumb[_ngcontent-%COMP%], .app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%]   .app-document-action-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%]   adf-dropdown-breadcrumb[_ngcontent-%COMP%], .app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%]   .app-toolbar-divider-before-more-menu[_ngcontent-%COMP%], .app-document-list-container[_ngcontent-%COMP%]   adf-upload-drag-area[_ngcontent-%COMP%]   .app-toolbar-more-menu-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.app-document-list-container[_ngcontent-%COMP%]:not(.app-document-list-container-in-upload-drag-area) {\n  display: flex;\n  place-content: stretch flex-start;\n  align-items: stretch;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0E7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUZKOztBQWlCRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUFkSjs7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWRKOztBQWtCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZko7O0FBa0JFO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBZko7O0FBa0JFO0VBQ0UseUNBQUE7QUFmSjs7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQWZKOztBQWtCRTtFQUNFLFdBQUE7QUFmSjs7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQWZKOztBQWtCRTtFQUNFLFVBQUE7QUFmSjs7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQWZKOztBQWlCRztFQUNDLFVBQUE7RUFDQSxnQ0FBQTtBQWRKOztBQWlCRztFQUNDLG9DQUFBO0FBZEo7O0FBaUJBO0VBQ0UsV0FBQTtFQUVGLGFBQUE7QUFmQTs7QUFrQkE7RUFDRSxpQ0FBQTtBQWZGOztBQXFFQTtFQUNFLHlDQUFBLEVBQUEsMkJBQUE7RUFDQSxZQUFBO0FBbEVGOztBQXFFQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQW5FRjs7QUFzRUE7RUFFRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSwwREFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBLEVBQUEsa0NBQUE7RUFDQSxtQkFBQSxFQUFBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0VBR0EsZ0JBQUE7QUF6RUY7O0FBNkVBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBM0VGOztBQStFQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQTVFRjs7QUErRUE7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUE1RUY7O0FBOEVBO0VBQ0UsaUJBQUE7QUEzRUY7O0FBNkVFO0VBQ0ksaUJBQUE7QUEzRU47O0FBOEVFO0VBQ0ksa0JBQUE7QUE1RU47O0FBOEVNO0VBQ0ksY0FBQTtBQTVFVjs7QUErRU07RUFDSSxjQUFBO0FBN0VWOztBQWdGTTtFQUNJO0lBQ0ksYUFBQTtFQTlFWjtBQUNGOztBQWlGTTtFQUNJO0lBQ0ksYUFBQTtFQS9FWjtBQUNGOztBQW1GRTtFQUNJLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFqRk4iLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOjE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNyZWZyZXNoQnV0dG9ue1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgbWFyZ2luLXRvcDoxMHB4O1xufVxuI3RvcFNlY3Rpb257XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbjoxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6YXV0bztcbn1cbiNjaGFydHtcbndpZHRoOiA3MDBweDtcbmhlaWdodDphdXRvO1xuLy9tYXgtd2lkdGg6NzAwcHg7XG5tYXJnaW4tbGVmdDphdXRvO1xubWFyZ2luLXJpZ2h0OmF1dG87XG5cblxufVxuXG4jdGFza3N7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46MTBweDtcbn1cblxuI2RheXN7XG4gIG1heC13aWR0aDoyNSU7XG4gIG1hcmdpbjoxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4jcmVjZW50c3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjoxMHB4O1xuXG59XG5cbi5wYWdpbmF0aW9ue1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICAvLyAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gICBoZWlnaHQ6IDEwMCU7XG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAvLyB9XG5cbiAgLy8gLmV4YW1wbGUtc2lkZW5hdiB7XG4gIC8vICAgcGFkZGluZzogMjBweDtcbiAgLy8gfVxuXG4gIC5hZGYtYWxmcmVzY28tdmlld2VyIHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB0b3A6IDYwcHg7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS10aGVtZS1wcmltYXJ5LWNvbG9yKSA7XG4gIH1cblxuICAjYWRmVmlld2Vye1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvL3dpZHRoOjI1JTtcbiAgfVxuXG4gICNwcm9jZXNzQnV0dG9uIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC5kYXlhbGVydCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtcHJpbWFyeS1jb2xvcik7XG4gICAgY29sb3I6YW50aXF1ZXdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOjEwcHg7XG4gIH1cblxuICAuYmFja2dyb3VuZFJlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS13YXJuLWNvbG9yKTtcbiAgfVxuXG4gICNzZXZlbmRheWFsZXJ0ZGl2e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCA2MywgMyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgdGQsIHRoIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLnNjcm9sbC10by10b3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICB9XG4gICAuc2hvdy1zY3JvbGxUb3Age1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgIH1cblxuICAgdHIubWF0LXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjEwLCAyMTApO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuLy8gYmFja2dyb3VuZDogI2Y2ZjRmNDtcbnBhZGRpbmc6IDEwcHg7XG59XG5cbm1hdC1jYXJke1xuICBjb2xvcjp2YXIoLS10aGVtZS1wcmltYXJ5LWNvbG9yKTtcblxufVxuLy8gbWF0LWhlYWRlci1yb3d7XG4vLyAgYmFja2dyb3VuZDogI2ViZWJlYjtcbi8vIH1cbi8vIG1hdC1yb3cgIHtcbi8vICAgcGFkZGluZzogMTAwcHg7XG4vLyB9XG4vLyBtYXQtcm93IHNwYW57XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIH1cbi8vIG1hdC1yb3cgdGQge1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIHBhZGRpbmctdG9wOiAxcmVtO1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbi8vICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICB6LWluZGV4OiAxO1xuLy8gfVxuXG4vLyBtYXQtcm93IHRkOjpiZWZvcmUge1xuLy8gICAvKiBjb250ZW50OiAnJzsgKi9cbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDAuNXJlbSk7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgbGVmdDogMDtcbi8vICAgcmlnaHQ6IDA7XG4vLyAgIHRvcDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICBtYXJnaW46IGF1dG87XG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4vLyAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4vLyB9XG5cbi8vIG1hdC1yb3cgdGQ6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbi8vICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4vLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4vLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuLy8gfVxuXG4vLyBtYXQtcm93IHRkOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbi8vICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xuLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbi8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbi8vICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4vLyB9XG5cbi8vIG1hdC1yb3c6aG92ZXIgdGQ6OmJlZm9yZSB7XG4vLyAgIGJvcmRlci1jb2xvcjogZ3JheTtcbi8vIH1cblxuLm1ha2UtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtd2Fybi1jb2xvcik7IC8qcmdiYSgyNTUsIDg5LCAwLCAwLjQ3MSk7Ki9cbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jc2V2ZW5kYXlhbGVydGRpdntcblxuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLXdhcm4tY29sb3IpO1xufVxuXG4jZm9ybVZpZXd7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgcGFkZGluZy10b3A6MjBweDtcbiAgcGFkZGluZy1ib3R0b206MjBweDtcblxuICAvKiB0aGlzIGlzIHdoYXQgY2VudGVycyB5b3VyIGVsZW1lbnQgaW4gdGhlIGZpeGVkIHdyYXBwZXIqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBhbGlnbnMgb24gdmVydGljYWwgZm9yIGNvbHVtbiAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBhbGlnbnMgb24gaG9yaXpvbnRhbCBmb3IgY29sdW1uICovXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLyoganVzdCBmb3Igc3R5bGluZyB0byBzZWUgdGhlIGxpbWl0cyAqL1xuICAvL2JvcmRlcjogMnB4IGRhc2hlZCByZWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6MjAwO1xuICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDc3LCAzNiwgMC45MzUpO1xuICAvL2JhY2tncm91bmQ6IHZhcigtLXRoZW1lLXByaW1hcnktY29sb3IpO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG59XG5cbmFkZi1jbG91ZC10YXNrLWZvcm1cbntcbiAgbWluLXdpZHRoOjYwMHB4O1xuICBtYXJnaW4tbGVmdDphdXRvO1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcblxufVxuXG4jYWRmLWZvcm0tYXBwcm92ZV9yZXF1ZXN0X1xcKGdlbmVyYXRlX2NvbnRyYWN0XFwpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2FkZi1jbG91ZC1mb3JtLXNhdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYXBwLWRvY3VtZW50LWxpc3QtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG5cbiAgLmFwcC1kYXRhdGFibGUtbGlzdCB7XG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIGFkZi11cGxvYWQtZHJhZy1hcmVhIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgYWRmLXRvb2xiYXItdGl0bGUge1xuICAgICAgICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuYXBwLWRvY3VtZW50LWFjdGlvbi1idXR0b25zIHtcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBhZGYtYnJlYWRjcnVtYiwgLmFwcC1kb2N1bWVudC1hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIGFkZi1kcm9wZG93bi1icmVhZGNydW1iLCAuYXBwLXRvb2xiYXItZGl2aWRlci1iZWZvcmUtbW9yZS1tZW51LCAuYXBwLXRvb2xiYXItbW9yZS1tZW51LWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgJjpub3QoLmFwcC1kb2N1bWVudC1saXN0LWNvbnRhaW5lci1pbi11cGxvYWQtZHJhZy1hcmVhKSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGxhY2UtY29udGVudDogc3RyZXRjaCBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('inOutAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ height: 0, opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('1s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ height: 600, opacity: 1 }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ height: 600, opacity: 1 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('1s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ height: 0, opacity: 0 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animImageSlider', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':increment', left),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':decrement', right),
            ]),
        ] } });


/***/ }),

/***/ 21828:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/version-manager-dialog-adapter.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionManagerDialogAdapterComponent": () => (/* binding */ VersionManagerDialogAdapterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/preview.service */ 19578);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);










function VersionManagerDialogAdapterComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "mat-slide-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VersionManagerDialogAdapterComponent_section_11_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.showVersionComparison = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Show version comparison ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.showVersionComparison);
} }
function VersionManagerDialogAdapterComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 9)(1, "adf-version-manager", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("uploadCancel", function VersionManagerDialogAdapterComponent_section_12_Template_adf_version_manager_uploadCancel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.hideVersionComparison($event)); })("uploadSuccess", function VersionManagerDialogAdapterComponent_section_12_Template_adf_version_manager_uploadSuccess_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.hideVersionComparison($event)); })("uploadError", function VersionManagerDialogAdapterComponent_section_12_Template_adf_version_manager_uploadError_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.uploadError($event)); })("viewVersion", function VersionManagerDialogAdapterComponent_section_12_Template_adf_version_manager_viewVersion_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onViewVersion($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("node", ctx_r1.contentEntry)("showVersionComparison", ctx_r1.showVersionComparison)("newFileVersion", ctx_r1.newFileVersion)("allowDownload", ctx_r1.allowDownload)("showComments", ctx_r1.showComments);
} }
function VersionManagerDialogAdapterComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "adf-version-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("node", ctx_r2.contentEntry)("showActions", false);
} }
class VersionManagerDialogAdapterComponent {
    constructor(previewService, notificationService, data, containingDialog) {
        this.previewService = previewService;
        this.notificationService = notificationService;
        this.containingDialog = containingDialog;
        this.showComments = true;
        this.allowDownload = true;
        this.readOnly = false;
        this.showVersionComparison = false;
        this.contentEntry = data.contentEntry;
        this.newFileVersion = data.hasOwnProperty('newFileVersion') ? data.newFileVersion : this.newFileVersion;
        this.showComments = data.hasOwnProperty('showComments') ? data.showComments : this.showComments;
        this.allowDownload = data.hasOwnProperty('allowDownload') ? data.allowDownload : this.allowDownload;
    }
    uploadError(event) {
        this.notificationService.showError(event.error);
    }
    close() {
        this.containingDialog.close();
    }
    onViewVersion(versionId) {
        this.previewService.showResource(this.contentEntry.id, versionId);
        this.close();
    }
    hideVersionComparison(isCancelled) {
        if (isCancelled) {
            this.showVersionComparison = false;
            this.newFileVersion = null;
        }
    }
}
VersionManagerDialogAdapterComponent.ɵfac = function VersionManagerDialogAdapterComponent_Factory(t) { return new (t || VersionManagerDialogAdapterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_preview_service__WEBPACK_IMPORTED_MODULE_0__.PreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
VersionManagerDialogAdapterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VersionManagerDialogAdapterComponent, selectors: [["ng-component"]], decls: 17, vars: 6, consts: [["mat-dialog-title", ""], ["id", "adf-version-manager-switch-readonly", 3, "ngModel", "ngModelChange"], ["id", "adf-version-manager-switch-download", 3, "ngModel", "ngModelChange"], ["id", "adf-version-manager-switch-comments", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-dialog-content", "", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["id", "adf-version-manager-switch-comparison", 3, "ngModel", "ngModelChange"], ["mat-dialog-content", ""], [3, "node", "showVersionComparison", "newFileVersion", "allowDownload", "showComments", "uploadCancel", "uploadSuccess", "uploadError", "viewVersion"], [3, "node", "showActions"]], template: function VersionManagerDialogAdapterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Manage Versions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section")(3, "mat-slide-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VersionManagerDialogAdapterComponent_Template_mat_slide_toggle_ngModelChange_3_listener($event) { return ctx.readOnly = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Read-only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section")(6, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VersionManagerDialogAdapterComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) { return ctx.allowDownload = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Enable version download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section")(9, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VersionManagerDialogAdapterComponent_Template_mat_slide_toggle_ngModelChange_9_listener($event) { return ctx.showComments = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Show comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VersionManagerDialogAdapterComponent_section_11_Template, 3, 1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VersionManagerDialogAdapterComponent_section_12_Template, 2, 5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VersionManagerDialogAdapterComponent_section_13_Template, 2, 2, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "footer", 6)(15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VersionManagerDialogAdapterComponent_Template_button_click_15_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.readOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.allowDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.showComments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newFileVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.readOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.readOnly);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_8__.VersionManagerComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_8__.VersionListComponent], encapsulation: 2 });


/***/ }),

/***/ 55017:
/*!**************************************************!*\
  !*** ./src/app/documents/documents.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsComponent": () => (/* binding */ DocumentsComponent)
/* harmony export */ });
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _metadata_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata-dialog-adapter.component */ 25989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/preview.service */ 19578);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _associations_associations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../associations/associations.component */ 98554);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);






















const _c0 = ["documentList"];
function DocumentsComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "adf-tag-node-list", 39);
} if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nodeId", entry_r6.data.getValue(entry_r6.row, entry_r6.col));
} }
function DocumentsComponent_ng_template_52_button_0_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DocumentsComponent_ng_template_52_button_0_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DocumentsComponent_ng_template_52_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DocumentsComponent_ng_template_52_button_0_mat_icon_1_Template, 2, 0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DocumentsComponent_ng_template_52_button_0_mat_icon_2_Template, 2, 0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("adf-node-lock", entry_r7.row.node.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", entry_r7.row.getValue("isLocked"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !entry_r7.row.getValue("isLocked"));
} }
function DocumentsComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DocumentsComponent_ng_template_52_button_0_Template, 3, 3, "button", 40);
} if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", entry_r7.row.getValue("isFile"));
} }
function DocumentsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsComponent_div_66_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.closeAssociation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "associations", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("_node", ctx_r5.folderNodeAssociation);
} }
const _c1 = function () { return [5, 10, 25]; };
class DocumentsComponent {
    constructor(appConfig, _snackBar, dialog, dialogAspectListService, contentService, route, router, notificationService, preview, nodeService) {
        this.appConfig = appConfig;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.dialogAspectListService = dialogAspectListService;
        this.contentService = contentService;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.preview = preview;
        this.nodeService = nodeService;
        this.fxFlexForDocList = 0;
        this.fxFlexForAux = 0;
        this.snackBarDuration = 3000;
        this.isHidden = false;
        this.showMetaContent = false;
        this.showDocListContent = true;
        this.showPreviewContent = false;
        this.showViewer = false;
        this.showView = false;
        this.thumbnails = true;
        this.nodeId = null;
        this.displayDefaultProperties = true;
        this.currentFolderId = "5be4a4cc-f413-4f28-8329-dce29671b224";
        this.showAssocations = false;
        this.displayMode = _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.DisplayMode.List;
        this.displayEmptyMetadata = true;
        this.baseShareUrl = (this.appConfig.get(_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.AppConfigValues.BASESHAREURL) ||
            this.appConfig.get(_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.AppConfigValues.ECMHOST)) + '/preview/s/';
        this.fxFlexForDocList = 100;
        this.fxFlexForAux = 0;
    }
    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(value => (this.currentFolderId = value['fid'] == null ? '5be4a4cc-f413-4f28-8329-dce29671b224' : value['fid']));
    }
    onViewerVisibilityChanged() {
        const primaryUrl = this.router
            .parseUrl(this.router.url)
            .root.children[_angular_router__WEBPACK_IMPORTED_MODULE_5__.PRIMARY_OUTLET].toString();
        this.router.navigateByUrl(primaryUrl);
    }
    uploadSuccess(event) {
        this.notificationService.openSnackMessage('File uploaded');
        this.documentList.reload();
    }
    showPreview(event) {
        const entry = event.value.entry;
        if (entry && entry.isFile) {
            this.preview.showResource(entry.id);
        }
    }
    onGoBack(event) {
        this.showViewer = false;
        this.nodeId = null;
    }
    onSearchSubmit(event) {
        console.log("on search submit: ", event);
    }
    onSearchItemClicked(event) {
        console.log("option clicked object: ", event.entry.id);
        console.log("seach item object: ", event);
        if (event.entry.isFile === true) {
            this.currentFolderId = event.entry.parentId;
        }
        else {
            this.currentFolderId = event.entry.id;
        }
    }
    nodeClicked(event) {
        if (this.documentList.selection[0].entry.isFile === true) {
            this.fxFlexForDocList = 0;
            this.isHidden = true;
            this.showDocListContent = false;
            this.fxFlexForAux = 50;
            this.nodeId = this.documentList.selection[0].entry.id;
            this.node = this.documentList.selection[0].entry;
            console.log("clicked node id:", this.nodeId);
            console.log("document list object for clicked node is: ", this.node);
            this.showViewer = false;
            this.showViewer = true;
            this.showView = true;
        }
        else {
            this.isHidden = false;
            this.showViewer = false;
            this.fxFlexForDocList = 100;
            this.fxFlexForAux = 0;
            this.showDocListContent = true;
            //this.showMetaContent = false;
            this.nodeId = this.documentList.selection[0].entry.id;
            this.node = this.documentList.selection[0].entry;
            //console.log("clicked foldernode id:", this.nodeId);
            console.log("document list object for clicked foldernode is: ", this.node.properties['ContractManagement:associations']);
        }
    }
    onAspectUpdate(event) {
        this.dialogAspectListService.openAspectListDialog(event.value.entry.id).subscribe((aspectList) => {
            this.nodeService.updateNode(event.value.entry.id, { aspectNames: [...aspectList] }).subscribe(() => {
                this.openSnackMessageInfo('Node Aspects Updated');
            });
        });
    }
    backButtonClicked() {
        this.fxFlexForDocList = 100;
        this.fxFlexForAux = 0;
        this.showDocListContent = true;
    }
    viewerClosed() {
        this.showViewer = false;
        this.fxFlexForDocList = 100;
        this.fxFlexForAux = 0;
        this.showDocListContent = true;
        this.isHidden = false;
    }
    loginfo(inf) {
        console.log("info from associations is: ", inf);
    }
    folderAssociationsCustomAction(event) {
        //let entry = event.value.entry;
        this.folderNodeAssociation = event.value.entry;
        this.showAssocations = true;
        console.log("association clicked", this.folderNodeAssociation, "show state ", this.showAssocations);
        //alert(`Custom document action for ${entry.id}`);
    }
    closeAssociation() {
        this.showAssocations = false;
    }
    toggleGalleryView() {
        this.displayMode = this.displayMode === _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.DisplayMode.List ? _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.DisplayMode.Gallery : _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.DisplayMode.List;
        const url = this.router.createUrlTree(['/files', this.currentFolderId, 'display', this.displayMode]).toString();
        //this.location.go(url);
    }
    openSnackMessageError(error) {
        this.notificationService.showError(error.value || error);
    }
    openSnackMessageInfo(message) {
        this.notificationService.showInfo(message);
    }
    canEditFolder(selection) {
        if (selection && selection.length === 1) {
            const entry = selection[0].entry;
            if (entry && entry.isFolder) {
                return this.contentService.hasAllowableOperations(entry, 'update');
            }
        }
        return false;
    }
    onDeleteActionSuccess(message) {
        //this.uploadService.fileDeleted.next(message);
        //this.deleteElementSuccess.emit();
        this.documentList.reload();
        this.openSnackMessageInfo(message);
    }
    onManageMetadata(event) {
        const contentEntry = event.value.entry;
        const displayEmptyMetadata = this.displayEmptyMetadata;
        if (this.contentService.hasAllowableOperations(contentEntry, 'update')) {
            this.dialog.open(_metadata_dialog_adapter_component__WEBPACK_IMPORTED_MODULE_0__.MetadataDialogAdapterComponent, {
                data: {
                    contentEntry,
                    displayEmptyMetadata
                },
                panelClass: 'adf-metadata-manager-dialog',
                width: '630px'
            });
        }
        else {
            this.openSnackMessageError('OPERATION.ERROR.PERMISSION');
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: this.snackBarDuration
        });
    }
    onSiteChange(site) {
        this.currentFolderId = site.entry.guid;
    }
    backToContracts() {
        //go back to default folder
        this.refreshDocList("Back to Contracts!");
        console.log("Going back to contracts: ", this.documentList.currentFolderId);
    }
    onMyFilesDragDropSuccess(event) {
        console.log('File uploaded');
        this.refreshDocList();
    }
    refreshDocList(message) {
        this.currentFolderId = "nothing";
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(10).subscribe(val => { this.currentFolderId = "5be4a4cc-f413-4f28-8329-dce29671b224"; });
        if (message) {
            this.openSnackBar(message, "");
        }
    }
    canCreateContent(parentNode) {
        if (parentNode) {
            return this.contentService.hasAllowableOperations(parentNode, 'create');
        }
        return false;
    }
    hasSelection(selection) {
        return selection && selection.length > 0;
    }
}
DocumentsComponent.ɵfac = function DocumentsComponent_Factory(t) { return new (t || DocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.AppConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.DialogAspectListService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_preview_service__WEBPACK_IMPORTED_MODULE_1__.PreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.NodesApiService)); };
DocumentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DocumentsComponent, selectors: [["app-documents"]], viewQuery: function DocumentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.documentList = _t.first);
    } }, inputs: { showViewer: "showViewer" }, decls: 68, vars: 57, consts: [[2, "margin", "10px"], [2, "width", "500px", 3, "expandable", "highlight", "optionClicked", "submit"], [3, "showContextFacets"], ["fxLayoutAlign", "start", "fxLayout", "column", 1, "doclist-div-wrapper"], ["mat-fab", "", "extended", "", "color", "primary", 3, "click"], ["root", "Personal Files", 1, "files-breadcrumb", 3, "target", "folderNode"], [1, "app-document-action-buttons"], ["mat-icon-button", "", "data-automation-id", "document-list-grid-view", "title", "Toggle display mode", 3, "click"], ["data-automation-id", "create-new-folder", "mat-icon-button", "", "title", "New folder", 3, "disabled", "adf-create-folder", "error", "success"], ["mat-icon-button", "", "title", "Download", 3, "disabled", "adfNodeDownload"], ["data-automation-id", "favorite", "mat-icon-button", "", "matTooltip", "select Favorite", 3, "disabled", "adf-node-favorite"], ["favorite", "adfFavorite"], ["mat-icon-button", "", 3, "disabled", "baseShareUrl", "adf-share", "matTooltip"], ["shareRef", "adfShare"], ["mat-icon-button", "", "data-automation-id", "delete-toolbar-button", "adf-check-allowable-operation", "delete", "title", "Delete", 3, "permanent", "adf-nodes", "adf-delete", "delete"], [3, "hideMyFiles", "relations", "change"], [3, "rootFolderId", "adf-check-allowable-operation", "success"], ["fxLayoutAlign", "start", "fxLayout", "row", 1, "adf-document-list-div-wrapper", 2, "min-height", "600px"], ["fxLayoutAlign", "none", "fxLayout", "column", 3, "fxFlex"], [2, "width", "100%", "height", "100%", 3, "rootFolderId", "versioning", "success"], [3, "contextMenuActions", "currentFolderId", "headerFilters", "thumbnails", "allowDropFiles", "preview", "nodeClick"], ["documentList", ""], ["key", "$thumbnail", "type", "image"], ["title", "Name", "key", "name", 1, "full-width", "ellipsis-cell"], ["title", "Tag", "key", "id", "sortable", "true", 1, "full-width", "ellipsis-cell"], ["title", "Lock", "key", "lock", "target", "document", 1, "app-desktop-only", "adf-ellipsis-cell", 3, "focus", "sortable"], ["title", "Created By", "key", "createdByUser.displayName"], ["title", "Created On", "key", "createdAt", "type", "date", "format", "medium", "sortable", "true", 1, "desktop-only"], ["title", "Expires", "key", "ContractManagement:Expiration", "type", "date", "format", "medium", "sortable", "true"], ["icon", "redo", "title", "associations", "permission", "update", "target", "folder", 3, "disableWithNoPermission", "execute"], ["icon", "get_app", "title", "Download", "handler", "download"], ["icon", "info", "title", "Info", 3, "execute"], ["icon", "copy", "title", "Copy", "permission", "update", "handler", "copy", 3, "disableWithNoPermission"], ["icon", "delete", "title", "Delete", "permission", "delete", "disableWithNoPermission", "true", "handler", "delete", 3, "success"], ["icon", "beach_access", "target", "folder", "title", "Update Aspects", 3, "execute"], [3, "target", "pagination", "supportedPageSizes"], [3, "fxFlex", "showViewer", "overlayMode", "nodeId", "showViewerChange"], [3, "displayEmpty", "preset", "node", "displayAspect", "fxFlex"], ["class", "formView", 4, "ngIf"], [3, "nodeId"], ["mat-icon-button", "", "class", "app-lock-button", 3, "adf-node-lock", 4, "ngIf"], ["mat-icon-button", "", 1, "app-lock-button", 3, "adf-node-lock"], [4, "ngIf"], [1, "formView"], ["id", "associations", "cdkDrag", ""], ["mat-mini-fab", "", 3, "click"], [3, "_node"]], template: function DocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content")(2, "adf-search-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionClicked", function DocumentsComponent_Template_adf_search_control_optionClicked_2_listener($event) { return ctx.onSearchItemClicked($event); })("submit", function DocumentsComponent_Template_adf_search_control_submit_2_listener($event) { return ctx.onSearchSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "adf-empty-search-result")(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "adf-search-filter-chips", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "mat-card", 0)(9, "adf-toolbar")(10, "adf-toolbar-title")(11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsComponent_Template_button_click_11_listener() { return ctx.backToContracts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "adf-breadcrumb", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsComponent_Template_button_click_16_listener() { return ctx.toggleGalleryView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function DocumentsComponent_Template_button_error_19_listener($event) { return ctx.openSnackMessageError($event); })("success", function DocumentsComponent_Template_button_success_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.reload()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "create_new_folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 9)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "get_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 10, 11)(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("delete", function DocumentsComponent_Template_button_delete_34_listener($event) { return ctx.onDeleteActionSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "adf-toolbar-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "adf-sites-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DocumentsComponent_Template_adf_sites_dropdown_change_38_listener($event) { return ctx.onSiteChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "adf-upload-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("success", function DocumentsComponent_Template_adf_upload_button_success_39_listener($event) { return ctx.uploadSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-card", 0)(41, "div", 17)(42, "div", 18)(43, "adf-upload-drag-area", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("success", function DocumentsComponent_Template_adf_upload_drag_area_success_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.reload()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "adf-document-list", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("preview", function DocumentsComponent_Template_adf_document_list_preview_44_listener($event) { return ctx.showPreview($event); })("nodeClick", function DocumentsComponent_Template_adf_document_list_nodeClick_44_listener($event) { return ctx.nodeClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "data-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "data-column", 22)(48, "data-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "data-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, DocumentsComponent_ng_template_50_Template, 1, 1, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "data-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, DocumentsComponent_ng_template_52_Template, 1, 1, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "data-column", 26)(54, "data-column", 27)(55, "data-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "content-actions")(57, "content-action", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("execute", function DocumentsComponent_Template_content_action_execute_57_listener($event) { return ctx.folderAssociationsCustomAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "content-action", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "content-action", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("execute", function DocumentsComponent_Template_content_action_execute_59_listener($event) { return ctx.onManageMetadata($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "content-action", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "content-action", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("success", function DocumentsComponent_Template_content_action_success_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.reload()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "content-action", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("execute", function DocumentsComponent_Template_content_action_execute_62_listener($event) { return ctx.onAspectUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "adf-pagination", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "adf-alfresco-viewer", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("showViewerChange", function DocumentsComponent_Template_adf_alfresco_viewer_showViewerChange_64_listener($event) { return ctx.showViewer = $event; })("showViewerChange", function DocumentsComponent_Template_adf_alfresco_viewer_showViewerChange_64_listener() { return ctx.viewerClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "adf-content-metadata-card", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, DocumentsComponent_div_66_Template, 6, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "adf-file-uploading-dialog");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("expandable", true)("highlight", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showContextFacets", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("target", _r2)("folderNode", _r2.folderNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.canCreateContent(_r2.folderNode))("adf-create-folder", _r2.currentFolderId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.hasSelection(_r2.selection))("adfNodeDownload", _r2.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r2.selection.length)("adf-node-favorite", _r2.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _r0.hasFavorites() ? "star" : "star_border", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r2.selection.length && !_r1.isFile)("baseShareUrl", ctx.baseShareUrl)("adf-share", _r2.selection[0])("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 54, _r1.isShared ? "DOCUMENT_LIST.TOOLBAR.SHARE_EDIT" : "DOCUMENT_LIST.TOOLBAR.SHARE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("permanent", true)("adf-nodes", _r2.selection)("adf-delete", _r2.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hideMyFiles", false)("relations", "members");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rootFolderId", _r2.currentFolderId || "-root-")("adf-check-allowable-operation", "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-hidden", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("fxFlex", ctx.fxFlexForDocList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rootFolderId", _r2.currentFolderId)("versioning", "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contextMenuActions", true)("currentFolderId", ctx.currentFolderId)("headerFilters", true)("thumbnails", "thumbnails")("allowDropFiles", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("focus", false)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableWithNoPermission", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableWithNoPermission", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("target", _r2)("pagination", 5)("supportedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](56, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-hidden", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("fxFlex", ctx.fxFlexForAux);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showViewer", ctx.showViewer)("overlayMode", false)("nodeId", ctx.nodeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("fxFlex", ctx.fxFlexForAux);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@inOutAnimation", undefined)("displayEmpty", true)("preset", "*")("node", ctx.node)("displayEmpty", true)("displayAspect", "ContractManagement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAssocations);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarTitleComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarDividerComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.DataColumnComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_4__.DataColumnListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.TagNodeListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.DocumentListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.ContentActionComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.ContentActionListComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.UploadDragAreaComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.UploadButtonComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.FileUploadingDialogComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.SearchControlComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.EmptySearchResultComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.SearchFilterChipsComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.DropdownSitesComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.NodeSharedDirective, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.ContentMetadataCardComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.FolderCreateDirective, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.NodeLockDirective, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.CheckAllowableOperationDirective, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.NodeDeleteDirective, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.NodeFavoriteDirective, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.NodeDownloadDirective, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_9__.AlfrescoViewerComponent, _associations_associations_component__WEBPACK_IMPORTED_MODULE_2__.AssociationsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".is-hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.doclist-div-wrapper[_ngcontent-%COMP%] {\n  width: max;\n}\n\n.adf-content-metadata-card-div-wrapper[_ngcontent-%COMP%] {\n  \n}\n\nadf-content-metadata-card[_ngcontent-%COMP%] {\n  min-height: 900px;\n}\n\n.adf-alfresco-viewer-div-wrapper[_ngcontent-%COMP%] {\n  \n}\n\n.adf-viewer-content[_ngcontent-%COMP%] {\n  \n}\n\n.adf-alfresco-viewer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 600px;\n}\n\n#associations[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 300;\n  bottom: 0;\n  background-color: white;\n}\n\n.formView[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  padding-top: 300px;\n  padding-bottom: 20px;\n  \n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center; \n  align-items: center; \n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  \n  box-sizing: border-box;\n  z-index: 200;\n  overflow: scroll;\n}\n\n.adf-datatable-card[_ngcontent-%COMP%]   .app-lock-button[_ngcontent-%COMP%] {\n  top: -10px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0FBREo7O0FBS0E7RUFDSSx3QkFBQTtBQUZKOztBQVVBO0VBQ0UsaUJBQUE7QUFQRjs7QUFVQTtFQUNBOzs7cUJBQUE7QUFKQTs7QUFVQTtFQUNBLGdDQUFBO0FBUEE7O0FBVUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7QUFSSjs7QUFjRTtFQUVFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBWko7O0FBZUU7RUFFRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSwwREFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBLEVBQUEsa0NBQUE7RUFDQSxtQkFBQSxFQUFBLG9DQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHVDQUFBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0VBR0EsZ0JBQUE7QUFuQko7O0FBdUJFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBcEJKIiwiZmlsZSI6ImRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaXMtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kb2NsaXN0LWRpdi13cmFwcGVye1xuICAgIHdpZHRoOm1heDtcblxufVxuXG4uYWRmLWNvbnRlbnQtbWV0YWRhdGEtY2FyZC1kaXYtd3JhcHBlcntcbiAgICAvKndpZHRoOjIwJSAhaW1wb3J0YW50OyovXG4gICAgLy8gZmxvYXQ6cmlnaHQ7XG59XG5cbi5hZGYtZG9jdW1lbnQtbGlzdC1kaXYtd3JhcHBlcntcblxufVxuXG5hZGYtY29udGVudC1tZXRhZGF0YS1jYXJke1xuICBtaW4taGVpZ2h0OjkwMHB4O1xufVxuXG4uYWRmLWFsZnJlc2NvLXZpZXdlci1kaXYtd3JhcHBlcntcbi8qIHdpZHRoOjEwMHB4O1xuaGVpZ2h0OjEwMHB4O1xuZmxvYXQ6bGVmdDtcbm1hcmdpbi10b3A6IDEwcHg7ICovXG59XG5cbi5hZGYtdmlld2VyLWNvbnRlbnQge1xuLyogICAgIHdpZHRoOjMwMHB4ICFpbXBvcnRhbnQ7ICovXG59XG5cbi5hZGYtYWxmcmVzY28tdmlld2VyIHtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgLy9oZWlnaHQ6IDQwMHB4O1xuICAgIC8vIHRvcDogNjBweDtcbiAgICAvLyByaWdodDogNTBweDtcbiAgfVxuXG4gICNhc3NvY2lhdGlvbnN7XG5cbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB6LWluZGV4OjMwMDtcbiAgICBib3R0b206MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICB9XG4gIC5mb3JtVmlld3tcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nLXRvcDozMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuXG4gICAgLyogdGhpcyBpcyB3aGF0IGNlbnRlcnMgeW91ciBlbGVtZW50IGluIHRoZSBmaXhlZCB3cmFwcGVyKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogYWxpZ25zIG9uIHZlcnRpY2FsIGZvciBjb2x1bW4gKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBhbGlnbnMgb24gaG9yaXpvbnRhbCBmb3IgY29sdW1uICovXG5cbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLyoganVzdCBmb3Igc3R5bGluZyB0byBzZWUgdGhlIGxpbWl0cyAqL1xuICAgIC8vYm9yZGVyOiAycHggZGFzaGVkIHJlZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6MjAwO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgNzcsIDM2LCAwLjUpO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogKHZhcigtLXRoZW1lLXByaW1hcnktY29sb3IpLC41KTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIH1cblxuICAuYWRmLWRhdGF0YWJsZS1jYXJkIC5hcHAtbG9jay1idXR0b24ge1xuICAgIHRvcDogLTEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.trigger)('inOutAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: 0, opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.animate)('3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: 300, opacity: 1 }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: 300, opacity: 1 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.animate)('3s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: 0, opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 25989:
/*!****************************************************************!*\
  !*** ./src/app/documents/metadata-dialog-adapter.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetadataDialogAdapterComponent": () => (/* binding */ MetadataDialogAdapterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);





class MetadataDialogAdapterComponent {
    constructor(data, containingDialog) {
        this.containingDialog = containingDialog;
        this.displayEmptyMetadata = false;
        this.contentEntry = data.contentEntry;
        this.displayEmptyMetadata = data.displayEmptyMetadata;
    }
    close() {
        this.containingDialog.close();
    }
}
MetadataDialogAdapterComponent.ɵfac = function MetadataDialogAdapterComponent_Factory(t) { return new (t || MetadataDialogAdapterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
MetadataDialogAdapterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MetadataDialogAdapterComponent, selectors: [["ng-component"]], decls: 7, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "node", "displayEmpty"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function MetadataDialogAdapterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "adf-content-metadata-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetadataDialogAdapterComponent_Template_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx.contentEntry)("displayEmpty", ctx.displayEmptyMetadata);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.ContentMetadataCardComponent], encapsulation: 2 });


/***/ }),

/***/ 15210:
/*!**************************************************!*\
  !*** ./src/app/file-view/blob-view.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlobViewComponent": () => (/* binding */ BlobViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/preview.service */ 19578);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);




class BlobViewComponent {
    constructor(preview, router) {
        if (preview.content === null || preview.name === null) {
            router.navigate([{ outlets: { overlay: null } }]);
            return;
        }
        this.content = preview.content;
        this.name = preview.name;
    }
}
BlobViewComponent.ɵfac = function BlobViewComponent_Factory(t) { return new (t || BlobViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_preview_service__WEBPACK_IMPORTED_MODULE_0__.PreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
BlobViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlobViewComponent, selectors: [["ng-component"]], decls: 1, vars: 3, consts: [[3, "showViewer", "blobFile", "fileName"]], template: function BlobViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "adf-viewer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showViewer", true)("blobFile", ctx.content)("fileName", ctx.name);
    } }, dependencies: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_3__.ViewerComponent], encapsulation: 2 });


/***/ }),

/***/ 60236:
/*!**************************************************!*\
  !*** ./src/app/file-view/file-view.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileViewComponent": () => (/* binding */ FileViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alfresco/adf-content-services */ 73890);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











function FileViewComponent_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adf-info-drawer", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "adf-info-drawer-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "adf-comments", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "adf-info-drawer-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "adf-content-metadata-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "adf-info-drawer-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card")(11, "mat-card-content")(12, "adf-version-manager", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("uploadError", function FileViewComponent_ng_container_0_ng_template_1_Template_adf_version_manager_uploadError_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onUploadError($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const node_r3 = ctx.node;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, "APP.INFO_DRAWER.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "APP.INFO_DRAWER.COMMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeId", ctx_r2.nodeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "APP.INFO_DRAWER.PROPERTIES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "APP.INFO_DRAWER.VERSIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
} }
function FileViewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileViewComponent_ng_container_0_ng_template_1_Template, 13, 15, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "adf-viewer", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showViewerChange", function FileViewComponent_ng_container_0_Template_adf_viewer_showViewerChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onViewerVisibilityChanged()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "adf-viewer-toolbar-actions")(5, "button", 3)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "alarm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "backup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "bug_report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeId", ctx_r0.nodeId);
} }
class FileViewComponent {
    constructor(router, route, snackBar, nodeApiService) {
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.nodeApiService = nodeApiService;
        this.nodeId = null;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const id = params.nodeId;
            if (id) {
                this.nodeApiService.getNode(id).subscribe((node) => {
                    if (node && node.isFile) {
                        this.nodeId = id;
                        return;
                    }
                    this.router.navigate(['/files', id]);
                }, () => this.router.navigate(['/files', id]));
            }
        });
    }
    onUploadError(errorMessage) {
        this.snackBar.open(errorMessage, '', { duration: 4000 });
    }
    onViewerVisibilityChanged() {
        const primaryUrl = this.router
            .parseUrl(this.router.url)
            .root.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET].toString();
        this.router.navigateByUrl(primaryUrl);
    }
}
FileViewComponent.ɵfac = function FileViewComponent_Factory(t) { return new (t || FileViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.NodesApiService)); };
FileViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileViewComponent, selectors: [["app-file-view"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["sidebarTemplate", ""], [3, "nodeId", "showViewerChange"], ["mat-icon-button", ""], [3, "title"], [3, "label"], [3, "nodeId"], [3, "node"], [3, "node", "uploadError"]], template: function FileViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileViewComponent_ng_container_0_Template, 14, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nodeId);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_6__.ViewerToolbarActionsComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_6__.ViewerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_6__.CommentsComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_6__.InfoDrawerTabComponent, _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_6__.InfoDrawerComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.ContentMetadataCardComponent, _alfresco_adf_content_services__WEBPACK_IMPORTED_MODULE_3__.VersionManagerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: [".adf-viewer__sidebar {\n  width: 380px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0YiLCJmaWxlIjoiZmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZi12aWV3ZXJfX3NpZGViYXIge1xuICB3aWR0aDogMzgwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);


class LoginComponent {
    constructor(storageService) {
        this.storageService = storageService;
    }
    setDefaultTheme() {
        var theme = '{"primary":"#2196f3","accent":"#ff9800","name":"ECM Blue Orange","href":"adf-blue-orange.css","isDark":false}';
        this.storageService.setItem("docs-theme-storage-current", theme);
        //this.styleManager.setStyle('theme',JSON.parse(theme).href);
        this.setStyle('theme', JSON.parse(theme).href);
        console.log('*** THEME SET ***');
    }
    setStyle(key, href) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.setAttribute('type', 'text/css');
        linkEl.setAttribute('href', href);
        linkEl.classList.add(this.getClassNameForKey(key));
        document.head.appendChild(linkEl);
        return linkEl;
    }
    getClassNameForKey(key) {
        return `style-manager-${key}`;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.StorageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 0, consts: [["copyrightText", "\u00A9 2023 Alfresco Software, Inc. All Rights Reserved.", "successRoute", "/dashboard"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "adf-login", 0);
    } }, dependencies: [_alfresco_adf_core__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], encapsulation: 2 });


/***/ }),

/***/ 19578:
/*!*********************************************!*\
  !*** ./src/app/services/preview.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewService": () => (/* binding */ PreviewService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class PreviewService {
    constructor(router) {
        this.router = router;
        this.content = null;
        this.name = null;
    }
    showResource(resourceId, versionId) {
        if (versionId) {
            this.router.navigate([{ outlets: { overlay: ['files', resourceId, versionId, 'view'] } }]);
        }
        else {
            this.router.navigate([{ outlets: { overlay: ['files', resourceId, 'view'] } }]);
        }
    }
    showBlob(name, content) {
        this.name = name;
        this.content = content;
        this.router.navigate([{ outlets: { overlay: ['preview', 'blob'] } }]);
    }
}
PreviewService.ɵfac = function PreviewService_Factory(t) { return new (t || PreviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PreviewService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PreviewService, factory: PreviewService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 84613:
/*!**********************************************************!*\
  !*** ./src/app/start-process/start-process.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartProcessComponent": () => (/* binding */ StartProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alfresco/adf-process-services-cloud */ 16365);



class StartProcessComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.appName = null;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.appName) {
                this.appName = params.appName;
            }
            else {
                this.router.navigate(['/apps']);
            }
        });
    }
    onProcessStarted() {
        this.router.navigate(['/apps', this.appName || 0, 'tasks']);
    }
    onCancelStartProcess() {
        this.router.navigate(['/apps', this.appName || 0, 'tasks']);
    }
}
StartProcessComponent.ɵfac = function StartProcessComponent_Factory(t) { return new (t || StartProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
StartProcessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartProcessComponent, selectors: [["app-start-process"]], decls: 1, vars: 1, consts: [[3, "appName", "success", "cancel"]], template: function StartProcessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "adf-cloud-start-process", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("success", function StartProcessComponent_Template_adf_cloud_start_process_success_0_listener() { return ctx.onProcessStarted(); })("cancel", function StartProcessComponent_Template_adf_cloud_start_process_cancel_0_listener() { return ctx.onCancelStartProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appName", ctx.appName);
    } }, dependencies: [_alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_2__.StartProcessCloudComponent], encapsulation: 2 });


/***/ }),

/***/ 55833:
/*!************************************!*\
  !*** ./src/app/stencils.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomEditorComponent": () => (/* binding */ CustomEditorComponent),
/* harmony export */   "CustomStencil01": () => (/* binding */ CustomStencil01),
/* harmony export */   "StencilsModule": () => (/* binding */ StencilsModule)
/* harmony export */ });
/* harmony import */ var _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alfresco/adf-core */ 41402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CustomEditorComponent extends _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_0__.WidgetComponent {
}
CustomEditorComponent.ɵfac = /*@__PURE__*/ function () { let ɵCustomEditorComponent_BaseFactory; return function CustomEditorComponent_Factory(t) { return (ɵCustomEditorComponent_BaseFactory || (ɵCustomEditorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomEditorComponent)))(t || CustomEditorComponent); }; }();
CustomEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomEditorComponent, selectors: [["custom-editor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function CustomEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Look, I'm a custom editor!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
class CustomStencil01 extends _alfresco_adf_core__WEBPACK_IMPORTED_MODULE_0__.WidgetComponent {
}
CustomStencil01.ɵfac = /*@__PURE__*/ function () { let ɵCustomStencil01_BaseFactory; return function CustomStencil01_Factory(t) { return (ɵCustomStencil01_BaseFactory || (ɵCustomStencil01_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomStencil01)))(t || CustomStencil01); }; }();
CustomStencil01.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomStencil01, selectors: [["custom-stencil-01"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[2, "color", "green"]], template: function CustomStencil01_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ADF version of custom Activiti stencil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
class StencilsModule {
}
StencilsModule.ɵfac = function StencilsModule_Factory(t) { return new (t || StencilsModule)(); };
StencilsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StencilsModule });
StencilsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StencilsModule, { declarations: [CustomEditorComponent, CustomStencil01], exports: [CustomEditorComponent, CustomStencil01] }); })();


/***/ }),

/***/ 89505:
/*!********************************************************!*\
  !*** ./src/app/task-details/task-details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDetailsComponent": () => (/* binding */ TaskDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alfresco/adf-process-services-cloud */ 16365);



class TaskDetailsComponent {
    constructor(route) {
        this.route = route;
        this.appName = null;
        this.taskId = null;
        this.fileShowed = null;
        this.content = null;
        this.contentName = null;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['appName']) {
                this.appName = params['appName'];
            }
            if (params['taskId']) {
                this.taskId = params['taskId'];
            }
        });
    }
}
TaskDetailsComponent.ɵfac = function TaskDetailsComponent_Factory(t) { return new (t || TaskDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
TaskDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDetailsComponent, selectors: [["app-task-details"]], decls: 3, vars: 2, consts: [[3, "appName", "taskId"]], template: function TaskDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Task details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "adf-cloud-task-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appName", ctx.appName)("taskId", ctx.taskId);
    } }, dependencies: [_alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_2__.TaskHeaderCloudComponent], encapsulation: 2 });


/***/ }),

/***/ 69544:
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @alfresco/adf-process-services-cloud */ 16365);





function TasksComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start new process\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/apps/", ctx_r0.appName, "/start-process");
} }
class TasksComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.appName = null;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const applicationName = params['appName'];
            if (applicationName) {
                this.appName = params['appName'];
            }
        });
    }
    onRowClick(taskId) {
        if (taskId) {
            this.router.navigate(['/apps', this.appName || 0, 'tasks', taskId]);
        }
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
TasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 4, vars: 3, consts: [["mat-raised-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], [3, "appName", "rowClick"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksComponent_button_2_Template, 2, 1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "adf-cloud-task-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function TasksComponent_Template_adf_cloud_task_list_rowClick_3_listener($event) { return ctx.onRowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tasks > ", ctx.appName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appName", ctx.appName);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _alfresco_adf_process_services_cloud__WEBPACK_IMPORTED_MODULE_4__.TaskListCloudComponent], encapsulation: 2 });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 24654:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map