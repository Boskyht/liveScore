import { FootballService } from './../services/football.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  result = [];
  constructor(private service: FootballService) {}

  ionViewWillEnter() {
    this.service.getLeagues().subscribe(data => {
      this.result = data['leagues'];
      console.log(this.result);
    });
  }
}
