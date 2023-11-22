import { ActivatedRoute } from '@angular/router';
import { FootballService } from './../../services/football.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailtab2',
  templateUrl: './detailtab2.page.html',
  styleUrls: ['./detailtab2.page.scss'],
})
export class Detailtab2Page implements OnInit {
  result: any;
  constructor(private service: FootballService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idEvent = this.route.snapshot.paramMap.get('idEvent');
    this.service.getEventsDetail().subscribe(data => {
      this.result = data['events'].filter(item => item.idEvent === idEvent);
      console.log(this.result);
    }
    );
  }
}
