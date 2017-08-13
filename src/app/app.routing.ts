import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AdminLoginComponent } from './admin-login/adminlogin.component';


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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);