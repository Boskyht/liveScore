import { FootballService } from './../services/football.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  result = [];
  constructor(private service: FootballService) {}

  ionViewWillEnter() {
    this.service.getEventsDetail().subscribe(data => {
      this.result = data['events'];
      console.log(this.result);
    }
    );
  }
}
