import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'register-app',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(private fb: FormBuilder,public userService:UserService) {
   this.createForm();
    
  }


  ngOnInit() {}

  createForm() {
    this.registerForm = this.fb.group({ // <-- the parent FormGroup
      firstname: ['', Validators.required ],
      lastname:['', Validators.required ],
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
      console.log('data',this.registerForm.value.firstname);
      this.userService.addUser(this.registerForm).subscribe(
        res => {
          {
             
          }
        },
        err => console.log(err)
      );
    }
  }
}
