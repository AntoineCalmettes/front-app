import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  urlGoya = 'https://sfca-api.tech/';

  constructor(private http: HttpClient) {}

  getVersion() {
    return  this.http.get(this.urlGoya);
  }

  getToken(email :String,password :String) {

    return  this.http.post(this.urlGoya + "api/login_check",{
      "email" :email,
      "password":password
    });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if(token === null){
      return false;
    }
    // Check whether the token is expired and return
    // true or false
    return true;
  }
}
