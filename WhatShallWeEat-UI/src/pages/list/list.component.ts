import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  uuid: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params.uuid;
  }

}
