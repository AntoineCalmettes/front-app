import { UserService } from './home/user/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  data:any;
  auth: boolean;
  constructor(
    private UserService: UserService
  ) { 
    this.data = {
      "code":"400"
    };
    this.auth = false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
   
    this.UserService.getInfoUserConnect().subscribe(res=>{
      this.data = res;
      console.log(this.data);
      if(this.data.code === 200){
        this.auth = true;
      }
    });
    return this.auth;
  }
}
