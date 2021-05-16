import { TestBed } from '@angular/core/testing';

import { Weather.DaoService } from './weather.dao.service';

describe('Weather.DaoService', () => {
  let service: Weather.DaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weather.DaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
