import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../login/user.model";
import {Observable} from "rxjs/index";
import {Company} from "../company/company.model";

@Injectable()
export class UserService {

    private baseUrl = 'http://10.0.1.94:8080/cdb-webservice';

    isAuth = false;
    isAdmin = false;

    constructor(private http: HttpClient) { }

    createUser(user: User): Observable<any> {
        console.log(`${this.baseUrl}/users/`);
        return this.http.post('http://10.0.1.94:8080/cdb-webservice/users/',user, {responseType:'text'});
    }
}
