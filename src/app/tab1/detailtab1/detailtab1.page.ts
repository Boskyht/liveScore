import { ActivatedRoute } from '@angular/router';
import { FootballService } from './../../services/football.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailtab1',
  templateUrl: './detailtab1.page.html',
  styleUrls: ['./detailtab1.page.scss'],
})
export class Detailtab1Page implements OnInit {
  result = [];
  constructor(private service: FootballService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getEventsBySeason(params.idLeague).subscribe(data => {
        this.result = data['events'];
        console.log(this.result);
      });
    });
  }

}
