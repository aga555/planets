import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets$ = this.dataService.planets$;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchString = params.search || '';
      this.dataService.loadPlanets(searchString);
    });
  }

  searchingApplied($event) {
    this.router.navigate(['planets'], {queryParams: {search: $event}});
  }

  planetTypeFilterApplied($event) {
    this.router.navigate(['planets'], {queryParams: {'planet-type': $event} });
  }

}
