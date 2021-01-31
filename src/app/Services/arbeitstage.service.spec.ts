import { TestBed } from '@angular/core/testing';

import { ArbeitstageService } from './arbeitstage.service';

describe('ArbeitstageService', () => {
  let service: ArbeitstageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbeitstageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});