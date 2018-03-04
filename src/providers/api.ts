import { Injectable } from '@angular/core';
import { RequestOptions,Headers } from '@angular/http'; 


@Injectable()

export class ApiService {

  constructor() { }
  createHeader():RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
        headers: headers
    });  
    return options;
  }
  is_logedin(){
    return localStorage.getItem('access_token')?true:false;
  }
  createAuthHeader() :RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let access_token = localStorage.getItem('access_token');  
    headers.append('Authorization','Bearer '+access_token );
    let options = new RequestOptions({
        headers: headers
    });  
    return options;
  }
  

  
}
