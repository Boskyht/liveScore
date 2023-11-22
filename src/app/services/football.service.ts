import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FootballService {
  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any> {
    return this.http.get(`${environment.API_URL}`);
  }

  getEventsBySeason(idLeague: string): Observable<any> {
    return this.http.get(`${environment.API_Events}?id=${idLeague}&s=${environment.season}`);
  }

  getEventsDetail(): Observable<any> {
    return this.http.get(`${environment.API_Events_Detail}`);
  }

}
