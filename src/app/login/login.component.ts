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

    constructor (private loginService: LoginService,public router:Router) {
        
    }

    onSubmit() {
        let userObj = {
            username:this.username,
            password:this.password
        }
        this.loginService.sendCredential(userObj).subscribe(
            res => {
                if(res.statusResponse == 0) {
                  
                  this.router.navigate(['/userAccount'])
                }
                else if(res.statusResponse == 1) {

                }
            },
            err => console.log(err)
        );
    }

    ngOnInit() {}

}
