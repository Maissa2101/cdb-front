import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";


@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.css']
})
export class LoginAddComponent implements OnInit {

    user : User;
    userForm:  FormGroup;
    passwordRegex: any = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$';
    nameRegex: any = '[a-zA-Z0-9]+';

    constructor(private router: Router,private activatedRoutes: ActivatedRoute,private fb: FormBuilder,private userService: UserService) { }

    createForm(){
        this.userForm = this.fb.group({

            user: ["",      [Validators.required,
                             Validators.minLength(5),
                             Validators.maxLength(20),
                             Validators.pattern(this.nameRegex)]
                  ],

            password: ["",   [Validators.required,
                              Validators.minLength(5),
                              Validators.maxLength(20),
                              Validators.pattern(this.passwordRegex)]],

            password2:["",   [Validators.required,
                              Validators.pattern(this.passwordRegex)]]
        });
    }

    onSubmit(){
        if(this.userForm.controls.password.value == this.userForm.controls.password2.value ){

            //create user
        console.log('user created');
        this.userService.signIn(this.user);
        console.log('user connected');
        this.router.navigate(['comapanies']);   }

        else{
        console.log('not the sames passwords');}
    }

    onClickGoback(){
        this.router.navigate(['login']);
        console.log('go back');
    }

    ngOnInit() {
        this.user = new User();
        this.createForm();
    }
}
