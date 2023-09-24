import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    let data = form.value as User
    this.userService.saveUser(data).subscribe((user) => console.log(`User ${user.firstName} saved!`))
    form.reset()
  }
}
