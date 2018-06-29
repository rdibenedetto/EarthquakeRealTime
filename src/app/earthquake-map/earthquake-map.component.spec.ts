import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeMapComponent } from './earthquake-map.component';

describe('EarthquakeMapComponent', () => {
  let component: EarthquakeMapComponent;
  let fixture: ComponentFixture<EarthquakeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
