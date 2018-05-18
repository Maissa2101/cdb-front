import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../login/user.model";

@Injectable()
export class UserService {

    private baseUrl = 'http://10.0.1.94:8080/cdb-webservice/';

    constructor(private http: HttpClient) {
    }
    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/companies`, user);
    }

}