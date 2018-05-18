import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {User} from "../user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User;
    userForm:  FormGroup;

    constructor(private activatedRoutes: ActivatedRoute,private fb: FormBuilder) { }


    createForm(){
        this.userForm = this.fb.group({
            user: [new FormControl(),Validators.required],
            passWord: [new FormControl(),Validators.required],
        });
    }

  ngOnInit() {
      this.user = new User();
      this.createForm();
  }

}
