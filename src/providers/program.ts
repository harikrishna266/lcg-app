import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { environment } from '../environments/environment';
@Injectable()

export class ProgramProvider extends ApiService {

    constructor(public http: Http) {
        super()
    }

    checkIfPaidOrNot(id) {
        if (this.is_logedin()) {
            let options = this.createAuthHeader();
            return this.http.get(`${environment.baseURL}api/if-paid/${id}`, options)
                .map(res => res.json())
        }
    }

    getBasicPrograms() {
        let options = this.createHeader();
        return this.http.get(`${environment.baseURL}api/basic-programs`, options)
            .map(res => res.json())

    }

    getProgramBasicById(id) {
        let options = this.createHeader();
        return this.http.get(`${environment.baseURL}api/basic-programs/${id}`, options).map(res => res.json())
    }
    checkIfAdminApprovedPayment(id) {
        let options = this.createAuthHeader();
        return this.http.get(`${environment.baseURL}api/if-admin-approved/${id}`, options)
            .map(res => res.json());
    }
    getPaidProgram(id) {
        let options = this.createAuthHeader();
        return this.http.get(`${environment.baseURL}api/get-paid-program/${id}`, options)
            .map(res => res.json());
    }
    getActiveTest(programid) {
        let options = this.createAuthHeader();
        return this.http.get(`${environment.baseURL}api/get-active-test/${programid}`, options)
            .map(res => res.json());
    }


}