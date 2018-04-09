import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'track-detail-page',
  template: `
    <div>
    <div> {{track}}</div>
    <a [routerLink]="'/detail/'+random" >Passing params {{random}}</a>
    </div>
  `

})
export class DetailPage implements OnInit {

  public track;
  public random =  Math.floor(Math.random() * 6) + 1
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.track = id;
  }
}
