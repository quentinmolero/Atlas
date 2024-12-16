import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBoxLayerComponent } from './map-box-layer.component';

describe('MapBoxLayerComponent', () => {
  let component: MapBoxLayerComponent;
  let fixture: ComponentFixture<MapBoxLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBoxLayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapBoxLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
