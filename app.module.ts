import { NgModule }      from '@angular/core';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { CommonModule } from './common.module/common.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRouterModule } from './app-router.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from  './home/home.module';
import { DataViewModule } from './dataview/data-view.module';
import { AppGridModule } from './grid/app-grid.module'; //do we need it here
import { AuditModule } from './audit/audit.module';
import { CustomInputsModule } from './custom-inputs/custom-inputs.module';

import { LoginService } from './login/login.service';

import { AppComponent }  from './app.component';
import {CustomHttp} from './common.module/custom-http.service';
import {PublishSubscribeService} from './common.module/publish-subscribe.service';
//include later
//import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  imports:      [ NgbModule.forRoot(),
                  CommonModule,
                  AppRouterModule,
                  LoginModule,
                  HomeModule,
                  DataViewModule,
                  AppGridModule,
                  AuditModule,
                  CustomInputsModule ],
  declarations: [ AppComponent ],
  providers:    [ LoginService, 
                  PublishSubscribeService,
   {
    provide: Http, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, publishSubscribeService: PublishSubscribeService) => {
                return new CustomHttp(backend, defaultOptions, publishSubscribeService);
            },
            deps: [XHRBackend, RequestOptions, PublishSubscribeService]
        }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
