import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './home/user/user.component';
import { UserService } from './home/user/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './home/nav/nav.component';
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UserService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
