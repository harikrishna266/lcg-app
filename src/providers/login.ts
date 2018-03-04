import {Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { environment } from '../environments/environment';
@Injectable()

export class LoginProvider extends  ApiService{

  constructor(public http: Http) {
    super();
  }
  getAccessToken(login) {
    let options = this.createHeader();
    return this.http.post(`${environment.baseURL}oauth/token`,{
      grant_type: 'password',
      client_id: environment.client_id,
      client_secret: environment.client_secret,
      username: login.email,
      password: login.password
    },options);
  }
  register(cred) {
    let options = this.createHeader();
    return this.http.post(`${environment.baseURL}api/register`,cred,options)
   
  }
   
}
