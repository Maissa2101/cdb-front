import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {User} from "../user.model";
import {UserService} from "../user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isAuthStatus = false;
    user: User;
    userForm:  FormGroup;

    constructor(private activatedRoutes: ActivatedRoute,private fb: FormBuilder,private userService: UserService) { }


    createForm(){
        this.userForm = this.fb.group({
            user: ["",Validators.required],
            passWord: ["",Validators.required]
        });
    }


    onSubmit(){

        this.userService.signIn(this.user);
        this.isAuthStatus = true;
        console.log('user connected')

    }

    onClickSignOut(){

        this.userService.signOut(this.user);
        this.isAuthStatus = false;
        console.log('user disconnected')
    }

    onClickSignUp(){
        console.log('sign up page')

    }


  ngOnInit() {
      this.user = new User();
      this.createForm();

  }




}
