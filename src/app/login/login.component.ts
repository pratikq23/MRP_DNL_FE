import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router }  from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public ErrorPassword:any = true;
  public ErrorUserName:any = true;

  constructor (private loginService: LoginService,public router:Router) {
      
  }

  ngOnInit() {}

  onSubmit() {
    let userObj = {
      username:this.username,
      password:this.password,
      role_id:4
    }
    this.loginService.sendCredential(userObj).subscribe(
      res => {
        //success
        if(res.statusResponse == 0) {  
          this.router.navigate(['/userAccount'])
        }
        else if(res.statusResponse == 1) {
          this.ErrorUserName = false; 
        }
        else if(res.statusResponse == 2) {
          this.ErrorPassword = false;    
        }
        else {
          this.ErrorPassword = true;
          this.ErrorUserName = true;

        }
      },
      err => console.log(err)
    );
  }

  valuechange(event:any){
    console.log("change:");
    this.ErrorPassword = true;
    this.ErrorUserName = true;
  }

}
