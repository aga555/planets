import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsFilterTypeComponent } from './planets-filter-type.component';

describe('PlanetsFilterTypeComponent', () => {
  let component: PlanetsFilterTypeComponent;
  let fixture: ComponentFixture<PlanetsFilterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsFilterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsFilterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
