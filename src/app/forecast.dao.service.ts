import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ICityForecastData, List, IForecastResponse } from './models/forecast.response.model'

export interface IForecastDao {
  getForecastReport(cityName: string): Observable<ICityForecastData>
}

@Injectable({
  providedIn: 'root'
})
export class ForecastDao {

  private APP_ID = '3d8b309701a13f65b660fa2c64cdc517';
  private forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  private hoursData = 9;

  constructor(
    private http: HttpClient
  ) { }

  private filterDataAtGivenTime(list: List[], hours: number) {
    return list.filter((item) => {
      try {
        return new Date(item.dt_txt).getHours() === hours
      } catch(ex) {
        return false;
      }
    });
  }

  getForecastReport(cityName: string): Observable<ICityForecastData[]> {
    return this.http.get<IForecastResponse>(`${this.forecastUrl}?q=${cityName}&appid=${this.APP_ID}`).pipe(map((res:IForecastResponse)=> {
      res.list = this.filterDataAtGivenTime(res.list, this.hoursData);
      return res.list.map((item)=>{
        return {
          sealevel: item.main.sea_level,
          temperature: item.main.temp - 273.15,
        }
      })
    }));
  }
}
