import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInputItemComponent } from './location-input-item.component';

describe('LocationInputItemComponent', () => {
  let component: LocationInputItemComponent;
  let fixture: ComponentFixture<LocationInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationInputItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
