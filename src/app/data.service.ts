import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  planets$ = new BehaviorSubject({loading: true, data:[]});

  constructor(private httpClient: HttpClient) {
  }

  loadPlanets(planetTypeFilters, searchString) {
    this.planets$.next({loading: true,  data:[]});
    return this.httpClient.get<any[]>('assets/planets.json')
      .pipe(
        delay(2000),
        map(planets => {
          if (!planetTypeFilters.length) {
            return planets;
          }
          return planets.filter(planet => planetTypeFilters.includes(planet.type));
        }),
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
        this.planets$.next({loading: false, data: planets});
      })
      ;
  }
}
