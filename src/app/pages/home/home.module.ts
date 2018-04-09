import { CommonModule } from '@angular/common';
import { HomePage } from './home';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ],
  declarations: [HomePage],

})
export class HomeModule {}
