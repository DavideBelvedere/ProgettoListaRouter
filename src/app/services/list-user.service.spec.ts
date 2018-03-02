import { TestBed, inject } from '@angular/core/testing';

import { ListUserService } from './list-user.service';

describe('ListUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUserService]
    });
  });

  it('should be created', inject([ListUserService], (service: ListUserService) => {
    expect(service).toBeTruthy();
  }));
});
