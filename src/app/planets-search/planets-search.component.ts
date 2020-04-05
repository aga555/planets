import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-planets-search',
  templateUrl: './planets-search.component.html',
  styleUrls: ['./planets-search.component.css']
})
export class PlanetsSearchComponent implements OnInit {

  @Input() defaultSearch;
  @Output() applied = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({search: [this.defaultSearch]});
    this.form.get('search').valueChanges.subscribe(value => {
      this.applied.emit(value);
    });
  }

}
