import { TestBed } from '@angular/core/testing';

import { AddLocationPopupServiceService } from './add-location-popup-service.service';

describe('AddLocationPopupServiceService', () => {
  let service: AddLocationPopupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddLocationPopupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
