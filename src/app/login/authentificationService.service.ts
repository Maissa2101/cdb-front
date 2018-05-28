import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class AuthenticationService {
  private baseUrl = "http://10.0.1.94:8080/cdb-webservice/users/";

  constructor(private http: HttpClient, private router: Router) {}

  public noErrorlogin(token: any) {
    localStorage.setItem("token", token);
    this.getCurrentUser().subscribe(
      user => {
        localStorage.setItem("role", user.role.label);
        this.router.navigate(["companies"]);
      },
      error => console.log(error)
    );
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
          console.error("Authentification problem", error),
            localStorage.removeItem("token");
          localStorage.removeItem("role");
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
