import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AdminLoginComponent } from './admin-login/adminlogin.component';
import { AdminComponent} from "./adminview/admin.component";
import { UserComponent} from "./userview/user.component";
import { AddCompanyComponent} from "./addcompany/addcompany.component";
import { UserListComponent } from "./userlistview/userlistview.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
     {
        path: 'adminlogin',
        component: AdminLoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'adminview',
        component: AdminComponent
    },
    {
        path: 'userview',
        component: UserComponent
    },
    {
        path: 'addcompany',
        component: AddCompanyComponent  
    },
    {
        path: 'userlistview',
        component: UserListComponent  
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);