import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  ngOnInit(): void {
    console.log("Hello")
  }

  show: boolean = false;

  showMessage(): void {
    this.show = !this.show;
  }

}
