import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
}
