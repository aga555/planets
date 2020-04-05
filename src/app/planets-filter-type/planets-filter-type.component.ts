import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-planets-filter-type',
  templateUrl: './planets-filter-type.component.html',
  styleUrls: ['./planets-filter-type.component.css']
})
export class PlanetsFilterTypeComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      SuperEarth: [],
      Terrestrial: [],
      GasGiant: []
    });
  }

  submit(formValue) {
    console.log(formValue);
  }
}
