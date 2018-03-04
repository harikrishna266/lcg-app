import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { environment } from '../environments/environment';
@Injectable()

export class SessionProvider extends ApiService {
    constructor(public http: Http) {
        super()
    }
    getPaidSession(programid) {
        let options = this.createAuthHeader();
        return this.http
            .get(`${environment.baseURL}api/paid-sessions/${programid}`, options)
            .map(res => res.json())
    }

    getSessionDetails(sesionid) {
        let options = this.createAuthHeader();
        return this.http
            .get(`${environment.baseURL}api/sessions-by-id/${sesionid}`, options)
            .map(res => res.json())
    }
    checkIfSessionFeedbackGiven(data) {
        let options = this.createAuthHeader();
        return this.http
            .post(`${environment.baseURL}api/check-if-session-feedback-given`, data, options)
            .map(res => res.json());
    }
    createFeedback(data) {
        let options = this.createAuthHeader();
        return this.http
            .post(`${environment.baseURL}api/create-session-feedback`, data, options)
            .map(res => res.json())
    }
}