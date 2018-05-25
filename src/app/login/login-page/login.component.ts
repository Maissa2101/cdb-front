import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user.model";
import {UserService} from "../user.service";
import {AlertService} from "../alert.service";
import {AuthenticationService} from "../authentificationService.service";
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  userForm:  FormGroup;

  constructor(
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private  authentificationService: AuthenticationService,
    public snackBar: MatSnackBar
  ) { }

  public noErrorLogin(token: any) {

    localStorage.setItem('token', token);
    localStorage.setItem('isAdmin', 'true');
    console.info('user connected');
    this.router.navigate(['companies']);

    this.snackBar.open("Login success", "Close", {
      panelClass: 'snackbar-ok',
      duration: 2500,
    });
  }

  public errorLogin(){

    console.error('Authentification problem');
    localStorage.removeItem('token');

    this.snackBar.open("Unrecognized user.", "Close", {
      panelClass: 'snackbar-error',
      duration: 2500,
    });
}

  public noErrorlogout() {

    localStorage.removeItem('token');
    console.info('user disconnected');
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.user = new User();
    this.createForm();
  }

  createForm(){
    this.userForm = this.fb.group({
      user: ["",Validators.required],
      password: ["",Validators.required]
    });
  }

  onSubmit(){
    this.user.login = this.userForm.controls.user.value;
    this.user.password = this.userForm.controls.password.value;
    this.authentificationService.login(this.user.login,this.user.password).subscribe(
      token => this.noErrorLogin(token),
      () => this.errorLogin()
    );

  }

  onClickSignOut(){
    this.authentificationService.logout();
  }

  onClickSignUp(){
    console.log('sign up page');
    this.router.navigate(['loginAdd']);
  }

}
