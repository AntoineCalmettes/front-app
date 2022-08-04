import { LoginInterface } from './loginInterface';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  data :any;
  token :any;
  constructor(
    private LoginService: LoginService,
    public router: Router
  ) { 
    this.data = {
      "version":"0.0.0"
    };
  }

  ngOnInit(): void {
    this.LoginService.getVersion().subscribe(res=>{
      this.data = res;
    });
  }
  onSubmit() {
    this.LoginService.getToken(this.loginForm.value.email,this.loginForm.value.password).subscribe(res=>{
      this.token = res;
      localStorage.setItem("token", this.token.token);
      this.router.navigate(['home']);
    });
  }

  public setVersion() {
 
  }
}
