import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SharedService {
    public serverUrl:any = "http://localhost:4300"
    public loginInUser:any;

    constructor (private http: Http) {

    }

    public setLoginObj(loginObj) {
      this.loginInUser = loginObj;
    }

    public getLoginObj() {
      return this.loginInUser;
    }    
}
