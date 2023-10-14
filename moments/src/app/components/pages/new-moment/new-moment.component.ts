import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})

export class NewMomentComponent {

  btnText = "Share"

  constructor(
    private momentService: MomentService, 
    private messageService: MessageService,
    private router: Router
  ) {}

  async createHandler(moment: Moment) {

    const formData = new FormData()
    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if (moment.image) {
      formData.append("image", moment.image)
    }

    await this.momentService.createMoment(formData).subscribe()

    this.messageService.add("Moment Added Successfully")

    this.router.navigate(["/"])
  }
}
