import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Gabriel";
  userData = {
    email: "gabriel@mail.com",
    role: "ADMIN"
  }
  title = 'angular-course';
}
