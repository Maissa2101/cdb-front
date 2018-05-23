import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user.model";
import {UserService} from "../user.service";
import {AlertService} from "../alert.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isAuthStatus = false;
    user: User;
    userForm:  FormGroup;
    loading =  false;

    constructor(
        private router: Router,
        private activatedRoutes: ActivatedRoute,
        private fb: FormBuilder,
        private userService: UserService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.user = new User();
        this.createForm();
    }

    createForm(){
        this.userForm = this.fb.group({
            user: ["",Validators.required],
            passWord: ["",Validators.required]
        });
    }

    onSubmit(){
        this.alertService.success('Registration successful', true);

        this.loading = true;
        this.isAuthStatus = true;
        console.log('user connected');
        this.loading = false;
    }

    onClickSignOut(){

        this.isAuthStatus = false;
        console.log('user disconnected');
    }

    onClickSignUp(){
        console.log('sign up page');
        this.router.navigate(['loginAdd']);      }


}
