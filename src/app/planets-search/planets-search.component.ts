import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-planets-search',
  templateUrl: './planets-search.component.html',
  styleUrls: ['./planets-search.component.css']
})
export class PlanetsSearchComponent implements OnInit {
  @Output() applied = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      search: []
    });
    this.form.get('search').valueChanges.subscribe(value =>
    {
console.log(value);
    });
  }

}
