import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {
  name: string = "Matheus"
  age: number = 10
  job = "Programmer"
  hobbies = ["Football",  "Videogame"]
  car = {
    name: "Uno",
    year: 2010
  }
}
