import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets$ = this.dataService.planets$;
  currentSearch = '';
  currentPlanetTypeFilters = [];
  matData = new MatTableDataSource<any>([]);
  displayedColumns = ['title'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchString = params.search || '';
      const planetTypeFilters = params['planet-type'] || [];
      this.dataService.loadPlanets(planetTypeFilters, searchString);
      this.currentPlanetTypeFilters = planetTypeFilters;
      this.currentSearch = searchString;
    });
    this.planets$.subscribe(planets => {
      this.matData = new MatTableDataSource<any>(planets.data);
      this.matData.paginator = this.paginator;
    });
  }

  searchingApplied($event) {
    const params = this.route.snapshot.queryParams;
    const search = {search: $event};
    this.router.navigate(['planets'], {queryParams: {...params, ...search}});
  }

  planetTypeFilterApplied($event) {
    const params = this.route.snapshot.queryParams;
    const planetType = {'planet-type': $event};
    this.router.navigate(['planets'], {queryParams: {...params, ...planetType}});
  }

}
