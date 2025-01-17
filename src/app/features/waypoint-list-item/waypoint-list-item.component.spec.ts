import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointListItemComponent } from './waypoint-list-item.component';

describe('WaypointListItemComponent', () => {
  let component: WaypointListItemComponent;
  let fixture: ComponentFixture<WaypointListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaypointListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaypointListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
