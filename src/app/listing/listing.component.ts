import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ForecastDao } from '../forecast.dao.service';
import { ICityForecastData } from '../models/forecast.response.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ForecastDao],
})
export class ListingComponent implements OnInit {
  public cityName: string = '';
  public forcastedList: ICityForecastData[];

  constructor(
    private route: ActivatedRoute,
    private forecastDao: ForecastDao
  ) {}

  ngOnInit() {
    this.cityName = this.route.snapshot.params['name'];
    this.forecastDao
      .getForecastReport(this.cityName)
      .subscribe((forcastedList: ICityForecastData[]) => {
        this.forcastedList = forcastedList;
      });
  }
}
