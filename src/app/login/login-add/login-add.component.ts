import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {Alert} from "selenium-webdriver";
import {AlertService} from "../alert.service";
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.css']
})
export class LoginAddComponent implements OnInit {

  user = new User();
  userForm:  FormGroup;
  nameRegex: any = '[a-zA-Z0-9]+';


  constructor(private router: Router,
              private activatedRoutes: ActivatedRoute,
              private fb: FormBuilder,
              private userService: UserService,
              private alertService: AlertService,
              public snackBar: MatSnackBar
  ) { }

  createForm(){
    this.userForm = this.fb.group({

      user: ["",      [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(this.nameRegex)
      ]
      ],

      password: ["",   [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],

      password2:["",   [Validators.required
      ]]
    });
  }

  onSubmit(){
    if(this.userForm.controls.password.value == this.userForm.controls.password2.value ){
      this.user.login = this.userForm.controls.user.value;
      this.user.password = this.userForm.controls.password.value;
      this.userService.createUser(this.user).subscribe(() => console.info('user created'),
        error => console.error('problem in add user', error));
      this.router.navigate(['login']);


      this.snackBar.open("Registration successfully !", "Close", {
        panelClass: 'snackbar-info',
        duration: 2500,});
    }
    else{
      console.log('not the sames passwords');

      this.snackBar.open("The passwords are not the sames. Please try again", "Close", {
        panelClass: 'snackbar-error',
        duration: 2500,});
    }
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
