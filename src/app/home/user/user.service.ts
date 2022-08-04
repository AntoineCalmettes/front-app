import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class UserService {
  urlGoya = 'https://sfca-api.tech/';

  constructor(private http: HttpClient) {}


  getInfoUserConnect() {
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
    return  this.http.get(this.urlGoya + "api/me",{ "headers": reqHeader });
  }
}
