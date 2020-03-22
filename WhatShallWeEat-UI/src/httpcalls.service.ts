import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http: HttpClient) { }

  getRestaurantsFromPlacesAPI(lat: number, lng: number) {
    return this.http.get(`http://127.0.0.1:3000/api/restaurants/list/lat=${lat}&lng=${lng}`)
      .pipe(
        map((result: any) => result.results),
        map(results => results.name)
      );
  }
}
