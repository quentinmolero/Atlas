import { TestBed } from '@angular/core/testing';

import { LoginPopupServiceService } from './login-popup-service.service';

describe('LoginPopupServiceService', () => {
  let service: LoginPopupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPopupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
