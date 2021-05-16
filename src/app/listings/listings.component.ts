import { Component, OnInit } from '@angular/core';
import { WeatherDao } from '../weather.dao.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [WeatherDao]
})
export class ListingsComponent implements OnInit {

  weatherReports : any = [];
  cityNames = ['London', 'Paris', 'Germany', 'Poland', 'Belgium'];

  constructor(
    private dao: WeatherDao
  ) { }

  ngOnInit(): void {
    this.cityNames.forEach((cityName: string)=>{
      this.dao.getWeatherReport(cityName).subscribe((cityWeatherData)=>{
        this.weatherReports.push(cityWeatherData);
      });
    });
  }

}
