import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  private cityName: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.cityName = this.route.snapshot.params['name'];
    console.log(this.cityName);
  }

}
