import { TestBed } from '@angular/core/testing';

import { ForecastDao } from './forecast.dao.service';

describe('ForecastDao', () => {
  let service: ForecastDao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastDao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
