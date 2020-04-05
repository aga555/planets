import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  planets$ = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
  }

  loadPlanets(searchString) {
    return this.httpClient.get<any[]>('assets/planets.json')
      .pipe(
        delay(2000),
        map(
          planets => {
            if (!searchString) {
              return planets;
            }
            return planets.filter(planet => planet.name.includes(searchString));
          }
        )
      )
      .subscribe(planets => {
        this.planets$.next(planets);
      })
      ;
  }
}
