import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router }  from '@angular/router';
import { RoleService } from '../role.service';
import {SharedService} from "../shared.service";

@Component({
    selector: 'admin-login',
    templateUrl: './adminlogin.component.html',
})
export class AdminLoginComponent implements OnInit {

  public username: string;
  public password: string;
  public role_id:any;
  public ErrorPassword:any = true;
  public ErrorUserName:any = true;
  public roleList:any;
  constructor (private loginService: LoginService,
    private roleService:RoleService,
    private sharedService:SharedService,
    public router:Router) {
    this.getRoleList();
  }

  ngOnInit() {}

  onSubmit() {
    let userObj = {
      username:this.username,
      password:this.password,
      role_id:this.role_id
    }
    this.loginService.sendCredential(userObj).subscribe(
      res => {
        if(res.response.statusResponse == 0) {
          this.sharedService.setLoginObj(res.data.user);
          this.router.navigate(['/adminview'])
        }
        else if(res.response.statusResponse == 1) {
          this.ErrorUserName = false; 
        }
        else if(res.response.statusResponse == 2) {
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
    this.ErrorPassword = true;
    this.ErrorUserName = true;
  }

  getRoleList() {
    this.roleService.getRoles().subscribe(res=>{
      this.roleList =   res.data.rolelist; 
    },err=> console.log(err))
  }

}
