import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private userService: UserService) {
    this.getUsers()
  }

  users: User[] = [];

  getUsers() {
    this.userService.getAllUsers().subscribe((users) => this.users = users)
  }
}
