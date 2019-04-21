import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data) {
        data = { 'username': 'user', 'password': 'user' };
        return this.http.post('http://localhost:9119/session', data);
    }

    getCustomerDetails() {
        return this.http.get('http://localhost:9119/customers/details');
    }

}
