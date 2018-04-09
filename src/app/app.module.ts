import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router'
import ReuseRoute from './route-reuse'
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
      { path: 'detail/:id', loadChildren: './pages/detail/detail.module#DetailModule' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },

    ], 
    {useHash: true
    })
    ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: ReuseRoute
    }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
