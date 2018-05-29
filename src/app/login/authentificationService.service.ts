import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { MatSnackBar } from '@angular/material';


@Injectable()
export class AuthenticationService {
  private baseUrl = "http://10.0.1.94:8080/cdb-webservice/users/";

  constructor(private http: HttpClient, private router: Router,public snackBar: MatSnackBar) {}

  public noErrorlogin(token: any) {
    localStorage.setItem("token", token);
    this.getCurrentUser().subscribe(
      user => {
        localStorage.setItem("role", user.role.label);
        this.router.navigate(["companies"]);

        this.snackBar.open("Success login", "Close", {
          panelClass: 'snackbar-ok',
          duration: 2500,});
      },
      error => {
        console.log(error);

      }
    );
  }

  public failLogin(error: any){

    console.error("Authentification problem", error),
      localStorage.removeItem("token");
    localStorage.removeItem("role");

    this.snackBar.open("Unrecognized user", "Close", {
      panelClass: 'snackbar-error',
      duration: 2500,});

  }


  public clearLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  private getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}current`);
  }

  public login(login: string, password: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    let body = "login=" + login + "&password=" + password;

    return this.http
      .post(`${this.baseUrl}login`, body, {
        headers: headers,
        responseType: "text"
      })
      .subscribe(
        token => this.noErrorlogin(token),
        error => {
          this.failLogin(error);
        }
      );
  }

  public logout() {
    return this.http
      .post(`${this.baseUrl}logout`, {}, { responseType: "text" })
      .subscribe(
        () => {
          this.clearLocalStorage();
          this.router.navigate(["companies"]);
        },
        error => this.clearLocalStorage()
      );
  }
}
