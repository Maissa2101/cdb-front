import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

    private baseUrl = 'http://10.0.1.94:8080/cdb-webservice/users/';

    constructor(private http: HttpClient,private router: Router) { }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    //oen construction
    public isAdmin(): string{
        return localStorage.getItem('isAdmin');
    }

    public noErrorlogin(token: any){

            localStorage.setItem('token',token);
            localStorage.setItem('isAdmin','true');
            console.warn('user connected');
            this.router.navigate(['companies']);
    }

    public noErrorlogout(){

        localStorage.removeItem('token');
        console.info('user disconnected');
        this.router.navigate(['login']);

    }

    public login(login: string, password: string) {

        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let body = "login=" + login + "&password=" + password;

        return this.http.post(  `${this.baseUrl}login`,body,
                                {headers: headers, responseType: 'text'})
                        .subscribe(
                                 token => this.noErrorlogin(token),
                                 error => {console.error('Authentification problem', error),localStorage.removeItem('token')});
    }

    public logout(){
         return this.http.post(  `${this.baseUrl}logout`,
                                 {},
                                 { responseType: 'text'}).subscribe(() => this.noErrorlogout(),
                                                                            error1 => console.error('error in logout'))
    }

}