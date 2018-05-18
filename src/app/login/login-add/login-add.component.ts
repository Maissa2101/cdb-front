import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.css']
})
export class LoginAddComponent implements OnInit {

    user: User;
    userForm:  FormGroup;

    constructor(private userService: UserService,private activatedRoutes: ActivatedRoute,private fb: FormBuilder) { }

    onClickAdd() {
      this.addUser();
    }

    createForm(){
        this.userForm = this.fb.group({
            name: [new FormControl(),Validators.required],
            passWord: [new FormControl(),Validators.required],
            passWord2: [new FormControl(),Validators.],
        });
    }

    addUser(){
        if(this.userForm.valid) {

            this.user.name = this.userForm.get('name').value;
            this.user.passWord = this.userForm.get('passWord').value;

            this.userService.addUser(this.user).subscribe(user => this.user = user,
                                                          error => console.error('erreur ajout user', error)
            );
        }
        }


    ngOnInit() {
        this.user = new User();
        this.createForm();
    }

}
