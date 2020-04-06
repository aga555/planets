import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../planet';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DataService} from '../data.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  planet$: Observable<Planet>;

  @Input() planet: Planet;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.planet$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.loadPlanet(params.get('id')))
    );
  }

  goToAllPlanets(planet: Planet) {
    const planetId = planet ? planet.id : null;
    this.router.navigate(['/planets']);
  }
}
