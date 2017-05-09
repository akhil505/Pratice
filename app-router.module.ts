import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DataViewComponent } from './dataview/data-view.component';
import { AuditComponent } from './audit/audit.component';

const routes:Routes = [
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'dataview/:dataModel',component:DataViewComponent},
    {path:'audit',component:AuditComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule]
})
export class AppRouterModule {
    
}


