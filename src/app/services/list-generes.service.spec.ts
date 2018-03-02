import { TestBed, inject } from '@angular/core/testing';

import { ListGeneresService } from './list-generes.service';

describe('ListGeneresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListGeneresService]
    });
  });

  it('should be created', inject([ListGeneresService], (service: ListGeneresService) => {
    expect(service).toBeTruthy();
  }));
});
