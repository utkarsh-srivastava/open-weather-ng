import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ICityWhetherData, ICityWhetherResponseData } from './models/weather.response.model'

export interface IWeatherDao {
  getWeatherReport(cityName: string): Observable<ICityWhetherData>
}

@Injectable({
  providedIn: 'root'
})
export class WeatherDao implements IWeatherDao {

  private APP_ID = '3d8b309701a13f65b660fa2c64cdc517';
  weaterUrl = 'http://api.openweathermap.org/data/2.5/weather'

  constructor(
    private http: HttpClient
  ) { }

  getWeatherReport(cityName: string): Observable<ICityWhetherData> {
    return this.http.get<ICityWhetherResponseData>(`${this.weaterUrl}?q=${cityName}&appid=${this.APP_ID}`).pipe(map((res: ICityWhetherResponseData) => {
      return {
        name: res?.name,
        sunrise: res?.sys?.sunrise,
        sunset: res?.sys?.sunset,
        temperature: res?.main?.temp - 273.15,
      }
    } ));
  }
}
