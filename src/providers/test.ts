import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { environment } from '../environments/environment';
@Injectable()

export class TestProvider extends ApiService {
    constructor(public http: Http) { super()}

  getTest(id) {
    let options = this.createAuthHeader();
    return this.http
    .get(`${environment.baseURL}api/get-test/${id}`,options)
    .map(res => res.json())
  }
  getPreTest(id) {
    let options = this.createAuthHeader();
    return this.http
    .get(`${environment.baseURL}api/get-pre-test/${id}`,options)
    .map(res => res.json())
  }
  MarkTestStarted(testid) {
    let options = this.createAuthHeader();
    return this.http
    .get(`${environment.baseURL}api/test-started/${testid}`,options)
    .map(res => res.json())
  }
  MarkAnswers(testid,answer,question) {
    let options = this.createAuthHeader();
    return this.http
    .get(`${environment.baseURL}api/add-answer/${testid}/${answer}/${question}`,options)
    .map(res => res.json())
  }
  getOldAnswers(testid) {
    let options = this.createAuthHeader();
    return this.http
    .get(`${environment.baseURL}api/get-old-answer/${testid}`,options)
    .map(res => res.json())

  }
  createFeedback(data) {
    let options = this.createAuthHeader();
    return this.http
    .post(`${environment.baseURL}api/create-test-feedback`,data,options)
    .map(res => res.json())
  }
  checkIfTestFeedbackGiven(data){
    let options = this.createAuthHeader();
    return this.http
    .post(`${environment.baseURL}api/check-if-feedback`,data,options)
    .map(res => res.json())
  }
  getProgramFeedbackForms(testid) {
    let options = this.createAuthHeader();
    return this.http
    .get(`${environment.baseURL}api/get-program-feedback-form/${testid}`,options)
    .map(res => res.json())

  }

}