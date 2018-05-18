import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.css']
})
export class LoginAddComponent implements OnInit {

    user: User;
    userForm:  FormGroup;

    constructor(private activatedRoutes: ActivatedRoute,private fb: FormBuilder) { }

    onClickEnter() {

    }

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
