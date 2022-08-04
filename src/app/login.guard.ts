import { LoginService } from './login/login.service';
import { UserService } from './home/user/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  data:any;
  me:any;
  auth: boolean;
  constructor(
    private LoginService: LoginService,
    public router: Router,
    public UserService: UserService
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
      if(this.LoginService.isAuthenticated()){
        return true;
      }
      return false;

  }
}
