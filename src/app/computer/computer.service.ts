import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from './computer.model';

@Injectable()
export class ComputerService {

    private baseUrl = 'http://10.0.1.94:8080/cdb-webservice';

    constructor(private http: HttpClient) {
    }

    getComputers(): Observable<Computer[]> {
        return this.http.get<Computer[]>(`${this.baseUrl}/computers`);
    }

    getById(id: number): Observable<Computer> {
        return this.http.get<Computer>(`${this.baseUrl}/computers/${id}`);
    }

    addComputer(computer: Computer): Observable<any> {
        return this.http.post(`${this.baseUrl}/computers`, computer, {responseType: 'text'});
    }

    deleteComputer(id: number): Observable<{}> {
        return this.http.delete(`${this.baseUrl}/computers/${id}`, {responseType: 'text'});
    }

    updateComputer(computer: Computer): Observable<any> {
        return this.http.patch(`${this.baseUrl}/computers`, computer, {responseType: 'text'});
    }

    search(search: string): Observable<Computer[]> {
      return this.http.get<Computer[]>(`${this.baseUrl}/computers/${search}`);

    }
}
