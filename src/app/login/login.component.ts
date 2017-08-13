import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router }  from '@angular/router';
import {SharedService} from "../shared.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public ErrorPassword:any = true;
  public ErrorUserName:any = true;

  constructor (private loginService: LoginService,
    private sharedService:SharedService,
    public router:Router) {
      
  }

  ngOnInit() {}

  onSubmit() {
    let userObj = {
      username:this.username,
      password:this.password,
      role_id:5
    }
    this.loginService.sendCredential(userObj).subscribe(
      res => {
        //success
        if(res.response.statusResponse == 0) {  
          this.sharedService.setLoginObj(res.data.user);
          this.router.navigate(['/userview'])
        }
        else if(res.response.statusResponse == 1) {
          this.ErrorUserName = false; 
        }
        else if(res.response.statusResponse == 2) {
          this.ErrorPassword = false;    
        }
      },
      err => console.log(err)
    );
  }

  valuechange(event:any){
    this.ErrorPassword = true;
    this.ErrorUserName = true;
  }

}
