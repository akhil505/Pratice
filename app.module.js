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
var http_1 = require('@angular/http');
var common_module_1 = require('./common.module/common.module');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_router_module_1 = require('./app-router.module');
var login_module_1 = require('./login/login.module');
var home_module_1 = require('./home/home.module');
var data_view_module_1 = require('./dataview/data-view.module');
var app_grid_module_1 = require('./grid/app-grid.module'); //do we need it here
var audit_module_1 = require('./audit/audit.module');
var custom_inputs_module_1 = require('./custom-inputs/custom-inputs.module');
var login_service_1 = require('./login/login.service');
var app_component_1 = require('./app.component');
var custom_http_service_1 = require('./common.module/custom-http.service');
var publish_subscribe_service_1 = require('./common.module/publish-subscribe.service');
//include later
//import { NavigationComponent } from './navigation/navigation.component'
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [ng_bootstrap_1.NgbModule.forRoot(),
                common_module_1.CommonModule,
                app_router_module_1.AppRouterModule,
                login_module_1.LoginModule,
                home_module_1.HomeModule,
                data_view_module_1.DataViewModule,
                app_grid_module_1.AppGridModule,
                audit_module_1.AuditModule,
                custom_inputs_module_1.CustomInputsModule],
            declarations: [app_component_1.AppComponent],
            providers: [login_service_1.LoginService,
                publish_subscribe_service_1.PublishSubscribeService,
                {
                    provide: http_1.Http, useFactory: function (backend, defaultOptions, publishSubscribeService) {
                        return new custom_http_service_1.CustomHttp(backend, defaultOptions, publishSubscribeService);
                    },
                    deps: [http_1.XHRBackend, http_1.RequestOptions, publish_subscribe_service_1.PublishSubscribeService]
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map