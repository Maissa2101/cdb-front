import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {User} from "./user.model";

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    private baseUrl = 'http://10.0.1.94:8080/cdb-webservice/users/';



    public getToken(): string {
        return localStorage.getItem('token');
    }



    login(login: string, password: string) {

        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let body = "login=" + login + "&password=" + password;
        return this.http.post(  `${this.baseUrl}login`,body,
                                {headers: headers, responseType: 'text'})
            .subscribe(() => {console.info('user connected'),
                            token => localStorage.setItem('token',token),
                            () => console.info(localStorage.getItem('token'))},
                         error => console.error('Authentification problem', error));

    }

    logout(){

        localStorage.removeItem('currentUser');
         return this.http.post(  `${this.baseUrl}logout`,
             {},
                                 { responseType: 'text'})



    }

}