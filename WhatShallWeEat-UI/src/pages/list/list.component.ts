import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  uuid: string;
  location: {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params.uuid;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.obtainLocationInfo);
    } else {
      this.location = { latitude: '38.957599', longitude: '-77.175630' };
    }
  }

  obtainLocationInfo(position) {
    this.location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };

    console.log(this.location);
  }

}
