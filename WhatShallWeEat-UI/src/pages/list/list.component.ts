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

  constructor(private route: ActivatedRoute,
              private httpCalls: HttpCallsService) { }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params.uuid;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.httpCalls.getRestaurantsFromPlacesAPI(this.latitude, this.longitude).subscribe(console.log);
        });
    } else {
      this.latitude = 38.957599;
      this.longitude = -77.175630;
      this.httpCalls.getRestaurantsFromPlacesAPI(this.latitude, this.longitude).subscribe(console.log);
    }
  }

}
