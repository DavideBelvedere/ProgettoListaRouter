import { TestBed, inject } from '@angular/core/testing';

import { ListVideogameService } from './list-videogame.service';

describe('ListVideogameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListVideogameService]
    });
  });

  it('should be created', inject([ListVideogameService], (service: ListVideogameService) => {
    expect(service).toBeTruthy();
  }));
});
