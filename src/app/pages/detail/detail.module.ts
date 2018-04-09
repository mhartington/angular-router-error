import { CommonModule } from '@angular/common';
import { DetailPage } from './detail';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetailPage }]),
  ],
  declarations: [DetailPage],

})
export class DetailModule {}
