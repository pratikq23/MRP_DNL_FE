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
import { RegisterComponent} from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,    
    RegisterComponent,
    AdminLoginComponent
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
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
