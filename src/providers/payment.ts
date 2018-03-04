import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { environment } from '../environments/environment';
@Injectable()

export class PaymentProvider extends ApiService {

    constructor(public http: Http) {
        super();
    }
    makePayment(payment: any) {
        let options = this.createAuthHeader();
        return this.http.post(`${environment.baseURL}api/join-program`, payment, options).map(res => res.json())
    }


}