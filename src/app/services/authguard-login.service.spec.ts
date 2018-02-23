import { TestBed, inject } from '@angular/core/testing';

import { AuthguardLoginService } from './authguard-login.service';

describe('AuthguardLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthguardLoginService]
    });
  });

  it('should be created', inject([AuthguardLoginService], (service: AuthguardLoginService) => {
    expect(service).toBeTruthy();
  }));
});
