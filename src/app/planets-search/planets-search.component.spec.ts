import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsSearchComponent } from './planets-search.component';

describe('PlanetsSearchComponent', () => {
  let component: PlanetsSearchComponent;
  let fixture: ComponentFixture<PlanetsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
