import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDao {

  private APP_ID = '3d8b309701a13f65b660fa2c64cdc517';
  weaterUrl = 'http://api.openweathermap.org/data/2.5/weather'

  constructor(
    private http: HttpClient
  ) { }

  getWeatherReport(cityName: string): Observable<any> {
    return this.http.get(`${this.weaterUrl}?q=${cityName}&appid=${this.APP_ID}`);
  }
}
