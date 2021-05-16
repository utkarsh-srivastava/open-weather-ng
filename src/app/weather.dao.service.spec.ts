import { TestBed } from '@angular/core/testing';

import { WeatherDao } from './weather.dao.service';

describe(' WeatherDao', () => {
  let service: WeatherDao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( WeatherDao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
