import { TestBed, inject } from '@angular/core/testing';

import { ExpencesService } from './expences.service';

describe('ExpencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpencesService]
    });
  });

  it('should be created', inject([ExpencesService], (service: ExpencesService) => {
    expect(service).toBeTruthy();
  }));
});
