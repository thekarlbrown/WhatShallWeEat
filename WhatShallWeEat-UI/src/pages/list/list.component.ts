import { HttpCallsService } from './../../httpcalls.service';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  uuid: string;
  latitude: number;
  longitude: number;
  suggestedRestaurants: [];

  constructor(private route: ActivatedRoute,
              private httpCalls: HttpCallsService) { }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params.uuid;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.httpCalls.getRestaurantsFromPlacesAPI(this.latitude, this.longitude).subscribe(result => this.suggestedRestaurants = result);
        });
    } else {
      this.latitude = 38.957599;
      this.longitude = -77.175630;
      this.httpCalls.getRestaurantsFromPlacesAPI(this.latitude, this.longitude).subscribe(result => this.suggestedRestaurants = result);
    }
  }

  linkToYourList() {
    navigator.clipboard.writeText(`https://100.27.23.136:8443/${this.uuid}`);
  }

  addToList(index: number) {

  }

  removeFromSuggestions(index: number) {

  }
}
