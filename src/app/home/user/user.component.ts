import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public users :any;
  constructor(public UserService: UserService) {}
  returnUsers() {
    this.UserService.getAllUsers().subscribe((res) => {

      this.users = res;
      return this.users;
    });
  }

  ngOnInit(): void {
    this.returnUsers();
  }
}
