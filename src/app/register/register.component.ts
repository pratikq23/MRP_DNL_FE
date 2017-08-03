import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'register-app',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
    
  }


  ngOnInit() {}

  createForm() {
    this.registerForm= this.fb.group({
      name: ['', Validators.required ],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}
