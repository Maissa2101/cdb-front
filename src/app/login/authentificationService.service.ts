import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  private baseUrl = 'http://10.0.1.94:8080/cdb-webservice/users/';

  constructor(private http: HttpClient) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  //oen construction
  public isAdmin(): string {
    return localStorage.getItem('isAdmin');
  }

  login(login: string, password: string){

    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let body = "login=" + login + "&password=" + password;

    return  this.http.post(`${this.baseUrl}login`, body,
      {headers: headers, responseType: 'text'});

  }

  public logout() {
    return this.http.post(`${this.baseUrl}logout`,
      {},
      {responseType: 'text'}).subscribe(
      error => console.error('error in logout'))
  }

}
