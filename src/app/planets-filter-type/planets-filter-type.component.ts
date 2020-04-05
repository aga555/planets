import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-planets-filter-type',
  templateUrl: './planets-filter-type.component.html',
  styleUrls: ['./planets-filter-type.component.css']
})
export class PlanetsFilterTypeComponent implements OnInit {

  @Input() defaultFilters = [];
  @Output() applied = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      SuperEarth: [this.defaultFilters.includes('SuperEarth')],
      Terrestrial: [this.defaultFilters.includes('Terrestrial')],
      GasGiant: [this.defaultFilters.includes(' GasGiant:')]
    });
  }

  submit(formValue) {
    const planetType = Object.keys(formValue).filter(item => formValue[item]);
    this.applied.emit(planetType);
  }
}
