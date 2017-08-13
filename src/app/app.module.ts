import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/adminlogin.component';
import {routing} from "./app.routing";
import {LoginService} from "./login.service";
import {UserService} from "./user.service";
import {RoleService} from "./role.service";
import {SharedService} from "./shared.service";
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from "./adminview/admin.component";
import { UserComponent } from "./userview/user.component";
import { AddCompanyComponent } from "./addcompany/addcompany.component";
import { UserListComponent } from "./userlistview/userlistview.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,    
    RegisterComponent,
    AdminLoginComponent,
    AdminComponent,
    UserComponent,
    AddCompanyComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    UserService,
    RoleService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
