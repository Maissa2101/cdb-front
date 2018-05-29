import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../login/user.model";
import {Observable} from "rxjs/index";

@Injectable()
export class UserService {

    private baseUrl = 'http://10.0.1.94:8080/cdb-webservice/users/';

    constructor(private http: HttpClient) { }

    createUser(user: User): Observable<any> {
        return this.http.post(`${this.baseUrl}`,user, {responseType:'text'});
    }
}
