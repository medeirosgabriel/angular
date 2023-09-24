import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user?: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.getUserByEmail();
  }

  getUserByEmail() {
    const email = String(this.route.snapshot.paramMap.get("email"))
    this.userService.filterUsersByEmail(email).subscribe((users) => (this.user = users[0]))
  }

  deleteByEmail(id: number) {
    this.userService.deleteUser(id).subscribe();
  }
}
