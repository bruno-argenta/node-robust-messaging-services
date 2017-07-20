"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var main_private_component_1 = require('./private/components/main/main.private.component');
var main_component_1 = require('./components/main/main.component');
var header_component_1 = require('./private/components/header/header.component');
var pageNotFound_component_1 = require('./components/pageNotFound/pageNotFound.component');
var modify_component_1 = require('./components/modifyFile/modify.component');
var user_list_component_1 = require('./private/components/user/list/user.list.component');
var user_detail_component_1 = require('./private/components/user/detail/user.detail.component');
var project_list_component_1 = require('./private/components/project/list/project.list.component');
var timesheet_component_1 = require('./private/components/timesheet/timesheet.component');
var http_1 = require('@angular/http');
var appRoutes = [
    { path: 'modify', component: modify_component_1.ModifyComponent },
    { path: '', redirectTo: '/modify', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes),
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule
            ],
            declarations: [main_component_1.MainComponent, main_private_component_1.MainPrivateComponent, header_component_1.HeaderComponent, pageNotFound_component_1.PageNotFoundComponent, header_component_1.HeaderComponent, user_list_component_1.UserListComponent,
                project_list_component_1.ProjectListComponent, user_detail_component_1.UserDetailComponent, timesheet_component_1.TimesheetComponent, modify_component_1.ModifyComponent],
            bootstrap: [main_component_1.MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map