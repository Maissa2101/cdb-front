import { Component } from '@angular/core';
import {User} from "./login/user.model";
import {UserService} from "./login/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Computer Database - Companies';
  currentUser: User;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}
