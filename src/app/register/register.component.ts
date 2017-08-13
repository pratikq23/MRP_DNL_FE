import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../user.service';
import { RoleService } from '../role.service';
import { Router }  from '@angular/router';
import {SharedService} from "../shared.service";

@Component({
  selector: 'register-app',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public roleList:any;
  public succesmsg:any = true;
  public logInObj:any;

  constructor(private fb: FormBuilder,
    public userService:UserService,
    private roleService:RoleService,
    private sharedService:SharedService,
    public router:Router) {
    this.createForm();
    this.getRoleList();
    this.logInObj = this.sharedService.getLoginObj();  
  }


  ngOnInit() {}

  createForm() {
    this.registerForm = this.fb.group({ // <-- the parent FormGroup
      firstname: ['', Validators.required ],
      lastname:['', Validators.required ],
      username:['', Validators.required ],
      mobile_no:['',Validators.required],
      phone_no:['',Validators.required],
      email_id:['',Validators.required],
      address:['',Validators.required],
      tin_no:['',Validators.required],
      pan_no:['',Validators.required],
      adhar_no:['',Validators.required],
      image_url:['',Validators.required],
      user_role_id:['',Validators.required],
      gst_number:['',Validators.required]
    });
  }

  onSubmit() {
    if(!!this.registerForm){
      var userObj = this.registerForm.value;
      userObj.password = '123456';
      userObj.created_by = this.logInObj.user_id;
      userObj.updated_by = this.logInObj.user_id;
      this.userService.addUser(userObj).subscribe(
        res => {
          {
            if(res.response.statusResponse == 1) {
              this.succesmsg = false;
              this.router.navigate(['/adminview'])
            }
          }
        }
      );
    }
  }

  getRoleList() {
    this.roleService.getRoles().subscribe(res=>{
      this.roleList =   res.data.rolelist; 
    },err=> console.log(err))
  }
}
