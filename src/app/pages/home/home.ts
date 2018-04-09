import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'track-detail-page',
  template: `
    <div>
      <h1>Navigate to Detail</h1>
      <a [routerLink]="'/detail/'+123" >Passing params 123</a>
    </div>
  `

})
export class HomePage implements OnInit {
  constructor() { }
  ngOnInit() {
    
  }
}
