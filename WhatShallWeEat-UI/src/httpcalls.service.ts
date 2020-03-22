import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http: HttpClient) { }

  getRestaurantsFromPlacesAPI(lat: number, lng: number) {
    return this.http.get(`https://100.27.23.136:8443/api/restaurants/list/location=${lat},${lng}`);
  }
}
