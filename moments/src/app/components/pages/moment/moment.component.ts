import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?:Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes
  faEdit = faEdit

  constructor(
    private momentService: MomentService, 
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.momentService
      .getMoment(id)
      .subscribe(item => this.moment = item.data)
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe();
    this.messageService.add("Moment Successfully Removed");
    this.router.navigate(['/'])
  }
}
