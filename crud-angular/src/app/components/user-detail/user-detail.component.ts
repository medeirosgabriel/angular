import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  users: User[] = [];
  user?: User;
  index: number = -1;
  
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.getUserByEmail();
    this.getUsers();
  }

  nextUser() {
    if (this.index + 1 < this.users.length) {
      this.user = this.users[this.index + 1];
      this.index += 1;
    }
  }

  previousUser() {
    if (this.index - 1 >= 0) {
      this.user = this.users[this.index - 1];
      this.index -= 1;
    }
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users
      const email = this.route.snapshot.paramMap.get("email") || ""
      this.index = this.users.findIndex((u) => u.email === email);
    })
  }

  getUserByEmail() {
    const email = this.route.snapshot.paramMap.get("email")
    if (email) {
      this.userService.filterUsersByEmail(email).subscribe((users) => (this.user = users[0]))
    }
  }

  deleteById(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.nextUser()
    this.users = this.users.filter(u => u !== this.user);
    this.index -= 1;
  }
}
