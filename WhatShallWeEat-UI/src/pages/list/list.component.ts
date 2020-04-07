import { HttpCallsService } from './../../httpcalls.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  text: string;
}

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
  chosenRestaurants: [] = [];
  @ViewChild('input') input: ElementRef;


  constructor(private route: ActivatedRoute,
              private httpCalls: HttpCallsService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

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

    this.httpCalls.getRestaurantListByUUID(this.uuid).subscribe(result => this.chosenRestaurants = result as []);
  }

  linkToYourList() {
    navigator.clipboard.writeText(`https://whatshallweeat.dev/${this.uuid}`);
  }

  addToList(index: number) {
    const restaurantName = (this.suggestedRestaurants.splice(index, 1) as any)[0].name;
    this.httpCalls.addRestaurantToList({
      name: restaurantName,
      uuid: this.uuid
    })
      .subscribe(result => {
        this.chosenRestaurants = result as [];
        this.snackBar.open(`Added ${restaurantName}`, 'Dismiss');
      });
  }

  addNewItemToList() {
    const restaurantName = this.input.nativeElement.value;
    this.httpCalls.addRestaurantToList({
      name: restaurantName,
      uuid: this.uuid
    })
      .subscribe(result => {
        this.chosenRestaurants = result as [];
        this.snackBar.open(`Added ${restaurantName}`, 'Dismiss');
        this.input.nativeElement.value = '';
      });
  }

  removeFromSuggestions(index: number) {
    this.snackBar.open(`Deleted ${(this.suggestedRestaurants[index] as any).name}`, 'Dismiss');
    this.suggestedRestaurants.splice(index, 1);
  }

  removeFromChosen(index: number) {
    const restaurantName = (this.chosenRestaurants.splice(index, 1) as any)[0].name;
    this.httpCalls.removeRestaurantFromList({
      name: restaurantName,
      uuid: this.uuid
    })
      .subscribe(result => {
        this.chosenRestaurants = result as [];
        this.snackBar.open(`Deleted ${restaurantName}`, 'Dismiss');
      });
  }

  whatShallWeEat() {
    if (!this.chosenRestaurants || this.chosenRestaurants.length === 0) {
      const dialogRef = this.dialog.open(DialogWhatShallWeEat, {
        width: '350px',
        data: { text: 'You do not have any restaurants to choose from.' }
      });
    } else {
      const dialogRef = this.dialog.open(DialogWhatShallWeEat, {
        width: '350px',
        data: { text: `You should go to ${this.chosenRestaurants[Math.floor(Math.random() * this.chosenRestaurants.length)]} tonight!` }
      });
    }
  }
}

@Component({
  selector: 'dialog-what-shall-we-eat',
  templateUrl: 'dialog-what-shall-we-eat.html',
})
export class DialogWhatShallWeEat {

  constructor(
    public dialogRef: MatDialogRef<DialogWhatShallWeEat>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onOkClick(): void {
    this.dialogRef.close();
  }

}
