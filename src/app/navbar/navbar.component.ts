import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(private loginService: LoginService, private router : Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '') {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  logout(){
    location.reload();
    this.router.navigate(['/login']);
  }

  getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {
  }

}
