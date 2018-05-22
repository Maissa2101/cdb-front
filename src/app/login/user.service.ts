import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../login/user.model";

@Injectable()
export class UserService {


    isAuth = false;
    isAdmin = false;

    constructor(private http: HttpClient) {
    }

    signIn(User){
        this.isAuth = true;
    }

    signOut(User){
        this.isAuth = false;
    }

}