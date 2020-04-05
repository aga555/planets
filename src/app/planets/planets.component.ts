import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets$ = this.dataService.getPlanets();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
