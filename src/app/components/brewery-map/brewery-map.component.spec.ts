import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryMapComponent } from './brewery-map.component';

describe('BreweryMapComponent', () => {
  let component: BreweryMapComponent;
  let fixture: ComponentFixture<BreweryMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
